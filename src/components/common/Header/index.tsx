/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { HiOutlineMenu } from 'react-icons/hi';
import { SliderMenu } from '../SliderMenu';

export const Header = () => {
  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const loginUser = useRef(cookies.get('loginUser'));
  const location = useLocation();
  const [sliderToggle, setSliderToggle] = useState(false);

  const moveLocation = (path: string) => {
    if (path === location.pathname) {
      window.location.reload();
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    loginUser.current = cookies.get('loginUser');
  });

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
          moveLocation('/');
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
      <S.MenuBtnArea onClick={() => openSlider()}>
        <HiOutlineMenu size='1rem' color='#212121' style={{ marginLeft: '0.8rem' }} />
      </S.MenuBtnArea>
      <S.LogoArea>
        <S.Logo onClick={() => moveLocation('/')} />
      </S.LogoArea>
      <S.NavArea>
        <S.Nav onClick={() => moveLocation('/itemlist-1')}>예방상품리스트</S.Nav>
        <S.Nav onClick={() => moveLocation('/notice')}>공지사항</S.Nav>
        <S.Nav onClick={() => moveLocation('/qna')}>문의하기</S.Nav>
        <S.Nav onClick={() => moveLocation('/estimate')}>견적서 요청</S.Nav>
      </S.NavArea>
      <S.UserContentArea>
        <S.UserContentBox>
          {loginUser.current ? (
            loginUser.current === 'admin') ? (
            <S.GreenBtn onClick={() => moveLocation('/admin-member')}>관리자모드</S.GreenBtn>
          ) : (
            <S.IconBox>
              <S.IconWrap>
                <AiOutlineUser size='100%' onClick={() => moveLocation('/mypage')} style={{ cursor: 'pointer' }} />
              </S.IconWrap>
              <S.IconWrap>
                <AiOutlineShopping size='100%' onClick={() => moveLocation('/carts')} style={{ cursor: 'pointer' }} />
              </S.IconWrap>
            </S.IconBox>
          ) : (
            ''
          )}
          {loginUser.current ? (
            <S.GrayBtn onClick={() => logout()}>로그아웃</S.GrayBtn>
          ) : (
            <S.GreenBtn onClick={() => navigate('/sign-in')}>로그인</S.GreenBtn>
          )}
        </S.UserContentBox>
      </S.UserContentArea>
    </S.Container>
  );
};
