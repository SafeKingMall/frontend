import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { AdminOrderList } from '../../../components/Edit/AdminOrderList';
import { AdminFooter } from '../../../components/common/AdminFooter';

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
      <AdminFooter />
    </div>
  );
};
