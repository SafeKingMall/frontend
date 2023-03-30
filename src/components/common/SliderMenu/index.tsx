/* eslint-disable */
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Cookies } from 'react-cookie';
import { AiOutlineCaretDown } from 'react-icons/ai';

export const SliderMenu = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const sliderToggle = props.sliderToggle;
  const setSliderToggle = props.setSliderToggle;
  const loginUser = useRef(cookies.get('loginUser'));

  //openMenuToggle
  const [itemListToggle, setItemListToggle] = useState(false);
  const [mypageToggle, setMypageToggle] = useState(false);
  const ItemListEvent = () => {
    setItemListToggle(!itemListToggle);
    setMypageToggle(false);
  };
  const mypageEvent = () => {
    setMypageToggle(!mypageToggle);
    setItemListToggle(false);
  };

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
          {/* <S.SmallTitle>menu</S.SmallTitle>
          <S.SmallTitleUnderLine /> */}
          <S.MenuLi style={{ height: itemListToggle ? '6.8rem' : '2rem' }}>
            <S.MenuText onClick={() => ItemListEvent()}>
              <span>예방상품리스트</span>
              <span style={{ transform: itemListToggle ? 'rotate(180deg)' : '' }}><AiOutlineCaretDown /></span>
            </S.MenuText>
            <S.OpenMenuUl>
              <S.OpenMenuLi>- 중대사고예방</S.OpenMenuLi>
              <S.OpenMenuLi>- 화재사고예방</S.OpenMenuLi>
              <S.OpenMenuLi>- 누출사고예방</S.OpenMenuLi>
              <S.OpenMenuLi>- 해양사고예방</S.OpenMenuLi>
            </S.OpenMenuUl>
          </S.MenuLi>
          <S.MenuLi onClick={() => moveLocation('/notice')}>
            <S.MenuText>공지사항</S.MenuText>
          </S.MenuLi>
          <S.MenuLi onClick={() => moveLocation('/qna')}>
            <S.MenuText>문의하기</S.MenuText>
          </S.MenuLi>
          <S.MenuLi onClick={() => moveLocation('/estimate')}>
            <S.MenuText>견적서 요청</S.MenuText>
          </S.MenuLi>
          <S.LoginLi style={{ height: mypageToggle ? '7.8rem' : '2rem' }} loginUser={loginUser.current}>
            <S.MenuText onClick={() => mypageEvent()}>
              <span>내 정보</span>
              <span style={{ transform: mypageToggle ? 'rotate(180deg)' : '' }}><AiOutlineCaretDown /></span>
            </S.MenuText>
            <S.OpenMenuUl>
              <S.OpenMenuLi onClick={() => moveLocation('/mypage')}>- 내 정보</S.OpenMenuLi>
              <S.OpenMenuLi onClick={() => moveLocation('/mypage-od')}>- 주문내역</S.OpenMenuLi>
              <S.OpenMenuLi onClick={() => moveLocation('/mypage-rf')}>- 환불내역</S.OpenMenuLi>
              <S.OpenMenuLi onClick={() => moveLocation('/mypage-pw')}>- 비밀번호 변경</S.OpenMenuLi>
              <S.OpenMenuLi onClick={() => moveLocation('/mypage-wd')}>- 회원 탈퇴</S.OpenMenuLi>
            </S.OpenMenuUl>
          </S.LoginLi>
          <S.LoginLi onClick={() => logout()} loginUser={loginUser.current}>
            <S.MenuText>로그아웃</S.MenuText>
          </S.LoginLi>
        </S.MenuUl>
      </S.Container>
    </>
  );
};
