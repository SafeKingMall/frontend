/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies, Cookies } from 'react-cookie';
import { Header } from '../../components/common/Header';
// import { Footer } from '../../components/common/Footer';
// import { FindId } from '../../components/FindId';

interface SignInForm {
  email: string;
  password: string;
}

export const SignIn = () => {
  //쿠키만료시간
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 180);
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
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/login`,
          {
            username: email,
            password,
          },
          {
            headers: { 'Content-Type': `application/json` },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            const token = res.headers.authorization;
            setCookie('accessToken', token, { path: '/', expires });
            // const rtoken = res.headers['refresh-token'];
            // setCookie('refreshToken', rtoken, { path: '/', expires });
            navigate('/');
            if (res.data === 'ROLE_ADMIN') {
              setCookie('admin', res.data, { path: '/', expires });
            } else if (res.data === 'ROLE_USER') {
              setCookie('user', res.data, { path: '/', expires });
            }
          }
        });
    } catch (e: any) {
      if (e.response.data.code === 1400) {
        alert('일치하는 회원정보가 없습니다.');
      }
    }
  };

  const token = cookie.get('acessToken');
  // const refresh = cookie.get('refreshToken');
  const create = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  //회원가입
  const navigateSignUp = () => {
    navigate('/sign-up1');
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
    setIsOpen(!isOpen);
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
              {/* <S.SpanList onClick={onOpen}> 아이디 / 비밀번호 찾기</S.SpanList> */}
              {/* {isOpen && (
                <FindId onOpen={onOpen} />
              )} */}

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
      {/* <Footer /> */}
    </>
  );
};
