/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { TfiLock, TfiUnlock } from 'react-icons/tfi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import axios from 'axios';

interface SignUpForm1 {
  id: string;
  password: string;
  passwordCheck: string;
  email: string;
}

export const SignUp1 = () => {
  const navigate = useNavigate();
  //아이디, 비밀번호, 비밀번호 확인, 이메일
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  //유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isIdCheck, setIsIdCheck] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  //유효성 아이콘
  const [idIcon, setIdIcon] = useState(<AiOutlineCheckCircle />);
  const [passwordIcon, setPasswordIcon] = useState(<TfiLock />);
  const [passwordCIcon, setPasswordCIcon] = useState(<TfiLock />);
  //아이콘 색상
  const [idColor, setIdColor] = useState({ color: '#A6A6A6' });
  const [passwordColor, setPasswordColor] = useState({ color: '#A6A6A6' });
  const [passwordCColor, setPasswordCColor] = useState({ color: '#A6A6A6' });
  //에러메세지
  const [idMsg, setIdMsg] = useState<string>('');
  const [passwordMsg, setPasswordMsg] = useState<string>('');
  const [passwordCheckMsg, setPasswordCheckMsg] = useState<string>('');
  const [emailMsg, setEmailMsg] = useState<string>('');

  //아이디 : 4자이상 13이하 특문x(영어숫자) 미입력x 중복확인
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
  //아이디 중복확인
  const onIdCheck = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //확인 완료시 isId(true)
    try {
      await axios
        .post('http://safekingmall.com/api/v1/id/duplication', { username: id })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          console.log(res.status);
          if (res.data === false) {
            console.log('중복된 아이디가 존재합니다.');
            setIsIdCheck(false);
            setIdMsg('중복된 아이디가 존재합니다.');
          } else if (res.data === true) {
            console.log('사용가능한 아이디입니다.');
            setIsIdCheck(true);
            setIdMsg('');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  //아이디 중복확인 disabled
  const idDisabled = {
    borderColor: isIdCheck ? '#289951' : '#a6a6a6',
    color: isIdCheck ? '#289951' : '#a6a6a6',
  };
  //비밀번호
  const onPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pwCurrent = e.target.value;
    setPassword(pwCurrent);
    const pwRegex = /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]$/g;

    if (pwCurrent === '') {
      setPasswordMsg('비밀번호를 입력해주세요');
      setIsPassword(false);
    }
    // else if (!pwRegex.test(pwCurrent)) {
    //   setPasswordMsg('영어/숫자/특수문자를 조합해주세요');
    //   setIsPassword(false);
    // }
    else {
      setPasswordMsg('');
      setIsPassword(true);
    }
  };
  //비밀번호 확인
  const onPwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pwCheckCurrent = e.target.value;
    setPasswordCheck(pwCheckCurrent);

    if (pwCheckCurrent === '') {
      setPasswordCheckMsg('비밀번호 확인을 입력해주세요');
      setIsPasswordCheck(false);
    } else if (!(password === pwCheckCurrent)) {
      setPasswordCheckMsg('비밀번호가 일치하지않습니다.');
      setIsPasswordCheck(false);
    } else {
      setPasswordCheckMsg('');
      setIsPasswordCheck(true);
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
  //btn disabled
  const disabled = !(isId && isIdCheck && isPassword && isPasswordCheck && isEmail);
  // const idDisabled = !isId;
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(id, password, passwordCheck, email);
    try {
      await axios
        .post('http://safekingmall.com/api/v1/signup/criticalItems', {
          username: id,
          password: String(password),
          email,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log(res.status);
            navigate('/sign-up2');
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
          {/* <S.Mid>필수항목</S.Mid> */}
          <form>
            <S.InputContainer>
              <S.InputWrapper>
                <label>아이디</label>
                <input placeholder='영어/숫자, 10자' onChange={onId} />
                {/* {isIdCheck ? (
                  <button style={idDisabled} onClick={onIdCheck}>
                    확인
                  </button>
                ) : (
                  <button>확인2</button>
                )} */}
                <button style={idDisabled} onClick={onIdCheck}>
                  확인
                </button>
                <S.ErrMsg>{idMsg}</S.ErrMsg>
                {/* <div>
                  {isIdCheck ? (
                    <AiOutlineCheckCircle style={{ color: '#289951' }} />
                  ) : (
                    <AiOutlineCheckCircle />
                  )}
                </div> */}
              </S.InputWrapper>
              <S.InputWrapper>
                <label>비밀번호</label>
                <input
                  type='password'
                  placeholder='비밀번호 입력'
                  autoComplete='off'
                  onChange={onPw}
                />
                <S.ErrMsg>{passwordMsg}</S.ErrMsg>
                <p>{isPassword ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}</p>
              </S.InputWrapper>
              <S.InputWrapper>
                <label>비밀번호 확인</label>
                <input
                  type='password'
                  placeholder='비밀번호 재입력'
                  autoComplete='off'
                  onChange={onPwCheck}
                />
                <S.ErrMsg>{passwordCheckMsg}</S.ErrMsg>
                <p>{isPasswordCheck ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}</p>
              </S.InputWrapper>
              <S.InputWrapper>
                <label>이메일</label>
                <input onChange={onEmail} />
                <S.ErrMsg>{emailMsg}</S.ErrMsg>
              </S.InputWrapper>
            </S.InputContainer>
            <S.BtnWrapper>
              <button onClick={() => navigate(-1)}>취소</button>
              <button disabled={disabled} onClick={onSubmit}>
                다음
              </button>
            </S.BtnWrapper>
          </form>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
