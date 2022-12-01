import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { CartsList } from '../../components/shopping/CartsList';
import { TotalPrice } from '../../components/shopping/TotalPrice';
import { NoCartsItem } from '../../components/shopping/NoCartsItem';

//테스트 데이터
const data: any = [
  {
    itemId: 1,
    name: '안전화1',
    price: 90000,
    categoryName: '중대사고예방',
    description: '상품상세설명 블라블라',
    count: 1,
  },
  {
    itemId: 3,
    name: '코팅장갑',
    price: 1000,
    categoryName: '화재사고예방',
    description: '상품상세설명 블라블라',
    count: 2,
  },
  {
    itemId: 5,
    name: '축압식 분말 소화기 (1.5kg)',
    price: 13900,
    categoryName: '누출사고예방',
    description: '상품상세설명 블라블라',
    count: 1,
  },
];

// const data: any = [];

export const Carts = () => {
  const stepTitle = '장바구니';
  const navigate = useNavigate();
  const [resultList, setResultList] = useState(data);
  const selectPurchase = () => {
    if (resultList.length === 0) {
      alert('선택상품이 없습니다.');
    } else {
      navigate('/Orders');
    }
  };
  const itemInCart =
    data.length === 0 ? (
      <S.Container>
        <NoCartsItem />
      </S.Container>
    ) : (
      <S.Container>
        <OrdersStep stepTitle={stepTitle} />
        <CartsList data={data} setResultList={setResultList} />
        <TotalPrice resultList={resultList} />
        <S.BtnContainer>
          <S.WhiteBtn onClick={() => navigate('/')}>쇼핑하러 가기</S.WhiteBtn>
          <S.WhiteBtn onClick={() => selectPurchase()}>선택상품구매</S.WhiteBtn>
          <S.GreenBtn onClick={() => navigate('/Orders')}>전체상품구매</S.GreenBtn>
        </S.BtnContainer>
      </S.Container>
    );
  return itemInCart;
};
