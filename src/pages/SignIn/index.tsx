/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';

interface SignInForm {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  //email, password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //에러메세지
  const [errMsg, setErrMsg] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
  };
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
  };
  //로그인
  const SignIn = async () => {
    try {
      console.log('로그인버튼클릭');
      console.log(email, password);
      const response = await axios
        .post(
          'http://safekingmall.com/api/v1/login',
          {
            username: email,
            password,
          },
          {
            headers: { 'Content-Type': `application/json` },
          },
        )

        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log('로그인성공', res.status);
            setIsLogin(true);
            console.log(res.headers.refreshtoken);
            const token = res.headers.authorization;
            console.log('token', token);
            setCookie('accessToken', token, { path: '/' });
            navigate('/');
          }
        });
    } catch (e: any) {
      console.log('error:', e);
      if (e.response.data.code === 1400) {
        console.log('wrong');
        setIsLogin(false);
        // setErrMsg('일치하는 회원정보가 없습니다.');
        alert('일치하는 회원정보가 없습니다.');
      }
    }
  };
  const refresh = async () => {
    try {
      console.log('test버튼클릭');
      const response = await axios
        .get('http://safekingmall.com/api/v1/refresh', {
          headers: { 'Content-Type': `application/json` },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const navigateSignUp = () => {
    navigate('/sign-up');
  };
  const test = () => {
    console.log('test comment');
  };
  //아이디저장
  const [saveId, setSaveId] = useState(false);
  useEffect(() => {
    if (cookies.idSaved !== undefined) {
      setEmail(cookies.idSaved);
      setSaveId(true);
    }
  }, []);
  const onIdChange = (e: any) => {
    setSaveId(e.target.checked);
    if (e.target.checked) {
      // 아이디 저장 유효기간은 6달
      setCookie('idSaved', email, { maxAge: 15552000 });
    } else {
      removeCookie('idSaved');
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
          <button onClick={refresh}>test</button>
          <S.InputContainer>
            {/* 아이디 */}
            <S.InputLine>
              <S.LabelWrap>
                <label htmlFor='email'>아이디&emsp;</label>
              </S.LabelWrap>
              <S.InputWrap>
                <S.InputForm
                  type='text'
                  // placeholder='아이디를 입력해주세요'
                  onChange={emailChange}
                  defaultValue={email}
                />
              </S.InputWrap>
            </S.InputLine>
            {/* 패스워드 */}
            <S.InputLine>
              <S.LabelWrap>
                <label htmlFor='password'>패스워드</label>
              </S.LabelWrap>
              <S.InputWrap>
                <S.InputForm
                  type='password'
                  // placeholder='비밀번호를 입력해주세요'
                  onChange={passwordChange}
                />
              </S.InputWrap>
            </S.InputLine>
          </S.InputContainer>
          {/* {errMsg} */}
          <S.SignText>
            <S.IdCheck>
              <label>
                <S.IdCheckInput type='checkbox' onChange={onIdChange} checked={saveId} />
                ID 저장하기
              </label>
            </S.IdCheck>
            <S.Span>
              <S.SpanList onClick={test}> 아이디 / 비밀번호 찾기</S.SpanList>&emsp;|&emsp;
              <S.SpanList onClick={test}>회원가입</S.SpanList>
            </S.Span>
          </S.SignText>
          <div>
            <S.Btn onClick={SignIn}>로그인</S.Btn>
            <S.Social>
              <S.SocialBtn onClick={test}>구글로 로그인하기</S.SocialBtn>
              <S.SocialBtn onClick={test} style={{ backgroundColor: '#FDDC3F' }}>
                카카오로 로그인하기
              </S.SocialBtn>
            </S.Social>
          </div>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
