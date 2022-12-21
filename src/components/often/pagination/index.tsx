import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import * as S from './style';
import React from 'react';

export const Pagination = (props: any) => {
  const numberColor = '#289951';
  const numbertxtColor = 'white';
  const totalColor = {
    backgroundColor: numberColor,
    color: numbertxtColor,
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(props.data.length / props.itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event: any) => {
    props.setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map((number: any) => {
    if (number < props.maxPageNumberLimit + 1 && number > props.minPageNumberLimit) {
      return (
        <S.Paging2
          key={number}
          id={number}
          onClick={handleClick}
          style={number === props.currentPage ? totalColor : {}}
        >
          {number}
        </S.Paging2>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    props.setCurrentPage(props.currentPage + 1);

    if (props.currentPage + 1 > props.maxPageNumberLimit) {
      props.setMaxPageNumberLimit(props.maxPageNumberLimit + props.pageNumberLimit);
      props.setMinPageNumberLimit(props.minPageNumberLimit + props.pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    props.setCurrentPage(props.currentPage - 1);

    if ((props.currentPage - 1) % props.pageNumberLimit === 0) {
      props.setMaxPageNumberLimit(props.maxPageNumberLimit - props.pageNumberLimit);
      props.setMinPageNumberLimit(props.minPageNumberLimit - props.pageNumberLimit);
    }
  };

  return (
    <S.PageNumbers>
      <S.LiPageNumbers>
        <S.ButtonPageNumbers
          onClick={handlePrevbtn}
          disabled={props.currentPage === pages[0] ? true : false}
        >
          <AiOutlineLeft size='30' />
        </S.ButtonPageNumbers>
      </S.LiPageNumbers>
      {renderPageNumbers}
      <S.LiPageNumbers>
        <S.ButtonPageNumbers
          onClick={handleNextbtn}
          disabled={props.currentPage === pages[pages.length - 1] ? true : false}
        >
          <AiOutlineRight size='30' />
        </S.ButtonPageNumbers>
      </S.LiPageNumbers>
    </S.PageNumbers>
  );
};