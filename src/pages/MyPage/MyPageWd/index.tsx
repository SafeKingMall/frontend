/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { WithdrawInfo } from '../../../components/user/WithdrawInfo';
import { WithdrawInfo2 } from '../../../components/user/WithdrawInfo2';
import * as S from './style';

export const MyPageWd = () => {
  //id, password
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //에러메세지
  const [idMsg, setIdMsg] = useState<string>('');
  const [passwordMsg, setPasswordMsg] = useState<string>('');
  //유효성
  const [isId, setIsId] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  //id
  const onId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const idCurrent = e.target.value;
    setId(idCurrent);

    if (idCurrent === '') {
      setIdMsg('아이디를 입력해주세요');
      setIsId(false);
    } else {
      setIdMsg('');
      setIsId(true);
    }
  };
  //pw
  const onPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pwCurrent = e.target.value;
    setPassword(pwCurrent);

    if (pwCurrent === '') {
      setPasswordMsg('비밀번호를 입력해주세요');
      setIsPassword(false);
    } else {
      setPasswordMsg('');
      setIsPassword(true);
    }
  };
  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  //submit
  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('click', id, password);
    try {
      await axios
        .post(
          'http://safekingmall.com/api/v1/user/withdrawal',
          { inputUsername: id, password },
          {
            headers: {
              Authorization: token,
            },
          },
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert('탈퇴완료');
            console.log('탈완');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  //disabled btn
  const disabled = !(isId && isPassword);
  return (
    <>
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
        </div>
        <S.Wrapper>
          <S.Top>회원 탈퇴</S.Top>
          {/* <S.Area1>임시칼라박스임시칼라박스임시칼라박스임시칼라박스임시칼라박스</S.Area1> */}
          <S.AreaWrap>
            <S.Mid>회원탈퇴 약관</S.Mid>
            <WithdrawInfo />
          </S.AreaWrap>
          <S.AreaWrap>
            <S.Mid>유의사항</S.Mid>
            <WithdrawInfo2 />
          </S.AreaWrap>
          <form>
            <S.AreaWrap>
              <S.Mid>탈퇴사유</S.Mid>
              <S.InputWrapper>
                <div>
                  <label>아이디</label>
                  <input placeholder='고객님의 아이디를 입력해주세요.' onChange={onId} />
                  <S.ErrMsg>{idMsg}</S.ErrMsg>
                </div>
                <div>
                  <label>비밀번호</label>
                  <input
                    type='password'
                    autoComplete='false'
                    placeholder='고객님의 비밀번호를 입력해주세요.'
                    onChange={onPw}
                  />
                  <S.ErrMsg>{passwordMsg}</S.ErrMsg>
                </div>
                <S.ErrInfo>* 고객 정보를 모두 입력하셔야 탈퇴가 가능합니다.</S.ErrInfo>
              </S.InputWrapper>
              <S.Btn disabled={disabled} onClick={onSubmit}>
                탈퇴하기
              </S.Btn>
            </S.AreaWrap>
          </form>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
