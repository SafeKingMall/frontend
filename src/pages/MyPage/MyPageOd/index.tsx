/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { OrderList } from '../../../components/user/OrderList';

export const MyPageOd = () => {
  return (
    <>
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
        </div>
        <S.Wrapper>
          <S.Top>주문내역</S.Top>
          <OrderList />
        </S.Wrapper>
      </S.Container>
    </>
  );
};
