import React from 'react';
import * as S from './style';
import { useEffect } from 'react';

export const EditMenu = () => {
  const location = window.location.pathname;

  useEffect(() => {
    console.log(location);
  }, [location]);

  const numberColor = '#289951';

  return (
    <S.Wrapper>
      <S.StyledLink
        to='/admin-member'
        style={{ color: location === '/admin-member' ? numberColor : '' }}
      >
        회원관리
      </S.StyledLink>
      <S.StyledLink
        to='/admin-item'
        style={{ color: location === '/admin-item' ? numberColor : '' }}
      >
        상품관리
      </S.StyledLink>
      <S.StyledLink
        to='/admin-order'
        style={{ color: location === '/admin-order' ? numberColor : '' }}
      >
        주문관리
      </S.StyledLink>

      <S.StyledLink
        to='/admin-category'
        style={{ color: location === '/admin-category' ? numberColor : '' }}
      >
        카테코리관리
      </S.StyledLink>
    </S.Wrapper>
  );
};
