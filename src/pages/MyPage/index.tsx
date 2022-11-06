import React from 'react';
import * as S from './style';
import { MyPageMenu } from '../../components';

export const MyPage = () => {
  return (
    <S.Container>
      <MyPageMenu />
      <S.Wrapper>
        <S.Top>내 정보</S.Top>
        <S.MyWrapper>
          <S.MyText>기본정보(필수)</S.MyText>
        </S.MyWrapper>
        <S.Test>
          <S.MyList>
            <S.MyListSub>이름</S.MyListSub>
            <S.MyListCon>name</S.MyListCon>
          </S.MyList>
          <S.MyList>
            <S.MyListSub>연락처</S.MyListSub>
            <S.MyListCon>010-1234-5678</S.MyListCon>
          </S.MyList>
        </S.Test>
        <S.Test>
          <S.MyList>
            <S.MyListSub>아이디</S.MyListSub>
            <S.MyListCon>ididididididid</S.MyListCon>
          </S.MyList>
          <S.MyList>
            <S.MyListSub>생년월일</S.MyListSub>
            <S.MyListCon>2022년 2월 22일</S.MyListCon>
          </S.MyList>
        </S.Test>
        <S.Tests>
          <S.MyLists>
            <S.MyListSubs>주소</S.MyListSubs>
            <S.MyListCon>name</S.MyListCon>
          </S.MyLists>
        </S.Tests>
        <S.MyBtn>주소찾기</S.MyBtn>
      </S.Wrapper>
    </S.Container>
  );
};
