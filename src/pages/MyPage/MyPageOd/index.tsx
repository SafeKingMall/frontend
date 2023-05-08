/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { OrderList } from '../../../components/user/OrderList';
import { MetaTag } from '../../../components/common/MetaTag';

export const MyPageOd = () => {
  return (
    <>
      <MetaTag
        title={`주문내역 | 안전왕`}
        description={`안전왕, 주문내역`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/mypage-od'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 주문내역`}
      />
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
