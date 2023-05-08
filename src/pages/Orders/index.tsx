import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { OrdersList } from '../../components/shopping/OrdersList';
import { AddressInfo } from '../../components/shopping/AddressInfo';
import { PaymentInfo } from '../../components/shopping/PaymentInfo';
import { TotalPrice } from '../../components/shopping/TotalPrice';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import { Cookies, useCookies } from 'react-cookie';
import { ExchangeInfoContent } from '../../components/common/ExchangeInfoContent';
import { MetaTag } from '../../components/common/MetaTag';

const swal = withReactContent(Swal);
declare global {
  interface Window {
    IMP: any;
  }
}

export const Orders = () => {
  const [checkToggle, setCheckToggle] = useState(false);
  const [userData, setUserData] = useState<any>([]);
  //text배열 index [0=receiver, 1=email, 2=phoneNumber, 3=zipcode, 4=basicAddress, 5=detailedAddress, 6=delivery_memo, 7=memo]
  const [text, setText] = useState(['', '', '', '', '', '', '', '']);
  const [receiverVal, setReceiverVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [phoneVal, setPhoneVal] = useState('');
  const [paymentState, setPaymentState] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();
  const stepTitle = '주문·결제';
  const data = state.data;
  const cookies = new Cookies();
  const [, setCookie] = useCookies();
  // const [jwt, setJwt] = useState<any>('');
  const jwt = useRef<any>('');

  //사용자 주문 다건조회
  // useEffect(() => {
  //   const getData = async () => {
  //     await axios({
  //       method: 'get',
  //       url: `${process.env.REACT_APP_API_URL}/user/order/list?page=0&size=20&fromDate=2023-02-05&toDate=2023-02-05`,
  //       headers: {
  //         Authorization: jwt,
  //       },
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   };
  //   getData();
  // }, [jwt]);

  //사용자 주문 상세조회;
  // useEffect(() => {
  //   const getData = async () => {
  //     await axios({
  //       method: 'get',
  //       url: `${process.env.REACT_APP_API_URL}/user/order/detail/46`,
  //       headers: {
  //         Authorization: jwt,
  //       },
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   };
  //   getData();
  // }, [jwt]);

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/user/delivery`,
        headers: {
          Authorization: cookies.get('accessToken'),
        },
      })
        .then((res) => {
          setUserData(res.data.delivery);
        })
        .catch((err) => {
          cookies.remove('accessToken');
          cookies.remove('refreshToken');
          cookies.remove('loginUser');
          navigate('/sign-in');
        });
    };
    getData();
    // eslint-disable-next-line
  }, [navigate]);

  const changeCheckToggle = () => {
    setCheckToggle(!checkToggle);
  };

  //토큰 재발급
  const reissuance = async () => {
    //엑세트토큰 쿠키만료시간
    const tokenExpires = new Date();
    tokenExpires.setMinutes(tokenExpires.getMinutes() + 20);
    //리프레시토큰 쿠키만료시간
    const rtokenExpires = new Date();
    rtokenExpires.setMinutes(rtokenExpires.getMinutes() + 60);
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/refresh`,
      headers: {
        'refresh-token': cookies.get('refreshToken'),
      },
    }).then((res) => {
      const token = res.headers['authorization'];
      const rtoken = res.headers['refresh-token'];
      setCookie('accessToken', token, { path: '/', expires: tokenExpires });
      setCookie('refreshToken', rtoken, { path: '/', expires: rtokenExpires });
      setCookie('tokenTime', tokenExpires.getTime(), { path: '/', maxAge: 60 * 60 * 24 });
      setCookie('rtokenTime', rtokenExpires.getTime(), { path: '/', maxAge: 60 * 60 * 24 });
      if (res.data === 'ROLE_ADMIN') {
        setCookie('loginUser', 'admin', { path: '/', expires: rtokenExpires });
      } else if (res.data === 'ROLE_USER') {
        setCookie('loginUser', 'user', { path: '/', expires: rtokenExpires });
      }
      jwt.current = token;
    });
  };

  //결제버튼 클릭시 이벤트 (약관동의, 빈 input검사, 유효성검사, 결제정보 순)
  const paymentBtnEvent = () => {
    if (!cookies.get('refreshToken')) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      navigate('/sign-in');
    } else {
      if (checkToggle === false) {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '약관에 동의해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (text[0].length === 0) {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '받는 분을 입력해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (text[1].length === 0) {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '이메일을 입력해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (text[2].length === 0) {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '휴대전화를 입력해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (text[3].length === 0 || text[4].length === 0) {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '주소를 입력해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (text[5].length === 0) {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '상세주소를 입력해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (text[6].length === 0) {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '배송시 요청사항을 선택 또는 입력해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (receiverVal !== '') {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '받는 분의 입력 양식을 확인해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (emailVal !== '') {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '이메일의 입력 양식을 확인해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (phoneVal !== '') {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '휴대전화의 입력 양식을 확인해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else if (paymentState === '') {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '결제방식을 선택해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else {
        swal
          .fire({
            heightAuto: false,
            icon: 'question',
            text: '결제하시겠습니까?',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            showCancelButton: true,
            cancelButtonText: '취소',
            width: 400,
          })
          .then((result) => {
            if (result.isConfirmed) {
              payment();
            }
          });
      }
    }
  };

  const payment = async () => {
    const IMP = window.IMP;
    IMP.init(process.env.REACT_APP_STORE_MID);

    const totalPrice =
      data.reduce((pre: any, cur: any) => {
        return (pre += cur.itemPrice * cur.itemQuantity);
      }, 0) + 2500;
    const productName = data.map((item: any) => item.itemName).join(',');
    const items = data.map((item: any) => {
      const itemObj = {
        id: item.id,
        price: item.itemPrice,
        count: item.itemQuantity,
      };
      return itemObj;
    });
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/user/order`,
      headers: {
        Authorization: cookies.get('accessToken'),
      },
      data: {
        receiver: text[0],
        email: text[1],
        phone_number: text[2],
        address: `${text[4]} ${text[5]}`,
        memo: text[7],
        delivery_memo: text[6],
        items: items,
      },
    })
      .then((res) => {
        const paymentData = {
          pg: 'html5_inicis.MOI8539248',
          pay_method: 'card',
          merchant_uid: res.data.order.merchant_uid,
          amount: totalPrice,
          name: productName,
          buyer_name: text[0],
          buyer_tel: text[2],
          buyer_email: text[1],
          buyer_addr: `${text[4]} ${text[5]}`,
          buyer_postcode: text[3],
          m_redirect_url: 'https://safekingmall.com/mobile-payment-result',
        };
        reissuance();
        IMP.request_pay(paymentData, callBack);
      })
      .catch((err) => {
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        cookies.remove('loginUser');
        navigate('/sign-in');
      });
  };

  const callBack = async (res: any) => {
    if (res.success) {
      await fetch(`${process.env.REACT_APP_API_URL}/user/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: jwt.current,
        },
        body: JSON.stringify({
          success: res.success,
          imp_uid: res.imp_uid,
          merchant_uid: res.merchant_uid,
          paid_amount: res.paid_amount,
        }),
      })
        .then((response) => response.json())
        .then((resData) => {
          const createDate = new Date();
          const year = createDate.getFullYear();
          const month = createDate.getMonth() + 1;
          const date = createDate.getDate();
          //eslint-disable-next-line
          const dt = `${year}.${month >= 10 ? month : '0' + month}.${date >= 10 ? date : '0' + date}`;
          const paymentDataId = data.map((el: any) => el.id);
          navigate('/orderok', {
            state: {
              merchant_uid: resData.response.merchant_uid,
              dt: dt,
              paymentDataId: paymentDataId,
            },
          });
        });
    } else {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/user/payment/cancel/auth`,
        headers: {
          Authorization: cookies.get('accessToken'),
        },
        data: {
          success: res.success,
          merchant_uid: res.merchant_uid,
          error_msg: res.error_msg,
        },
      }).then((response) => {
        swal.fire({
          heightAuto: false,
          icon: 'error',
          text: res.error_msg,
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      });
    }
  };

  return (
    <>
      <MetaTag
        title={`주문·결제 | 안전왕`}
        description={`안전왕, 주문·결제`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/orders'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 주문·결제`}
      />
      <S.Container>
        <Header />
        <S.ContentContainer>
          <OrdersStep stepTitle={stepTitle} />
          <OrdersList data={data} />
          <AddressInfo
            userData={userData}
            text={text}
            setText={setText}
            receiverVal={receiverVal}
            setReceiverVal={setReceiverVal}
            emailVal={emailVal}
            setEmailVal={setEmailVal}
            phoneVal={phoneVal}
            setPhoneVal={setPhoneVal}
          />
          <S.ExchangeInfoArea>{ExchangeInfoContent()}</S.ExchangeInfoArea>
          <PaymentInfo paymentState={paymentState} setPaymentState={setPaymentState} />
          <TotalPrice resultList={data} />
          <S.CheckArea>
            <S.CheckBox checked={checkToggle} onChange={() => changeCheckToggle()} />
            <S.CheckText>
              주문하실 제품, 가격, 배송정보, 할인내역등을 최종확인하였으며, 구매에 동의
              하시겠습니까?
            </S.CheckText>
          </S.CheckArea>
          <S.BtnArea>
            <S.WhiteBtn onClick={() => navigate(-1)}>취소</S.WhiteBtn>
            <S.GreenBtn onClick={() => paymentBtnEvent()}>결제하기</S.GreenBtn>
          </S.BtnArea>
        </S.ContentContainer>
      </S.Container>
    </>
  );
};
