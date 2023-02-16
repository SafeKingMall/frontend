/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
// import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Timer } from '../../../user/Timer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const KREN = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z ]/;
const KRVAL = /[ㄱ-ㅎㅏ-ㅣ]/;
const NUM = /[^0-9]/;

export const SearchId = (props: any) => {
  const swal = withReactContent(Swal);
  //이름
  const [name, setName] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [nameCheck, setNameCheck] = useState(false);

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

  //정보찾기 결과창
  const [result, setResult] = useState<boolean>(false);

  const onChangeName = (e: string) => {
    setName(e);
    validationName(e);
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
        url: `${process.env.REACT_APP_API_URL}/coolsms/id/find`,
        data: {
          clientPhoneNumber: phone,
          name: name,
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
        icon: 'warning',
        text: err.response.data.message,
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };
  //인증번호 재발송
  const resend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    swal
      .fire({
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
  const phoneAuthConfirm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/id/find`,
        data: {
          clientPhoneNumber: phone,
          code: code,
        },
      }).then((res) => {
        if (res.status === 200) {
          swal.fire({
            icon: 'success',
            text: '확인되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
          setCodeCheck(true);
          setTimer(false);
          props.setUserId(res.data);
        }
      });
    } catch (err: any) {
      swal.fire({
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

  const disabled = !(nameCheck && phoneCheck && codeCheck);
  //아이디 찾기
  const onSearchId = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResult(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.Top>
          회원가입에 등록한 휴대전화번호를 통해
          <br /> 회원님의 아이디를 찾을 수 있습니다.
        </S.Top>
        {/* <form> */}
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
            <label>휴대폰 번호</label>
            <input
              placeholder='전화번호를 입력해주세요.'
              value={phone}
              onChange={(e) => onChangePhone(e.target.value)}
              maxLength={11}
              disabled={codeCheck}
            />
            <S.ErrMsg>{phoneVal}</S.ErrMsg>
            {timer ? (
              <S.SendBtn style={sendBtnStyle} onClick={resend} disabled={!phoneCheck}>
                재발송
              </S.SendBtn>
            ) : (
              <S.SendBtn
                style={sendBtnStyle}
                onClick={sendPhoneAuth}
                disabled={!phoneCheck || codeCheck}
              >
                인증번호 발송
              </S.SendBtn>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            <label>인증번호</label>
            <input
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
            <S.CheckBtn style={confirmBtnStyle} onClick={phoneAuthConfirm} disabled={!timer}>
              확인
            </S.CheckBtn>
          </S.InputWrapper>
        </S.InputContainer>
        {/* </form> */}
        <S.SearchBtn disabled={disabled} onClick={onSearchId}>
          아이디 찾기
        </S.SearchBtn>
        {result ? (
          <S.Result>
            <S.TextWrapper>
              <div>{props.userId.slice(0, -3)}***</div>
              <div>
                회원님의 아이디입니다.
                <br /> 개인정보보호를 위해
                <br /> 뒷자리는 ***으로 가려두었습니다.
              </div>
            </S.TextWrapper>
            <S.BtnWrapper>
              <button onClick={() => props.setTab(1)}>비밀번호 찾기</button>
              <button onClick={() => props.onOpen()}>로그인 하기</button>
            </S.BtnWrapper>
          </S.Result>
        ) : (
          ''
        )}
      </S.Wrapper>
    </>
  );
};
