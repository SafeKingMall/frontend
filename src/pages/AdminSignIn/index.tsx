import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const AdminSignIn = () => {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/adminsign-up');
  };
  // const test = () => {
  //   console.log('test');
  // };
  return (
    <S.Container>
      <S.Wrapper>
        <S.InputContainer>
          {/* 아이디 */}
          <S.IdInput>
            <S.LabelWrap>
              <label htmlFor='id'>아이디&emsp;</label>
            </S.LabelWrap>
            <S.InputWrap>
              <S.InputForm type='text' placeholder='아이디를 입력해주세요' />
            </S.InputWrap>
          </S.IdInput>
          {/* 패스워드 */}
          <S.PwInput>
            <S.LabelWrap>
              <label htmlFor='password'>패스워드</label>
            </S.LabelWrap>
            <S.InputWrap>
              <S.InputForm type='password' placeholder='비밀번호를 입력해주세요' />
            </S.InputWrap>
          </S.PwInput>
        </S.InputContainer>
        <S.IdCheck>
          <input type='checkbox' name='saveId' id='saveId' />
          ID 저장하기
        </S.IdCheck>
        <div>
          <S.Btn>로그인</S.Btn>
        </div>
        <S.Span>
          <S.SpanList>비밀번호 찾기</S.SpanList>&emsp;|&emsp;
          <S.SpanList onClick={navigateSignUp}>관리자 회원가입</S.SpanList>
        </S.Span>
      </S.Wrapper>
    </S.Container>
  );
};
