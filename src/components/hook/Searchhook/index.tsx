import React from 'react';
import * as S from './style';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchhook = (props: any) => {
  const searchlist = props.searchlist;

  const Optionlist = (searchlist: any) => {
    return (
      <S.Select>
        {searchlist.map((el: any, index: any) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          );
        })}
      </S.Select>
    );
  };
  return (
    <S.Container>
      <S.SearchArea>
        {Optionlist(searchlist)}
        <S.SearchBar type='text' placeholder='검색어를 입력해주세요'></S.SearchBar>
        <S.Searchbutton>
          <AiOutlineSearch size='2.8rem' color='#ffffff' />
        </S.Searchbutton>
      </S.SearchArea>
    </S.Container>
  );
};
