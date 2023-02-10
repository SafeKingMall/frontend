/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { GrUserAdmin } from 'react-icons/gr';
import { Cookies } from 'react-cookie';

export const Header = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  const admin = cookies.get('admin');
  const user = cookies.get('user');
  const logout = () => {
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
    cookies.remove('admin');
    cookies.remove('user');
    navigate('/');
  };

  if (admin) {
    return (
      <>
        <S.Wrapper>
          <S.Logo onClick={() => navigate('/')}></S.Logo>
          <S.Menu>
            <S.MenuList>
              <Link to='/itemlist-1'>예방상품리스트</Link>
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
              <Link to='/admin-member'>
                <GrUserAdmin />
              </Link>
            </S.IconList>
            <S.IconList>
              <Link to='/carts'>
                <AiOutlineShopping />
              </Link>
            </S.IconList>
            <S.IconList>
              <FiLogOut onClick={logout} />
            </S.IconList>
          </S.MenuIcons>
        </S.Wrapper>
      </>
    );
  } else if (token || user) {
    return (
      <>
        <S.Wrapper>
          <S.Logo onClick={() => navigate('/')}></S.Logo>
          <S.Menu>
            <S.MenuList>
              <Link to='/itemlist-1'>예방상품리스트</Link>
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
              <Link to='/carts'>
                <AiOutlineShopping />
              </Link>
            </S.IconList>
            <S.IconList>
              <FiLogOut onClick={logout} />
            </S.IconList>
          </S.MenuIcons>
        </S.Wrapper>
      </>
    );
  }

  return (
    <>
      <S.Wrapper>
        <S.Logo onClick={() => navigate('/')}></S.Logo>
        <S.Menu>
          <S.MenuList>
            <Link to='/itemlist-1'>예방상품리스트</Link>
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
          {/* <S.IconList>
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
          </S.IconList> */}
          <FiLogIn onClick={() => navigate('/sign-in')} style={{ color: '#289951' }} />
        </S.MenuIcons>
      </S.Wrapper>
    </>
  );
};
