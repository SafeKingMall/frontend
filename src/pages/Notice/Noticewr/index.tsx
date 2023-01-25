import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Header } from '../../../components/common/Header';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const NoticeWr = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  //등록 알림창
  const registerAlert = () => {
    swal
      .fire({
        icon: 'question',
        text: '게사판을 등록하시겠습니까?',
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
            text: '게시판이 등록되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
      });
  };

  const registerApi = async () => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/admin/notice`,
      headers: {
        Authorization: jwt,
      },
      data: {
        title: title,
        contents: content,
      },
    }).then((res) => {
      navigate('/notice-po', {
        state: {
          data: res.data,
        },
      });
    });
  };
  return (
    <div>
      <Header />
      <div>
        <S.Banner>Noticewr</S.Banner>
      </div>
      <S.Wrapper>
        <S.Table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <S.TableInput
                  placeholder='제목을 입력해주세요.'
                  onChange={(e: any) => {
                    setTitle(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <S.TableTextarea
                  placeholder='내용을 입력해주세요.'
                  onChange={(e: any) => {
                    setContent(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </S.Table>
        <S.NoticeBox>
          <S.NoticeButton onClick={() => navigate('/notice')}>취소</S.NoticeButton>
          <S.NoticeButton2 onClick={() => registerAlert()}>등록</S.NoticeButton2>
        </S.NoticeBox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
