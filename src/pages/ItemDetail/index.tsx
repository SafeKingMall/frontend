import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Nav } from '../../components/item/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';

export const ItemDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [desHeight, setDesHeight] = useState(0);
  const [desToggle, setDesToggle] = useState(false);
  const [itemNavTop, setItemNavTop] = useState(0);
  const [count, setCount] = useState(1);
  let purchaseBtn = <S.PurchaseBtn onClick={() => moveOders()}>구매하기</S.PurchaseBtn>;
  if (state.data.price === null) {
    purchaseBtn = <S.PurchaseBtn>견적서 요청</S.PurchaseBtn>;
  }
  useEffect(() => {
    if ((document.querySelector('#description') as HTMLElement).offsetHeight <= 1836) {
      setDesHeight((document.querySelector('#description') as HTMLElement).offsetHeight);
    } else {
      setDesHeight(1836);
      setDesToggle(true);
    }
  }, []);
  useEffect(() => {
    setItemNavTop((document.querySelector('#item-nav') as HTMLElement).offsetTop);
    window.scrollTo({
      top: itemNavTop,
      behavior: 'smooth',
    });
  }, [itemNavTop]);
  const moveOders = () => {
    navigate('/orders');
  };
  const desEvent = () => {
    setDesHeight((document.querySelector('#description') as HTMLElement).offsetHeight);
    setDesToggle(false);
  };
  const countMinus = (itemCount: number) => {
    if (itemCount <= 1) return;
    itemCount--;
    setCount(itemCount);
  };
  const countPlus = (itemCount: number) => {
    if (itemCount >= 999) return;
    itemCount++;
    setCount(itemCount);
  };
  const countInput = (value: string) => {
    if (value.length > 3) return;
    let onlyNum = value.replace(/[^0-9]/g, '');
    setCount(Number(onlyNum));
  };
  const countInputBlur = (value: string) => {
    if (Number(value) === 0) value = '1';
    setCount(Number(value));
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
                  : '관리자 문의'}
              </S.Price>
            </S.PriceArea>
            <div style={{ display: state.data.price === null ? 'none' : '' }}>
              <S.CountBoxArea>
                <S.CountText>수량</S.CountText>
                <S.CountBox>
                  <S.CountBtn onClick={() => countMinus(count)}>-</S.CountBtn>
                  <S.CountInput
                    type='text'
                    onChange={(e) => countInput(e.target.value)}
                    onBlur={(e) => countInputBlur(e.target.value)}
                    value={count}
                  />
                  <S.CountBtn onClick={() => countPlus(count)}>+</S.CountBtn>
                </S.CountBox>
              </S.CountBoxArea>
              <S.TotalPriceArea>
                <S.TotalPriceTitle>합계</S.TotalPriceTitle>
                <S.TotalPrice>
                  {(state.data.price * count)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </S.TotalPrice>
              </S.TotalPriceArea>
            </div>
            <S.BtnArea>
              <S.BasketBtn style={{ visibility: state.data.price === null ? 'hidden' : 'visible' }}>
                장바구니
              </S.BasketBtn>
              {purchaseBtn}
            </S.BtnArea>
          </S.ItemTextArea>
        </S.DetailArea>
      </S.DetailContainer>
      <S.DesContainer style={{ height: desHeight, marginBottom: desToggle ? '' : 194 }}>
        <S.Description id='description'>
          <div style={{ fontSize: '3rem' }}>{state.data.description}</div>
        </S.Description>
        <S.DesGradation style={{ display: desToggle ? 'inherit' : 'none' }} />
      </S.DesContainer>
      <S.ShowDesBtnContainer style={{ display: desToggle ? 'flex' : 'none' }}>
        <S.ShowDesBtn onClick={() => desEvent()}>
          <span>상세페이지 더보기</span>
          <AiOutlineDown style={{ width: 28, height: 24 }} />
        </S.ShowDesBtn>
      </S.ShowDesBtnContainer>
    </S.Container>
  );
};
