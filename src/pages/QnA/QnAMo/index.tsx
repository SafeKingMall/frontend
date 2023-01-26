import React, { useEffect, useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import * as S from './style';
import { useLocation } from 'react-router';

import { Footer } from '../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Header } from '../../../components/common/Header';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const QnAMo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  const itemId = state.itemId;

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/itemQna/${itemId}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setTitle(res.data.title);
        setContents(res.data.contents);
      });
    };
    getData();
  }, [itemId, jwt]);

  //화면에 출력되는 파일
  const [selectedImages, setSelectedImages] = useState([]);
  //서버에 보내지는 파일
  const [selectedFiles, setSelectedFiles] = useState(null as any);

  const onSelectFile = (e: any) => {
    e.preventDefault();
    e.persist();
    const selectedFiles = e.target.files;
    const fileUrlList = [...selectedFiles];

    for (let i = 0; i < selectedFiles.length; i++) {
      const nowUrl = URL.createObjectURL(selectedFiles[i]);
      fileUrlList.push(nowUrl);
    }

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

  //등록 알림창
  const registAlert = () => {
    swal
      .fire({
        icon: 'question',
        text: '게시판을 수정하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          registApi();
          swal.fire({
            icon: 'success',
            text: '게사판이 수정되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
        navigate('/qna-po', {
          state: {
            data: itemId,
          },
        });
      });
  };

  const registApi = async () => {
    // for (let key of formData.keys()) {
    //   console.log(key);
    // }

    // for (let value of formData.values()) {
    //   console.log(value);
    // }

    await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}/user/itemQna/${itemId}`,
      headers: {
        Authorization: jwt,
      },
      data: {
        title: title,
        contents: contents,
        itemId: 3,
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
    formData.append('type', 'itemQna');
    formData.append('targetId', id);

    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/file/upload`,
      headers: {
        Authorization: jwt,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
  };

  return (
    <div>
      <Header />
      <div>
        <S.Banner>QnAwr</S.Banner>
      </div>
      <S.Wrapper>
        <S.Table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <S.TableInput
                  value={title}
                  placeholder='제목을 입력해주세요.'
                  onChange={(e: any) => {
                    setTitle(e.target.value);
                  }}
                />
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
                <S.TableTextarea
                  value={contents}
                  placeholder='내용을 입력해주세요.'
                  onChange={(e: any) => {
                    setContents(e.target.value);
                  }}
                />
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
          <S.QnAButton2 onClick={() => registAlert()}>등록</S.QnAButton2>
        </S.QnABox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
