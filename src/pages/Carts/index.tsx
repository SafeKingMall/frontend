import React from 'react';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { OrdersList } from '../../components/shopping/OrdersList';

export const Carts = () => {
  const stepTitle = '장바구니';
  return (
    <S.Container>
      <OrdersStep stepTitle={stepTitle} />
      <OrdersList />
    </S.Container>
  );
};
