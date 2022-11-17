import React from 'react';
import * as S from './style';
import { AiOutlineSearch } from 'react-icons/ai';

export const Search = (props: any) => {
  // let data = props.data;
  // const [sortState, setSortState] = useState('최신 순');
  // const sortChange = (e: any) => {
  //   setSortState(e.target.value);
  // };
  // if (sortState === '최신 순') {
  //   data = [...data].reverse();
  // } else if (sortState === '이름 순') {
  //   data = [...data].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  // } else if (sortState === '가격 낮은 순') {
  //   data = [...data].sort((a, b) => a.price - b.price);
  // } else if (sortState === '가격 높은 순') {
  //   data = [...data].sort((a, b) => b.price - a.price);
  // }
  return (
    <S.Container>
      <S.SearchArea>
        <S.Select>
          <option value='최신 순'>최신 순</option>
          <option value='이름 순'>이름 순</option>
          <option value='가격 낮은 순'>가격 낮은 순</option>
          <option value='가격 높은 순'>가격 높은 순</option>
        </S.Select>
        <S.SearchBar type='text' placeholder='검색어를 입력해주세요'></S.SearchBar>
        <button
          style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: '#289951',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AiOutlineSearch size='2.8rem' color='#ffffff' />
        </button>
      </S.SearchArea>
    </S.Container>
  );
};
