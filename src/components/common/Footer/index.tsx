import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <S.container>
      <S.LogoArea>
        <S.Logo />
      </S.LogoArea>
      <S.TextArea>
        <S.TextBox>
          <S.TextLine>
            <S.LinkText onClick={() => navigate('/privacy-policy')}>개인정보처리방침</S.LinkText>
            <S.Bar />
            <S.LinkText onClick={() => navigate('/terms-of-service')}>이용약관</S.LinkText>
          </S.TextLine>
          <S.TextLine>
            (주)리크텍
            <S.Bar />
            사업자등록번호: 312-87-01621
            <S.Bar />
            대표자: 김광선
          </S.TextLine>
          <S.TextLine>
            주소: (07802) 서울시 강서구 공항대로 213, 보타닉파크타워-2 522호 <S.Bar /> 대표전화:
            (02) 6953-1170
          </S.TextLine>
          <br />
          <S.TextLine>ⓒ safekingmall All rights reserved.</S.TextLine>
        </S.TextBox>
      </S.TextArea>
    </S.container>
  );
};
