import React from 'react';
import * as S from './style';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { Header } from '../../../components/common/Heaeder';
import { Footer } from '../../../components/common/Footer';
import { AdimCgList } from '../../../components/Edit/AdminCgList';
// import axios from 'axios';

export const AdminCategory = () => {
  return (
    <div>
      <Header />
      <S.Container>
        <EditMenu />
        <S.Wrapper>
          <AdimCgList />
        </S.Wrapper>
      </S.Container>
      <Footer />
    </div>
  );
};
