import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { AdminItemList } from '../../../components/Edit/AdminItemList';
import { AdminFooter } from '../../../components/common/AdminFooter';

export const AdminItem = () => {
  return (
    <div>
      <Header />
      <S.Container>
        <EditMenu />
        <S.Wrapper>
          <AdminItemList />
        </S.Wrapper>
      </S.Container>
      <AdminFooter />
    </div>
  );
};
