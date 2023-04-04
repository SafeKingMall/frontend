import React from 'react';
import * as S from './style';
import { QnAList } from '../../components/QnA/QnAList';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
// import { Cookies } from 'react-cookie';

export const QnA = () => {
  // const navigate = useNavigate();
  // const cookies = new Cookies();

  // const refreshRoute = () => {
  //   if (cookies.get('refreshToken')) {
  //     navigate('/qna-wr');
  //   } else {
  //     navigate('/sign-in');
  //     cookies.remove('accessToken');
  //     cookies.remove('refreshToken');
  //     cookies.remove('loginUser');
  //   }
  // };

  return (
    <div>
      <Header />
      <S.Wrapper>
        <div>
          <S.Banner>문의하기</S.Banner>
        </div>
        <S.Container>
          <QnAList />
          {/* <S.QnAButton onClick={() => refreshRoute()}>글쓰기</S.QnAButton> */}
        </S.Container>
      </S.Wrapper>
    </div>
  );
};
