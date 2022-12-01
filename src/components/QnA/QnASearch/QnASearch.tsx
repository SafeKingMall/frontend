import React from 'react';
import * as S from './style';
import { AiOutlineSearch } from 'react-icons/ai';

export const QnASearch = (props: any) => {
  return (
    <S.Container>
      <S.SearchArea>
        <S.Select>
          <option value='제목'>제목</option>
          <option value='작성자'>작성자</option>
          <option value='등록일'>등록일</option>
        </S.Select>
        <S.SearchBar type='text' placeholder='검색어를 입력해주세요'></S.SearchBar>
        <S.Searchbutton>
          <AiOutlineSearch size='2.8rem' color='#ffffff' />
        </S.Searchbutton>
      </S.SearchArea>
    </S.Container>
  );
};
