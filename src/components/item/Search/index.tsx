import React, { useState } from 'react';
import * as S from './style';
import { AiOutlineSearch } from 'react-icons/ai';

export const Search = (props: any) => {
  const setSort = props.setSort;
  const selectSort = props.selectSort;
  const setSelectSort = props.setSelectSort;
  const setSearchItem = props.setSearchItem;
  const searchWord = props.searchWord;
  const [searchText, setSearchText] = useState('');
  const sortChange = (e: any) => {
    // if (e.target.value === '최신 순') {
    //   setSort(`sort=createDate,desc&sort=name,asc`);
    //   setSelectSort('최신 순');
    // } else if (e.target.value === '이름 순') {
    //   setSort(`sort=name,asc&sort=id,asc`);
    //   setSelectSort('이름 순');
    // } else if (e.target.value === '가격 낮은 순') {
    //   setSort(`sort=viewPrice,asc&sort=name,asc`);
    //   setSelectSort('가격 낮은 순');
    // } else if (e.target.value === '가격 높은 순') {
    //   setSort(`sort=viewPrice,desc&sort=name,asc`);
    //   setSelectSort('가격 높은 순');
    // }
    if (e.target.value === '가격 높은 순') {
      setSort(`sort=viewPrice,desc&sort=name,asc`);
      setSelectSort('가격 높은 순');
    } else if (e.target.value === '가격 낮은 순') {
      setSort(`sort=viewPrice,asc&sort=name,asc`);
      setSelectSort('가격 낮은 순');
    } else if (e.target.value === '최신 순') {
      setSort(`sort=createDate,desc&sort=name,asc`);
      setSelectSort('최신 순');
    } else if (e.target.value === '이름 순') {
      setSort(`sort=name,asc&sort=id,asc`);
      setSelectSort('이름 순');
    }
  };

  const onChangeText = (e: any) => {
    setSearchText(e.target.value);
  };
  const onKeyDownEnter = (e: any) => {
    if (e.key === 'Enter') {
      search();
      e.target.blur();
    }
  };
  const search = () => {
    setSearchItem(searchText);
    searchWord.current = searchText;
  };
  return (
    <S.Container>
      <S.SearchArea>
        <S.Select onChange={(e) => sortChange(e)} value={selectSort}>
          {/* <option value='최신 순'>최신 순</option>
          <option value='이름 순'>이름 순</option>
          <option value='가격 낮은 순'>가격 낮은 순</option>
          <option value='가격 높은 순'>가격 높은 순</option> */}
          <option value='가격 높은 순'>가격 높은 순</option>
          <option value='가격 낮은 순'>가격 낮은 순</option>
          <option value='최신 순'>최신 순</option>
          <option value='이름 순'>이름 순</option>
        </S.Select>
        <S.SearchBar
          id='searchBar'
          type='text'
          defaultValue={searchWord.current}
          placeholder='검색어를 입력해주세요'
          onChange={(e) => onChangeText(e)}
          onKeyDown={(e) => onKeyDownEnter(e)}
        ></S.SearchBar>
        <S.SearchBtn onClick={() => search()}>
          <AiOutlineSearch size='2.8rem' color='#ffffff' />
        </S.SearchBtn>
      </S.SearchArea>
    </S.Container>
  );
};
