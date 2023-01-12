/* eslint-disable */
import React from 'react';
import * as S from './style';
import { MyPageMenu } from '../../components';

export const MyPage = () => {
  return (
    <S.Container>
      <div style={{ marginTop: 190 }}>
        <MyPageMenu />
      </div>
      <S.Wrapper>
        <S.Top>내 정보</S.Top>
        <S.BasicWrap>
          <S.Mid>기본정보</S.Mid>
          <div>
            <label>이름</label>
            <input placeholder='어쩌고저쩌고' />
          </div>
          <div>
            <label>아이디</label>
            <input />
          </div>
          <div>
            <label>생년월일</label>
            <input />
          </div>
        </S.BasicWrap>

        <S.BasicWrap>
          <S.Mid>회원정보</S.Mid>
          <div>
            <label>대표자명</label>
            <input />
          </div>
          <div>
            <label>연락처</label>
            <input />
          </div>
          <div>
            <label>사업자등록번호</label>
            <input />
          </div>
          <div>
            <label>법인등록번호</label>
            <input />
          </div>
        </S.BasicWrap>
        <S.BtnWrap>
          <button>취소</button>
          <button>수정하기</button>
        </S.BtnWrap>
      </S.Wrapper>
    </S.Container>
  );
};
