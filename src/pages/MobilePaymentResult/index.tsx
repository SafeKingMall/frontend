import React, { useEffect } from 'react';
import * as S from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '../../components/common/Header';
// import axios from 'axios';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { MetaTag } from '../../components/common/MetaTag';

export const MobilePaymentResult = () => {
  const [serchParams] = useSearchParams();
  const success = serchParams.get('imp_success') === 'true' ? '주문완료' : '결제실패';
  const navigate = useNavigate();
  const cookies = new Cookies();
  const createDate = new Date();
  const year = createDate.getFullYear();
  const month = createDate.getMonth() + 1;
  const date = createDate.getDate();
  const dt = `${year}.${month >= 10 ? month : '0' + month}.${date >= 10 ? date : '0' + date}`;

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

  const resultText = () => {
    if (success === '주문완료') {
      return (
        <>
          <S.Text>주문이 완료되었습니다.</S.Text>
          <S.Text>{dt} 에 주문하신 상품의</S.Text>
          <S.Text>
            주문번호는 <S.GreenText>{serchParams.get('merchant_uid')}</S.GreenText> 입니다.
          </S.Text>
        </>
      );
    } else {
      return (
        <>
          <S.Text>{serchParams.get('error_msg')}</S.Text>
        </>
      );
    }
  };
  const resultBtn = () => {
    if (success === '주문완료') {
      return (
        <>
          <S.WhiteBtn onClick={() => navigate('/')}>쇼핑 계속하기</S.WhiteBtn>
          <S.GreenBtn onClick={() => movePaymentInfo()}>결제 내역보기</S.GreenBtn>
        </>
      );
    } else {
      return (
        <S.ContentContainer>
          <S.GreenBtn onClick={() => navigate('/')}>확인</S.GreenBtn>
        </S.ContentContainer>
      );
    }
  };

  useEffect(() => {
    const verification = async () => {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/user/payment`,
        headers: {
          Authorization: cookies.get('accessToken'),
        },
        data: {
          success: true,
          imp_uid: serchParams.get('imp_uid'),
          merchant_uid: serchParams.get('merchant_uid'),
        },
      });
    };
    const cartDel = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/user/order/orderItemIds/${serchParams.get(
          'merchant_uid',
        )}`,
        headers: {
          Authorization: cookies.get('accessToken'),
        },
      }).then(async (res) => {
        let items = res.data.order_items;
        items = items.map((el: any) => 'itemId=' + el.id + '&');
        let itemsString = items.join('');
        await axios({
          method: 'delete',
          url: `${process.env.REACT_APP_API_URL}/user/cartItem?${itemsString}`,
          headers: {
            Authorization: cookies.get('accessToken'),
          },
        });
      });
    };
    if (success === '주문완료') {
      verification();
      cartDel();
    }
    // eslint-disable-next-line
  }, [success]);

  return (
    <>
      <MetaTag
        title={`결제정보 | 안전왕`}
        description={`안전왕, 결제정보`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/mobile-payment-result'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 결제정보`}
      />
      <S.Container>
        <Header />
        <S.ContentContainer>
          <S.TitleWrap>
            <S.Title>{success}</S.Title>
          </S.TitleWrap>
          <S.Group>
            <S.OrderInfoWrap>
              <S.IconArea style={{ display: success === '결제실패' ? 'none' : '' }}>
                <S.IconWrap>
                  <S.Icon />
                </S.IconWrap>
                <S.IconUnderLine />
              </S.IconArea>
              <S.TextArea>{resultText()}</S.TextArea>
            </S.OrderInfoWrap>
            <S.BtnArea>{resultBtn()}</S.BtnArea>
          </S.Group>
        </S.ContentContainer>
      </S.Container>
    </>
  );
};
