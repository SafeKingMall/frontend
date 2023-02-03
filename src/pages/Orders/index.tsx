import React, { useEffect, useState } from 'react';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { OrdersList } from '../../components/shopping/OrdersList';
import { AddressInfo } from '../../components/shopping/AddressInfo';
import { PaymentInfo } from '../../components/shopping/PaymentInfo';
import { TotalPrice } from '../../components/shopping/TotalPrice';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import { Cookies } from 'react-cookie';

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
  const jwt = cookies.get('accessToken');

  //사용자 주문 다건조회
  // useEffect(() => {
  //   const getData = async () => {
  //     await axios({
  //       method: 'get',
  //       url: `${process.env.REACT_APP_API_URL}/user/order/list?page=0&size=20&fromDate=2023-02-01&toDate=2023-02-03`,
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
          Authorization: jwt,
        },
      }).then((res) => {
        setUserData(res.data.delivery);
      });
    };
    getData();
  }, [jwt]);

  const changeCheckToggle = () => {
    setCheckToggle(!checkToggle);
  };

  //결제버튼 클릭시 이벤트 (약관동의, 빈 input검사, 유효성검사, 결제정보 순)
  const paymentBtnEvent = () => {
    if (checkToggle === false) {
      swal.fire({
        icon: 'info',
        text: '약관에 동의해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (text[0].length === 0) {
      swal.fire({
        icon: 'info',
        text: '받는 분을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (text[1].length === 0) {
      swal.fire({
        icon: 'info',
        text: '이메일을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (text[2].length === 0) {
      swal.fire({
        icon: 'info',
        text: '휴대전화를 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (text[3].length === 0 || text[4].length === 0) {
      swal.fire({
        icon: 'info',
        text: '주소를 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (text[5].length === 0) {
      swal.fire({
        icon: 'info',
        text: '상세주소를 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (text[6].length === 0) {
      swal.fire({
        icon: 'info',
        text: '배송시 요청사항을 선택 또는 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (receiverVal !== '') {
      swal.fire({
        icon: 'info',
        text: '받는 분의 입력 양식을 확인해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (emailVal !== '') {
      swal.fire({
        icon: 'info',
        text: '이메일의 입력 양식을 확인해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (phoneVal !== '') {
      swal.fire({
        icon: 'info',
        text: '휴대전화의 입력 양식을 확인해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (paymentState === '') {
      swal.fire({
        icon: 'info',
        text: '결제방식을 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
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
    const merchant_uid = `mid_${new Date().getTime()}`;

    const paymentData = {
      pg: 'html5_inicis.INIpayTest',
      pay_method: 'card',
      merchant_uid: merchant_uid,
      amount: totalPrice,
      // amount: 100,
      name: productName,
      buyer_name: text[0],
      buyer_tel: text[2],
      buyer_email: text[1],
      buyer_addr: `${text[4]} ${text[5]}`,
      buyer_postcode: text[3],
    };

    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/user/order`,
      headers: {
        Authorization: jwt,
      },
      data: {
        receiver: text[0],
        email: text[1],
        phone_number: text[2],
        address: `${text[4]} ${text[5]}`,
        memo: text[7],
        delivery_memo: text[6],
        items: items,
        merchant_uid: merchant_uid,
      },
    })
      .then((res) => {
        IMP.request_pay(paymentData, callBack);
      })
      .catch((err) => {
        swal.fire({
          icon: 'info',
          text: err.response.data.message,
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      });
  };

  const callBack = async (res: any) => {
    if (res.success) {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/user/payment`,
        headers: {
          Authorization: jwt,
        },
        data: {
          success: res.success,
          imp_uid: res.imp_uid,
          merchant_uid: res.merchant_uid,
          paid_amount: res.paid_amount,
        },
      }).then((response) => {
        // console.log(response);
        const createDate = new Date();
        const year = createDate.getFullYear();
        const month = createDate.getMonth() + 1;
        const date = createDate.getDate();
        const dt = `${year}.${month >= 10 ? month : '0' + month}.${date >= 10 ? date : '0' + date}`;
        const paymentDataId = data.map((el: any) => el.id);
        navigate('/orderok', {
          state: {
            merchant_uid: response.data.response.merchant_uid,
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
          Authorization: jwt,
        },
        data: {
          success: res.success,
          merchant_uid: res.merchant_uid,
          error_msg: res.error_msg,
        },
      }).then((response) => {
        // console.log(response);
        swal.fire({
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
        <PaymentInfo paymentState={paymentState} setPaymentState={setPaymentState} />
        <TotalPrice resultList={data} />
        <S.CheckArea>
          <S.CheckBox checked={checkToggle} onChange={() => changeCheckToggle()} />
          <S.CheckText>
            주문하실 제품, 가격, 배송정보, 할인내역등을 최종확인하였으며, 구매에 동의 하시겠습니까?
          </S.CheckText>
        </S.CheckArea>
        <S.BtnArea>
          <S.WhiteBtn onClick={() => navigate(-1)}>취소</S.WhiteBtn>
          <S.GreenBtn onClick={() => paymentBtnEvent()}>결제하기</S.GreenBtn>
        </S.BtnArea>
      </S.ContentContainer>
      <Footer />
    </S.Container>
  );
};
