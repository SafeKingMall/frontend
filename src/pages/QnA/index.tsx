import React from 'react';
import * as S from './style';
import { QnAList } from '../../components/QnA/QnAList';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';

const swal = withReactContent(Swal);

export const QnA = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const refreshRoute = () => {
    if (cookies.get('refreshToken')) {
      navigate('/qna-wr');
    } else {
      navigate('/sign-in');
      swal.fire({
        icon: 'warning',
        text: '로그인이 만료되었습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  return (
    <div>
      <Header />
      <S.Wrapper>
        <div>
          <S.Banner>문의하기</S.Banner>
        </div>
        <S.Container>
          <QnAList
          // loaded={loaded}
          // error={error}
          />
          <S.QnAButton onClick={() => refreshRoute()}>글쓰기</S.QnAButton>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};
