/* eslint-disable */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { GrUserAdmin } from 'react-icons/gr';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const Header = () => {
  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  const loginUser = cookies.get('loginUser');
  const logout = () => {
    swal
      .fire({
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
  return (
    <S.Container>
      <S.LogoArea>
        <S.Logo onClick={() => navigate('/')} />
      </S.LogoArea>
      <S.NavArea>
        <S.Nav onClick={() => navigate('/itemlist-1')}>예방상품리스트</S.Nav>
        <S.Nav onClick={() => navigate('/notice')}>공지사항</S.Nav>
        <S.Nav onClick={() => navigate('/qna')}>문의하기</S.Nav>
        <S.Nav onClick={() => navigate('/estimate')}>견적서 요청</S.Nav>
      </S.NavArea>
      <S.UserContentArea>
        <S.UserContentBox>
          {loginUser ? (
            loginUser === 'admin') ? (
            <S.GreenBtn onClick={() => navigate('/admin-member')}>관리자모드</S.GreenBtn>
          ) : (
            <S.IconBox>
              <AiOutlineUser size='3rem' onClick={() => navigate('/mypage')} style={{ cursor: 'pointer' }} />
              <AiOutlineShopping size='3rem' onClick={() => navigate('/carts')} style={{ cursor: 'pointer' }} />
            </S.IconBox>
          ) : (
            ''
          )}
          {loginUser ? (
            <S.GrayBtn onClick={() => logout()}>로그아웃</S.GrayBtn>
          ) : (
            <S.GreenBtn onClick={() => navigate('/sign-in')}>로그인</S.GreenBtn>
          )}
        </S.UserContentBox>
      </S.UserContentArea>
    </S.Container>
  );
};
