/* eslint-disable */
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Cookies } from 'react-cookie';

export const SliderMenu = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const sliderToggle = props.sliderToggle;
  const setSliderToggle = props.setSliderToggle;
  const loginUser = useRef(cookies.get('loginUser'));

  const moveLocation = (path: string) => {
    if (path === location.pathname) {
      sliderClose();
      window.location.reload();
    } else {
      sliderClose();
      navigate(path);
    }
  };

  const sliderClose = () => {
    setSliderToggle(false);
    document.body.style.cssText = '';
  };

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
          setSliderToggle(false);
          cookies.remove('accessToken');
          cookies.remove('refreshToken');
          cookies.remove('loginUser');
          moveLocation('/');
        }
      });
  }

  return (
    <>
      <S.SliderBackgorund sliderToggle={sliderToggle} onClick={() => sliderClose()} />
      <S.Container sliderToggle={sliderToggle}>
        <S.LogoArea onClick={() => moveLocation('/')}>
          <S.Logo />
        </S.LogoArea>
        <S.MenuUl>
          <S.MenuLi onClick={() => moveLocation('/itemlist-1')}>예방상품리스트</S.MenuLi>
          <S.MenuLi onClick={() => moveLocation('/notice')}>공지사항</S.MenuLi>
          <S.MenuLi onClick={() => moveLocation('/qna')}>문의하기</S.MenuLi>
          <S.MenuLi onClick={() => moveLocation('/estimate')}>견적서 요청</S.MenuLi>
          <S.LogoutLi onClick={() => logout()} loginUser={loginUser.current}>로그아웃</S.LogoutLi>
        </S.MenuUl>
      </S.Container>
    </>
  );
};
