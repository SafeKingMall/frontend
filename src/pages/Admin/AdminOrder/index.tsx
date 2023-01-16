import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { AdminOrderList } from '../../../components/Edit/AdminOrderList';

export const AdminOrder = () => {
  return (
    <div>
      <Header />
      <S.Container>
        <EditMenu />
        <S.Wrapper>
          <AdminOrderList />
        </S.Wrapper>
      </S.Container>
      <Footer />
    </div>
  );
};
