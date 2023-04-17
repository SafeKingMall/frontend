/* eslint-disable */
import React from 'react';
import * as S from './style';
import { GoCreditCard } from 'react-icons/go';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const greenColor = '#289951';
const grayColor = '#999999';
const btnActive = {
  color: greenColor,
  borderColor: greenColor,
};

export const PaymentInfo = (props: any) => {
  const swal = withReactContent(Swal);
  const paymentState = props.paymentState;
  const setPaymentState = props.setPaymentState;
  const changePayment = (value: string) => {
    setPaymentState(value);
  };
  const alertInfo = () => {
    swal.fire({
      heightAuto: false,
      icon: 'info',
      text: '현재는 신용카드만 이용이 가능합니다.',
      confirmButtonText: '확인',
      confirmButtonColor: '#289951',
      width: 400,
    });
  };
  return (
    <S.Container>
      <S.PaymentContainer>
        <S.TitleArea>
          <S.Title>결제 정보</S.Title>
        </S.TitleArea>
        <S.PaymentSelectArea>
          <S.PayBtn style={paymentState === 'card' ? btnActive : {}}>
            <S.PayRadio
              id='card'
              name='payment'
              value='card'
              onChange={(e) => changePayment(e.target.value)}
            />
            <S.PayRadioLabel htmlFor='card'>
              <S.PayIconArea>
                <GoCreditCard size='100%' color={paymentState === 'card' ? greenColor : grayColor} />
              </S.PayIconArea>
              <S.PayText>신용카드</S.PayText>
            </S.PayRadioLabel>
          </S.PayBtn>
          <S.PayBtn style={paymentState === 'virtualAccount' ? btnActive : {}}>
            <S.PayRadio
              id='virtualAccount'
              name='payment'
              value='virtualAccount'
              // onChange={(e) => changePayment(e.target.value)}
              onClick={() => alertInfo()}
            />
            <S.PayRadioLabel htmlFor='virtualAccount'>
              <S.PayIconArea>
                <svg
                  id='virtualAccountIcon'
                  viewBox='0 0 39.5 27.5'
                  style={{ width: '100%', height: '80%' }}
                >
                  <S.VirtualPath2
                    style={{ stroke: paymentState === 'virtualAccount' ? greenColor : '' }}
                    d='M36.75,.75H2.25C1.05,.75,.75,1.77,.75,2.28V24.71c0,1.63,1.33,2.04,2,2.04H36.75c1.6,0,2-1.36,2-2.04V2.28c0-1.22-1.33-1.53-2-1.53Z'
                  />
                  <S.VirtualPath1
                    style={{ fill: paymentState === 'virtualAccount' ? greenColor : '' }}
                    d='M17.5,5.75h14.5c.41,0,.75,.34,.75,.75h0c0,.41-.34,.75-.75,.75h-14.5c-.41,0-.75-.34-.75-.75h0c0-.41,.34-.75,.75-.75Z'
                  />
                  <S.VirtualRect
                    style={{ stroke: paymentState === 'virtualAccount' ? greenColor : '' }}
                    x='5'
                    y='6'
                    width='5.5'
                    height='5.5'
                    rx='.75'
                    ry='.75'
                  />
                  <S.VirtualPath1
                    style={{ fill: paymentState === 'virtualAccount' ? greenColor : '' }}
                    d='M4.25,19.75h6c.28,0,.5,.22,.5,.5h0c0,.28-.22,.5-.5,.5H4.25c-.28,0-.5-.22-.5-.5h0c0-.28,.22-.5,.5-.5Z'
                  />
                  <S.VirtualPath1
                    style={{ fill: paymentState === 'virtualAccount' ? greenColor : '' }}
                    d='M12.25,19.75h6c.28,0,.5,.22,.5,.5h0c0,.28-.22,.5-.5,.5h-6c-.28,0-.5-.22-.5-.5h0c0-.28,.22-.5,.5-.5Z'
                  />
                  <S.VirtualPath1
                    style={{ fill: paymentState === 'virtualAccount' ? greenColor : '' }}
                    d='M20.25,19.75h6c.28,0,.5,.22,.5,.5h0c0,.28-.22,.5-.5,.5h-6c-.28,0-.5-.22-.5-.5h0c0-.28,.22-.5,.5-.5Z'
                  />
                  <S.VirtualPath1
                    style={{ fill: paymentState === 'virtualAccount' ? greenColor : '' }}
                    d='M28.25,19.75h6c.28,0,.5,.22,.5,.5h0c0,.28-.22,.5-.5,.5h-6c-.28,0-.5-.22-.5-.5h0c0-.28,.22-.5,.5-.5Z'
                  />
                  <S.VirtualPath1
                    style={{ fill: paymentState === 'virtualAccount' ? greenColor : '' }}
                    d='M17.5,8.75h10.5c.41,0,.75,.34,.75,.75h0c0,.41-.34,.75-.75,.75h-10.5c-.41,0-.75-.34-.75-.75h0c0-.41,.34-.75,.75-.75Z'
                  />
                </svg>
              </S.PayIconArea>
              <S.PayText>가상계좌</S.PayText>
            </S.PayRadioLabel>
          </S.PayBtn>
          <S.PayBtn style={paymentState === 'bankTransfer' ? btnActive : {}}>
            <S.PayRadio
              id='bankTransfer'
              name='payment'
              value='bankTransfer'
              // onChange={(e) => changePayment(e.target.value)}
              onClick={() => alertInfo()}
            />
            <S.PayRadioLabel htmlFor='bankTransfer'>
              <S.PayIconArea>
                <svg
                  id='bankTransferIcon'
                  viewBox='0 0 39.5 31.79'
                  style={{ width: '100%', height: '80%' }}
                >
                  <S.BankTransferPath1
                    style={{ stroke: paymentState === 'bankTransfer' ? greenColor : '' }}
                    d='M36.75,.75H2.25C1.05,.75,.75,1.77,.75,2.28V24.71c0,1.63,1.33,2.04,2,2.04H36.75c1.6,0,2-1.36,2-2.04V2.28c0-1.22-1.33-1.53-2-1.53Z'
                  />
                  <S.BankTransferPath2
                    style={{ stroke: paymentState === 'bankTransfer' ? greenColor : '' }}
                    d='M20.51,18.54l6.5-6.5m0,0l6.5,6.5m-6.5-6.5V31.04'
                  />
                </svg>
              </S.PayIconArea>
              <S.PayText>계좌이체</S.PayText>
            </S.PayRadioLabel>
          </S.PayBtn>
          <S.PayBtn style={paymentState === 'kakaoPay' ? btnActive : {}}>
            <S.PayRadio
              id='kakaoPay'
              name='payment'
              value='kakaoPay'
              // onChange={(e) => changePayment(e.target.value)}
              onClick={() => alertInfo()}
            />
            <S.PayRadioLabel htmlFor='kakaoPay'>
              <S.PayIconArea>
                <RiKakaoTalkFill
                  size='100%'
                  color={paymentState === 'kakaoPay' ? greenColor : grayColor}
                />
              </S.PayIconArea>
              <S.PayText>카카오페이</S.PayText>
            </S.PayRadioLabel>
          </S.PayBtn>
          <S.PayBtn style={paymentState === 'naverPay' ? btnActive : {}}>
            <S.PayRadio
              id='naverPay'
              name='payment'
              value='naverPay'
              // onChange={(e) => changePayment(e.target.value)}
              onClick={() => alertInfo()}
            />
            <S.PayRadioLabel htmlFor='naverPay'>
              <S.PayIconArea>
                <SiNaver size='80%' color={paymentState === 'naverPay' ? greenColor : grayColor} />
              </S.PayIconArea>
              <S.PayText>네이버페이</S.PayText>
            </S.PayRadioLabel>
          </S.PayBtn>
          <S.PayBtn style={paymentState === 'payco' ? btnActive : {}}>
            <S.PayRadio
              id='payco'
              name='payment'
              value='payco'
              // onChange={(e) => changePayment(e.target.value)}
              onClick={() => alertInfo()}
            />
            <S.PayRadioLabel htmlFor='payco'>
              <S.PayIconArea>
                <svg
                  id='paycoIcon'
                  viewBox='0 0 224.43 50.79'
                  style={{
                    width: '100%',
                    height: '40%',
                    fill: paymentState === 'payco' ? greenColor : grayColor,
                  }}
                >
                  <path d='M0,5.82C0,2.81,2.39,.42,5.4,.42h14.66c11.72,0,18.8,6.94,18.8,16.98v.14c0,11.37-8.84,17.26-19.85,17.26H10.8v10.17c0,3.02-2.39,5.4-5.4,5.4s-5.4-2.39-5.4-5.4V5.82ZM19.36,25.18c5.4,0,8.56-3.23,8.56-7.44v-.14c0-4.84-3.37-7.44-8.77-7.44H10.8v15.01h8.56Z' />
                  <path d='M37.14,43L54.26,4.35C55.45,1.68,57.63,.07,60.58,.07h.63c2.95,0,5.05,1.61,6.24,4.28l17.12,38.66c.35,.77,.56,1.47,.56,2.17,0,2.88-2.25,5.19-5.12,5.19-2.53,0-4.21-1.47-5.19-3.72l-3.3-7.72h-21.61l-3.44,8.07c-.91,2.1-2.74,3.37-4.98,3.37-2.81,0-4.98-2.25-4.98-5.05,0-.77,.28-1.54,.63-2.31Zm30.38-13.61l-6.8-16.21-6.81,16.21h13.61Z' />
                  <path d='M96.55,31.01l-15.85-21.54c-.77-1.05-1.33-2.32-1.33-3.86,0-2.88,2.39-5.19,5.4-5.19,2.46,0,4,1.33,5.33,3.3l11.93,17.19L114.16,3.58c1.33-1.96,2.95-3.23,5.19-3.23,3.3,0,5.26,2.31,5.26,5.26,0,1.47-.7,2.81-1.4,3.79l-15.85,21.4v14.17c0,3.02-2.39,5.4-5.4,5.4s-5.4-2.39-5.4-5.4v-13.96Z' />
                  <path d='M124.94,25.54v-.14c0-13.96,10.52-25.4,25.61-25.4,7.37,0,12.35,1.96,16.42,4.98,1.12,.84,2.1,2.38,2.1,4.28,0,2.95-2.38,5.26-5.33,5.26-1.47,0-2.45-.56-3.23-1.05-3.02-2.25-6.17-3.51-10.03-3.51-8.28,0-14.24,6.88-14.24,15.29v.14c0,8.42,5.82,15.43,14.24,15.43,4.56,0,7.58-1.4,10.66-3.86,.84-.7,1.96-1.19,3.23-1.19,2.74,0,5.05,2.25,5.05,4.98,0,1.68-.84,3.02-1.82,3.86-4.42,3.86-9.61,6.17-17.47,6.17-14.45,0-25.18-11.15-25.18-25.25Z' />
                  <path d='M172.24,25.54v-.14c0-13.96,11.01-25.4,26.17-25.4s26.03,11.29,26.03,25.25v.14c0,13.96-11.01,25.4-26.17,25.4s-26.03-11.3-26.03-25.25Zm40.9,0v-.14c0-8.42-6.17-15.43-14.87-15.43s-14.73,6.88-14.73,15.29v.14c0,8.42,6.17,15.43,14.87,15.43s14.73-6.88,14.73-15.29Z ' />
                </svg>
              </S.PayIconArea>
              <S.PayText>페이코</S.PayText>
            </S.PayRadioLabel>
          </S.PayBtn>
        </S.PaymentSelectArea>
        <S.PaymentDesArea>
          <S.PaymentDes>- 신용카드 할부는 50,000원 이상일 경우에만 가능합니다.</S.PaymentDes>
          {/* <S.PaymentDes>
            - 가상계좌 발급 시, 12시간 이내에 입금완료해주셔야 배송이 진행됩니다.
          </S.PaymentDes> */}
          <S.PaymentDes>
            - 정확한 결제와 주문완료를 위하여 주문완료 페이지가 보여지기 전에 현재창과 결제창을
            닫지마십시오.
          </S.PaymentDes>
        </S.PaymentDesArea>
      </S.PaymentContainer>
    </S.Container>
  );
};
