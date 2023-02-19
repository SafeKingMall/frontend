import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Header } from '../../../components/common/Header';
import { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { CiLock } from 'react-icons/ci';

const swal = withReactContent(Swal);

export const QnAPw = () => {
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state.data;

  const [passWord, setPassWord] = useState('' as any);

  const inputPass = async (passWord: any) => {
    if (cookies.get('refreshToken')) {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/itemQna/password/${data}/${passWord}`,
        headers: {
          Authorization: jwt,
          'Content-Type': `application/json`,
        },
      })
        .then((res) => {
          navigate('/qna-po', {
            state: {
              data: data,
            },
          });
        })
        .catch((err) => {
          swal.fire({
            heightAuto: false,
            icon: 'warning',
            text: '비밀번호가 틀렸습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        });
    } else {
      navigate('/sign-in');
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '로그인이 만료되었습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  const onKeyDownEnter = (e: any) => {
    if (e.key === 'Enter') {
      inputPass(passWord);
      e.target.blur();
    }
  };

  return (
    <div>
      <Header />
      <div>
        <S.Banner>문의하기</S.Banner>
      </div>
      <S.Wrapper>
        <S.PwBox>
          <S.Ladius>
            <CiLock size='100' color='white' fontWeight='900' />
          </S.Ladius>
          <div>비공개 게시글입니다.</div>
          <div>비밀번호를 입력해주세요.</div>
          <S.QnApwInput
            onKeyDown={(e) => onKeyDownEnter(e)}
            type='password'
            onChange={(e: any) => setPassWord(e.target.value)}
          />
        </S.PwBox>
        <S.QnABox>
          <S.QnAButton onClick={() => navigate('/qna')}>취소</S.QnAButton>
          <S.QnAButton2 onClick={() => inputPass(passWord)}>확인</S.QnAButton2>
        </S.QnABox>
      </S.Wrapper>
    </div>
  );
};
