import React, { useState } from 'react';
import * as S from './style';
import db from '../../db.json';
import { QnAList } from '../../components/QnA/QnAList';
import { Footer } from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../../components/often/pagination';
import { Searchcompo } from '../../components/often/Searchcompo';

export const QnA = () => {
  const data1 = db.QnAcontent;
  const data = [...data1].reverse();
  const navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState([]);

  const parentFunction = (x: any) => {
    return setCurrentItems(x);
  };

  const searchlist = ['제목', '작성자', '등록일'];

  return (
    <div>
      <div>
        <S.Banner>QnA</S.Banner>
      </div>
      <S.Wrapper>
        <Searchcompo searchlist={searchlist} />
        <S.QnAtitle>
          <div>No</div>
          <div>제목</div>
          <div>작성자</div>
          <div>등록일</div>
        </S.QnAtitle>
        <QnAList data={data} currentItems={currentItems} />
        <S.QnAButton onClick={() => navigate('/qna-wr')}>글쓰기</S.QnAButton>
        <Pagination data={data} parentFunction={parentFunction} />
      </S.Wrapper>
      <Footer />
    </div>
  );
};
