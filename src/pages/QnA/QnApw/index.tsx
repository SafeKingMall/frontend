import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';

export const QnApw = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <S.Banner>QnA</S.Banner>
      </div>
      <S.Wrapper>
        <S.Pwbox>
          <div>비밀번호를 입력해주세요.</div>
          <S.QnApwinput />
        </S.Pwbox>
        <S.QnAbox>
          <S.QnAButton onClick={() => navigate('/qna')}>취소</S.QnAButton>
          <S.QnAButton2 onClick={() => navigate('/qna-po')}>목록</S.QnAButton2>
        </S.QnAbox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
