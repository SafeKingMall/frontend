import React from 'react';
import * as S from './style';
import { QnAList } from '../../components/QnA/QnAList';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
// import { Cookies } from 'react-cookie';
import { MetaTag } from '../../components/common/MetaTag';

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
    <>
      <MetaTag
        title={`문의하기 | 안전왕`}
        description={`안전왕, 문의하기`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/qna'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 문의하기`}
      />
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
    </>
  );
};
