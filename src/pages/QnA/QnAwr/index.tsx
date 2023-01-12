import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';

export const QnAWr = () => {
  const navigate = useNavigate();

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

  return (
    <div>
      <div>
        <S.Banner>QnAwr</S.Banner>
      </div>
      <S.Wrapper>
        <S.Table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <S.TableInput placeholder='제목을 입력해주세요.' />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <S.TableInput placeholder='비밀번호를 입력해주세요.' />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <S.TableTextarea placeholder='내용을 입력해주세요.' />
              </td>
            </tr>
            <tr>
              <td>첨부파일</td>
              <td>
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
                    multiple
                    accept='.png, .jpg, .pdf, .hwp,image/*'
                  />
                </S.TableDiv>
              </td>
            </tr>
          </tbody>
        </S.Table>
        <S.QnABox>
          <S.QnAButton onClick={() => navigate('/qna')}>취소</S.QnAButton>
          <S.QnAButton2 onClick={() => navigate('/qna-po')}>등록</S.QnAButton2>
        </S.QnABox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
