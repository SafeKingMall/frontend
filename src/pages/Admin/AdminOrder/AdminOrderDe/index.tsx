import React from 'react';
import * as S from './style';
import { Footer } from '../../../../components/common/Footer';
import { Header } from '../../../../components/common/Header';
import { EditMenu } from '../../../../components/Edit/EditMenu';
// import { AdminOrderList } from '../../../components/Edit/AdminOrderList/AdminOrderList';
import db from './../../../../db.json';
import { useNavigate } from 'react-router-dom';

import { useDateFormat } from '../../../../components/common/hooks/useDateFormat';
import { useMoney } from '../../../../components/common/hooks/useMoney';
import { useState } from 'react';

export const AdminOrderDe = () => {
  const data = db.orderdetail;
  const navigate = useNavigate();
  const { registDate } = useDateFormat();
  const { MoneyNumber } = useMoney();

  //   const payStatus = (status: any) => {
  //     // const [acount, setAcount] = useState('');
  //     if (status === 'COMPLETE') {
  //       return '결제완료';
  //     } else if (status === 'CANCEL') {
  //       return '결제취소';
  //     } else {
  //       return '결제취소중';
  //     }
  //   };

  const payList = { COMPLETE: '결제완료', CANCEL: '결제취소', CANCELING: '결제취소중' };
  // 배송대기 / 배송중 / 배송완료 / *배송취소(내용 필요)
  const deliveryList = { COMPLETE: '배송완료', IN_DELIVERY: '배송중' };
  const deliComList = [
    'CJ대한통운',
    '로젠택배',
    '옐로우캡',
    '우체국택배',
    '한진택배',
    '롯데택배',
    '드림택배',
    'KGB택배',
    '대신택배',
    '일양로지스',
    '경동택배',
    '천일택배',
    '합동택배',
  ];

  const payOrderStatus1 = (data: any) =>
    data.map((el: any) => {
      const payKey = Object.entries(payList).filter(([key, value]) => {
        return el.order.status === key;
      });
      return payKey;
    });

  const payValue = payOrderStatus1(data)[0][0][1];

  const deliOrderStatus1 = (data: any) =>
    data.map((el: any) => {
      const deliKey = Object.entries(deliveryList).filter(([key, value]) => {
        return el.order.delivery.status === key;
      });
      return deliKey;
    });

  const deliValue = deliOrderStatus1(data)[0][0][1];

  const deliComOrderStatus1 = (data: any) =>
    data.map((el: any) => {
      const deliComKey = deliComList.filter((key: any) => {
        return el.order.delivery.company === key;
      });
      return deliComKey;
    });

  const deliComValue = deliComOrderStatus1(data)[0][0];

  //결제상태
  const [paySelected, setPaySelected] = useState('');

  const PayhandleSelect = (e: any) => {
    setPaySelected(e.target.value);
  };

  const PaysSelect = () => (
    <S.OrderSelect required onChange={PayhandleSelect} value={paySelected}>
      <S.NoneOption value={payValue}>{payValue}</S.NoneOption>
      {Object.entries(payList).map(([key, value]) => (
        <option value={key} key={key}>
          {value}
        </option>
      ))}
    </S.OrderSelect>
  );

  //배송상태
  const [deliSelected, setDeliSelected] = useState('');

  const DelihandleSelect = (e: any) => {
    setDeliSelected(e.target.value);
  };

  const DeliverySelect = () => (
    <S.OrderSelect onChange={DelihandleSelect} required value={deliSelected}>
      <S.NoneOption value={deliValue}>{deliValue}</S.NoneOption>
      {Object.entries(deliveryList).map(([key, value]) => (
        <option value={key} key={key}>
          {value}
        </option>
      ))}
    </S.OrderSelect>
  );

  //택배회사
  const [deliComiSelected, setDeliComSelected] = useState('');

  const DeliComhandleSelect = (e: any) => {
    setDeliComSelected(e.target.value);
  };

  const DeliComSelect = () => (
    <div>
      <S.OrderSelect onChange={DeliComhandleSelect} required value={deliComiSelected}>
        <S.NoneOption value={deliComValue}>{deliComValue}</S.NoneOption>
        {deliComList.map((key: any) => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </S.OrderSelect>
      <S.OrderInput />
    </div>
  );

  const AdminOrderDetail = () => (
    <div>
      {data.map((el: any) => {
        return (
          <div key={el.order.id}>
            <S.OrderDiv>
              <S.OrderH2>주문정보</S.OrderH2>
            </S.OrderDiv>
            <div>
              <S.OrderDiv2>
                <S.AdminWrapper>
                  <h3>주문번호 | </h3>
                  <div>{el.order.id}</div>
                </S.AdminWrapper>
                <S.AdminWrapper>
                  <h3>주문일시 | </h3>
                  <div> {registDate(el.order.date)}</div>
                  {/* <div>{payStatus}</div> */}
                </S.AdminWrapper>
              </S.OrderDiv2>
              <S.Table2>
                <tbody>
                  <tr>
                    <td colSpan={2}>상품명</td>
                    <td>판매가</td>
                    <td>수량</td>
                    <td>주문금액</td>
                    <td>결제상태</td>
                    <td>배송상태</td>
                    <td>배송료</td>
                    <td>송장번호</td>
                  </tr>
                  {el.order.orderItems.map((al: any, index: any) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src='https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785'
                            width='70'
                            height='70'
                            alt={al.name}
                            style={{ border: '1px solid #DDDDDD' }}
                          />
                        </td>

                        <td>{al.name}</td>
                        <td>{MoneyNumber(al.price)}</td>
                        <td>{al.count}</td>
                        <td>{MoneyNumber(al.price * al.count)}</td>
                        <td>
                          <PaysSelect />
                        </td>
                        <td>
                          <DeliverySelect />
                        </td>

                        <td>{el.order.delivery.price}</td>
                        <td>
                          <DeliComSelect />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </S.Table2>
            </div>
          </div>
        );
      })}
    </div>
  );

  //주문정보
  const AdminOrderDetail2 = () => (
    <div>
      <S.OrderDiv>
        <S.OrderH2>주문정보</S.OrderH2>
      </S.OrderDiv>
      <S.Table>
        {data.map((el: any, index: any) => {
          return (
            <tbody key={index}>
              <tr>
                <th>수령인</th>
                <td>{el.order.delivery.receiver}</td>
                <th>연락처</th>
                <td>{el.order.delivery.phone_number}</td>
              </tr>
              <tr>
                <th>주소</th>
                <td colSpan={3}>{el.order.delivery.address}</td>
              </tr>
              <tr>
                <th>배송요청사항</th>
                <td colSpan={3}>{el.order.delivery.memo}</td>
              </tr>
              <tr>
                <th>주문요청사항</th>
                <td colSpan={3}>{el.order.memo}</td>
              </tr>
            </tbody>
          );
        })}
      </S.Table>
    </div>
  );

  //결제정보
  const AdminOrderPayDetail = () => (
    <div>
      <S.OrderDiv>
        <S.OrderH2>결제 정보</S.OrderH2>
      </S.OrderDiv>
      <S.Table>
        {data.map((el: any, index: any) => {
          return (
            <tbody key={index}>
              <tr>
                <th>결제방식</th>
                <td>{el.order.payment.means}</td>
                <th>결제금액</th>
                <td>{el.order.payment.price}</td>
              </tr>
              <tr>
                <th>입금자명</th>
                <td>{el.order.payment.name}</td>
                <th>카드사</th>
                <td>{el.order.payment.company}</td>
              </tr>
              <tr>
                <th>현금영수증방식</th>
                <td>{el.order.payment.memo}</td>
                {/* 현금영수증방시데이터는 따로 안들어오나? */}
                <th>사업자번호</th>
                <td>{el.order.payment.business_number}</td>
              </tr>
            </tbody>
          );
        })}
      </S.Table>
    </div>
  );

  //관리자 메모

  const AdminMemo = () => (
    <div>
      <S.OrderDiv>
        <S.OrderH2>관리자 메모</S.OrderH2>
      </S.OrderDiv>
      <S.AdminTextarea />
    </div>
  );

  return (
    <div>
      <Header />
      <S.Container>
        <EditMenu />
        <S.Wrapper>
          <AdminOrderDetail />
          <AdminOrderDetail2 />
          <AdminOrderPayDetail />
          <AdminMemo />
          <S.QnABox>
            <S.QnAButton onClick={() => navigate('/admin-order')}>취소</S.QnAButton>
            <S.QnAButton2 onClick={() => navigate('/admin-order')}>저장하기</S.QnAButton2>
          </S.QnABox>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </div>
  );
};
