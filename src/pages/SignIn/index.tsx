/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies, Cookies } from 'react-cookie';
import { Header } from '../../components/common/Header';
// import { Footer } from '../../components/common/Footer';
// import { FindId } from '../../components/FindId';

export const SignIn = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  const cookie = new Cookies();
  const [saveIdChecked, setSaveIdChecked] = useState(cookie.get('savedId') ? true : false);
  const savedId = useRef(cookie.get('savedId'));
  const onChangeSaveId = () => {
    setSaveIdChecked(!saveIdChecked);
  };
  // const refreshToken = cookie.get('refreshToken');

  //id, password
  const [id, setId] = useState(cookie.get('savedId') ? cookie.get('savedId') : '');
  const [pw, setPw] = useState('');

  //아이디 입력
  const onChangeId = (e: string) => {
    setId(e);
  };
  //비밀번호 입력
  const onChangePw = (e: string) => {
    setPw(e);
  };
  //로그인
  const signIn = async () => {
    //엑세트토큰 쿠키만료시간
    const tokenExpires = new Date();
    // tokenExpires.setMinutes(tokenExpires.getMinutes() + 180);
    tokenExpires.setMinutes(tokenExpires.getMinutes() + 1);
    //리프레시토큰 쿠키만료시간
    const rtokenExpires = new Date();
    // rtokenExpires.setMinutes(tokenExpires.getMinutes() + 360);
    rtokenExpires.setMinutes(tokenExpires.getMinutes() + 5);
    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/login`,
          {
            username: id,
            password: pw,
          },
          {
            headers: { 'Content-Type': `application/json` },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            const token = res.headers.authorization;
            setCookie('accessToken', token, { path: '/', expires: tokenExpires });
            const rtoken = res.headers['refresh-token'];
            setCookie('refreshToken', rtoken, { path: '/', expires: rtokenExpires });
            if (res.data === 'ROLE_ADMIN') {
              setCookie('loginUser', 'admin', { path: '/', expires: tokenExpires });
            } else if (res.data === 'ROLE_USER') {
              setCookie('loginUser', 'user', { path: '/', expires: tokenExpires });
            }
            if (saveIdChecked) {
              if (savedId.current !== id) {
                setCookie('savedId', id, { path: '/', maxAge: 60 * 60 * 24 * 180 });
              }
            } else {
              if (savedId.current) {
                cookie.remove('savedId');
              }
            }
            navigate('/');
          }
        });
    } catch (e: any) {
      if (e.response.data.code === 1400) {
        alert('일치하는 회원정보가 없습니다.');
      } else {
        alert(e.response.data.message);
      }
    }
  };

  //회원가입
  const navigateSignUp = () => {
    navigate('/sign-up1');
  };

  //아이디저장
  // const [saveId, setSaveId] = useState(false);
  // useEffect(() => {
  //   if (cookies.idSaved !== undefined) {
  //     setId(cookies.idSaved);
  //     setSaveId(true);
  //   }
  // }, []);

  // const onIdChange = (e: any) => {
  //   setSaveId(e.target.checked);
  //   if (e.target.checked) {
  //     // 아이디 저장 유효기간은 6달
  //     setCookie('idSaved', id, { maxAge: 60 * 60 * 24 * 180 });
  //   } else {
  //     removeCookie('idSaved');
  //   }
  // };
  //아이디 비밀번호 찾기 모달창
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const onOpen = () => {
  //   setIsOpen(!isOpen);
  // };

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
                  onChange={(e) => onChangeId(e.target.value)}
                  defaultValue={id}
                />
              </S.InputWrap>
            </S.InputLine>
            {/* 패스워드 */}
            <S.InputLine>
              <S.LabelWrap>
                <label htmlFor='password'>패스워드</label>
              </S.LabelWrap>
              <S.InputWrap>
                <S.InputForm type='password' onChange={(e) => onChangePw(e.target.value)} />
              </S.InputWrap>
            </S.InputLine>
          </S.InputContainer>
          <S.SignText>
            <S.IdCheck>
              <label>
                <S.IdCheckInput
                  type='checkbox'
                  checked={saveIdChecked}
                  onChange={() => onChangeSaveId()}
                />
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
            <S.Btn onClick={() => signIn()}>로그인</S.Btn>
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
