/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import * as S from './style';
import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';

export const MyPageOd = () => {
  const [orderList, setOrderList] = useState<any[]>([]);
  const cookies = new Cookies();
  const token = cookies.get('accessToken');

  // const test = async (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   console.log('test');

  //   try {
  //     await axios
  //       .get('http://safekingmall.com/api/v1/user/order/list?page=0&size=5', {
  //         headers: {
  //           Authorization: token,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data.orders);
  //         setOrderList(res.data.orders);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(orderList);
  // };

  useEffect(() => {
    const getOrderList = async () => {
      try {
        await axios
          .get(
            'http://211.45.175.33:8080/api/v1/user/order/list?page=0&size=5&fromDate=2023-01-24',
            {
              headers: {
                Authorization: token,
              },
            },
          )
          .then((res) => {
            console.log(res);
            console.log(res.data.orders);
            setOrderList(res.data.orders);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getOrderList();
  }, []);

  const list = orderList.map((name) => {
    return (
      <div key={name.id}>
        <Link to={`/mypage-od/${name.id}`}>
          <S.OrderListItem>
            <div>{name.date}</div>
            <div>{name.order_item.name}</div>
            <div>{name.count}</div>
            <div>{name.price}</div>
            <div>{name.status}</div>
            <div>{name.payment.status}</div>
          </S.OrderListItem>
        </Link>
      </div>
    );
  });

  return (
    <>
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
          <button>test</button>
        </div>
        <S.Wrapper>
          <S.Top>주문내역</S.Top>
          <S.Mid>주문 내역</S.Mid>
          <S.BackGrey>
            <div>
              <select>
                <option>배송 준비 중</option>
                <option>배송 중</option>
                <option>배송 완료</option>
              </select>
              <button>오늘</button>
              <button>1주일</button>
              <button>3개월</button>
              <button>6개월</button>
            </div>
          </S.BackGrey>
          <S.Mid>주문 상품 정보</S.Mid>
          <S.OrderListMenu>
            <div>주문일자[번호]</div>
            <div>상품명</div>
            <div>수량</div>
            <div>상품구매금액</div>
            <div>배송상태</div>
            <div>결제상태</div>
          </S.OrderListMenu>
          {list}
          {/* <S.OrderListItem>
            <div>
              2022.11.11
              <br />
              [A1232B33D]
            </div>
            <div>스마트 이동형 CCTV 외 10건</div>
            <div>100</div>
            <div>54,000,000원</div>
            <div>배송중</div>
            <div>완료</div>
          </S.OrderListItem> */}
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
