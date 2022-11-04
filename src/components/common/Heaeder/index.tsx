import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';

export const Header = () => {
  return (
    <div>
      <S.Wrapper>
        <S.Logo>안전왕</S.Logo>
        <S.Menu>
          <S.MenuList>
            <Link to='/'>안전왕 정복</Link>
          </S.MenuList>
          <S.MenuList>
            <Link to='/itemlist'>예방상품 리스트</Link>
          </S.MenuList>
          <S.MenuList>
            <Link to='/qna'>문의하기</Link>
          </S.MenuList>
        </S.Menu>
        <S.MenuIcons>
          <S.IconList>
            <Link to='/mypage'>
              <AiOutlineUser />
            </Link>
          </S.IconList>
          <S.IconList>
            <Link to='/cart'>
              <AiOutlineShopping />
            </Link>
          </S.IconList>
          <S.IconList>
            <AiOutlineSearch />
          </S.IconList>
        </S.MenuIcons>
      </S.Wrapper>
    </div>
  );
};
