/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './style';
import { SearchId } from './SearchId';
import { SearchPw } from './SearchPw';

export const SearchUser = (props: any) => {
  const d = {
    backgroundColor: '#D4EBDC',
    color: '#212121',
    fontWeight: '400',
  };
  const c = { backgroundColor: '#ffffff', color: '#289951', fontWeight: '700' };
  //버튼 상태
  const [idBtn, setIdBtn] = useState(c);
  const [pwBtn, setPwBtn] = useState(d);
  // const [btnColor, setBtnColor] = useState({
  //   backgrounColor: '#D4EBDC',
  //   color: '#212121',
  //   fontWeight: '400',
  // });
  //모달 상태
  const [idOpen, setIdOpen] = useState<boolean>(true);
  const [pwOpen, setPwOpen] = useState<boolean>(false);

  const onId = () => {
    setIdBtn(c);
    setPwBtn(d);
    setIdOpen(true);
    setPwOpen(false);
  };
  const onPw = () => {
    setPwBtn(c);
    setIdBtn(d);
    setIdOpen(false);
    setPwOpen(true);
  };

  return (
    <>
      <S.Wrapper>
        <S.BtnWrapper>
          <button onClick={onId} style={idBtn}>
            아이디 찾기
          </button>
          <button onClick={onPw} style={pwBtn}>
            비밀번호 찾기
          </button>
        </S.BtnWrapper>
        <div style={{ display: idOpen ? '' : 'none' }}>
          <SearchId />
        </div>
        <div style={{ display: pwOpen ? '' : 'none' }}>
          <SearchPw />
        </div>
      </S.Wrapper>
    </>
  );
};
