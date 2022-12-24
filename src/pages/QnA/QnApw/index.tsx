import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

export const QnAPw = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state.data;

  return (
    <div>
      <div>
        <S.Banner>QnApw</S.Banner>
      </div>
      <S.Wrapper>
        <S.PwBox>
          <div>비밀번호를 입력해주세요.</div>
          <S.QnApwInput />
        </S.PwBox>
        <S.QnABox>
          <S.QnAButton onClick={() => navigate('/qna')}>취소</S.QnAButton>
          <S.QnAButton2 onClick={() => navigate('/qna-po', { state: data })}>확인</S.QnAButton2>
        </S.QnABox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
