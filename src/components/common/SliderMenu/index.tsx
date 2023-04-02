/* eslint-disable */
import React, { useRef, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Cookies } from 'react-cookie';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { categoryContext } from '../../../store/categoryStore';

export const SliderMenu = (props: any) => {
  const context = useContext(categoryContext);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const sliderToggle = props.sliderToggle;
  const setSliderToggle = props.setSliderToggle;
  const loginUser = useRef(cookies.get('loginUser'));

  useEffect(() => {
    if (context) {
      setCategory(context);
    }
  }, [context]);

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
  };

  //openMenuToggle
  const [itemListToggle, setItemListToggle] = useState(location.pathname.includes('/itemlist') ? true : false);
  const [mypageToggle, setMypageToggle] = useState(location.pathname.includes('/mypage') ? true : false);
  const ItemListEvent = () => {
    setItemListToggle(!itemListToggle);
    setMypageToggle(false);
  };
  const mypageEvent = () => {
    setMypageToggle(!mypageToggle);
    setItemListToggle(false);
  };

  return (
    <>
      <S.SliderBackgorund sliderToggle={sliderToggle} onClick={() => sliderClose()} />
      <S.Container sliderToggle={sliderToggle}>
        <S.LogoArea onClick={() => moveLocation('/')}>
          <S.Logo />
        </S.LogoArea>
        <S.MenuUl>
          <S.MenuLi style={{ height: itemListToggle ? '6.8rem' : '2rem' }}>
            <S.MenuText onClick={() => ItemListEvent()}>
              <span>예방상품리스트</span>
              <span style={{ transform: itemListToggle ? 'rotate(180deg)' : '' }}><AiOutlineCaretDown /></span>
            </S.MenuText>
            <S.OpenMenuUl>
              {category.map((el: any, idx: number) => {
                return (
                  <S.OpenMenuLi
                    key={el.id}
                    onClick={() => moveLocation(`/itemlist-${idx + 1}`)}
                    style={{ color: location.pathname === `/itemlist-${idx + 1}` ? '#289951' : '' }}
                  >
                    - {el.name}
                  </S.OpenMenuLi>
                )
              })}
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
              <S.OpenMenuLi
                onClick={() => moveLocation('/mypage')}
                style={{ color: location.pathname === '/mypage' ? '#289951' : '' }}
              >
                - 내 정보
              </S.OpenMenuLi>
              <S.OpenMenuLi
                onClick={() => moveLocation('/mypage-od')}
                style={{ color: location.pathname === '/mypage-od' ? '#289951' : '' }}
              >
                - 주문내역
              </S.OpenMenuLi>
              <S.OpenMenuLi
                onClick={() => moveLocation('/mypage-rf')}
                style={{ color: location.pathname === '/mypage-rf' ? '#289951' : '' }}
              >
                - 환불내역
              </S.OpenMenuLi>
              <S.OpenMenuLi
                onClick={() => moveLocation('/mypage-pw')}
                style={{ color: location.pathname === '/mypage-pw' ? '#289951' : '' }}
              >
                - 비밀번호 변경
              </S.OpenMenuLi>
              <S.OpenMenuLi
                onClick={() => moveLocation('/mypage-wd')}
                style={{ color: location.pathname === '/mypage-wd' ? '#289951' : '' }}
              >
                - 회원 탈퇴
              </S.OpenMenuLi>
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
