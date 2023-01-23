/* eslint-disable no-unused-vars */
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
  };
  //인증번호 입력
  const onCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const codeCurrent = e.target.value;
    //숫자 > 문자화
    setCode(String(codeCurrent));
    console.log('인증번호', codeCurrent, typeof codeCurrent);
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
              {/* {isIdCheck ? (
                  <button style={idDisabled} onClick={onIdCheck}>
                    확인
                  </button>
                ) : (
                  <button>확인2</button>
                )} */}
              <S.ErrMsg>{nameMsg}</S.ErrMsg>
              {/* <div>
                  {isIdCheck ? (
                    <AiOutlineCheckCircle style={{ color: '#289951' }} />
                  ) : (
                    <AiOutlineCheckCircle />
                  )}
                </div> */}
            </S.InputWrapper>
            <S.InputWrapper>
              <label>휴대폰 번호</label>
              <input placeholder='01012345678' onChange={onPhone} />
              <S.SendBtn>인증번호 발송</S.SendBtn>
              <S.ErrMsg>{phoneMsg}</S.ErrMsg>
              {/*
                <p>{isPassword ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}</p> */}
            </S.InputWrapper>
            <S.InputWrapper>
              <label>인증번호</label>
              <input placeholder='1234' onChange={onCode} />
              <S.ErrMsg>{codeMsg}</S.ErrMsg>
              {/* 
                <p>{isPasswordCheck ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}</p> */}
              <S.chekcBtn>
                {/* // style={idDisabled} onClick={onIdCheck} */}
                확인
              </S.chekcBtn>
            </S.InputWrapper>
          </S.InputContainer>
        </form>
        <S.SearchBtn>아이디 찾기</S.SearchBtn>
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
              취소
            </button>
            <button>다음</button>
          </S.BtnWrapper>
        </S.Result>
      </S.Wrapper>
    </>
  );
};
