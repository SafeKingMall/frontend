import React from 'react';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';

export const Orders = () => {
  const stepTitle = '주문·결제';
  return (
    <S.Container>
      <OrdersStep stepTitle={stepTitle} />
    </S.Container>
  );
};
