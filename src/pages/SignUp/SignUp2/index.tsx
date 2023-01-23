/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Timer } from '../../../components/user/Timer';

interface SignUpForm2 {
  name: string;
  birth: string;
  phone: string;
  code: string;
}

export const SignUp2 = () => {
  const navigate = useNavigate();
  //이름 생년월일 휴대폰번호 인증번호
  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');
  //유효성 검사
  const [isName, setIsName] = useState<boolean>(false);
  const [isBirth, setIsBirth] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isCode, setIsCode] = useState<boolean>(false);
  //에러 메세지
  const [nameMsg, setNameMsg] = useState<string>('');
  const [birthMsg, setBirthMsg] = useState<string>('');
  const [phoneMsg, setPhoneMsg] = useState<string>('');
  //타이머 호출
  const [onTimer, setOnTimer] = useState<boolean>(false);

  //이름(한글,영어) 특문숫자x
  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;

    if (nameCurrent === '') {
      setNameMsg('이름을 입력해주세요');
      setIsName(false);
    } else if (!nameRegex.test(nameCurrent)) {
      setNameMsg('한글/영어로만 입력해주세요');
      setIsName(false);
    } else if (nameCurrent.length > 50) {
      setNameMsg('50자 이내로 입력해주세요');
      setIsName(false);
    } else {
      setNameMsg('');
      setIsName(true);
    }
  };
  //생년월일(숫자) 특문,한글,영문x
  const onBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const birthCurrent = e.target.value;
    setBirth(birthCurrent);
    // const birthRegex =

    if (birthCurrent === '') {
      setBirthMsg('생년월일을 입력해주세요');
      setIsBirth(false);
    }
    // else if () {}
    else {
      setBirthMsg('');
      setIsBirth(true);
    }
  };
  //휴대폰 번호
  const onPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const phoneCurrent = e.target.value;
    setPhone(phoneCurrent);
    console.log(phoneCurrent);
  };
  //인증번호 발송
  const onPhoneAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios
        .post('http://safekingmall.com/api/v1/coolsms', { clientPhoneNumber: phone })
        .then((res) => {
          console.log('폰번호', phone);
          console.log(res);
          console.log(res.data);
          if (res.status === 200) {
            console.log('인증번호 발송 완료');
            // setIsPhone(true);
          }
          setOnTimer(true);
        });
    } catch (error: any) {
      console.log(error);
      if (error.response.data.code === 999) {
        setPhoneMsg('발송량초과');
      }
    }
  };
  //인증번호
  const onCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const codeCurrent = e.target.value;
    //숫자 > 문자화
    setCode(String(codeCurrent));
    console.log('인증번호', codeCurrent, typeof codeCurrent);
  };
  //인증번호 확인 버튼(인증번호 일치하지않을시 에러메세지)
  const onPhoneAuthCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //인증번호 시간 초과시 경고창 설정하기
    e.preventDefault();
    console.log('test');
    console.log('code:', code);
    try {
      await axios
        .post('http://safekingmall.com/api/v1/coolsms/code', {
          clientPhoneNumber: phone,
          code: code,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setPhoneMsg('');
            setIsPhone(true);
          }
        });
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data.code);
      if (error.response.data.code === 1200) {
        console.log('에러메세지임');
        setPhoneMsg('휴대폰 인증을 처음부터 다시 진행해주세요');
        setIsPhone(false);
      } else if (error.response.data.code === 1700) {
        console.log('에러메세지임');
        setPhoneMsg('코드가 일치하지않습니다. 휴대폰 인증을 처음부터 다시 진행해주세요. ');
        setIsPhone(false);
      } else {
        setPhoneMsg('');
      }
    }
  };
  //다음버튼 disabled
  const disabled = !(isName && isBirth && isPhone);
  //다음버튼
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(name, birth, phone, code);
    try {
      await axios
        .post('http://safekingmall.com/api/v1/signup/authenticationInfo/1', {
          name,
          birth: String(birth),
          phoneNumber: String(phone),
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate('/sign-up3');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
          <S.Top></S.Top>
          <S.Mid>본인인증 정보</S.Mid>
          <S.InputContainer>
            <S.InputWrapper>
              <label>이름</label>
              <input placeholder='홍길동' onChange={onName} />
              <S.ErrMsg>{nameMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>생년월일</label>
              <input placeholder='YYYYMMDD' onChange={onBirth} />
              <S.ErrMsg>{birthMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>휴대폰 번호</label>
              <input onChange={onPhone} />
              <S.SendBtn onClick={onPhoneAuth}>인증번호 발송</S.SendBtn>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>인증번호</label>
              <input onChange={onCode} />
              <S.AuthTimer>{onTimer ? <Timer /> : ''}</S.AuthTimer>
              <S.CheckBtn onClick={onPhoneAuthCheck}>확인</S.CheckBtn>
              <S.ErrMsg>{phoneMsg}</S.ErrMsg>
            </S.InputWrapper>
          </S.InputContainer>
          <S.BtnWrapper>
            <button onClick={() => navigate(-1)}>이전</button>
            <button disabled={disabled} onClick={onSubmit}>
              다음
            </button>
          </S.BtnWrapper>
          <Timer />
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
