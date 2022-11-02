import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyPageMenu.module.css';

export const MyPageMenu = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.top}>마이페이지</div>
        <ul className={styles.menus}>
          <li>
            <Link to='/mypage'>내 정보 설정</Link>
          </li>
          <li>
            <Link to='/mypage-ac'>계정 설정</Link>
          </li>
          <li>
            <Link to='/mypage-pw'>비밀번호 변경</Link>
          </li>
          <li>
            <Link to='/mypage-wd'>회원 탈퇴</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
