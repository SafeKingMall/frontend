import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { AdminOrderList } from '../../../components/Edit/AdminOrderList';
import { MetaTag } from '../../../components/common/MetaTag';

export const AdminOrder = () => {
  return (
    <>
      <MetaTag
        title={`주문관리 | 안전왕`}
        description={`안전왕, 주문관리`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/admin-order'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 주문관리`}
      />
      <div>
        <Header />
        <S.Container>
          <EditMenu />
          <S.Wrapper>
            <AdminOrderList />
          </S.Wrapper>
        </S.Container>
      </div>
    </>
  );
};
