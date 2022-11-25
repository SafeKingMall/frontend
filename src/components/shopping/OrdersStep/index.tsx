import React from 'react';
import * as S from './style';
import { BsCart, BsCartCheck } from 'react-icons/bs';
import { GoCreditCard } from 'react-icons/go';

export const OrdersStep = (props: any) => {
  const greenColor = '#289951';
  const whiteColor = '#ffffff';
  return (
    <S.Container>
      <S.StepContainer>
        <S.StepTitle>{props.stepTitle}</S.StepTitle>
        <S.StepIconContainer>
          <S.StepIconLine />
          <S.StepIconBox
            style={{ backgroundColor: props.stepTitle === '장바구니' ? greenColor : '' }}
          >
            <BsCart size={56} color={props.stepTitle === '장바구니' ? whiteColor : greenColor} />
          </S.StepIconBox>
          <S.StepIconBox
            style={{ backgroundColor: props.stepTitle === '주문·결제' ? greenColor : '' }}
          >
            <GoCreditCard
              size={56}
              color={props.stepTitle === '주문·결제' ? whiteColor : greenColor}
            />
          </S.StepIconBox>
          <S.StepIconBox
            style={{ backgroundColor: props.stepTitle === '주문완료' ? greenColor : '' }}
          >
            <BsCartCheck
              size={56}
              color={props.stepTitle === '주문완료' ? whiteColor : greenColor}
            />
          </S.StepIconBox>
        </S.StepIconContainer>
        <S.StepTextContainer>
          <S.StepText
            style={{
              color: props.stepTitle === '장바구니' ? greenColor : '',
              fontWeight: props.stepTitle === '장바구니' ? 700 : '',
            }}
          >
            장바구니
          </S.StepText>
          <S.StepText
            style={{
              color: props.stepTitle === '주문·결제' ? greenColor : '',
              fontWeight: props.stepTitle === '주문·결제' ? 700 : '',
            }}
          >
            주문·결제
          </S.StepText>
          <S.StepText
            style={{
              color: props.stepTitle === '주문완료' ? greenColor : '',
              fontWeight: props.stepTitle === '주문완료' ? 700 : '',
            }}
          >
            주문완료
          </S.StepText>
        </S.StepTextContainer>
      </S.StepContainer>
    </S.Container>
  );
};
