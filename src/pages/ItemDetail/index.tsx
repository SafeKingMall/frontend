import React, { useEffect } from 'react';
import * as S from './style';
import { Nav } from '../../components/item/Nav';
import { useLocation, useNavigate } from 'react-router-dom';

export const ItemDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  let itemNav = document.querySelector('#item-nav') as HTMLElement | null;
  let itemNavTop = 470;
  if (itemNav !== null) {
    itemNavTop = itemNav.offsetTop;
  }
  useEffect(() => {
    window.scrollTo({
      top: itemNavTop,
      behavior: 'smooth',
    });
  });
  const moveOders = () => {
    navigate('/orders');
  };
  return (
    <S.Container>
      <Nav />
      <S.DetailContainer>
        <S.DetailArea>
          <img
            src='https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785'
            width='700'
            height='700'
            alt={state.data.name}
            style={{ border: '1px solid #DDDDDD', marginRight: '4rem' }}
          />
          <S.ItemTextArea>
            <S.Category>{state.data.categoryName}</S.Category>
            <S.ItemName>{state.data.name}</S.ItemName>
            <S.ItemNameLine />
            <S.PriceArea>
              <S.Price>
                {state.data.price
                  ? state.data.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') +
                    '원'
                  : '금액표시없음'}
              </S.Price>
            </S.PriceArea>
            <S.BtnArea>
              <S.BasketBtn>장바구니</S.BasketBtn>
              <S.PurchaseBtn onClick={() => moveOders()}>구매하기</S.PurchaseBtn>
            </S.BtnArea>
          </S.ItemTextArea>
        </S.DetailArea>
      </S.DetailContainer>
    </S.Container>
  );
};
