/* eslint-disable */
import React from 'react';
import * as S from './style';
import { PrivacyPolicyContent } from '../../components/common/PrivacyPolicyContent';
import { Header } from '../../components/common/Header';

export const PrivacyPolicy = (props: any) => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrap>
          {PrivacyPolicyContent()}
        </S.Wrap>
      </S.Container>
    </>
  );
};
