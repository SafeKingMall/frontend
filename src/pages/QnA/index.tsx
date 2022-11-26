import React from 'react';
import * as S from './style';
import db from '../../db.json';
import { QnAList } from '../../components/QnA/QnAList';
import { QnASearch } from '../../components/QnA/QnASearch/QnASearch';
import { Footer } from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const QnA = () => {
  const data1 = db.QnAcontent;
  const data = [...data1].reverse();
  const navigate = useNavigate();
  const numberColor = '#289951';
  const numbertxtColor = 'white';
  const totalColor = {
    backgroundColor: numberColor,
    color: numbertxtColor,
  };

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event: any) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number: any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <S.Paging2
          key={number}
          id={number}
          onClick={handleClick}
          style={number === currentPage ? totalColor : {}}
        >
          {number}
        </S.Paging2>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      <div>
        <S.Banner>QnA</S.Banner>
      </div>
      <S.Wrapper>
        <QnASearch />
        <S.QnAtitle>
          <div>No</div>
          <div>제목</div>
          <div>작성자</div>
          <div>등록일</div>
        </S.QnAtitle>
        <QnAList data={data} currentItems={currentItems} />
        <S.QnAButton onClick={() => navigate('/qna-pw')}>글쓰기</S.QnAButton>
        <S.pageNumbers>
          <S.lipageNumbers>
            <S.buttonpageNumbers
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              <AiOutlineLeft size='30' />
            </S.buttonpageNumbers>
          </S.lipageNumbers>
          {renderPageNumbers}
          <S.lipageNumbers>
            <S.buttonpageNumbers
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              <AiOutlineRight size='30' />
            </S.buttonpageNumbers>
          </S.lipageNumbers>
        </S.pageNumbers>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
