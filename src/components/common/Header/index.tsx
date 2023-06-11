/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { HiOutlineMenu } from 'react-icons/hi';
import { SliderMenu } from '../SliderMenu';

let currentPath = '';

export const Header = () => {
  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const loginUser = useRef(cookies.get('loginUser'));
  const location = useLocation();
  const [sliderToggle, setSliderToggle] = useState(false);

  useEffect(() => {
    if (currentPath === location.pathname) window.location.reload();

    currentPath = location.pathname;
  }, [location]);

  // const moveLocation = (path: string) => {
  //   if (path === location.pathname) {
  //     window.location.reload();
  //   } else {
  //     navigate(path);
  //   }
  // };

  const logout = () => {
    swal
      .fire({
        heightAuto: false,
        icon: 'question',
        text: '로그아웃하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          cookies.remove('accessToken');
          cookies.remove('refreshToken');
          cookies.remove('loginUser');
          navigate('/');
        }
      });
  };

  const openSlider = () => {
    setSliderToggle(true);
    document.body.style.cssText = 'overflow-y: hidden; width: 100%;';
  };
  return (
    <S.Container>
      <SliderMenu sliderToggle={sliderToggle} setSliderToggle={setSliderToggle} />
      <S.MenuBtnArea>
        <HiOutlineMenu
          size='1rem'
          color='#212121'
          onClick={() => openSlider()}
        />
      </S.MenuBtnArea>
      <S.LogoArea>
        <S.StyledLink to={'/'}>
          <S.Logo />
        </S.StyledLink>
      </S.LogoArea>
      <S.NavArea>
        <S.Nav><S.NavLink to={'/itemlist-1'}>예방상품리스트</S.NavLink></S.Nav>
        <S.Nav><S.NavLink to={'/notice'}>공지사항</S.NavLink></S.Nav>
        <S.Nav><S.NavLink to={'/qna'}>문의하기</S.NavLink></S.Nav>
        <S.Nav><S.NavLink to={'/estimate'}>견적서 요청</S.NavLink></S.Nav>
      </S.NavArea>
      <S.UserContentArea>
        <S.UserContentBox>
          {loginUser.current ? (
            loginUser.current === 'admin') ? (
            <S.GreenBtn>
              <S.StyledLink to={'/admin-member'} style={{ color: '#ffffff' }}>
                관리자모드
              </S.StyledLink>
            </S.GreenBtn>
          ) : (
            <S.IconBox>
              <S.IconWrap>
                <S.StyledLink to={'/mypage'}>
                  <AiOutlineUser size='100%' />
                </S.StyledLink>
              </S.IconWrap>
              <S.IconWrap>
                <S.StyledLink to={'/carts'}>
                  <AiOutlineShopping size='100%' />
                </S.StyledLink>
              </S.IconWrap>
            </S.IconBox>
          ) : (
            ''
          )}
          {loginUser.current ? (
            <S.GrayBtn onClick={() => logout()}>로그아웃</S.GrayBtn>
          ) : (
            <S.GreenBtn>
              <S.StyledLink to={'/sign-in'} style={{ color: '#ffffff' }}>
                로그인
              </S.StyledLink>
            </S.GreenBtn>
          )}
        </S.UserContentBox>
      </S.UserContentArea>
    </S.Container>
  );
};
