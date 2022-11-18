import React from 'react';
import * as S from './style';

export const EditMenu = () => {
  return (
    <S.Wrapper>
      <S.logo />
      <S.StyledLink to='/admin-member'>회원관리</S.StyledLink>
      <S.StyledLink to='/admin-item'>상품관리</S.StyledLink>
      <S.StyledLink to='/admin-order'>주문관리</S.StyledLink>
    </S.Wrapper>
  );
};
