/* eslint-disable */
import React, { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { GrCheckbox } from 'react-icons/gr';
import axios from 'axios';
import { useCookies } from 'react-cookie';

interface SignInForm {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  //email, password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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

  const SignIn = async () => {
    try {
      console.log('로그인버튼클릭');
      console.log(email, password);
      const response = await axios.post('http://localhost:8000/login', { email, password });
      console.log(response);
      setCookie('accessToken', response.data['accessToken'], { path: '/' });
      setCookie('userEmail', response.data['user']['email'], { path: '/' });
      console.log('accessToken', response.data['accessToken']);
      console.log('userEmail', response.data['user']['email']);

      if (response.status == 200) {
        alert('로그인성공');
        navigate('/');
      }
    } catch (e) {
      console.log('error:', e);
    }
  };
  const navigateSignUp = () => {
    navigate('/sign-up');
  };
  const test = () => {
    console.log('소셜로그인 버튼');
  };
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>로고</S.Logo>
        <S.InputContainer>
          {/* 아이디 */}
          <S.InputLine>
            <S.LabelWrap>
              <label htmlFor='email'>아이디&emsp;</label>
            </S.LabelWrap>
            <S.InputWrap>
              <S.InputForm type='text' placeholder='아이디를 입력해주세요' onChange={emailChange} />
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
                placeholder='비밀번호를 입력해주세요'
                onChange={passwordChange}
              />
            </S.InputWrap>
          </S.InputLine>
        </S.InputContainer>
        <S.SignText>
          <S.IdCheck>
            <GrCheckbox /> &nbsp; ID 저장하기
          </S.IdCheck>
          <S.Span>
            <S.SpanList>비밀번호 찾기</S.SpanList>&emsp;|&emsp;
            <S.SpanList onClick={navigateSignUp}>회원가입</S.SpanList>
          </S.Span>
        </S.SignText>
        <S.Social>
          <S.Btn onClick={SignIn}>로그인</S.Btn>
          <S.SocialBtn onClick={test}>구글로 로그인하기</S.SocialBtn>
          <S.SocialBtn onClick={test} style={{ backgroundColor: '#FDDC3F' }}>
            카카오로 로그인하기
          </S.SocialBtn>
        </S.Social>
      </S.Wrapper>
    </S.Container>
  );
};
