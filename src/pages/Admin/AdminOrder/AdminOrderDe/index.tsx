import React from 'react';
import * as S from './style';
import { Header } from '../../../../components/common/Header';
import { EditMenu } from '../../../../components/Edit/EditMenu';
import { useNavigate } from 'react-router-dom';

import { useMoney } from '../../../../components/common/hooks/useMoney';
import { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';
import { MetaTag } from '../../../../components/common/MetaTag';

const swal = withReactContent(Swal);

export const AdminOrderDe = () => {
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  const navigate = useNavigate();
  const { MoneyNumber } = useMoney();

  const { state } = useLocation();
  const itemId = state.data;

  // const payList = { PAID: '결제완료', CANCEL: '결제취소', READY: '결제대기', FAILED: '결제실패' };
  const deliveryList = {
    COMPLETE: '배송완료',
    IN_DELIVERY: '배송중',
    PREPARATION: '배송준비',
    CANCEL: '배송취소',
  };
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

  const [data1, setData1] = useState([] as any);
  const [payMentStatus, setPayMentStatus] = useState([] as any);
  const [deliveryStatus, setDeliveryStatus] = useState([] as any);
  //주문정보(배달정보)
  const [deliInfor, setDeliInfor] = useState([] as any);
  //주문아이템정보
  const [itemInfor, setItemInfor] = useState([] as any);
  //결제정보
  const [payInfor, setPayInfor] = useState([] as any);
  //관리자 메모
  const [adminMemo, setAdminMemo] = useState('');
  //택배회사(selected 부분 )
  const [deliComStatus, setDeliComStatus] = useState('');
  //송장번호
  const [deliNumber, setDeliNumber] = useState('' as string);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/admin/order/detail/${itemId}`,
          headers: {
            Authorization: jwt,
          },
        }).then((res) => {
          setData1(res.data.order);
          setPayMentStatus(res.data.order.payment.status);
          setDeliveryStatus(res.data.order.delivery.status);
          setDeliInfor(res.data.order.delivery);
          setItemInfor(res.data.order.order_items);
          setPayInfor(res.data.order.payment);
          setAdminMemo(res.data.order.admin_memo);
          setDeliNumber(res.data.order.delivery.invoice_number);
          setDeliComStatus(res.data.order.delivery.company);
        });
      } catch (err: any) {
        navigate('/sign-in');
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        cookies.remove('loginUser');
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, jwt, navigate]);

  const payValue = (data: any) => {
    if (data === 'PAID') {
      return '결제완료';
    } else if (data === 'READY') {
      return '결제대기';
    } else if (data === 'CANCEL') {
      return '결제취소';
    } else {
      return '결제실패';
    }
  };

  const deliValue = (data: any) => {
    if (data === 'COMPLETE') {
      return '배송완료';
    } else if (data === 'IN_DELIVERY') {
      return '배송 중';
    } else if (data === 'PREPARATION') {
      return '배송준비';
    } else {
      return '배송취소';
    }
  };

  // //택배사 데이터 받아와서 작성해야함
  // const deliComOrderStatus1 = (data: any) =>
  //   data.map((el: any) => {
  //     const deliComKey = deliComList.filter((key: any) => {
  //       return el.order.delivery.company === key;
  //     });
  //     return deliComKey;
  //   });

  // const deliComValue = deliComOrderStatus1(data)[0][0];

  //결제
  // const PayhandleSelect = (e: any) => {
  //   setPayMentStatus(e.target.value);
  // };

  // const PaysSelect = () => (
  //   <S.OrderSelect required onChange={PayhandleSelect} value={payMentStatus}>
  //     <S.NoneOption value={payMentStatus || ''}>{payValue(payMentStatus)}</S.NoneOption>
  //     {Object.entries(payList).map(([key, value]) => (
  //       <option value={key} key={key}>
  //         {value}
  //       </option>
  //     ))}
  //   </S.OrderSelect>
  // );

  //배달

  const DelihandleSelect = (e: any) => {
    setDeliveryStatus(e.target.value);
  };

  const DeliverySelect = () => (
    <S.OrderSelect onChange={DelihandleSelect} required value={deliveryStatus || ''}>
      <S.NoneOption value={deliveryStatus || ''}>{deliValue(deliveryStatus)}</S.NoneOption>
      {Object.entries(deliveryList).map(([key, value]) => (
        <option value={key} key={key}>
          {value}
        </option>
      ))}
    </S.OrderSelect>
  );

  //택배회사
  const DeliComhandleSelect = (e: any) => {
    setDeliComStatus(e.target.value);
  };

  //주문정보
  const AdminOrderDetail2 = () => (
    <div>
      <S.OrderDiv>
        <S.OrderH2>배송정보</S.OrderH2>
      </S.OrderDiv>
      <S.Table>
        <tbody>
          <tr>
            <th>수령인</th>
            <td>{deliInfor.receiver || ''}</td>
            <th>연락처</th>
            <td>{deliInfor.phone_number || ''}</td>
          </tr>
          <tr>
            <th>주소</th>
            <td colSpan={3}>{deliInfor.address || ''}</td>
          </tr>
          <tr>
            <th>배송요청사항</th>
            <td colSpan={3}>{deliInfor.memo || ''}</td>
          </tr>
          <tr>
            <th>주문요청사항</th>
            <td colSpan={3}>{data1.memo || ''}</td>
          </tr>
        </tbody>
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
        <tbody>
          <tr>
            <th>결제방식</th>
            <td>{payInfor.means || ''}</td>
            <th>결제금액</th>
            <td>{MoneyNumber(payInfor.price)}</td>
          </tr>
          <tr>
            <th>입금자명</th>
            <td>{payInfor.buyer_name}</td>
            <th>카드사</th>
            <td>{payInfor.company || ''}</td>
          </tr>
          <tr>
            <th>현금영수증방식</th>
            <td>{/* {el.memo} */}</td>
            <th>사업자번호</th>
            <td>{payInfor.business_number || ''}</td>
          </tr>
        </tbody>
      </S.Table>
    </div>
  );

  // 주문관리 상세 수정
  const putItemAlert = (itemId: number) => {
    swal
      .fire({
        heightAuto: false,
        icon: 'question',
        text: '수정하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (cookies.get('refreshToken')) {
            modifyApi(itemId);
            swal.fire({
              heightAuto: false,
              icon: 'success',
              text: '수정되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');
          }
        }
      });
  };

  const modifyApi = async (itemId: any) => {
    await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}/admin/order/detail/${itemId} `,
      headers: {
        Authorization: jwt,
      },
      data: {
        order: {
          admin_memo: adminMemo,
          delivery: {
            status: deliveryStatus,
            invoice_number: deliNumber,
            cost: deliInfor.cost,
            company: deliComStatus,
          },
          payment: {
            status: payMentStatus,
          },
        },
      },
    }).then((res) => {
      navigate('/admin-order-de', {
        state: {
          data: itemId,
        },
      });
    });
  };

  return (
    <>
      <MetaTag
        title={`주문관리상세 | 안전왕`}
        description={`안전왕, 주문관리상세`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/admin-order-de'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 주문관리상세`}
      />
      <div>
        <Header />
        <S.Container>
          <EditMenu />
          <S.Wrapper>
            <div key={data1.id}>
              <S.OrderDiv>
                <S.OrderH2>주문정보</S.OrderH2>
              </S.OrderDiv>
              <div>
                <S.OrderDiv2>
                  <S.AdminWrapper>
                    <h3>주문번호 | </h3>
                    <div>{data1.merchant_uid || ''}</div>
                  </S.AdminWrapper>
                  <S.AdminWrapper>
                    <h3>주문일시 | </h3>
                    <div> {data1.date || ''}</div>
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
                    {itemInfor.map((al: any, index: any) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img
                              src={al === '' ? '' : process.env.REACT_APP_BASE_URL + al.thumbnail}
                              width='70'
                              height='70'
                              alt={al.name}
                              style={{ border: '1px solid #DDDDDD' }}
                            />
                          </td>

                          <td>{al.name}</td>
                          <td>{MoneyNumber(al.price) || ''}</td>
                          <td>{al.count || ''}</td>
                          <td>{MoneyNumber(al.price * al.count) || ''}</td>
                          <td>{payValue(payMentStatus)}</td>
                          <td>
                            <DeliverySelect />
                          </td>

                          <td>{MoneyNumber(deliInfor.cost)}</td>
                          <td>
                            <S.OrderSelect
                              onChange={DeliComhandleSelect}
                              required
                              value={deliComStatus}
                            >
                              {deliComList.map((key: any) => (
                                <option value={key || ''} key={key}>
                                  {key || ''}
                                </option>
                              ))}
                            </S.OrderSelect>
                            <S.OrderInput
                              value={deliNumber || ''}
                              onChange={(e: any) => {
                                setDeliNumber(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </S.Table2>
              </div>
            </div>
            <AdminOrderDetail2 />
            <AdminOrderPayDetail />
            <S.OrderDiv>
              <S.OrderH2>관리자 메모</S.OrderH2>
            </S.OrderDiv>
            <S.AdminTextarea
              value={adminMemo || ''}
              onChange={(e: any) => {
                setAdminMemo(e.target.value);
              }}
            />
            <S.QnABox>
              <S.QnAButton onClick={() => navigate('/admin-order')}>취소</S.QnAButton>
              <S.QnAButton2 onClick={() => putItemAlert(itemId)}>저장하기</S.QnAButton2>
            </S.QnABox>
          </S.Wrapper>
        </S.Container>
      </div>
    </>
  );
};
