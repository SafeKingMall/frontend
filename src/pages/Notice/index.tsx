import React from 'react';
import * as S from './style';
import { NoticeList } from '../../components/notice/NoticeList';
import { Footer } from '../../components/common/Footer';
// import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';

export const Notice = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>
        <S.Banner>공지사항</S.Banner>
      </div>
      <S.Wrapper>
        <NoticeList />
        {/* <S.NoticeButton onClick={() => navigate('/notice-wr')}>글쓰기</S.NoticeButton> */}
      </S.Wrapper>
      <Footer />
    </div>
  );
};
