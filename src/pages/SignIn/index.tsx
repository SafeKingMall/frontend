import React, { FC } from 'react';
import styles from './SignIn.module.css';
import { useNavigate } from 'react-router-dom';

export const SignIn: FC = () => {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/sign-up');
  };
  // const test = () => {
  //   console.log('test');
  // };
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.userInput}>
          <div className={styles.idWrap}>
            <label htmlFor='id'>아이디</label>
            <input type='text' className={styles.inputForm} />
          </div>
          <div className='password'>
            <label htmlFor='password'>패스워드</label>
            <input type='password' />
          </div>
        </div>
        <div className='idCheck'>
          <input type='checkbox' name='saveId' id='saveId' />
          ID 저장하기
        </div>
        <div>
          <button className={styles.btn}>로그인</button>
        </div>
        <div className={styles.navigate}>
          <span className={styles.span}>비밀번호 찾기</span> |
          <span className={styles.span} onClick={navigateSignUp}>
            회원가입
          </span>
        </div>
        <div className={styles.social}>
          <button className={styles.google}>구글</button>
          <button className={styles.kakao}>카카오</button>
        </div>
      </div>
    </div>
  );
};
