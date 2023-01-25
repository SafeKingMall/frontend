/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { Header } from '../../../components/common/Header';
import { Footer } from '../../../components/common/Footer';
import axios from 'axios';
import { Cookies } from 'react-cookie';

interface MyPagePwForm {
  password: string;
  newPassword: string;
  passwordCheck: string;
}

export const MyPagePw = () => {
  const test = () => {
    console.log('test');
  };
  //비밀번호, 새 비밀번호, 비밀번호 확인
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  //에러메세지
  const [passwordMsg, setPasswordMsg] = useState<string>('');
  const [newPasswordMsg, setNewPasswordMsg] = useState<string>('');
  const [passwordCheckMsg, setPasswordCheckMsg] = useState<string>('');
  // 유효성검사
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isNewPassword, setIsNewPassword] = useState<boolean>(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState<boolean>(false);

  //기존 비밀번호
  const onPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pwCurrent = e.target.value;
    setPassword(pwCurrent);

    if (pwCurrent === '') {
      setPasswordMsg('비밀번호를 입력해주세요');
      setIsPassword(false);
    }
    // else if (!pwRegex.test(pwCurrent)) {
    //   setPasswordMsg('영어/숫자/특수문자를 조합해주세요');
    //   setIsPassword(false);
    // }
    else {
      setPasswordMsg('');
      setIsPassword(true);
    }
  };
  //새로운 비밀번호
  const onNewPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPwCurrent = e.target.value;
    setNewPassword(newPwCurrent);

    if (newPwCurrent === '') {
      setNewPasswordMsg('비밀번호를 입력해주세요');
      setIsNewPassword(false);
    }
    // else if (!pwRegex.test(pwCurrent)) {
    //   setPasswordMsg('영어/숫자/특수문자를 조합해주세요');
    //   setIsPassword(false);
    // }
    else {
      setNewPasswordMsg('');
      setIsNewPassword(true);
    }
  };
  //비밀번호 확인
  const onPwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pwCheckCurrent = e.target.value;
    setPasswordCheck(pwCheckCurrent);

    if (pwCheckCurrent === '') {
      setPasswordCheckMsg('비밀번호 확인을 입력해주세요');
      setIsPasswordCheck(false);
    } else if (!(newPassword === pwCheckCurrent)) {
      setPasswordCheckMsg('비밀번호가 일치하지않습니다.');
      setIsPasswordCheck(false);
    } else {
      setPasswordCheckMsg('');
      setIsPasswordCheck(true);
    }
  };
  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('버튼클릭', password, newPassword, passwordCheck);
    try {
      await axios
        .patch(
          'http://safekingmall.com/api/v1/user/update/password',
          {
            previousPassword: password,
            password: newPassword,
          },
          {
            headers: {
              Authorization: token,
            },
          },
        )
        .then((res) => {
          console.log(res);
          if (res.data === 200) {
            console.log('비밀번호 변경 완료');
            alert('비밀번호 변경이 완료되었습니다.');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  //disabled btn
  const disabled = !(isPassword && isNewPassword && isPasswordCheck);
  return (
    <>
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
        </div>
        <S.Wrapper>
          <form>
            <S.Top>내 정보</S.Top>
            <S.BasicWrap>
              <S.Mid>기본정보</S.Mid>
              <div>
                <label>기존 비밀번호</label>
                <input
                  type='password'
                  autoComplete='false'
                  placeholder='기존 비밀번호를 입력해주세요'
                  onChange={onPw}
                />
                <S.ErrMsg>{passwordMsg}</S.ErrMsg>
              </div>
              <div>
                <label>새로운 비밀번호</label>
                <input
                  type='password'
                  autoComplete='false'
                  placeholder='영어/숫자/특수문자 중 2개 이상 사용해주세요.'
                  onChange={onNewPw}
                />
                <S.ErrMsg>{newPasswordMsg}</S.ErrMsg>
              </div>
              <div>
                <label>비밀번호 확인</label>
                <input
                  type='password'
                  autoComplete='false'
                  placeholder='영어/숫자/특수문자 중 2개 이상 사용해주세요.'
                  onChange={onPwCheck}
                />
                <S.ErrMsg>{passwordCheckMsg}</S.ErrMsg>
              </div>
              <S.MyBtn disabled={disabled} onClick={onSubmit}>
                변경하기
              </S.MyBtn>
            </S.BasicWrap>
          </form>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
