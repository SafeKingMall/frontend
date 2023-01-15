import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import { EditMenu } from '../../../components/Edit/EditMenu';
import { AdminItemList } from '../../../components/Edit/AdminItemList';
import { useNavigate } from 'react-router-dom';

export const AdminItem = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <S.Container>
        <EditMenu />
        <S.Wrapper>
          <AdminItemList />
          <S.QnAButton onClick={() => navigate('/admin-item-wr')}>등록</S.QnAButton>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </div>
  );
};
