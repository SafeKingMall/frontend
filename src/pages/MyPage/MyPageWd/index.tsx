/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { WithdrawInfo } from '../../../components/user/WithdrawInfo';
import { WithdrawInfo2 } from '../../../components/user/WithdrawInfo2';
import * as S from './style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

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
    swal
      .fire({
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
                icon: 'success',
                text: '탈퇴 완료되었습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
              navigate('/');
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
        }
      });
  };

  return (
    <>
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
            <S.Mid>탈퇴사유</S.Mid>
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
      <Footer />
    </>
  );
};
