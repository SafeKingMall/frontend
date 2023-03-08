import React from 'react';
import * as S from './style';

export const OrdersList = (props: any) => {
  let data = props.data;
  return (
    <S.Container>
      <S.ListContainer>
        <S.ListTitleBar>
          <S.MobileTitle>주문 상품 정보</S.MobileTitle>
          <S.TitleInfoArea>상품 정보</S.TitleInfoArea>
          <S.TitleSaleArea>할인 금액</S.TitleSaleArea>
          <S.TitlePriceArea>결제 금액</S.TitlePriceArea>
        </S.ListTitleBar>
        {data.map((item: any, idx: number) => {
          return (
            <S.ItemContainer key={item.id}>
              <S.ItemContentArea>
                <S.ItemInfoArea>
                  <S.ItemImgArea>
                    <S.ItemImg
                      src={`${process.env.REACT_APP_BASE_URL}${item.thumbNail}`}
                      alt={item.itemName}
                    />
                  </S.ItemImgArea>
                  <S.ItemTextArea>
                    <S.CategoryText>{item.categoryName}</S.CategoryText>
                    <S.ItemNameText>{item.itemName}</S.ItemNameText>
                    <S.ItemPriceText>
                      {item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </S.ItemPriceText>
                  </S.ItemTextArea>
                </S.ItemInfoArea>
                <S.ItemSaleArea>
                  <p>-</p>
                </S.ItemSaleArea>
                <S.ItemPriceArea>
                  <p>
                    {(item.itemPrice * item.itemQuantity)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </p>
                </S.ItemPriceArea>
              </S.ItemContentArea>
              <S.ItemCountArea>
                <S.MobileCountPriceArea>
                  결제금액
                  <S.MobileCountPrice>
                    {(item.itemPrice * item.itemQuantity)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </S.MobileCountPrice>
                </S.MobileCountPriceArea>
                <S.MobileCountArea>
                  상품수량
                  <S.MobileCount>{item.itemQuantity}개</S.MobileCount>
                </S.MobileCountArea>
                <S.CountText>수량.</S.CountText>
                <S.CountNum>{item.itemQuantity}</S.CountNum>
              </S.ItemCountArea>
            </S.ItemContainer>
          );
        })}
      </S.ListContainer>
    </S.Container>
  );
};
