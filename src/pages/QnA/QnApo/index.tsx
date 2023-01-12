import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { TfiLock } from 'react-icons/tfi';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

export const QnAPo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const data = state;

  const comment = data.answer?.map((el: any) => {
    return el;
  });
  const registDate = (day: any) => {
    const today = new Date(day);
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day2 = ('0' + today.getDate()).slice(-2);
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2);

    return `${year}.${month}.${day2} ${hours}:${minutes}:${seconds}`;
  };

  const answer2 = (al: any) => {
    return (
      <ul>
        {al.map((al: any, index: any) => {
          return (
            <div key={index}>
              <S.TitleDiv2>
                <div>
                  <div>{al.adminId}</div>
                  <HiOutlineChatBubbleOvalLeftEllipsis />
                </div>
                <div>{registDate(al.createDate)}</div>
              </S.TitleDiv2>
              <S.Content2>{al.contents}</S.Content2>
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <div>
        <S.Banner>QnApo</S.Banner>
      </div>
      <S.Wrapper>
        <S.QnAButton onClick={() => navigate('/qna')}>목록</S.QnAButton>
        <S.PoBox>
          <S.TitleDiv>
            <div>
              <div>{data.title}</div>
              <TfiLock color='#D9D9D9' />
            </div>
            <div>작성자 : {data.memberId}</div>
          </S.TitleDiv>
          <S.Content>
            <div>{data.contents}</div>
          </S.Content>
          <S.TitleDiv3>댓글</S.TitleDiv3>
          <div>{data.answer !== undefined ? answer2(comment) : ''}</div>
          <S.Comment>
            <div>댓글쓰기</div>
            <S.ComemntInput placeholder='댓글을 입력해주세요.' />
            <S.QnAButton2>등록</S.QnAButton2>
          </S.Comment>
        </S.PoBox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
