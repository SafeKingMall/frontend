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

const swal = withReactContent(Swal);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      let jwt;
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/login`,
        data: {
          username: 'testUser1',
          password: 'testUser1*',
        },
      }).then((res) => {
        jwt = res.headers.authorization;
      });
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
  }, []);

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
            swal.fire({
              icon: 'success',
              text: '결제!',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          }
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
