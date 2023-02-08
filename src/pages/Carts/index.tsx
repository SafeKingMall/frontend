import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { CartsList } from '../../components/shopping/CartsList';
import { TotalPrice } from '../../components/shopping/TotalPrice';
import { NoCartsItem } from '../../components/shopping/NoCartsItem';
import axios from 'axios';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const Carts = () => {
  const stepTitle = '장바구니';
  const navigate = useNavigate();
  const [resultList, setResultList] = useState<any>('');
  const [data, setData] = useState<any>('');
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  //선택상품구매
  const selectPurchase = () => {
    if (resultList.length === 0) {
      swal.fire({
        icon: 'info',
        text: '선택한 상품이 없습니다. 상품을 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
          icon: 'question',
          text: '선택하신 상품을 구매하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate('/orders', {
              state: {
                data: resultList,
              },
            });
          }
        });
    }
  };

  //전체상품구매
  const allPurchase = async () => {
    let length;
    let count;
    let itemPrice;
    const deliveryPay = 2500;
    let totalPrice;
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/user/cart?page=0&size=20`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      length = res.data.content.length;
      count = res.data.content.reduce((pre: any, cur: any) => {
        return (pre += cur.itemQuantity);
      }, 0);
      itemPrice = res.data.content.reduce((pre: any, cur: any) => {
        return (pre += cur.itemPrice * cur.itemQuantity);
      }, 0);
      totalPrice = itemPrice + deliveryPay;
      swal
        .fire({
          icon: 'question',
          title: `상품 종류: ${length}개
          주문 상품 수: ${count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}개
          배송비: ${deliveryPay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
          최종 결제 금액: ${totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
          `,
          text: '전체 상품을 구매하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate('/orders', {
              state: {
                data: res.data.content,
              },
            });
          }
        });
    });
  };

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/user/cart?page=0&size=20`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setData(res.data.content);
        setResultList(res.data.content);
      });
    };
    getData();
  }, [jwt]);
  const itemInCart =
    data.length === 0 ? (
      <S.Container>
        <Header />
        <NoCartsItem />
        {/* <Footer /> */}
      </S.Container>
    ) : (
      <S.Container>
        <Header />
        <OrdersStep stepTitle={stepTitle} />
        <CartsList data={data} setData={setData} setResultList={setResultList} />
        <TotalPrice resultList={resultList} />
        <S.BtnContainer>
          <S.WhiteBtn onClick={() => navigate('/')}>쇼핑하러 가기</S.WhiteBtn>
          <S.WhiteBtn onClick={() => selectPurchase()}>선택상품구매</S.WhiteBtn>
          <S.GreenBtn onClick={() => allPurchase()}>전체상품구매</S.GreenBtn>
        </S.BtnContainer>
        <Footer />
      </S.Container>
    );
  return itemInCart;
};
