/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/common/Header';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { TfiLock, TfiUnlock } from 'react-icons/tfi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import { MetaTag } from '../../../components/common/MetaTag';

const NUMEN = /[^0-9a-zA-Z]/;
const IDREGEX = /^(?=.*[a-zA-z])(?=.*[0-9]).{2,20}$/;
const PWREGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{3,20}$/;
const SYMBOL = /[^!@#$%^&*0-9a-zA-Z]/;
const EMAIL = /^[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[a-zA-Z]+){1,2}$/;

export const SignUp1 = () => {
  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  const [disable, setDisable] = useState(true);
  //아이디
  const [id, setId] = useState('');
  const [idVal, setIdVal] = useState('');
  const [idConfirm, setIdConfirm] = useState(false);
  const [idCheck, setIdCheck] = useState(false);

  //비밀번호
  const [pw, setPw] = useState('');
  const [pwVal, setPwVal] = useState('');
  const [pwCheck, setPwCheck] = useState(false);

  //비밀번호 확인
  const [pwConfirm, setPwConfirm] = useState('');
  const [pwConfirmVal, setPwConfirmVal] = useState('');
  const [pwConfirmCheck, setPwConfirmCheck] = useState(false);

  //이메일
  const [email, setEmail] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);

  const onChangeId = (e: string) => {
    setId(e);
    validationId(e);
    setIdCheck(false);
  };
  const onChangePw = (e: string) => {
    setPw(e);
    validationPw(e);
  };
  const onChangePwConfirm = (e: string) => {
    setPwConfirm(e);
    validationPwConfirm(e);
  };
  const onChangeEmail = (e: string) => {
    setEmail(e);
    validationEmail(e);
  };

  //아이디 유효성검사
  const validationId = (text: string) => {
    if (text.length === 0) {
      setIdVal('* 아이디를 입력해주세요.');
      setIdConfirm(false);
    } else if (NUMEN.test(text)) {
      setIdVal('* 숫자/영어로만 입력해주세요.');
      setIdConfirm(false);
    } else if (!IDREGEX.test(text)) {
      setIdVal('* 숫자/영어 조합으로 입력해주세요.');
      setIdConfirm(false);
    } else if (text.length < 8) {
      setIdVal('* 8자리 이상 입력해주세요.');
      setIdConfirm(false);
    } else {
      setIdVal('');
      setIdConfirm(true);
    }
  };
  //비밀번호 유효성검사
  const validationPw = (text: string) => {
    if (text.length === 0) {
      setPwVal('* 비밀번호를 입력해주세요.');
      setPwCheck(false);
    } else if (SYMBOL.test(text)) {
      setPwVal('* 사용할수 없는 기호입니다. [ 사용가능기호: !@#$%^&* ]');
      setPwCheck(false);
    } else if (!PWREGEX.test(text)) {
      setPwVal('* 숫자/영어/특수문자 조합으로 입력해주세요.');
      setPwCheck(false);
    } else if (text.length < 8) {
      setPwVal('* 8자리 이상 입력해주세요.');
      setPwCheck(false);
    } else {
      setPwVal('');
      setPwCheck(true);
    }
    if (text !== pwConfirm && pwConfirm.length !== 0) {
      setPwConfirmVal('* 비밀번호가 일치하지않습니다.');
      setPwConfirmCheck(false);
    } else if (text === pwConfirm && pwConfirm.length !== 0) {
      setPwConfirmVal('');
      setPwConfirmCheck(true);
    } else {
      setPwConfirmVal('');
    }
  };
  //비밀번호확인 유효성검사
  const validationPwConfirm = (text: string) => {
    if (text !== pw) {
      setPwConfirmVal('* 비밀번호가 일치하지않습니다.');
      setPwConfirmCheck(false);
    } else if (text === pw && pwCheck) {
      setPwConfirmVal('');
      setPwConfirmCheck(true);
    } else {
      setPwConfirmVal('');
    }
  };
  //이메일 유효성검사
  const validationEmail = (text: string) => {
    if (!EMAIL.test(text)) {
      setEmailVal('* 올바른 이메일 형식이 아닙니다. [예: Safeking@naver.com]');
      setEmailCheck(false);
    } else {
      setEmailVal('');
      setEmailCheck(true);
    }
  };
  //다음버튼 활성화 이벤트
  useEffect(() => {
    if (idCheck && pwCheck && pwConfirmCheck && emailCheck) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [idCheck, pwCheck, pwConfirmCheck, emailCheck]);

  //아이디 중복확인 이벤트
  const idConfirmEvent = async () => {
    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/id/duplication`,
        data: {
          username: id,
        },
      }).then((res) => {
        if (res.data === true) {
          swal.fire({
            heightAuto: false,
            icon: 'success',
            text: '사용가능한 아이디입니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
          setIdCheck(true);
        } else {
          swal.fire({
            heightAuto: false,
            icon: 'warning',
            text: '이미 사용중인 아이디입니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
      });
    } catch (err: any) {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: err.response.data.message,
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  //다음버튼 이벤트
  const nextBtnEvent = async () => {
    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/signup/criticalItems`,
        data: {
          username: id,
          password: pwConfirm,
          email: email,
        },
      }).then((res) => {
        if (res.status === 200) {
          navigate('/sign-up2', {
            state: {
              memberId: res.data,
            },
          });
        }
      });
    } catch (err: any) {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: err.response.data.message,
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  //아이디 중복확인버튼 스타일
  const idConfirmStyle = {
    borderColor: idConfirm ? '#289951' : '#a6a6a6',
    color: idConfirm ? '#289951' : '#a6a6a6',
  };
  //아이디 체크스타일
  const idCheckStyle = {
    borderColor: idCheck ? '#289951' : '#a6a6a6',
    color: idCheck ? '#289951' : '#a6a6a6',
  };
  return (
    <>
      <MetaTag
        title={`회원가입1 | 안전왕`}
        description={`안전왕, 회원가입1`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/sign-up1'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 회원가입1`}
      />
      <S.Container>
        <Header />
        <S.ContentContainer>
          <S.Wrapper>
            <S.TopContainer>
              <S.TopWrap>
                <S.Top />
              </S.TopWrap>
            </S.TopContainer>
            <S.InputContainer>
              <S.InputWrapper>
                <label>아이디</label>
                <input
                  className='smallInput'
                  placeholder='영어/숫자 조합 8자리 이상'
                  value={id}
                  onChange={(e) => onChangeId(e.target.value)}
                  maxLength={20}
                />
                <button
                  style={idConfirmStyle}
                  onClick={() => idConfirmEvent()}
                  disabled={!idConfirm}
                >
                  확인
                </button>
                <S.ErrMsg>{idVal}</S.ErrMsg>
                <div id='id-check'>
                  <AiOutlineCheckCircle style={idCheckStyle} />
                </div>
              </S.InputWrapper>
              <S.InputWrapper>
                <label>비밀번호</label>
                <input
                  type='password'
                  placeholder='8~20자리 영문/숫자/특수문자 조합'
                  autoComplete='off'
                  value={pw}
                  onChange={(e) => onChangePw(e.target.value)}
                  maxLength={20}
                />
                <S.ErrMsg>{pwVal}</S.ErrMsg>
                <div id='pw-check'>
                  {pwCheck ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}
                </div>
              </S.InputWrapper>
              <S.InputWrapper>
                <label>비밀번호 확인</label>
                <input
                  type='password'
                  placeholder='8~20자리 영문/숫자/특수문자 조합'
                  autoComplete='off'
                  value={pwConfirm}
                  onChange={(e) => onChangePwConfirm(e.target.value)}
                  maxLength={20}
                />
                <S.ErrMsg>{pwConfirmVal}</S.ErrMsg>
                <div id='pw-check'>
                  {pwConfirmCheck ? <TfiLock style={{ color: '#289951' }} /> : <TfiUnlock />}
                </div>
              </S.InputWrapper>
              <S.InputWrapper>
                <label>이메일</label>
                <input
                  placeholder='이메일을 입력해주세요.'
                  value={email}
                  onChange={(e) => onChangeEmail(e.target.value)}
                  maxLength={80}
                />
                <S.ErrMsg>{emailVal}</S.ErrMsg>
              </S.InputWrapper>
            </S.InputContainer>
            <S.BtnWrapper>
              <button onClick={() => navigate(-1)}>취소</button>
              <button disabled={disable} onClick={() => nextBtnEvent()}>
                다음
              </button>
            </S.BtnWrapper>
          </S.Wrapper>
        </S.ContentContainer>
      </S.Container>
    </>
  );
};
