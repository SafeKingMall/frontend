import React, { useState } from 'react';
import * as S from './style';
import db from '../../db.json';
import { NoticeList } from '../../components/notice/NoticeList';
import { Footer } from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../../components/hook/pagination';
import { Searchhook } from '../../components/hook/Searchhook';

export const Notice = () => {
  const data1 = db.noticecontents;
  const data = [...data1].reverse();
  const navigate = useNavigate();

  const [currentItems, setCurrentItems] = useState([]);

  const parentFunction = (x: any) => {
    return setCurrentItems(x);
  };

  const searchlist = ['제목', '작성일'];

  return (
    <div>
      <div>
        <S.Banner>Notice</S.Banner>
      </div>
      <S.Wrapper>
        <Searchhook searchlist={searchlist} />
        <S.Noticetitle>
          <div>No</div>
          <div>제목</div>
          <div>등록일</div>
        </S.Noticetitle>
        <NoticeList data={data} currentItems={currentItems} />
        <S.NoticeButton onClick={() => navigate('/notice-wr')}>글쓰기</S.NoticeButton>
        <Pagination data={data} parentFunction={parentFunction} />
      </S.Wrapper>
      <Footer />
    </div>
  );
};
