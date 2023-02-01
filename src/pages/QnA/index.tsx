import React from 'react';
import * as S from './style';
import { QnAList } from '../../components/QnA/QnAList';
import { Footer } from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/common/Header';

export const QnA = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <S.Wrapper>
        <div>
          <S.Banner>문의하기</S.Banner>
        </div>
        <S.Container>
          <QnAList
          // loaded={loaded}
          // error={error}
          />
          <S.QnAButton onClick={() => navigate('/qna-wr')}>글쓰기</S.QnAButton>
        </S.Container>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
