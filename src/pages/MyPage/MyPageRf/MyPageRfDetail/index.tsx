/* eslint-disable */
import React from 'react';
import * as S from './style';
import { MyPageMenu } from '../../../../components/user/MyPageMenu';
import { Header } from '../../../../components/common/Header';
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
import { useMediaQuery } from 'react-responsive';

const swal = withReactContent(Swal);

export const MyPageRfDetail = () => {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:720px)' });
    const cookies = new Cookies();
    const jwt = cookies.get('accessToken');
    const navigate = useNavigate();
    const { MoneyNumber, MoneyNumber2 } = useMoney();

    const { state } = useLocation();
    const itemId = state.data;

    const [data1, setData1] = useState([] as any);
    const [payMentStatus, setPayMentStatus] = useState('' as any);
    const [deliveryStatus, setDeliveryStatus] = useState('' as any);
    //주문정보(배달정보)
    const [deliInfor, setDeliInfor] = useState([] as any);
    //주문아이템정보
    const [itemInfor, setItemInfor] = useState([] as any);
    //결제정보
    const [payInfor, setPayInfor] = useState([] as any);
    //택배회사(selected 부분 )
    const [deliComStatus, setDeliComStatus] = useState('');
    //송장번호
    const [deliNumber, setDeliNumber] = useState('' as string);
    //주문일시
    const [orderDay, setOrderDay] = useState('');
    //memberInfo
    const [memberInfo, setMemberInfo] = useState('' as any)


    useEffect(() => {
        const getData = async () => {
            try {
                await axios({
                    method: 'get',
                    url: `${process.env.REACT_APP_API_URL}/user/payment/cancel/detail/${itemId}`,
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
                    setDeliNumber(res.data.order.delivery.invoice_number);
                    setDeliComStatus(res.data.order.delivery.company);
                    setOrderDay(res.data.order.date);
                    setMemberInfo(res.data.member)
                });
            } catch (err: any) {
                navigate('/sign-in');
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
                cookies.remove('loginUser');

            }

        };
        getData();
    }, [itemId, jwt]);

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

    //취소정보
    const AdminOrderDetail2 = () => (
        <div>

            <S.Table>
                <tbody>
                    {isDesktopOrMobile !== true ? (<tr>
                        <th>취소 접수일자</th>

                        <td>{payInfor.canceled_request_date || ''}</td>
                        <th>취소완료일</th>
                        <td>{payInfor.canceled_date || ''}</td>
                    </tr>) : (<>
                        <tr>
                            <th>취소 접수일자</th>
                            <td>{payInfor.canceled_request_date || ''}</td>
                        </tr>
                        <tr>
                            <th>취소완료일</th>
                            <td>{payInfor.canceled_date || ''}</td>
                        </tr>
                    </>)}
                    {isDesktopOrMobile !== true ? (<tr>
                        <th>취소 요청자</th>
                        <td>
                            {payInfor.buyer_name || ''}
                        </td>
                        <th>연락처</th>
                        <td>{payInfor.buyer_tel || ''}</td>
                    </tr>) : (<>
                        <tr>
                            <th>취소 요청자</th>
                            <td>
                                {payInfor.buyer_name || ''}
                            </td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>{payInfor.buyer_tel || ''}</td>
                        </tr>
                    </>)}

                    <tr>
                        <th>취소사유</th>
                        <td colSpan={3}>{payInfor.cancel_reason || ''}</td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td colSpan={3}>{payInfor.buyer_addr || ''}</td>
                    </tr>
                </tbody>
            </S.Table>
        </div>
    );

    //환불정보
    const AdminOrderPayDetail = () => (
        <div>

            <S.Table>
                <tbody>
                    {isDesktopOrMobile !== true ? (<tr>
                        <th>환불금액</th>
                        <td>{payInfor.cancel_amount === 0 ? '0원' : MoneyNumber(payInfor.cancel_amount) || ''}</td>
                        <th>환불수단</th>
                        <td>{payInfor.pay_method}</td>
                    </tr>) : (<>
                        <tr>
                            <th>환불금액</th>
                            <td>{payInfor.cancel_amount === 0 ? '0원' : MoneyNumber(payInfor.cancel_amount) || ''}</td>
                        </tr>
                        <tr>
                            <th>환불수단</th>
                            <td>{payInfor.pay_method}</td>
                        </tr>
                    </>)}
                    {isDesktopOrMobile !== true ? (<tr>
                        <th>배송비</th>
                        <td>{deliInfor.cost === 0 ? '0원' : MoneyNumber(deliInfor.cost)}</td>
                        <th>카드사</th>
                        <td>{payInfor.card_company || ''}</td>
                    </tr>) : (<>
                        <tr>
                            <th>배송비</th>
                            <td>{deliInfor.cost === 0 ? '0원' : MoneyNumber(deliInfor.cost)}</td>
                        </tr>
                        <tr>
                            <th>카드사</th>
                            <td>{payInfor.card_company || ''}</td>
                        </tr>

                    </>)}
                    {isDesktopOrMobile !== true ? (<tr>
                        <th>환불비</th>
                        <td>0원</td>
                        <th>환불 완료금액</th>
                        <td>{payInfor.cancel_amount === 0 ? '0원' : MoneyNumber(payInfor.cancel_amount) || ''}</td>
                    </tr>) : (<>
                        <tr>
                            <th>환불비</th>
                            <td>0원</td>
                        </tr>
                        <tr>
                            <th>환불 완료금액</th>
                            <td>{payInfor.cancel_amount === 0 ? '0원' : MoneyNumber(payInfor.cancel_amount) || ''}</td>
                        </tr>

                    </>)}

                </tbody>
            </S.Table>
        </div>
    );


    const refreshRoute = () => {
        if (cookies.get('refreshToken')) {
            navigate('/mypage-rf')
        } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');

        }
    };

    return (
        <>
            <Header />
            <S.Container>
                <div style={{ marginTop: 190 }}>
                    <MyPageMenu />
                </div>
                <S.Wrapper>
                    <S.Top>환불 상세내역</S.Top>
                    <S.Mid>환불 상세정보</S.Mid>
                    <S.Section1Wrap>
                        <S.Section1Top>

                            <div>
                                <h4> 주문 번호 |&nbsp;</h4>

                                <span>{data1.merchant_uid || ''}</span>
                            </div>
                            <div>
                                <h4> 주문 일시 |&nbsp;</h4>
                                <span>{orderDay || ''}</span>
                            </div>
                        </S.Section1Top>
                        {isDesktopOrMobile !== true ? (
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
                                                <td>{MoneyNumber2(al.count) || ''}</td>
                                                <td>{MoneyNumber(al.order_price) || ''}</td>
                                                <td>{payValue(payMentStatus)}</td>
                                                <td>{deliValue(deliveryStatus)}</td>

                                                <td>{MoneyNumber(deliInfor.cost)}</td>
                                                <td>
                                                    <div>{deliComStatus || ''}</div>
                                                    <div>{deliNumber}</div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </S.Table2>) : (<S.Mobail>
                                {itemInfor.map((al: any, index: any) => {
                                    return (
                                        <ul>
                                            <div >
                                                <p>주문상품</p>

                                            </div>
                                            <div>
                                                <img
                                                    src={al === '' ? '' : process.env.REACT_APP_BASE_URL + al.thumbnail}
                                                    width='70'
                                                    height='70'
                                                    alt={al.name}
                                                    style={{ border: '1px solid #DDDDDD' }}
                                                />
                                                <ul>
                                                    <p >{al.name}</p>
                                                    <p >{MoneyNumber(al.price * al.count) || ''}</p>
                                                    <p >수량 : {al.count || ''}</p>
                                                </ul>
                                            </div>
                                            <div >
                                                {deliValue(deliveryStatus)}
                                            </div>
                                            <div>
                                                <p>배송비</p>
                                                <p>{MoneyNumber(deliInfor.cost)}</p></div>
                                            <div>
                                                <p>송장번호</p>
                                                <p>{deliComStatus || ''}  &nbsp;{deliNumber}</p></div>
                                        </ul>
                                    )
                                })}
                            </S.Mobail>)}
                    </S.Section1Wrap>
                    <S.OrderDiv>
                        <S.OrderH2>취소 정보</S.OrderH2>
                    </S.OrderDiv>
                    <S.Section2Wrapper>
                        <AdminOrderDetail2 />
                    </S.Section2Wrapper>
                    <S.OrderDiv>
                        <S.OrderH2>환불 정보</S.OrderH2>
                    </S.OrderDiv>
                    <S.Section2Wrapper>
                        <AdminOrderPayDetail />
                    </S.Section2Wrapper>

                    <S.QnABox>
                        <S.QnAButton onClick={() => refreshRoute()}>목록</S.QnAButton>
                    </S.QnABox>
                </S.Wrapper>
            </S.Container>
        </>
    );
};
