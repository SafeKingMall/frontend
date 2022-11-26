import React from 'react';
import * as S from './style';
import { AiOutlineSearch } from 'react-icons/ai';

export const QnASearch = (props: any) => {
  return (
    <S.Container>
      <S.SearchArea>
        <S.Select>
          <option value='최신 순'>최신 순</option>
          <option value='이름 순'>이름 순</option>
        </S.Select>
        <S.SearchBar type='text' placeholder='검색어를 입력해주세요'></S.SearchBar>
        <S.Searchbutton>
          <AiOutlineSearch size='2.8rem' color='#ffffff' />
        </S.Searchbutton>
      </S.SearchArea>
    </S.Container>
  );
};
