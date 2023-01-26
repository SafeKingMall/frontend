import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import * as S from './style';
import { Footer } from '../../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
// import { EditorWr } from '../../../../components/Edit/AdminItemList/Editor';
import { Header } from '../../../../components/common/Header';
import { EditMenu } from '../../../../components/Edit/EditMenu';
import { useMoney } from '../../../../components/common/hooks/useMoney';
import axios from 'axios';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const AdminItemPo = () => {
  const { state } = useLocation();
  const itemId = state.data;

  const navigate = useNavigate();
  const { MoneyNumber2 } = useMoney();
  //상품명
  const [itemName, setItemName] = useState('');
  //숫자 3마디마다 ,찍기(상품가격)-브라우저 상에 나오는 숫자
  const [enteredNum, setEnterdNum] = useState({
    moneyNum: 0,
    quantityNum: 0,
  } as any);

  const { moneyNum, quantityNum } = enteredNum;

  //안찍힌 숫자들
  const [sendMoneyNum, setSendMoneyNum] = useState(0 as Number);
  const [sendQuantityNum, setSendQuantityNum] = useState(0 as Number);

  //카테고리 select
  const [cateSelect, setCateSelect] = useState('' as any);
  //사진 업로드(화면출력용)
  const [selectedImages, setSelectedImages] = useState([]);
  // const [qnaFile, setQnaFile] = useState([] as any);
  //서버에 보내지는 파일
  const [selectedFiles, setSelectedFiles] = useState(null as any);

  //설명 부분
  const [descriptEdit, setDescriptEdit] = useState('' as any);
  //카테고리 아이디
  const [categoryId, setCategoryId] = useState([] as any);
  //'숨기기' 버튼
  const [hideBtn, setHideBtn] = useState(true);
  //만약 숨기기 버튼이 눌렸으면(false)이면 N을 보내줘야함
  const [sendhide, setSendhide] = useState('' as any);
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  const clickHide = () => {
    setHideBtn(!hideBtn);
    if (hideBtn === false) {
      setSendhide('Y');
    } else if (hideBtn === true) {
      setSendhide('N');
    }
  };

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/category/list`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setCategoryId(res.data.content);
      });
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/item/${itemId}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setItemName(res.data.name);
        setEnterdNum({
          moneyNum: MoneyNumber2(res.data.price),
          quantityNum: MoneyNumber2(res.data.quantity),
        });
        setSendMoneyNum(res.data.price);
        setSendQuantityNum(res.data.quantity);
        setCateSelect(res.data.categoryName);
        setDescriptEdit(res.data.description);
      });

      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/file/list/item/${itemId}`,
        // responseType: 'blob',
        headers: {
          Authorization: jwt,
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {});
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, jwt]);

  const sendCategoryId = categoryId.filter((el: any) => el.name === cateSelect);

  //수정알람
  const registerAlert = () => {
    swal
      .fire({
        icon: 'question',
        text: '상품을 수정하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          modifyApi();
          swal.fire({
            icon: 'success',
            text: '상품이 수정되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
      });
  };

  // 수정 api
  const modifyApi = async () => {
    await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}/admin/item/${itemId}`,
      headers: {
        Authorization: jwt,
      },
      data: {
        //상품명
        name: itemName,
        // 상품수량
        quantity: Number(sendQuantityNum),
        //상품설명moneyNum
        description: descriptEdit,
        //상품금액
        price: Number(sendMoneyNum),
        //카테고리 ID
        categoryId: sendCategoryId[0].id,
        //가격표시여부
        viewYn: sendhide,
      },
    }).then((res) => {
      registFile(itemId);
    });
  };

  const registFile = async (id: any) => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('file', selectedFiles[i]);
    }
    formData.append('type', 'item');
    formData.append('targetId', id);

    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/file/upload`,
      headers: {
        Authorization: jwt,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    }).then((res) => {
      navigate('/admin-item');
    });
  };

  //파일 등록
  const onSelectFile = (e: any) => {
    e.preventDefault();
    e.persist();
    const selectedFiles = e.target.files;
    const fileUrlList = [...selectedFiles];

    // for (let i = 0; i < selectedFiles.length; i++) {
    const nowUrl = URL.createObjectURL(selectedFiles[0]);
    fileUrlList.push(nowUrl);
    // }

    //업로드하는 파일 개수 제한하는 것
    // if (fileUrlList.length > 10) {
    //   fileUrlList = fileUrlList.slice(0, 10);
    // }

    setSelectedFiles(fileUrlList);

    const selectedFileArray: any = Array.from(selectedFiles);

    const imageArray = selectedFileArray.map((file: any) => {
      return file.name;
    });

    setSelectedImages((previousImages: any) => previousImages.concat(imageArray));
    e.target.value = '';
  };

  // const attachFile =()=>(
  //   // selectedImages &&
  //   // selectedImages.map((image: any) => {
  //     return (
  //       <S.DivImg key={selectedImages[0]}>
  //         <div>{selectedImages[0]}</div>
  //         <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== selectedImages))}>
  //           <VscClose size='30' />
  //         </button>
  //       </S.DivImg>
  //     );)
  //   // });

  //상품가격
  const changeEnteredNum1 = (e: any) => {
    const { value, name } = e.target;
    setSendMoneyNum(e.target.value.split(',').join(''));
    const removedCommaValue = Number(value.replaceAll(',', ''));

    if (removedCommaValue.toLocaleString() !== 'NaN') {
      setEnterdNum({
        ...enteredNum,
        [name]: removedCommaValue.toLocaleString(),
      });
    }
    if (removedCommaValue.toLocaleString() === 'NaN') {
      setEnterdNum({
        ...enteredNum,
        [name]: '숫자로 기입해주세요',
      });
    }
    if (value.substr(0, 10) === '숫자로 기입해주세요') {
      setEnterdNum({
        ...enteredNum,
        [name]: '',
      });
    }
  };

  //,상품수량

  const changeEnteredNum2 = (e: any) => {
    const { value, name } = e.target;
    setSendQuantityNum(e.target.value.split(',').join(''));
    const removedCommaValue = Number(value.replaceAll(',', ''));

    if (removedCommaValue.toLocaleString() !== 'NaN') {
      setEnterdNum({
        ...enteredNum,
        [name]: removedCommaValue.toLocaleString(),
      });
    }
    if (removedCommaValue.toLocaleString() === 'NaN') {
      setEnterdNum({
        ...enteredNum,
        [name]: '숫자로 기입해주세요',
      });
    }
    if (value.substr(0, 10) === '숫자로 기입해주세요') {
      setEnterdNum({
        ...enteredNum,
        [name]: '',
      });
    }
  };

  const selectChange = (e: any) => {
    setCateSelect(e.target.value);
  };

  return (
    <div>
      <Header />
      <S.Container>
        <EditMenu />
        <S.Wrapper>
          <S.Table>
            <tbody>
              <tr>
                <td>제목</td>
                <td>
                  <S.TableInput
                    placeholder='상품명을 입력해주세요'
                    value={itemName}
                    onChange={(e: any) => setItemName(e.target.value)}
                  />
                </td>
                <td>카테고리</td>
                <td>
                  <S.Select onChange={selectChange} value={cateSelect} required>
                    <S.NoneOption value='카테고리'>-카테고리-</S.NoneOption>
                    {categoryId.map((el: any) => {
                      return (
                        <option value={el.name} key={el.id}>
                          {el.name}
                        </option>
                      );
                    })}
                  </S.Select>
                </td>
              </tr>

              <tr>
                <td>상품가격</td>
                <td colSpan={3}>
                  <S.PayInput>
                    <S.TableInput
                      name='moneyNum'
                      placeholder='가격을 입력해주세요.'
                      value={moneyNum}
                      onChange={changeEnteredNum1}
                    />
                    <S.PayP>원</S.PayP>
                    <S.StyledInput onClick={clickHide} type='checkbox' id='Hide' name='Hide' />
                    <S.StyledLabel htmlFor='Hide'>
                      <S.StyledP>숨기기</S.StyledP>
                    </S.StyledLabel>
                  </S.PayInput>
                  <S.CheckPay>*가격을 숨기고 싶으시다면 우측의 버튼을 클릭해주세요.</S.CheckPay>
                </td>
              </tr>
              <tr>
                <td>상품수량</td>
                <td colSpan={3}>
                  <S.TableInput
                    name='quantityNum'
                    placeholder='수량을 입력해주세요.'
                    type='text'
                    value={quantityNum}
                    onChange={changeEnteredNum2}
                  />
                  개
                </td>
              </tr>
              <tr>
                <td>썸네일 이미지</td>
                <td colSpan={3}>
                  <S.TableDiv>
                    {selectedImages.length !== 0 ? (
                      <div>
                        <S.DivImg key={selectedImages[0]}>
                          <div>{selectedImages[0]}</div>
                          <button
                            onClick={() =>
                              setSelectedImages(
                                selectedImages.filter((e) => e !== selectedImages[0]),
                              )
                            }
                          >
                            <VscClose size='30' />
                          </button>
                        </S.DivImg>
                      </div>
                    ) : (
                      <S.NotDownload>파일을 첨부할 수 있습니다.</S.NotDownload>
                    )}

                    <S.ChangeButton>업로드</S.ChangeButton>
                    <input
                      type='file'
                      name='images'
                      onChange={onSelectFile}
                      accept='.png, .jpg,image/*'
                    />
                  </S.TableDiv>
                </td>
              </tr>
              <tr>
                <td>설명</td>
                <td colSpan={3}>
                  {/* <EditorWr descriptEdit={descriptEdit} setDescriptEdit={setDescriptEdit} /> */}
                  <S.TableTextarea
                    value={descriptEdit}
                    onChange={(e: any) => {
                      setDescriptEdit(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </S.Table>
          <S.QnABox>
            <S.QnAButton onClick={() => registerAlert()}>수정</S.QnAButton>
            <S.QnAButton2 onClick={() => navigate('/admin-item')}>목록</S.QnAButton2>
          </S.QnABox>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </div>
  );
};
