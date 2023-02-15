/* eslint-disable */
import React from 'react';
import * as S from './style';
import { TermsOfServiceContent } from '../../components/common/TermsOfServiceContent';
import { Header } from '../../components/common/Header';

export const TermsOfService = (props: any) => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrap>
          {TermsOfServiceContent()}
        </S.Wrap>
      </S.Container>
    </>
  );
};
