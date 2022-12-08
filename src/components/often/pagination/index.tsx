import { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import * as S from './style';
import React from 'react';

export const Pagination = (props: any) => {
  const data = props.data;
  const parentFunction = props.parentFunction;
  const numberColor = '#289951';
  const numbertxtColor = 'white';
  const totalColor = {
    backgroundColor: numberColor,
    color: numbertxtColor,
  };

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

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
  useEffect(() => {
    parentFunction(currentItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  );
};
