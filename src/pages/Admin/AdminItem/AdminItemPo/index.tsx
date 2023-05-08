import React, { useContext, useState } from 'react';
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
import { categoryContext } from '../../../../store/categoryStore';
import { MetaTag } from '../../../../components/common/MetaTag';

const swal = withReactContent(Swal);

export const AdminItemPo = () => {
  const context = useContext(categoryContext);
  const categoryList = context.map((el: any) => el.name);
  const { state } = useLocation();
  const itemId = state.data;

  const navigate = useNavigate();
  const { MoneyNumber2 } = useMoney();
  //상품명
  const [itemName, setItemName] = useState('');

  const [moneyNum, setMoneyNum2] = useState('');
  const [quantityNum, setquantityNum2] = useState('');

  // 안찍힌 숫자들
  const [sendMoneyNum, setSendMoneyNum] = useState(0 as Number);
  const [sendQuantityNum, setSendQuantityNum] = useState(0 as Number);

  //카테고리 select
  const [cateSelect, setCateSelect] = useState('' as any);
  //사진 업로드(화면출력용)
  const [selectedImages, setSelectedImages] = useState([]);
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
  //새로운 파일
  const [getFileName, setGetFileName] = useState('' as any);
  //파일 삭제 id
  // const [
  //   // deleteId,
  //   setDeleteId,
  // ] = useState(0 as any);

  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
      try {
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

          setMoneyNum2(res.data.price);
          setquantityNum2(res.data.quantity);

          setSendMoneyNum(res.data.price);
          setSendQuantityNum(res.data.quantity);
          setCateSelect(res.data.categoryName);
          setDescriptEdit(res.data.description);

          setGetFileName(res.data.fileName);
          setHideBtn(res.data.viewYn === 'N' ? false : true);
        });
      } catch (err: any) {
        navigate('/sign-in');
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        cookies.remove('loginUser');
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data, jwt, navigate]);

  //숨기기 버튼
  const clickHide = () => {
    setHideBtn(!hideBtn);
  };

  const sendCategoryId = categoryId.filter((el: any) => el.name === cateSelect);

  //수정알람
  const registerAlert = () => {
    if (itemName === '') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '상품명을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (!cateSelect) {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '카테고리를 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (moneyNum === '.') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '상품가격을 숫자로 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (moneyNum === '') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '상품가격을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (moneyNum.length < 3) {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '최소가격은 100원부터 입니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (quantityNum === '.') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '상품수량을 숫자로 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
    // else if (quantityNum === '' || quantityNum === '0') {
    //   swal.fire({heightAuto: false,
    //     icon: 'warning',
    //     text: '상품수량을 입력해주세요.',
    //     confirmButtonText: '확인',
    //     confirmButtonColor: '#289951',
    //     width: 400,
    //   });
    // }
    else if (descriptEdit === '') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '상품설명을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
          heightAuto: false,
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
            if (cookies.get('refreshToken')) {
              modifyApi();
              // swal.fire({
              //   heightAuto: false,
              //   icon: 'success',
              //   text: '상품이 수정되었습니다.',
              //   confirmButtonText: '확인',
              //   confirmButtonColor: '#289951',
              //   width: 400,
              // });
            } else {
              navigate('/sign-in');
              cookies.remove('accessToken');
              cookies.remove('refreshToken');
              cookies.remove('loginUser');
            }
          }
        });
    }
  };

  // 수정 api
  const modifyApi = async () => {
    if (selectedFiles === null) {
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
        navigate('/itemdetail', {
          state: {
            itemId: itemId,
            slideNavIdx: categoryList.indexOf(cateSelect),
          },
        });
        window.location.reload();
      });
    } else {
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
          //
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
    formData.append('itemId', id);

    await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/admin/itemPhoto/${id}`,
      headers: {
        Authorization: jwt,
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/admin/itemPhoto/${id}`,
        headers: {
          Authorization: jwt,
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      }).then((res) => {
        navigate('/itemdetail', {
          state: {
            itemId: itemId,
            slideNavIdx: categoryList.indexOf(cateSelect),
          },
        });
      });
    });
  };

  //파일 등록
  const onSelectFile = (e: any) => {
    e.preventDefault();
    e.persist();
    const selectedFiles = e.target.files;
    const fileUrlList = [...selectedFiles];

    const nowUrl = URL.createObjectURL(selectedFiles[selectedFiles.length - 1]);
    fileUrlList.push(nowUrl);

    // 업로드하는 파일 개수 제한하는 것
    // if (fileUrlList.length > 1) {
    //   fileUrlList.slice(0, 1);
    // }

    // if (selectedImages.length > 1) {
    //   selectedImages.slice(0, 1);
    // }

    setSelectedFiles(fileUrlList);

    const selectedFileArray: any = Array.from(selectedFiles);

    const imageArray = selectedFileArray.map((file: any) => {
      return file.name;
    });

    setSelectedImages((previousImages: any) => previousImages.concat(imageArray));
    e.target.value = '';
  };

  // const deleteBtn = (id: any, image: any) => {
  //   if (id === undefined) {
  //     setSelectedImages(selectedImages.filter((e) => e !== image));
  //   } else {
  //     setSelectedImages(selectedImages.filter((e) => e !== image));
  //     setDeleteId(id);
  //   }
  // };

  //getFileName
  // const onDeleteFile = () => {
  //   return setGetFileName('');
  // };
  //받아온 파일 삭제하기
  // const attachFile2 = () => {
  //   return (
  //     <S.DivImg>
  //       <div>{getFileName}</div>
  //       <button onClick={() => onDeleteFile()}>
  //         <VscClose size='30' />
  //       </button>
  //     </S.DivImg>
  //   );
  // };

  const attachFile =
    // selectedImages &&
    selectedImages.map((image: any) => {
      return (
        <S.DivImg key={image}>
          <div>{image}</div>
          <button
            onClick={(e: any) => setSelectedImages(selectedImages.filter((e) => e !== image))}
          >
            <VscClose size='30' />
          </button>
        </S.DivImg>
      );
    });

  //상품가격 , 체크 및 유효성 검사

  const changeEnteredNum2 = (e: any) => {
    const value = e.target.value;
    setSendMoneyNum(e.target.value.split(',').join(''));
    const removedCommaValue = Number(value.replaceAll(',', ''));

    if (removedCommaValue.toLocaleString() !== 'NaN') {
      setMoneyNum2(removedCommaValue.toLocaleString());
      // setSendMoneyNum(removedCommaValue.toLocaleString());
    }
    if (removedCommaValue.toLocaleString() === 'NaN') {
      setMoneyNum2('.');
    }
    if (value.substr(0, 1) === '.') {
      setMoneyNum2('');
    }
  };
  //상품수량 ,체크 및 유효성 검사
  const changeEnteredNum = (e: any) => {
    const value = e.target.value;
    setSendQuantityNum(e.target.value.split(',').join(''));
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

  const SwalInput = () => {
    if (getFileName !== '') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '썸네일은 하나만 등록 가능합니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  // 목록 선택시
  const backBtn = () => {
    swal
      .fire({
        heightAuto: false,
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
    <>
      <MetaTag
        title={`상품수정 | 안전왕`}
        description={`안전왕, 상품수정`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/admin-item-po'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 상품수정`}
      />
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
                        value={MoneyNumber2(moneyNum)}
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
                      value={MoneyNumber2(quantityNum)}
                      onChange={changeEnteredNum}
                    />
                    개{quantityNum === '.' ? <S.RedDiv>숫자로 입력해주세요.</S.RedDiv> : ''}
                  </td>
                </tr>

                <tr>
                  <td>썸네일 이미지</td>
                  <td colSpan={3}>
                    <S.TableDiv>
                      {selectedImages.length !== 0 || getFileName !== '' ? (
                        getFileName !== '' ? (
                          <S.DivImg>
                            <div>{getFileName}</div>
                            <button onClick={() => setGetFileName('')}>
                              <VscClose size='30' />
                            </button>
                          </S.DivImg>
                        ) : (
                          <div>{attachFile}</div>
                        )
                      ) : (
                        <S.NotDownload>파일을 첨부할 수 있습니다.</S.NotDownload>
                      )}

                      <S.ChangeButton onClick={SwalInput}>업로드</S.ChangeButton>
                      {selectedImages.length !== 0 ? (
                        ''
                      ) : (
                        <input
                          type='file'
                          name='images'
                          onChange={onSelectFile}
                          accept='.png, .jpg,image/*'
                        />
                      )}
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
      </div>
    </>
  );
};
