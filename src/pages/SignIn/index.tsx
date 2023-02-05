/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies, Cookies } from 'react-cookie';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';

interface SignInForm {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const cookie = new Cookies();

  const navigate = useNavigate();
  //email, password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //에러메세지
  const [errMsg, setErrMsg] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  //아이디
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    const idRegex = /^[a-zA-Z0-9]*$/;
  };
  //비밀번호
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
      await axios
        .post(
          'https://safekingmall.com/api/v1/login',
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
            const token = res.headers.authorization;
            console.log('token', token);
            setCookie('accessToken', token, { path: '/' });
            console.log(res.headers.refresh_token);
            const rtoken = res.headers['refresh-token'];
            setCookie('refreshToken', rtoken, { path: '/' });
            console.log('rt', rtoken);
            navigate('/');
            if (res.data === 'ROLE_ADMIN') {
              console.log('관리자지롱');
              setCookie('admin', res.data, { path: '/' });
            } else if (res.data === 'ROLE_USER') {
              console.log('유저지롱');
              setCookie('user', res.data, { path: '/' });
            }
          }
        });
    } catch (e: any) {
      console.log('error:', e);
      if (e.response.data.code === 1400) {
        console.log('wrong');
        // setErrMsg('일치하는 회원정보가 없습니다.');
        alert('일치하는 회원정보가 없습니다.');
      }
    }
  };

  const token = cookie.get('acessToken');
  const create = axios.create({
    baseURL: 'https://safekingmall.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  // create.interceptors.request.use(function (config: any) {
  //   config.headers.Authorization = token;
  // });

  create.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      return new Promise((resolve, reject) => {
        const originalReq = err.config;
        if (err.response.data.code === 812) {
          originalReq._retry = true;

          let res = fetch('https://safekingmall.com/api/v1/refresh', {
            method: 'get',
          })
            .then((res) => res.json())
            .then((res) => {
              cookies.set('accessToken', res.Authorization);
              return 'accessToken';
            });

          resolve(res);
        }

        return reject(err);
      });
    },
  );

  const navigateSignUp = () => {
    navigate('/sign-up1');
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
  //아이디 비밀번호 찾기 모달창
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => {
    console.log('클릭');
    setIsOpen(true);
  };
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
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
              <S.SpanList onClick={() => setIsOpen(true)}> 아이디 / 비밀번호 찾기</S.SpanList>
              &emsp;|&emsp;
              <S.SpanList onClick={navigateSignUp}>회원가입</S.SpanList>
            </S.Span>
          </S.SignText>
          <div>
            <S.Btn onClick={SignIn}>로그인</S.Btn>
            {/* <S.Social>
              <S.SocialBtn onClick={test}>구글로 로그인하기</S.SocialBtn>
              <S.SocialBtn onClick={test} style={{ backgroundColor: '#FDDC3F' }}>
                카카오로 로그인하기
              </S.SocialBtn>
            </S.Social> */}
          </div>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
