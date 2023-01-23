import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import * as S from './style';
import { Footer } from '../../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { EditorWr } from '../../../../components/Edit/AdminItemList/Editor';
import { Header } from '../../../../components/common/Header';
import { EditMenu } from '../../../../components/Edit/EditMenu';
import db from '../../../../db.json';

export const AdminItemWr = () => {
  const data = db.categorycontent;
  const navigate = useNavigate();

  //사진 업로드
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event: any) => {
    const selectedFiles = event.target.files;
    const selectedFileArray = Array.from(selectedFiles);
    const imageArray = selectedFileArray.map((file: any) => {
      return file.name;
    });
    setSelectedImages((previousImages: any) => previousImages.concat(imageArray));
    event.target.value = '';
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
  const [enteredNum, setEnterdNum] = useState({
    moneyNum: '',
    quantityNum: '',
  });

  const { moneyNum, quantityNum } = enteredNum;

  const changeEnteredNum = (e: any) => {
    const { value, name } = e.target;
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

  const [cataSelect, setCataSelect] = useState('');
  const selectChange = (e: any) => {
    setCataSelect(e.target.value);
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
                  <S.TableInput placeholder='상품명을 입력해주세요' />
                </td>
                <td>카테고리</td>
                <td>
                  <S.Select onChange={selectChange} value={cataSelect} required>
                    <S.NoneOption value='카테고리'>-카테고리-</S.NoneOption>
                    {data.map((el: any) => {
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
                      type='text'
                      value={moneyNum}
                      onChange={changeEnteredNum}
                    />
                    <S.PayP>원</S.PayP>
                    <S.StyledInput type='checkbox' id='Hide' name='Hide' />
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
                    onChange={changeEnteredNum}
                  />
                  개
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
                      // multiple
                      accept='.png, .jpg,image/*'
                    />
                  </S.TableDiv>
                </td>
              </tr>
              <tr>
                <td>설명</td>
                <td colSpan={3}>
                  <EditorWr />
                </td>
              </tr>
            </tbody>
          </S.Table>
          <S.QnABox>
            <S.QnAButton onClick={() => navigate('/admin-item')}>취소</S.QnAButton>
            <S.QnAButton2 onClick={() => navigate('/admin-item-po')}>등록</S.QnAButton2>
          </S.QnABox>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </div>
  );
};
