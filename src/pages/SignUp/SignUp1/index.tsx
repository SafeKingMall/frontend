import React from 'react';
import * as S from './style';

export const SignUp1 = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Top>계정으로 사용할 아이디와 비밀번호를 입력해주세요.</S.Top>
        <S.Mid>필수항목</S.Mid>
        <S.InputContainer>
          <S.InputWrapper>
            <label>아이디</label>
            <input placeholder='사용할 아이디를 입력해주세요.' />
            <div>에러메세지</div>
            <button>중복확인</button>
          </S.InputWrapper>
          <S.InputWrapper>
            <label>비밀번호</label>
            <input type='password' placeholder='사용할 비밀번호를 입력해주세요.' />
            <div>에러메세지</div>
          </S.InputWrapper>
          <S.InputWrapper>
            <label>비밀번호 확인</label>
            <input type='password' placeholder='사용할 비밀번호를 확인해주세요.' />
            <div>에러메세지</div>
          </S.InputWrapper>
          <S.InputWrapper>
            <label>이메일</label>
            <input placeholder='이메일은 아이디/비밀번호 찾기에 사용됩니다.' />
            <div>에러메세지</div>
          </S.InputWrapper>
          <S.BtnWrapper>
            <S.Btn>취소</S.Btn>
            <S.Btn>다음</S.Btn>
          </S.BtnWrapper>
        </S.InputContainer>
      </S.Wrapper>
    </S.Container>
  );
};
