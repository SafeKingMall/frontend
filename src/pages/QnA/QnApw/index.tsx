import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

export const QnApw = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state.data;

  return (
    <div>
      <div>
        <S.Banner>QnApw</S.Banner>
      </div>
      <S.Wrapper>
        <S.Pwbox>
          <div>비밀번호를 입력해주세요.</div>
          <S.QnApwinput />
        </S.Pwbox>
        <S.QnAbox>
          <S.QnAButton onClick={() => navigate('/qna')}>취소</S.QnAButton>
          <S.QnAButton2 onClick={() => navigate('/qna-po', { state: data })}>목록</S.QnAButton2>
        </S.QnAbox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
