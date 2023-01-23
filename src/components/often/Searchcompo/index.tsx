import React from 'react';
import * as S from './style';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Pagination } from '../pagination';

export const Searchcompo = (props: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [query, setQuery] = useState('');
  function search(data: any) {
    return data.filter(
      (item: any) =>
        Object.keys(item).includes(props.filter) &&
        item[props.filter].toString().toLowerCase().includes(query),
      // 대문자 소문자 적용하기
    );
  }

  const currentItems = search(props.data).slice(indexOfFirstItem, indexOfLastItem);
  const currentItems2 = props.data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <S.Wrapper>
      <S.Container>
        <S.SearchArea>
          {props.optionList(props.filterItems)}
          <S.SearchBar
            type='text'
            name='search-form'
            id='search-form'
            placeholder='Search for...'
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => setCurrentPage(1)}
            autoComplete='off'
          ></S.SearchBar>
          <S.SearchButton>
            <AiOutlineSearch size='2.8rem' color='#ffffff' />
          </S.SearchButton>
        </S.SearchArea>
      </S.Container>
      <props.TitleList />
      {props.filter === '' ? props.dataList2(currentItems2) : props.dataList2(currentItems)}
      <Pagination
        data={props.data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
        indexOfLastItem={indexOfLastItem}
        indexOfFirstItem={indexOfFirstItem}
        currentItems={currentItems}
      />
    </S.Wrapper>
  );
};
