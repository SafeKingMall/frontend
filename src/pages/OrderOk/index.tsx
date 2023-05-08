import React, { useEffect } from 'react';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { Header } from '../../components/common/Header';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { MetaTag } from '../../components/common/MetaTag';

export const OrderOk = () => {
  const { state } = useLocation();
  const stepTitle = '주문완료';
  const navigate = useNavigate();
  const cookies = new Cookies();

  const movePaymentInfo = () => {
    if (!cookies.get('refreshToken')) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      navigate('/sign-in');
    } else {
      navigate('/mypage-od');
    }
  };

  useEffect(() => {
    const deleteCartItem = async () => {
      let items = state.paymentDataId.map((itemId: any) => 'itemId=' + itemId + '&');
      let itemsString = items.join('');
      await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/user/cartItem?${itemsString}`,
        headers: {
          Authorization: cookies.get('accessToken'),
        },
      });
    };
    deleteCartItem();
    // eslint-disable-next-line
  }, [state]);

  return (
    <>
      <MetaTag
        title={`결제정보 | 안전왕`}
        description={`안전왕, 결제정보`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/orderok'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 결제정보`}
      />
      <S.Container>
        <Header />
        <S.ContentContainer>
          <OrdersStep stepTitle={stepTitle} />
          <S.Group>
            <S.OrderInfoWrap>
              <S.IconArea>
                <S.IconWrap>
                  <S.Icon />
                </S.IconWrap>
                <S.IconUnderLine />
              </S.IconArea>
              <S.TextArea>
                <S.Text>주문이 완료되었습니다.</S.Text>
                <S.Text>{state.dt} 에 주문하신 상품의</S.Text>
                <S.Text>
                  주문번호는 <S.GreenText>{state.merchant_uid}</S.GreenText> 입니다.
                </S.Text>
              </S.TextArea>
            </S.OrderInfoWrap>
            <S.BtnArea>
              <S.WhiteBtn onClick={() => navigate('/')}>쇼핑 계속하기</S.WhiteBtn>
              <S.GreenBtn onClick={() => movePaymentInfo()}>결제 내역보기</S.GreenBtn>
            </S.BtnArea>
          </S.Group>
        </S.ContentContainer>
      </S.Container>
    </>
  );
};
