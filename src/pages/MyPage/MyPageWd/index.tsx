/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { WithdrawInfo } from '../../../components/user/WithdrawInfo';
import { WithdrawInfo2 } from '../../../components/user/WithdrawInfo2';
import * as S from './style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { MetaTag } from '../../../components/common/MetaTag';

export const MyPageWd = () => {
  const cookies = new Cookies();
  const swal = withReactContent(Swal);
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  //id, password
  const [id, setId] = useState('');
  const [idCheck, setIdCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);

  useEffect(() => {
    if (!cookies.get('refreshToken')) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      navigate('/sign-in');
    }
  });

  const onChangeId = (e: string) => {
    setId(e);
    validationId(e);
  };
  const onChangePassword = (e: string) => {
    setPassword(e);
    validationPassword(e);
  };

  const validationId = (text: string) => {
    if (text.length < 8) {
      setIdCheck(false);
    } else {
      setIdCheck(true);
    }
  };
  const validationPassword = (text: string) => {
    if (text.length < 8) {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }
  };

  useEffect(() => {
    if (idCheck && passwordCheck) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [idCheck, passwordCheck]);

  const deleteEvent = () => {
    if (!cookies.get('refreshToken')) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      navigate('/sign-in');
    } else {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: '회원 탈퇴하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/user/withdrawal`,
                headers: {
                  Authorization: cookies.get('accessToken'),
                },
                data: {
                  inputUsername: id,
                  password: password,
                },
              }).then((res) => {
                swal.fire({
                  heightAuto: false,
                  icon: 'success',
                  text: '탈퇴 완료되었습니다.',
                  confirmButtonText: '확인',
                  confirmButtonColor: '#289951',
                  width: 400,
                });
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
                cookies.remove('loginUser');
                navigate('/');
              });
            } catch (err: any) {
              cookies.remove('accessToken');
              cookies.remove('refreshToken');
              cookies.remove('loginUser');
              navigate('/sign-in');
            }
          }
        });
    }
  };

  return (
    <>
      <MetaTag
        title={`회원탈퇴 | 안전왕`}
        description={`안전왕, 회원탈퇴`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/mypage-wd'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 회원탈퇴`}
      />
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
        </div>
        <S.Wrapper>
          <S.Top>회원 탈퇴</S.Top>
          <S.AreaWrap>
            <S.Mid>회원탈퇴 약관</S.Mid>
            <WithdrawInfo />
          </S.AreaWrap>
          <S.AreaWrap>
            <S.Mid>유의사항</S.Mid>
            <WithdrawInfo2 />
          </S.AreaWrap>
          <S.AreaWrap>
            <S.Mid>회원정보</S.Mid>
            <S.InputWrapper>
              <div>
                <label>아이디</label>
                <input
                  placeholder='고객님의 아이디를 입력해주세요.'
                  onChange={(e) => onChangeId(e.target.value)}
                />
              </div>
              <div>
                <label>비밀번호</label>
                <input
                  type='password'
                  autoComplete='false'
                  placeholder='고객님의 비밀번호를 입력해주세요.'
                  onChange={(e) => onChangePassword(e.target.value)}
                />
              </div>
              <S.ErrInfo>* 고객 정보를 모두 입력하셔야 탈퇴가 가능합니다.</S.ErrInfo>
            </S.InputWrapper>
            <S.Btn disabled={disable} onClick={() => deleteEvent()}>
              탈퇴하기
            </S.Btn>
          </S.AreaWrap>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
