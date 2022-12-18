import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { OrdersStep } from '../../components/shopping/OrdersStep';

export const OrderOk = () => {
  const stepTitle = '주문완료';
  const navigate = useNavigate();
  return (
    <S.Container>
      <OrdersStep stepTitle={stepTitle} />
      <S.OrderInfoWrap>
        <S.IconArea>
          <img src='img/OrderOkIcon.png' alt='아이콘' />
          <S.IconUnderLine />
        </S.IconArea>
        <S.TextArea>
          <S.Text>주문이 완료되었습니다.</S.Text>
          <S.Text>2022.11.11 에 주문하신 상품의</S.Text>
          <S.Text>
            주문번호는 <S.GreenText>12395849580394534</S.GreenText> 입니다.
          </S.Text>
        </S.TextArea>
      </S.OrderInfoWrap>
      <S.BtnArea>
        <S.WhiteBtn onClick={() => navigate('/')}>쇼핑 계속하기</S.WhiteBtn>
        <S.GreenBtn>결제 내역보기</S.GreenBtn>
      </S.BtnArea>
    </S.Container>
  );
};
