import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { EditorWr } from '../../../../components/Edit/AdminItemList/Editor';
import { Header } from '../../../../components/common/Header';
import { EditMenu } from '../../../../components/Edit/EditMenu';
import axios from 'axios';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';

const swal = withReactContent(Swal);

export const AdminItemWr = () => {
  const navigate = useNavigate();
  const [moneyNum2, setMoneyNum2] = useState('');
  const [quantityNum, setquantityNum2] = useState('');

  // 상품명
  const [itemName, setItemName] = useState('');
  //화면에 출력되는 파일
  const [selectedImages, setSelectedImages] = useState([]);
  //서버에 보내지는 파일
  const [selectedFiles, setSelectedFiles] = useState(null as any);

  //설명부분
  const [descriptEdit, setDescriptEdit] = useState('' as any);
  const [hideBtn, setHideBtn] = useState(true);
  //만약 숨기기 버튼이 눌렸으면(false)이면 N을 보내줘야함
  const [sendhide, setSendhide] = useState('' as any);
  //에디터용 type
  const [adminItem] = useState('adminItem');
  // 에디터용 typeId
  const [sendId, setSendId] = useState(0 as any);
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  // 유효성 검사 (특수문자)

  const patternSpc = /[~!@#$%^&*()_+|<>?:{}]/;

  const clickHide = () => {
    setHideBtn(!hideBtn);
    if (hideBtn === false) {
      setSendhide('Y');
    } else if (hideBtn === true) {
      setSendhide('N');
    }
  };

  const sendFileAlret = (e: any) => {
    if (selectedFiles > 1) {
      swal.fire({
        icon: 'warning',
        text: '특수문자를 제외한 상품명을 올바르게 기입해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      e.preventDefault();
      e.persist();
      const selectedFiles = e.target.files;
      const fileUrlList = [...selectedFiles];

      for (let i = 0; i < selectedFiles.length; i++) {
        const nowUrl = URL.createObjectURL(selectedFiles[i]);
        fileUrlList.push(nowUrl);
      }

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
    }
  };

  const attachFile =
    selectedImages &&
    selectedImages.map((image: any) => {
      return (
        <S.DivImg key={image}>
          <div>{image}</div>
          <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
            <VscClose size='30' />
          </button>
        </S.DivImg>
      );
    });

  //숫자 3마디마다 ,찍기(상품가격)

  const changeEnteredNum2 = (e: any) => {
    const value = e.target.value;

    if (value.length < 13) {
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
    } else {
      swal.fire({
        icon: 'warning',
        text: '최대 가격은 21억까지 입니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  const changeEnteredNum = (e: any) => {
    const value = e.target.value;

    if (value.length < 13) {
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
    } else {
      swal.fire({
        icon: 'warning',
        text: '최대 수량은 21억개까지 입니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  const [cateSelect, setCateSelect] = useState('');
  const selectChange = (e: any) => {
    setCateSelect(e.target.value);
  };

  const [categoryId, setCategoryId] = useState<any[]>([]);

  const sendCategoryId = categoryId.filter((el: any) => el.name === cateSelect);

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
        setSendId(res.data.content[0].id);
      });
    };
    getData();
  }, [jwt]);

  //등록 알림창
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
    } else if (moneyNum2 === '.') {
      swal.fire({
        icon: 'warning',
        text: '상품가격을 숫자로 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (moneyNum2 === '') {
      swal.fire({
        icon: 'warning',
        text: '상품가격을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (moneyNum2.length < 3) {
      swal.fire({
        icon: 'warning',
        text: '최소가격은 100원부터 입니다.',
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
    } else if (selectedImages.length === 0) {
      swal.fire({
        icon: 'warning',
        text: '썸네일을 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
          icon: 'question',
          text: '상품을 등록하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            registerApi();
            swal.fire({
              icon: 'success',
              text: '상품이 등록되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          }
        });
    }
  };

  //등록 api
  const registerApi = async () => {
    if (selectedFiles === null) {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/admin/item`,
        headers: {
          Authorization: jwt,
        },
        data: {
          //상품명
          name: itemName,
          // 상품수량

          quantity: Number(quantityNum.split(',').join('')),
          //상품설명moneyNum
          description: descriptEdit,
          //상품금액
          price: Number(moneyNum2.split(',').join('')),

          //카테고리 ID
          categoryId: sendCategoryId[0].id,
          //가격표시여부
          viewYn: sendhide,
        },
      }).then((res) => {
        navigate('/itemdetail', {
          state: {
            itemId: res.data,
          },
        });
      });
    } else {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/admin/item`,
        headers: {
          Authorization: jwt,
        },
        data: {
          //상품명
          name: itemName,
          // 상품수량
          quantity: Number(quantityNum.split(',').join('')),
          //상품설명moneyNum
          description: descriptEdit,
          //상품금액
          // price: 1,

          price: Number(moneyNum2.split(',').join('')),

          //카테고리 ID
          categoryId: sendCategoryId[0].id,
          //가격표시여부
          viewYn: sendhide,
        },
      }).then((res) => {
        registFile(res.data);
      });
    }
  };

  const registFile = async (id: any) => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('file', selectedFiles[i]);
    }
    formData.append('itemId', id);

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
          itemId: id,
        },
      });
    });
  };

  const SwalInput = () => {
    if (selectedImages.length !== 0) {
      swal.fire({
        icon: 'warning',
        text: '썸네일은 하나만 등록 가능합니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
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
                    autoComplete='off'
                    placeholder='상품명을 입력해주세요'
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
                      autoComplete='off'
                      name='moneyNum'
                      placeholder='가격을 입력해주세요.'
                      type='text'
                      value={moneyNum2}
                      onChange={changeEnteredNum2}
                    />
                    <S.PayP>원</S.PayP>
                    <S.StyledInput onClick={clickHide} type='checkbox' id='Hide' name='Hide' />
                    <S.StyledLabel htmlFor='Hide'>
                      <S.StyledP>숨기기</S.StyledP>
                    </S.StyledLabel>
                  </S.PayInput>

                  <S.CheckPay>*가격을 숨기고 싶으시다면 우측의 버튼을 클릭해주세요.</S.CheckPay>
                  {moneyNum2 === '.' ? <S.RedDiv>숫자로 입력해주세요.</S.RedDiv> : ''}
                </td>
              </tr>
              <tr>
                <td>상품수량</td>
                <td colSpan={3}>
                  <S.TableInput
                    autoComplete='off'
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

                    <S.ChangeButton onClick={SwalInput}>업로드</S.ChangeButton>
                    {selectedImages.length !== 0 ? (
                      ''
                    ) : (
                      <input
                        type='file'
                        name='images'
                        onChange={(e: any) => sendFileAlret(e)}
                        // multiple
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
                    targetId={sendId}
                    type={adminItem}
                    descriptEdit={descriptEdit}
                    setDescriptEdit={setDescriptEdit}
                  />
                </td>
              </tr>
            </tbody>
          </S.Table>
          <S.QnABox>
            <S.QnAButton onClick={() => navigate('/admin-item')}>취소</S.QnAButton>
            <S.QnAButton2 onClick={() => registerAlert()}>등록</S.QnAButton2>
          </S.QnABox>
        </S.Wrapper>
      </S.Container>
    </div>
  );
};
