import React from 'react';
import * as S from './style';

export const Footer = () => {
  return (
    <S.container>
      <S.LogoArea>
        <S.Logo />
      </S.LogoArea>
      <S.TextArea>
        <S.TextBox>
          <div>
            <p>(주)리크텍</p>
            <p>Tel: (02) 6953-1170</p>
            <p>Address: (07802) 서울시 강서구 공항대로 213, 보타닉파크타워-2 522호</p>
          </div>
          <div>
            <p>ⓒ safekingmall All rights reserved.</p>
          </div>
        </S.TextBox>
      </S.TextArea>
    </S.container>
  );
};
