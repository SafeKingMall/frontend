import React from 'react';
import * as S from './style';

export const TotalPrice = (props: any) => {
  const resultList = props.resultList;
  let itemCount = resultList.reduce((pre: any, cur: any) => {
    return (pre += cur.count);
  }, 0);
  let itemPrice = resultList.reduce((pre: any, cur: any) => {
    return (pre += cur.price * cur.count);
  }, 0);
  let deliveryPay = 2500;
  let totalPay = itemPrice + deliveryPay;
  return (
    <S.Container>
      <S.TotalPriceContainer>
        <S.TotalPriceTitleArea>
          <S.Title>총 주문금액</S.Title>
        </S.TotalPriceTitleArea>
        <S.TotalPriceInfoArea>
          <S.InfoTextWrap>
            <S.InfoTextArea>
              <S.InfoText>주문상품 수</S.InfoText>
              <S.InfoText>{itemCount}개</S.InfoText>
            </S.InfoTextArea>
            <S.InfoTextArea>
              <S.InfoText>주문 금액</S.InfoText>
              <S.InfoText>
                {itemPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
              </S.InfoText>
            </S.InfoTextArea>
            <S.InfoTextArea>
              <S.InfoText>할인 금액</S.InfoText>
              <S.InfoText>-</S.InfoText>
            </S.InfoTextArea>
            <S.InfoTextArea>
              <S.InfoText>배송비</S.InfoText>
              <S.InfoText>
                {deliveryPay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
              </S.InfoText>
            </S.InfoTextArea>
          </S.InfoTextWrap>
          <S.ResultPriceArea>
            <S.ResultPriceText>최종결제금액</S.ResultPriceText>
            <S.ResultPrice>
              {itemPrice === 0
                ? 0
                : totalPay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              <S.InfoText> 원</S.InfoText>
            </S.ResultPrice>
          </S.ResultPriceArea>
        </S.TotalPriceInfoArea>
      </S.TotalPriceContainer>
    </S.Container>
  );
};