import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { EditorWr } from '../../../../components/Edit/AdminItemList/Editor';
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
import { AdminFooter } from '../../../../components/common/AdminFooter';

const swal = withReactContent(Swal);

export const AdminItemPo = () => {
  const { state } = useLocation();
  const itemId = state.data;

  const navigate = useNavigate();
  const { MoneyNumber2 } = useMoney();
  //상품명
  const [itemName, setItemName] = useState('');
  //숫자 3마디마다 ,찍기(상품가격)-브라우저 상에 나오는 숫자
  // const [enteredNum, setEnterdNum] = useState({
  //   moneyNum: 0,
  //   quantityNum: 0,
  // } as any);

  // const { moneyNum, quantityNum } = enteredNum;
  const patternSpc = /[~!@#$%^&*()_+|<>?:{}]/;

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
  const [categoryId, setCategoryId] = useState<any[]>([]);
  //'숨기기' 버튼
  const [hideBtn, setHideBtn] = useState(true);
  //에디터용 type
  const [adminItem] = useState('adminItem');
  //파일 삭제 id
  const [deleteId, setDeleteId] = useState(0 as any);

  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

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
        url: `${process.env.REACT_APP_API_URL}/admin/item/${state.data}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setItemName(res.data.name);

        MoneyNumber2(res.data.price);
        MoneyNumber2(res.data.quantity);

        setSendMoneyNum(res.data.price);
        setSendQuantityNum(res.data.quantity);
        setCateSelect(res.data.categoryName);
        setDescriptEdit(res.data.description);

        setHideBtn(res.data.viewYn === 'N' ? false : true);
      });

      axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/itemPhoto/${state.data}`,
        headers: {
          Authorization: jwt,
          'Content-Type': 'multipart/form-data',
        },
      });

      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/file/list/item/${state.data}`,
        // responseType: 'blob',
        headers: {
          Authorization: jwt,
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        setSelectedImages(res.data);
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data, jwt]);

  const clickHide = () => {
    setHideBtn(!hideBtn);
  };

  const sendCategoryId = categoryId.filter((el: any) => el.name === cateSelect);

  //수정알람
  const registerAlert = () => {
    if (patternSpc.test(itemName)) {
      swal.fire({
        icon: 'warning',
        text: '특수문자를 제외한 상품명을 올바르게 기입해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (itemName === '') {
      swal.fire({
        icon: 'warning',
        text: '상품명을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (cateSelect === '') {
      swal.fire({
        icon: 'warning',
        text: '카테고리를 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (moneyNum === '.') {
      swal.fire({
        icon: 'warning',
        text: '상품가격을 숫자로 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (moneyNum === '' || moneyNum === '0') {
      swal.fire({
        icon: 'warning',
        text: '상품가격을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (quantityNum === '.') {
      swal.fire({
        icon: 'warning',
        text: '상품수량을 숫자로 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (quantityNum === '' || quantityNum === '0') {
      swal.fire({
        icon: 'warning',
        text: '상품수량을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (descriptEdit === '') {
      swal.fire({
        icon: 'warning',
        text: '상품설명을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
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
    }
  };

  // 수정 api
  const modifyApi = async () => {
    if (selectedFiles === null) {
      if (deleteId !== undefined) {
        await axios({
          method: 'delete',
          url: `${process.env.REACT_APP_API_URL}/file/${deleteId}`,
          headers: {
            Authorization: jwt,
          },
        });
      }
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
          viewYn: hideBtn === false ? 'N' : 'Y',
        },
      }).then((res) => {
        navigate('/admin-item');
      });
    } else {
      if (deleteId !== undefined) {
        await axios({
          method: 'delete',
          url: `${process.env.REACT_APP_API_URL}/file/${deleteId}`,
          headers: {
            Authorization: jwt,
          },
        });
      }
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
          viewYn: hideBtn === false ? 'N' : 'Y',
        },
      }).then((res) => {
        registFile(itemId);
      });
    }
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

    const nowUrl = URL.createObjectURL(selectedFiles[0]);
    fileUrlList.push(nowUrl);

    // 업로드하는 파일 개수 제한하는 것
    if (fileUrlList.length > 1) {
      fileUrlList.slice(0, 1);
    }

    if (selectedImages.length > 1) {
      selectedImages.slice(0, 1);
    }

    setSelectedFiles(fileUrlList);

    const selectedFileArray: any = Array.from(selectedFiles);

    const imageArray = selectedFileArray.map((file: any) => {
      return file.name;
    });

    setSelectedImages((previousImages: any) => previousImages.concat(imageArray));
    e.target.value = '';
  };

  const deleteBtn = (id: any, image: any) => {
    if (id === undefined) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
    } else {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      setDeleteId(id);
    }
  };

  const attachFile =
    selectedImages &&
    selectedImages.map((image: any) => {
      return (
        <S.DivImg key={image.id || image}>
          <div>{image.orgFileName || image}</div>
          <button onClick={(e: any) => deleteBtn(image.id, image)}>
            <VscClose size='30' />
          </button>
        </S.DivImg>
      );
    });

  //,상품수량

  const [moneyNum, setMoneyNum2] = useState('');
  const [quantityNum, setquantityNum2] = useState('');

  const changeEnteredNum2 = (e: any) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));

    if (removedCommaValue.toLocaleString() !== 'NaN') {
      setMoneyNum2(removedCommaValue.toLocaleString());
    }
    if (removedCommaValue.toLocaleString() === 'NaN') {
      setMoneyNum2('.');
    }
    if (value.substr(0, 1) === '.') {
      setMoneyNum2('');
    }
  };

  const changeEnteredNum = (e: any) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));

    if (removedCommaValue.toLocaleString() !== 'NaN') {
      setquantityNum2(removedCommaValue.toLocaleString());
    }
    if (removedCommaValue.toLocaleString() === 'NaN') {
      setquantityNum2('.');
    }
    if (value.substr(0, 1) === '.') {
      setquantityNum2('');
    }
  };

  const selectChange = (e: any) => {
    setCateSelect(e.target.value);
  };

  // 목록 선택시
  const backBtn = () => {
    swal
      .fire({
        icon: 'question',
        text: '상품 수정을 취소하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate('/admin-item');
        }
      });
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
                  {patternSpc.test(itemName) ? (
                    <S.RedDiv>특수문자를 제외한 상품명을 올바르게 기입해주세요.</S.RedDiv>
                  ) : (
                    ''
                  )}
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
                      onChange={changeEnteredNum2}
                    />
                    <S.PayP>원</S.PayP>
                    {hideBtn === false ? (
                      <S.StyledInput
                        defaultChecked
                        onClick={clickHide}
                        type='checkbox'
                        id='Hide'
                        name='Hide'
                      />
                    ) : (
                      <S.StyledInput onClick={clickHide} type='checkbox' id='Hide' name='Hide' />
                    )}

                    <S.StyledLabel htmlFor='Hide'>
                      <S.StyledP>숨기기</S.StyledP>
                    </S.StyledLabel>
                  </S.PayInput>
                  <S.CheckPay>*가격을 숨기고 싶으시다면 우측의 버튼을 클릭해주세요.</S.CheckPay>
                  {moneyNum === '.' ? <S.RedDiv>숫자로 입력해주세요.</S.RedDiv> : ''}
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
                    onChange={changeEnteredNum}
                  />
                  개{quantityNum === '.' ? <S.RedDiv>숫자로 입력해주세요.</S.RedDiv> : ''}
                </td>
              </tr>
              <tr>
                <td>썸네일 이미지</td>
                <td colSpan={3}>
                  <S.TableDiv>
                    {selectedImages.length !== 0 ? (
                      <div>{attachFile}</div>
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
                  <EditorWr
                    targetId={itemId}
                    type={adminItem}
                    descriptEdit={descriptEdit}
                    setDescriptEdit={setDescriptEdit}
                  />
                </td>
              </tr>
            </tbody>
          </S.Table>
          <S.QnABox>
            <S.QnAButton onClick={() => registerAlert()}>수정</S.QnAButton>
            <S.QnAButton2 onClick={() => backBtn()}>목록</S.QnAButton2>
          </S.QnABox>
        </S.Wrapper>
      </S.Container>
      <AdminFooter />
    </div>
  );
};
