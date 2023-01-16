import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';

export const Header = () => {
  return (
    <div>
      <S.Wrapper>
        <S.Logo></S.Logo>
        <S.Menu>
          <S.MenuList>
            <Link to='/itemlist-serious'>예방상품리스트</Link>
          </S.MenuList>
          <S.MenuList>
            <Link to='/notice'>공지사항</Link>
          </S.MenuList>
          <S.MenuList>
            <Link to='/qna'>문의하기</Link>
          </S.MenuList>
          <S.MenuList>
            <Link to='/estimate'>견적서 요청</Link>
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
