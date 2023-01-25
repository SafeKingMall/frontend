import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import * as S from './style';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <S.Wrapper>
        임시페이지
        <br />
        NotFoundNotFoundNotFound
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <button onClick={() => navigate('/')}>메인으로</button>
      </S.Wrapper>
      <Footer />
    </>
  );
};
