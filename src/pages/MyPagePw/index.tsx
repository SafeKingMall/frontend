import React from 'react';
import * as S from './style';
import { MyPageMenu } from '../../components';

export const MyPagePw = () => {
  const test = () => {
    console.log('test');
  };
  return (
    <S.Container>
      <MyPageMenu />
      <S.Wrapper>
        <S.Top>비밀번호 변경</S.Top>
        <S.MyWrapper>
          <S.MyText>기존 비밀번호</S.MyText>
          <S.MyInput placeholder='기존 비밀번호를 입력해주세요.' />
        </S.MyWrapper>
        <S.MyWrapper>
          <S.MyText>변경 비밀번호</S.MyText>
          <S.MyInput placeholder='변경할 비밀번호를 입력해주세요.' />
        </S.MyWrapper>
        <S.MyWrapper>
          <S.MyText>비밀번호 재입력</S.MyText>
          <S.MyInput placeholder='변경할 비밀번호를 확인해주세요.' />
        </S.MyWrapper>
        <S.MyBtn onClick={test}>변경하기</S.MyBtn>
      </S.Wrapper>
    </S.Container>
  );
};
