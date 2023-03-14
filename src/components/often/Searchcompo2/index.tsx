import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Pagination } from '../pagination';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useMediaQuery } from 'react-responsive';
import '../../../css/alert.css';

const swal = withReactContent(Swal);

export const Searchcompo2 = (props: any) => {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:720px)' });
  //현재페이지
  const [currentPage, setCurrentPage] = useState(props.page + 1);
  //페이지당 보여지는 리스트
  const [itemsPerPage] = useState(props.size);

  //브라우저상 보여지는 한계 숫자
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const onChangeText = (e: any) => {
    if (props.filter === '') {
      swal.fire({
        icon: 'warning',
        text: '체크박스를 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      props.setSearchText(e.target.value);
    }
  };
  const onKeyDownEnter = (e: any) => {
    if (e.key === 'Enter') {
      props.search();
      e.target.blur();
    }
  };

  const searchClick = () => {
    setCurrentPage(1);
    props.setPage(0);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.SearchArea>
          {props.optionList()}
          <S.SearchBar
            type='text'
            name='search-form'
            id='search-form'
            placeholder='Search for...'
            onClick={searchClick}
            onChange={(e) => onChangeText(e)}
            onKeyDown={(e) => onKeyDownEnter(e)}
            autoComplete='off'
          ></S.SearchBar>
          <S.SearchButton onClick={() => props.search()}>
            {isDesktopOrMobile !== true ? (
              <AiOutlineSearch size='2.8rem' color='#ffffff' />
            ) : (
              <AiOutlineSearch size='1rem' color='#ffffff' />
            )}
          </S.SearchButton>
        </S.SearchArea>
      </S.Container>
      <props.TitleList />
      {props.dataList2(props.data)}
      <Pagination
        data={props.data}
        totalPages={props.totalPages}
        page={props.page}
        setPage={props.setPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
      />
    </S.Wrapper>
  );
};
