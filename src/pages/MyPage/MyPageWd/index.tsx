import React from 'react';
import * as S from './style';

export const MyPageWd = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Top>회원 탈퇴</S.Top>
        <S.Area1>임시칼라박스임시칼라박스임시칼라박스임시칼라박스임시칼라박스</S.Area1>
        <S.Mid>유의사항</S.Mid>
        <S.Area2>임시칼라박스임시칼라박스임시칼라박스임시칼라박스임시칼라박스</S.Area2>
        <S.Wrapper3>
          <S.Mid>탈퇴사유</S.Mid>
          <input placeholder='탈퇴사유를 선택해주세요.' />
        </S.Wrapper3>
        <S.InputWrap>
          <div>아이디</div>
          <input />
        </S.InputWrap>
        <S.InputWrap>
          <div>비밀번호</div>
          <input placeholder='비밀번호를 입력해주세요.' />
        </S.InputWrap>
        <S.ErrMsg>* 비밀번호를 입력하셔야 탈퇴가 가능합니다.</S.ErrMsg>
        {/* 에러메세지 추후 스크립트 수정 예정 */}
        <S.Btn>탈퇴하기</S.Btn>
      </S.Wrapper>
    </S.Container>
  );
};
