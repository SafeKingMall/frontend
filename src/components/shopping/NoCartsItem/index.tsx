import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const NoCartsItem = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Title>장바구니</S.Title>
      <S.ListContainer>장바구니가 비어있습니다.</S.ListContainer>
      <S.GreenBtn onClick={() => navigate('/')}>쇼핑하러 가기</S.GreenBtn>
    </S.Container>
  );
};
