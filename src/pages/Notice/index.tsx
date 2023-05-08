import React from 'react';
import * as S from './style';
import { NoticeList } from '../../components/notice/NoticeList';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';
import { MetaTag } from '../../components/common/MetaTag';

export const Notice = () => {
  // const navigate = useNavigate();

  return (
    <>
      <MetaTag
        title={`공지사항 | 안전왕`}
        description={`안전왕, 공지사항`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/notice'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 공지사항`}
      />
      <div>
        <Header />
        <div>
          <S.Banner>공지사항</S.Banner>
        </div>
        <S.Wrapper>
          <NoticeList />
          {/* <S.NoticeButton onClick={() => navigate('/notice-wr')}>글쓰기</S.NoticeButton> */}
        </S.Wrapper>
      </div>
    </>
  );
};
