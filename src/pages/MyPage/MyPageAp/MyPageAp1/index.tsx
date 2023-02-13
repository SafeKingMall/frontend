/* eslint-disable */
import React, { useState } from 'react';
import * as S from './style';
import { Header } from '../../../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { useMoney } from '../../../../components/common/hooks/useMoney';

export const MyPageAp1 = () => {

    const cookies = new Cookies();
    const jwt = cookies.get('accessToken');

    const { state } = useLocation();
    const orderId = state.data;

    const navigate = useNavigate();
    const { MoneyNumber } = useMoney();



    //결제정보
    const [payInfor, setPayInfor] = useState([] as any);
    //택배정보
    const [deliInfor, setDeliInfor] = useState([] as any);
    //주문아이템정보
    const [orderItem, setOrderItem] = useState([] as any);
    //주문정보
    const [order, setOrder] = useState('' as any);

    const [refundItem, setRefundItem] = useState('' as string)

    //mypage-ap2에 값 보내주기
    const moveMypageAp2 = () => {
        navigate('/mypage-ap2', {
            state: {
                orderId: state.data,
                merchant_uid: order.merchant_uid,
                imp_uid: payInfor.imp_uid,
                refundItem: refundItem
            },
        });
    }


    useEffect(() => {
        const getData = async () => {
            await axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/user/payment/cancel/ask/${orderId}`,
                headers: {
                    Authorization: jwt,
                },
            }).then((res) => {
                setOrder(res.data.order);
                setOrderItem(res.data.order.order_item);
                setPayInfor(res.data.payment);
                setDeliInfor(res.data.delivery);
                setRefundItem(`${res.data.order.date.slice(0, 11)}[${res.data.order.merchant_uid}]`)
            });

        };
        getData();
    }, [jwt]);

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

    return (
        <S.Container>
            <Header />
            <S.ContentContainer>
                <S.Wrapper>
                    <S.RefundH1>환불신청</S.RefundH1>
                    <S.Top></S.Top>
                    <S.H2>신청 목록</S.H2>
                    <S.InputContainer>

                        <S.Table2>
                            <tbody>
                                <tr>
                                    <td >주문일자[번호]</td>
                                    <td colSpan={2}>상품명</td>
                                    <td>판매가</td>
                                    <td>수량</td>
                                    <td>결제상태</td>
                                    <td>배송상태</td>
                                </tr>
                                {orderItem.map((al: any, index: any) => {
                                    return (
                                        <tr key={index}>
                                            <td>{order.date.slice(0, 11)}[{order.merchant_uid}]</td>
                                            <td>
                                                <img
                                                    src={al === '' ? '' : process.env.REACT_APP_BASE_URL + al.thumbnail}
                                                    width='70'
                                                    height='70'
                                                    alt={al.name}
                                                    style={{ border: '1px solid #DDDDDD' }}
                                                />
                                            </td>
                                            <td>
                                                {al.name}

                                            </td>
                                            <td>{MoneyNumber(al.price) || ''}</td>
                                            <td>{al.count || ''}</td>
                                            <td>{payValue(payInfor.status) || ''}</td>
                                            <td>{deliValue(deliInfor.status) || ''}</td>

                                        </tr>
                                    );
                                })}
                            </tbody>
                        </S.Table2>
                        <h3>결제 정보</h3>

                        <S.Table>
                            <tbody>
                                <tr>
                                    <th>결제방식</th>
                                    <td>{payInfor.pay_method}</td>
                                    <th>결제금액</th>
                                    <td>{payInfor.price}</td>
                                </tr>
                                <tr>
                                    <th>입금자명</th>
                                    <td>{payInfor.buyer_name}</td>
                                    <th>카드사</th>
                                    <td>{payInfor.card_company}</td>
                                </tr>
                                <tr>
                                    <th>현금영수증방식</th>
                                    <td>{payInfor.cash_receipt_method}</td>
                                    <th>사업자 번호</th>
                                    <td>{payInfor.business_license_number}</td>
                                </tr>
                            </tbody>
                        </S.Table>
                    </S.InputContainer>
                    <S.BtnWrapper>
                        <button onClick={() => navigate('/mypage-od')}>목록</button>
                        <button onClick={moveMypageAp2}>
                            다음 단계
                        </button>
                    </S.BtnWrapper>
                </S.Wrapper>
            </S.ContentContainer>
        </S.Container>
    );
}