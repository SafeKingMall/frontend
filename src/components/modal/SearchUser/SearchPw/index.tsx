/* eslint-disable no-unused-vars */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CiLock } from 'react-icons/ci';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useMediaQuery } from 'react-responsive';

interface SearchPwForm {
  id: string;

}
export const SearchPw = (props: any) => {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:400px)' });
  const setIsOpen = props.setIsOpen;
  const swal = withReactContent(Swal);
  //아이디 
  const [id, setId] = useState<string>('');
  //유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  //에러메세지
  const [idMsg, setIdMsg] = useState<string>('');
  //타이머
  const [timer, setTimer] = useState(false);


  //아이디
  const onId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const idCurrent = e.target.value;
    setId(idCurrent);
    const idRegex = /^[a-z]+[a-z0-9]$/g;

    if (idCurrent === '') {
      setIdMsg('아이디를 입력해주세요');
      setIsId(false);
    } else if (idRegex.test(idCurrent)) {
      setIdMsg('영어/숫자 조합으로 입력해주세요');
      setIsId(false);
    } else if (idCurrent.length < 8) {
      setIdMsg('최소 8자리부터 입력할 수 있습니다');
      setIsId(false);
    } else if (idCurrent.length > 20) {
      setIdMsg('최대 20자리까지 입력할 수 있습니다');
      setIsId(false);
    } else {
      setIdMsg('');
      setIsId(true);
    }
  };

  const [disTrue, setDisTrue] = useState(true);



  //30분 시간 뒤에
  const thirdTimer = async () => {
    await setDisTrue(false)
    await setTimeout(() =>
      setDisTrue(!disTrue), 30000)
  }

  //disabled btn
  const disabled = !(isId);
  //비밀번호 찾기
  const onSearchPw = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/temporaryPassword`,
        data: {
          "username": id,
        },
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          swal.fire({
            heightAuto: false,
            icon: 'success',
            text: '임시비밀번호가 발급되었습니다.',
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
    };
  }

  const submitBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSearchPw(e)
    setDisTrue(false)
    setTimeout(() =>
      setDisTrue(true), 30000)
  }

  return (
    <>
      <S.Wrapper>
        <S.Top>
          회원가입에 등록한 휴대전화번호로
          <br /> 임시 비밀번호가 발급받을 수 있습니다.
        </S.Top>
        <S.Ladius>
          {isDesktopOrMobile !== true ? (<CiLock size='100' color='white' fontWeight='900' />)
            : (<CiLock size='90' color='white' fontWeight='900' />)}

        </S.Ladius>
        <S.InputContainer>
          <S.InputWrapper>
            <label>아이디</label>
            <input placeholder='아이디를 입력해주세요.' onChange={onId} />

          </S.InputWrapper>
          <S.ErrMsg>{idMsg}</S.ErrMsg>
        </S.InputContainer>
        {disTrue ? <S.SearchBtn disabled={disabled} onClick={(e) => submitBtn(e)}>
          임시 비밀번호 발급
        </S.SearchBtn> :
          <S.SearchBtn disabled>
            임시 비밀번호 발급
          </S.SearchBtn>
        }


        <S.LoginBtn onClick={() => setIsOpen(false)}>로그인하기</S.LoginBtn>

      </S.Wrapper>
    </>
  );
};