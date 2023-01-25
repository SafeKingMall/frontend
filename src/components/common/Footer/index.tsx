import React from 'react';
import * as S from './style';

export const Footer = () => {
  return (
    <div>
      <S.Wrapper>
        <S.Logo>
          <div></div>
        </S.Logo>
        <S.Text>
          <span>㈜리크텍</span>
          <br /> <span>Tel</span> (02) 6953-1170
          <br /> <span>Address</span> (07802) 서울시 강서구 공항대로 213, 보타닉파크타워-2 522호
          <br />
          <br />ⓒ safekingmall All rights reserved.
        </S.Text>
      </S.Wrapper>
    </div>
  );
};
