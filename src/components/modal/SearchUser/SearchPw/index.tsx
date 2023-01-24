/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';

interface SearchPwForm {
  id: string;
  email: string;
  code: string;
}
export const SearchPw = () => {
  //아이디 이메일 인증번호
  const [id, setId] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  //유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  //에러메세지
  const [idMsg, setIdMsg] = useState<string>('');
  const [emailMsg, setEmailMsg] = useState<string>('');
  //아이디
  const onId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const idCurrent = e.target.value;
    setId(idCurrent);
    const idRegex = /^[a-z]+[a-z0-9]$/g;

    if (idCurrent === '') {
      setIdMsg('아이디를 입력해주세요');
      setIsId(false);
    } else if (idRegex.test(idCurrent)) {
      setIdMsg('영어/숫자 조합으로 입력해주세요');
      setIsId(false);
    } else if (idCurrent.length < 8) {
      setIdMsg('최소 8자리부터 입력할 수 있습니다');
      setIsId(false);
    } else if (idCurrent.length > 20) {
      setIdMsg('최대 20자리까지 입력할 수 있습니다');
      setIsId(false);
    } else {
      setIdMsg('');
      setIsId(true);
    }
  };
  //이메일
  const onEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    const eRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (emailCurrent === '') {
      setEmailMsg('이메일을 입력해주세요');
      setIsEmail(false);
    } else if (!eRegex.test(emailCurrent)) {
      setEmailMsg(`'Safeking@naver.com'의 형식으로 입력해주세요`);
      setIsEmail(false);
    } else {
      setEmailMsg('');
      setIsEmail(true);
    }
  };
  return (
    <>
      <S.Wrapper>
        <S.Top>
          회원가입에 등록한 이메일을 통해
          <br /> 회원님의 비밀번호를 찾을 수 있습니다.
        </S.Top>
        <form>
          <S.InputContainer>
            <S.InputWrapper>
              <label>아이디</label>
              <input placeholder='safeking123' onChange={onId} />
              <S.ErrMsg>{idMsg}</S.ErrMsg>
              {/* {isIdCheck ? (
                  <button style={idDisabled} onClick={onIdCheck}>
                    확인
                  </button>
                ) : (
                  <button>확인2</button>
                )} */}

              {/* // <S.ErrMsg>{idMsg}</S.ErrMsg> */}
              {/* <div>
                  {isIdCheck ? (
                    <AiOutlineCheckCircle style={{ color: '#289951' }} />
                  ) : (
                    <AiOutlineCheckCircle />
                  )}
                </div> */}
            </S.InputWrapper>
            <S.InputWrapper>
              <label>이메일</label>
              <input
                placeholder='safeking@naver.com'
                onChange={onEmail}
                // onChange={onPw}
              />
              <S.SendBtn>인증메일 발송</S.SendBtn>
              <S.ErrMsg>{emailMsg}</S.ErrMsg>
              {/* <S.ErrMsg>{passwordMsg}</S.ErrMsg>
                <p>{isPassword ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}</p> */}
            </S.InputWrapper>
            <S.InputWrapper>
              <label>인증번호</label>
              <input
                placeholder='1234'
                autoComplete='off'
                // onChange={onPwCheck}
              />
              <S.chekcBtn>
                {/* // style={idDisabled} onClick={onIdCheck} */}
                확인
              </S.chekcBtn>
              {/* <S.ErrMsg>{passwordCheckMsg}</S.ErrMsg>
                <p>{isPasswordCheck ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}</p> */}
            </S.InputWrapper>
          </S.InputContainer>
        </form>
        <S.SearchBtn>비밀번호 찾기</S.SearchBtn>
        <S.Result>
          <S.TextWrapper>
            <div>userId</div>
            <div>
              회원님의 임시 비밀번호입니다.
              <br /> 로그인 후 반드시,
              <br /> 비밀번호를 변경해주세요.
            </div>
          </S.TextWrapper>
          <S.LoginBtn>로그인하기</S.LoginBtn>
        </S.Result>
      </S.Wrapper>
    </>
  );
};
