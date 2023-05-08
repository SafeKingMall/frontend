/* eslint-disable */
import React from 'react';
import * as S from './style';
import { PrivacyPolicyContent } from '../../components/common/PrivacyPolicyContent';
import { Header } from '../../components/common/Header';
import { MetaTag } from '../../components/common/MetaTag';

export const PrivacyPolicy = (props: any) => {
  return (
    <>
      <MetaTag
        title={`개인정보처리방침 | 안전왕`}
        description={`안전왕, 개인정보처리방침`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/privacy-policy'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 개인정보처리방침`}
      />
      <Header />
      <S.Container>
        <S.Wrap>
          {PrivacyPolicyContent()}
        </S.Wrap>
      </S.Container>
    </>
  );
};
