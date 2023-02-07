/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import { Agreement } from '../../../components/user/Agreement';
import { PersonalInfo } from '../../../components/user/PersonalInfo';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp4 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  //쇼핑몰 이용약관
  const onAgreeCheck = () => {
    if (check1 === false) {
      setCheck1(true);
    } else {
      setCheck1(false);
    }
  };
  //개인정보 이용약관
  const onPersonalCheck = () => {
    if (check2 === false) {
      setCheck2(true);
    } else {
      setCheck2(false);
    }
  };
  //전체 동의
  const onAllCheck = () => {
    if (allCheck === false) {
      setCheck1(true);
      setCheck2(true);
    } else {
      setCheck1(false);
      setCheck2(false);
    }
  };
  useEffect(() => {
    if (check1 === true && check2 === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [check1, check2]);
  //btn disabled
  const disabled = !allCheck;
  //약관 자세히보기
  const test = () => {
    console.log('test');
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/signup/agreementInfo/${state.memberId}`, {
          userAgreement: check1,
          infoAgreement: check2,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert('회원가입이 완료되었습니다');
            navigate('/sign-in');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
          <S.Top></S.Top>
          <S.Mid>안전왕 쇼핑몰 약관</S.Mid>
          <S.AreaWrapper>
            <Agreement />
            <S.AreaText>
              <label>
                <input type='checkbox' checked={check1} onChange={onAgreeCheck} />
                안전왕 쇼핑몰 이용약관
              </label>
              <button onClick={test}>자세히 보기</button>
            </S.AreaText>
          </S.AreaWrapper>
          <S.AreaWrapper>
            <PersonalInfo />
            <S.AreaText>
              <label>
                <input type='checkbox' checked={check2} onChange={onPersonalCheck} />
                개인정보 수집·이용에 대한 동의
              </label>
              <button onClick={test}>자세히 보기</button>
            </S.AreaText>
          </S.AreaWrapper>
          <S.AllAgree>
            <label>
              <input type='checkbox' checked={allCheck} onChange={onAllCheck} />
              (전체동의) 위의 내용을 모두 읽었으며 이에 동의합니다.
            </label>
          </S.AllAgree>
          <S.BtnWrapper>
            <button onClick={() => navigate(-1)}>이전</button>
            <button disabled={disabled} onClick={onSubmit}>
              계정 생성
            </button>
          </S.BtnWrapper>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
