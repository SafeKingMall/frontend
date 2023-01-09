import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { CartsList } from '../../components/shopping/CartsList';
import { TotalPrice } from '../../components/shopping/TotalPrice';
import { NoCartsItem } from '../../components/shopping/NoCartsItem';
import axios from 'axios';

export const Carts = () => {
  const stepTitle = '장바구니';
  const navigate = useNavigate();
  const [resultList, setResultList] = useState<any>('');
  const [data, setData] = useState<any>('');
  const selectPurchase = () => {
    if (resultList.length === 0) {
      alert('선택상품이 없습니다.');
    } else {
      navigate('/Orders');
    }
  };
  useEffect(() => {
    const getData = async () => {
      let jwt;
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/login`,
        data: {
          username: 'testUser1',
          password: 'testUser1*',
        },
      }).then((res) => {
        jwt = res.headers.authorization;
      });
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_BASE_URL}/user/cart`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setData(res.data.content);
        setResultList(res.data.content);
      });
    };
    getData();
  }, []);
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
