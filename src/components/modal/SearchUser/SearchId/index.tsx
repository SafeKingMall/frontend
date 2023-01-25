/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import * as S from './style';

interface SearchIdForm {
  name: string;
  phone: string;
  code: string;
}
export const SearchId = () => {
  //이름 휴대폰번호 인증번호
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');
  //유효성 검사
  const [isName, setIsName] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isCode, setIsCode] = useState<boolean>(false);
  //에러메세지
  const [nameMsg, setNameMsg] = useState<string>('');
  const [phoneMsg, setPhoneMsg] = useState<string>('');
  const [codeMsg, setCodeMsg] = useState<string>('');
  //정보찾기 결과창
  const [result, setResult] = useState<boolean>(false);

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
  //전화번호
  const onPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const phoneCurrent = e.target.value;
    setPhone(phoneCurrent);
    console.log(phoneCurrent);

    if (phoneCurrent === '') {
      setPhoneMsg('휴대폰 번호를 입력해주세요');
      setIsPhone(false);
    } else {
      setPhoneMsg('');
      setIsPhone(true);
    }
  };
  const onPhoneAuth = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('ㅅㄷㄴㅅ');
    try {
      await axios
        .post('http://safekingmall.com/api/v1/coolsms', { clientPhoneNumber: phone })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  //인증번호 입력
  const onCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const codeCurrent = e.target.value;
    //숫자 > 문자화
    setCode(String(codeCurrent));
    console.log('인증번호', codeCurrent, typeof codeCurrent);

    //   if (codeCurrent === '') {
    //     setCodeMsg('인증번호를 입력해주세요');
    //     setIsCode(false);
    //   } else {
    //     setCodeMsg('');
    //     setIsCode(true);
    //   }
  };

  //인증번호 확인
  const onPhoneAuthCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('authCheck');
    try {
      await axios
        .post('http://safekingmall.com/api/v1/coolsms/code', {
          clientPhoneNumber: phone,
          code: code,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setCodeMsg('');
            setIsCode(true);
          }
        });
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data.code);
      if (error.response.data.code === 1200) {
        console.log('에러메세지임');
        setCodeMsg('휴대폰 인증을 처음부터 다시 진행해주세요');
        setIsCode(false);
      } else if (error.response.data.code === 1700) {
        console.log('에러메세지임');
        setCodeMsg('코드가 일치하지않습니다. 휴대폰 인증을 처음부터 다시 진행해주세요. ');
        setIsCode(false);
      }
    }
  };
  //disabled btn
  const phoneDisabled = !isPhone;
  // const checkDisabled = !isCode;
  const disabled = !(isName && isPhone && isCode);
  //아이디 찾기
  const onSearchId = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('searchId');
    setResult(true);
    console.log(phone, code, typeof code);
    try {
      await axios
        .post('http://safekingmall.com/api/v1/id/find', { clientPhoneNumber: phone, code })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <S.Wrapper>
        <S.Top>
          회원가입에 등록한 휴대전화번호를 통해
          <br /> 회원님의 아이디를 찾을 수 있습니다.
        </S.Top>
        <form>
          <S.InputContainer>
            <S.InputWrapper>
              <label>이름</label>
              <input placeholder='홍길동' onChange={onName} />
              <S.ErrMsg>{nameMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>휴대폰 번호</label>
              <input placeholder='01012345678' onChange={onPhone} />
              <S.PhoneBtn disabled={phoneDisabled} onClick={onPhoneAuth}>
                인증번호 발송
              </S.PhoneBtn>
              <S.ErrMsg>{phoneMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>인증번호</label>
              <input placeholder='1234' onChange={onCode} />
              <S.ErrMsg>{codeMsg}</S.ErrMsg>
              <S.chekcBtn onClick={onPhoneAuthCheck}>확인</S.chekcBtn>
            </S.InputWrapper>
          </S.InputContainer>
        </form>
        <S.SearchBtn disabled={disabled} onClick={onSearchId}>
          아이디 찾기
        </S.SearchBtn>
        {result ? (
          <S.Result>
            <S.TextWrapper>
              <div>userId</div>
              <div>
                회원님의 아이디입니다.
                <br /> 개인정보보호를 위해
                <br /> 뒷자리는 ***으로 가려두었습니다.
              </div>
            </S.TextWrapper>
            <S.BtnWrapper>
              <button
              // onClick={() => navigate(-1)}
              >
                비밀번호 찾기
              </button>
              <button>로그인 하기</button>
            </S.BtnWrapper>
          </S.Result>
        ) : (
          ''
        )}
      </S.Wrapper>
    </>
  );
};
