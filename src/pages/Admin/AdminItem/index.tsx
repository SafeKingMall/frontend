import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { AdminItemList } from '../../../components/Edit/AdminItemList';
import { MetaTag } from '../../../components/common/MetaTag';

export const AdminItem = () => {
  return (
    <>
      <MetaTag
        title={`상품관리 | 안전왕`}
        description={`안전왕, 상품관리`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/admin-item'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 상품관리`}
      />
      <div>
        <Header />
        <S.Container>
          <EditMenu />
          <S.Wrapper>
            <AdminItemList />
          </S.Wrapper>
        </S.Container>
      </div>
    </>
  );
};
