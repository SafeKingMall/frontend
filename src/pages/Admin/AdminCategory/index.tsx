import React from 'react';
import * as S from './style';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { Header } from '../../../components/common/Header';
import { AdimCgList } from '../../../components/Edit/AdminCgList';
// import axios from 'axios';
import { MetaTag } from '../../../components/common/MetaTag';

export const AdminCategory = () => {
  return (
    <>
      <MetaTag
        title={`카테고리관리 | 안전왕`}
        description={`안전왕, 카테고리관리`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/admin-category'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 카테고리관리`}
      />
      <div>
        <Header />
        <S.Container>
          <EditMenu />
          <S.Wrapper>
            <AdimCgList />
          </S.Wrapper>
        </S.Container>
      </div>
    </>
  );
};
