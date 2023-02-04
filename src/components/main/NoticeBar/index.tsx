import React, { useEffect, useState } from 'react';
import * as S from './style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';

export const NoticeBar = () => {
  const [noticeList, setNoticeList] = useState<any>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getNoticeData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/notice/list?size=6&page=0&sort=id,desc`,
      }).then((res) => {
        setNoticeList(res.data.content);
      });
    };
    getNoticeData();
  }, []);

  const preNotice = () => {
    if (count === 0) {
      setCount(5);
    } else {
      setCount(count - 1);
    }
  };

  const nextNotice = () => {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <S.Container>
      <S.NoticeBarWrap>
        <S.NoticeContent>
          <S.LeftText>공지사항</S.LeftText>
          <S.LeftBar />
          <S.Title>{noticeList[count]?.title}</S.Title>
          <S.ArrowBox>
            <S.ArrowArea onClick={() => preNotice()}>
              <AiOutlineLeft color='#ffffff' />
            </S.ArrowArea>
            <S.ArrowBar />
            <S.ArrowArea onClick={() => nextNotice()}>
              <AiOutlineRight color='#ffffff' />
            </S.ArrowArea>
          </S.ArrowBox>
        </S.NoticeContent>
      </S.NoticeBarWrap>
    </S.Container>
  );
};
