/* eslint-disable */
import React from 'react';
import * as S from './style';
import { TermsOfServiceContent } from '../../components/common/TermsOfServiceContent';
import { Header } from '../../components/common/Header';
import { MetaTag } from '../../components/common/MetaTag';

export const TermsOfService = (props: any) => {
  return (
    <>
      <MetaTag
        title={`이용약관 | 안전왕`}
        description={`안전왕, 이용약관`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/terms-of-service'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 이용약관`}
      />
      <Header />
      <S.Container>
        <S.Wrap>
          {TermsOfServiceContent()}
        </S.Wrap>
      </S.Container>
    </>
  );
};
