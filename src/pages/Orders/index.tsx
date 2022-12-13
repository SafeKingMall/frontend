import React, { useState } from 'react';
import * as S from './style';
import { OrdersStep } from '../../components/shopping/OrdersStep';
import { OrdersList } from '../../components/shopping/OrdersList';
import { AddressInfo } from '../../components/shopping/AddressInfo';
import { PaymentInfo } from '../../components/shopping/PaymentInfo';
import { TotalPrice } from '../../components/shopping/TotalPrice';
import { useNavigate } from 'react-router-dom';

//테스트 데이터
const data: any = [
  {
    itemId: 1,
    name: '안전화1',
    price: 90000,
    categoryName: '중대사고예방',
    description: '상품상세설명 블라블라',
    count: 1,
  },
  {
    itemId: 3,
    name: '코팅장갑',
    price: 1000,
    categoryName: '화재사고예방',
    description: '상품상세설명 블라블라',
    count: 2,
  },
  {
    itemId: 5,
    name: '축압식 분말 소화기 (1.5kg)',
    price: 13900,
    categoryName: '누출사고예방',
    description: '상품상세설명 블라블라',
    count: 1,
  },
];

const userData = {
  name: '이선우',
  username: 'kms111111',
  email: 'dkel3slek@gamil.com',
  birth: 'kms111111*',
  representativeName: '김광성',
  phoneNumber: '01012345678',
  companyRegistrationNumber: '사업자 등록번호양식',
  corporateRegistrationNumber: '법인 등록번호양식',
  zipcode: '08787',
  basicAddress: '서울 관악구 관악로13길 20 (봉천동, 카카오티)',
  detailedAddress: '1층',
};

export const Orders = () => {
  const [checkToggle, setCheckToggle] = useState(false);
  const navigate = useNavigate();
  const stepTitle = '주문·결제';
  const changeCheckToggle = () => {
    setCheckToggle(!checkToggle);
  };
  const paymentEvent = () => {
    if (checkToggle === false) {
      alert('약관에 동의해주세요.');
    }
  };
  return (
    <S.Container>
      <OrdersStep stepTitle={stepTitle} />
      <OrdersList data={data} />
      <AddressInfo userData={userData} />
      <PaymentInfo />
      <TotalPrice resultList={data} />
      <S.CheckArea>
        <S.CheckBox checked={checkToggle} onChange={() => changeCheckToggle()} />
        <S.CheckText>
          주문하실 제품, 가격, 배송정보, 할인내역등을 최종확인하였으며, 구매에 동의 하시겠습니까?
        </S.CheckText>
      </S.CheckArea>
      <S.BtnArea>
        <S.WhiteBtn onClick={() => navigate(-1)}>취소</S.WhiteBtn>
        <S.GreenBtn onClick={() => paymentEvent()}>결제하기</S.GreenBtn>
      </S.BtnArea>
    </S.Container>
  );
};
