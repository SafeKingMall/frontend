/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { Header } from '../../../components/common/Header';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const PWREGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{3,20}$/;
const SYMBOL = /[^!@#$%^&*0-9a-zA-Z]/;

export const MyPagePw = () => {
  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const [disable, setDisable] = useState(true);

  //비밀번호, 새 비밀번호, 비밀번호 확인
  const [pw, setPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newPwConfirm, setNewPwConfirm] = useState('');

  const [pwVal, setPwVal] = useState('');
  const [newPwVal, setNewPwVal] = useState('');
  const [newPwConfirmVal, setNewPwConfirmVal] = useState('');

  const [pwCheck, setPwCheck] = useState(false);
  const [newPwCheck, setNewPwCheck] = useState(false);
  const [newPwConfirmCheck, setNewPwConfirmCheck] = useState(false);

  useEffect(() => {
    if (!cookies.get('refreshToken')) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      navigate('/sign-in');
    }
  });

  const onChangePw = (e: string) => {
    setPw(e);
    validationPw(e);
  };
  const onChangeNewPw = (e: string) => {
    setNewPw(e);
    validationNewPw(e);
  };
  const onChangeNewPwConfirm = (e: string) => {
    setNewPwConfirm(e);
    validationNewPwConfirm(e);
  };

  const validationPw = (text: string) => {
    if (text.length < 1) {
      setPwVal('비밀번호를 입력해주세요.');
      setPwCheck(false);
    } else {
      setPwVal('');
      setPwCheck(true);
    }
  };
  const validationNewPw = (text: string) => {
    if (text.length === 0) {
      setNewPwVal('* 비밀번호를 입력해주세요.');
      setNewPwCheck(false);
    } else if (SYMBOL.test(text)) {
      setNewPwVal('* 사용할수 없는 기호입니다. [ 사용가능기호: !@#$%^&* ]');
      setNewPwCheck(false);
    } else if (!PWREGEX.test(text)) {
      setNewPwVal('* 숫자/영어/특수문자 조합으로 입력해주세요.');
      setNewPwCheck(false);
    } else if (text.length < 8) {
      setNewPwVal('* 8자리 이상 입력해주세요.');
      setNewPwCheck(false);
    } else {
      setNewPwVal('');
      setNewPwCheck(true);
    }
    if (text !== newPwConfirm && newPwConfirm.length !== 0) {
      setNewPwConfirmVal('비밀번호가 일치하지않습니다.');
      setNewPwConfirmCheck(false);
    } else if (text === newPwConfirm && newPwConfirm.length !== 0) {
      setNewPwConfirmVal('');
      setNewPwConfirmCheck(true);
    } else {
      setNewPwConfirmVal('');
    }
  };
  const validationNewPwConfirm = (text: string) => {
    if (text !== newPw) {
      setNewPwConfirmVal('비밀번호가 일치하지않습니다.');
      setNewPwConfirmCheck(false);
    } else if (text === newPw && newPwCheck) {
      setNewPwConfirmVal('');
      setNewPwConfirmCheck(true);
    } else {
      setNewPwConfirmVal('');
    }
  };

  useEffect(() => {
    if (pwCheck && newPwCheck && newPwConfirmCheck) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [pwCheck, newPwCheck, newPwConfirmCheck]);

  const changeBtnEvent = async () => {
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
          text: '비밀번호를 변경하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await axios({
              method: 'PATCH',
              url: `${process.env.REACT_APP_API_URL}/user/update/password`,
              headers: {
                Authorization: cookies.get('accessToken'),
              },
              data: {
                previousPassword: pw,
                password: newPw,
              },
            })
              .then((res) => {
                swal.fire({
                  heightAuto: false,
                  icon: 'success',
                  text: '변경되었습니다.',
                  confirmButtonText: '확인',
                  confirmButtonColor: '#289951',
                  width: 400,
                });
                window.location.reload();
              })
              .catch((err) => {
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
                cookies.remove('loginUser');
                navigate('/sign-in');
              });
          }
        });
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
        </div>
        <S.Wrapper>
          <S.Top>내 정보</S.Top>
          <S.BasicWrap>
            <S.Mid>기본정보</S.Mid>
            <div>
              <label>기존 비밀번호</label>
              <input
                type='password'
                value={pw}
                autoComplete='false'
                placeholder='기존 비밀번호를 입력해주세요'
                onChange={(e) => onChangePw(e.target.value)}
              />
              <S.ErrMsg>{pwVal}</S.ErrMsg>
            </div>
            <div>
              <label>새로운 비밀번호</label>
              <input
                type='password'
                value={newPw}
                autoComplete='false'
                placeholder='영어/숫자/특수문자 조합으로 입력해주세요.'
                onChange={(e) => onChangeNewPw(e.target.value)}
              />
              <S.ErrMsg>{newPwVal}</S.ErrMsg>
            </div>
            <div>
              <label>비밀번호 확인</label>
              <input
                type='password'
                value={newPwConfirm}
                autoComplete='false'
                placeholder='영어/숫자/특수문자 조합으로 입력해주세요.'
                onChange={(e) => onChangeNewPwConfirm(e.target.value)}
              />
              <S.ErrMsg>{newPwConfirmVal}</S.ErrMsg>
            </div>
            <S.MyBtn disabled={disable} onClick={() => changeBtnEvent()}>
              변경하기
            </S.MyBtn>
          </S.BasicWrap>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
