import React from 'react';
import { useState } from 'react';
import * as S from './style';
import { QnAList } from '../../components/QnA/QnAList';
import { Footer } from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../../components/often/pagination';
import db from '../../db.json';
import { Searchcompo } from '../../components/often/Searchcompo';

export const QnA = () => {
  const navigate = useNavigate();
  const data1 = db.QnAcontent;
  const data = [...data1].reverse();

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
        <QnAList currentItems={currentItems} />
        <S.QnAButton onClick={() => navigate('/qna-wr')}>글쓰기</S.QnAButton>
        <Pagination
          data={data}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
          itemsPerPage={itemsPerPage}
          pageNumberLimit={pageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          setmaxPageNumberLimit={setmaxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          setminPageNumberLimit={setminPageNumberLimit}
          indexOfLastItem={indexOfLastItem}
          indexOfFirstItem={indexOfFirstItem}
          currentItems={currentItems}
        />
      </S.Wrapper>
      <Footer />
    </div>
  );
};
