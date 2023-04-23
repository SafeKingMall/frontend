/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/common/Header';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Timer } from '../../../components/user/Timer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const KREN = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z ]/;
const KRVAL = /[ㄱ-ㅎㅏ-ㅣ]/;
const BIRTH = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
const NUM = /[^0-9]/;

export const SignUp2 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const swal = withReactContent(Swal);
  const [disable, setDisable] = useState(true);
  //이름
  const [name, setName] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [nameCheck, setNameCheck] = useState(false);
  //생년월일
  const [birth, setBirth] = useState('');
  const [birthVal, setBirthVal] = useState('');
  const [birthCheck, setBirthCheck] = useState(false);
  //휴대폰
  const [phone, setPhone] = useState('');
  const [phoneVal, setPhoneVal] = useState('');
  const [phoneCheck, setPhoneCheck] = useState(false);
  //타이머
  const [timer, setTimer] = useState(false);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  //인증번호
  const [code, setCode] = useState('');
  const [codeCheck, setCodeCheck] = useState(false);

  const onChangeName = (e: string) => {
    setName(e);
    validationName(e);
  };
  const onChangeBirth = (e: string) => {
    setBirth(e);
    validationBirth(e);
  };
  const onChangePhone = (e: string) => {
    setPhone(e);
    validationPhone(e);
  };
  const onChangeCode = (e: string) => {
    setCode(e);
  };

  //이름 유효성검사
  const validationName = (text: string) => {
    if (KREN.test(text)) {
      setNameVal('* 한글/영어/공백으로만 입력해주세요.');
      setNameCheck(false);
    } else {
      setNameVal('');
      setNameCheck(true);
    }
  };
  //이름 포커스아웃 유효성검사
  const blurName = (text: string) => {
    if (KREN.test(text)) {
      setNameVal('* 한글/영어/공백으로만 입력해주세요.');
      setNameCheck(false);
    } else if (KRVAL.test(text)) {
      setNameVal('* 한글입력을 확인해주세요.');
      setNameCheck(false);
    }
  };
  //생년월일 유효성검사
  const validationBirth = (text: string) => {
    if (NUM.test(text)) {
      setBirthVal('* 숫자만 입력해주세요');
      setBirthCheck(false);
    } else if (!BIRTH.test(text)) {
      setBirthVal('* 생년월일 8자리를 입력해주세요. [예: 19900101]');
      setBirthCheck(false);
    } else {
      setBirthVal('');
      setBirthCheck(true);
    }
  };
  //휴대폰 유효성검사
  const validationPhone = (text: string) => {
    if (NUM.test(text)) {
      setPhoneVal('* 숫자만 입력해주세요. [예: 01012345678]');
      setPhoneCheck(false);
    } else if (text.length > 11 || text.length < 10) {
      setPhoneVal('* 10~11자리의 숫자로 입력해주세요.');
      setPhoneCheck(false);
    } else {
      setPhoneVal('');
      setPhoneCheck(true);
    }
  };

  //인증번호 발송
  const sendPhoneAuth = async () => {
    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/coolsms`,
        data: {
          clientPhoneNumber: phone,
        },
      }).then((res) => {
        if (res.status === 200) {
          setTimer(true);
          setMinutes(3);
          setSeconds(0);
          setCodeCheck(false);
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
  //인증번호 재발송
  const resend = () => {
    swal
      .fire({
        heightAuto: false,
        icon: 'question',
        text: '인증번호를 재발송하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          sendPhoneAuth();
        }
      });
  };

  //인증번호 확인
  const phoneAuthConfirm = async () => {
    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/coolsms/code`,
        data: {
          clientPhoneNumber: phone,
          code: code,
        },
      }).then((res) => {
        if (res.status === 200) {
          swal.fire({
            heightAuto: false,
            icon: 'success',
            text: '확인되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
          setCodeCheck(true);
          setTimer(false);
        }
      });
    } catch (err: any) {
      if (err.response.data.code === 1700) {
        swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: '인증번호가 일치하지 않습니다. 인증번호를 다시 발송해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
        setCodeCheck(false);
        setTimer(false);
        setCode('');
      } else if (err.response.data.code === 999) {
        swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: '인증번호를 다시 발송해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else {
        swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: err.response.data.message,
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      }
    }
  };
  //다음버튼 활성화 이벤트
  useEffect(() => {
    if (nameCheck && birthCheck && codeCheck) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [nameCheck, birthCheck, codeCheck]);

  const nextBtnEvent = async () => {
    try {
      if (state) {
        await axios({
          method: 'post',
          url: `${process.env.REACT_APP_API_URL}/signup/authenticationInfo/${state.memberId}`,
          data: {
            name: name,
            birth: birth,
            phoneNumber: phone,
          },
        }).then((res) => {
          if (res.status === 200) {
            if (state) {
              navigate('/sign-up3', {
                state: {
                  memberId: res.data,
                },
              });
            }
          }
        });
      } else {
        swal.fire({
          heightAuto: false,
          icon: 'warning',
          title: '올바르지 않은 방식입니다.',
          text: '회원가입을 다시 진행해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      }
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
  const sendBtnStyle = {
    borderColor: phoneCheck && !codeCheck ? '#289951' : '#a6a6a6',
    color: phoneCheck && !codeCheck ? '#289951' : '#a6a6a6',
  };
  const confirmBtnStyle = {
    borderColor: timer ? '#289951' : '#a6a6a6',
    color: timer ? '#289951' : '#a6a6a6',
  };
  return (
    <S.Container>
      <Header />
      <S.ContentContainer>
        <S.Wrapper>
          <S.TopContainer>
            <S.TopWrap>
              <S.Top />
            </S.TopWrap>
          </S.TopContainer>
          <S.Mid>본인인증 정보</S.Mid>
          <S.InputContainer>
            <S.InputWrapper>
              <label>이름</label>
              <input
                placeholder='이름을 입력해주세요.'
                value={name}
                onChange={(e) => {
                  onChangeName(e.target.value);
                }}
                onBlur={(e) => {
                  blurName(e.target.value);
                }}
                maxLength={50}
              />
              <S.ErrMsg>{nameVal}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>생년월일</label>
              <input
                placeholder='생년월일 8자리'
                value={birth}
                onChange={(e) => onChangeBirth(e.target.value)}
                maxLength={8}
              />
              <S.ErrMsg>{birthVal}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>휴대폰 번호</label>
              <input
                className='smallInput'
                placeholder='전화번호를 입력해주세요.'
                value={phone}
                onChange={(e) => onChangePhone(e.target.value)}
                maxLength={11}
                disabled={codeCheck}
              />
              <S.ErrMsg>{phoneVal}</S.ErrMsg>
              {timer ? (
                <S.SendBtn style={sendBtnStyle} onClick={() => resend()} disabled={!phoneCheck}>
                  재발송
                </S.SendBtn>
              ) : (
                <S.SendBtn
                  style={sendBtnStyle}
                  onClick={() => sendPhoneAuth()}
                  disabled={!phoneCheck || codeCheck}
                >
                  인증번호 발송
                </S.SendBtn>
              )}
            </S.InputWrapper>
            <S.InputWrapper>
              <label>인증번호</label>
              <input
                className='smallInput'
                placeholder='인증번호를 입력해주세요.'
                value={code}
                onChange={(e) => onChangeCode(e.target.value)}
                maxLength={15}
                disabled={codeCheck}
              />
              <S.AuthTimer>
                {timer ? (
                  <Timer
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    timer={timer}
                    setTimer={setTimer}
                  />
                ) : (
                  ''
                )}
              </S.AuthTimer>
              <S.CheckBtn
                style={confirmBtnStyle}
                onClick={() => phoneAuthConfirm()}
                disabled={!timer}
              >
                확인
              </S.CheckBtn>
            </S.InputWrapper>
          </S.InputContainer>
          <S.BtnWrapper>
            <button onClick={() => navigate(-1)}>이전</button>
            <button disabled={disable} onClick={() => nextBtnEvent()}>
              다음
            </button>
          </S.BtnWrapper>
        </S.Wrapper>
      </S.ContentContainer>
    </S.Container>
  );
};
