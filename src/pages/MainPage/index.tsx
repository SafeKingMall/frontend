/* eslint-disable */
import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const test = () => {
    console.log('test');
  };
  return (
    <div>
      <div>
        <S.Banner>
          안전을 위한 스마트한 안전관리 솔루션
          <br />
          (추후 이미지변경예정이라 칼라박스로 대체합니다)
          <S.BannerNotice>
            <div>공지사항 </div>
            <div>임시css임시css임시css임시css임시css임시css임시css임시css</div>
            <div>◁ | ▷</div>
          </S.BannerNotice>
        </S.Banner>
      </div>
      <S.Wrapper>
        <div>
          <S.Top>주력상품</S.Top>
          <S.TempItemList>상품페이지</S.TempItemList>
        </div>
        <div>
          <S.Top>메인 카테고리</S.Top>
          <S.Category>
            <S.CateList>중대사고예방</S.CateList>
            <S.CateList>화재사고예방</S.CateList>
            <S.CateList>누출사고예방</S.CateList>
            <S.CateList>해양사고예방</S.CateList>
            <S.CateList>안전사고예방</S.CateList>
          </S.Category>
          <S.CateWrap>
            <S.Mid>카테고리명</S.Mid>
            <S.More onClick={test}>더보기 +</S.More>
          </S.CateWrap>
          <S.TempItemList>상품페이지</S.TempItemList>
        </div>
      </S.Wrapper>
    </div>
  );
};
