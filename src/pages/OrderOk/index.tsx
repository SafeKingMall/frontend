import React from 'react';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';

export const OrderOk = () => {
  const { state } = useLocation();
  const stepTitle = '주문완료';
  const navigate = useNavigate();
  return (
    <S.Container>
      <Header />
      <S.ContentContainer>
        <OrdersStep stepTitle={stepTitle} />
        <S.OrderInfoWrap>
          <S.IconArea>
            <img src='img/OrderOkIcon.png' alt='아이콘' />
            <S.IconUnderLine />
          </S.IconArea>
          <S.TextArea>
            <S.Text>주문이 완료되었습니다.</S.Text>
            <S.Text>{state.dt} 에 주문하신 상품의</S.Text>
            <S.Text>
              주문번호는 <S.GreenText>{state.merchant_uid}</S.GreenText> 입니다.
            </S.Text>
          </S.TextArea>
        </S.OrderInfoWrap>
        <S.BtnArea>
          <S.WhiteBtn onClick={() => navigate('/')}>쇼핑 계속하기</S.WhiteBtn>
          <S.GreenBtn onClick={() => navigate('/mypage-od')}>결제 내역보기</S.GreenBtn>
        </S.BtnArea>
      </S.ContentContainer>
      <Footer />
    </S.Container>
  );
};
