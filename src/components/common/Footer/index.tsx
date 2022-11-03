import React from 'react';
import * as S from './style';

export const Footer = () => {
  return (
    <div>
      <S.Wrapper>
        <S.Logo>로고</S.Logo>
        <S.Text>
          ㈜리크텍
          <br /> Tel: (02) 6953-1170
          <br /> Address: (07802) 서울시 강서구 공항대로 213, 보타닉파크타워-2 522호
          <br />
          <br />ⓒ safekingmall All rights reserved.
        </S.Text>
      </S.Wrapper>
    </div>
  );
};
