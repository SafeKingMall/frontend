import React from 'react';
import * as S from './style';

export const OrdersList = (props: any) => {
  let data = props.data;
  return (
    <S.Container>
      <S.ListContainer>
        <S.ListTitleBar>
          <S.TitleInfoArea>상품 정보</S.TitleInfoArea>
          <S.TitleSaleArea>할인 금액</S.TitleSaleArea>
          <S.TitlePriceArea>결제 금액</S.TitlePriceArea>
        </S.ListTitleBar>
        {data.map((item: any, idx: number) => {
          return (
            <S.ItemContainer key={item.itemId}>
              <S.ItemContentArea>
                <S.ItemInfoArea>
                  <S.ItemImgArea>
                    <img
                      src='https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785'
                      width='184'
                      height='184'
                      alt={item.name}
                      style={{ border: '0.1rem solid #efeff1' }}
                    />
                  </S.ItemImgArea>
                  <S.ItemTextArea>
                    <S.CategoryText>{item.categoryName}</S.CategoryText>
                    <S.ItemNameText>{item.name}</S.ItemNameText>
                    <S.ItemPriceText>
                      {item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
                    </S.ItemPriceText>
                  </S.ItemTextArea>
                </S.ItemInfoArea>
                <S.ItemSaleArea>
                  <p>-</p>
                </S.ItemSaleArea>
                <S.ItemPriceArea>
                  <p>
                    {(item.price * item.count)
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </p>
                </S.ItemPriceArea>
              </S.ItemContentArea>
              <S.ItemCountArea>
                <S.CountText>수량.</S.CountText>
                <S.CountNum>{item.count}</S.CountNum>
              </S.ItemCountArea>
            </S.ItemContainer>
          );
        })}
      </S.ListContainer>
    </S.Container>
  );
};
