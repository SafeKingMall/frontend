/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style';

export const MyPageMenu = () => {
  const activeStyle = {
    color: '#289951',
    fontWeight: 700,
  };
  return (
    <div>
      <S.Wrapper>
        <div>마이페이지</div>
        <ul>
          <li>
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/mypage'>
              내 정보
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/mypage-od'>
              주문내역
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/mypage-rf'>
              환불내역
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/mypage-pw'>
              비밀번호 변경
            </NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to='/mypage-wd'>
              회원 탈퇴
            </NavLink>
          </li>
        </ul>
      </S.Wrapper>
    </div>
  );
};
