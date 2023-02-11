import React, { useEffect, useState } from 'react';
import * as S from './style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoticeBar = () => {
  const [noticeList, setNoticeList] = useState<any>([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

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

  const moveDetail = (id: number) => {
    navigate('/notice-po', {
      state: {
        itemId: id,
      },
    });
  };

  return (
    <S.NoticeBarWrap>
      <S.NoticeContent>
        <S.LeftTextArea>
          <S.LeftText>공지사항</S.LeftText>
          <S.LeftBar />
        </S.LeftTextArea>
        <S.TitleArea>
          <S.Title onClick={() => moveDetail(noticeList[count].id)}>
            {noticeList[count]?.title}
          </S.Title>
        </S.TitleArea>
        <S.ArrowArea>
          <S.ArrowBox>
            <S.ArrowIcon onClick={() => preNotice()}>
              <AiOutlineLeft color='#ffffff' />
            </S.ArrowIcon>
            <S.ArrowBar />
            <S.ArrowIcon onClick={() => nextNotice()}>
              <AiOutlineRight color='#ffffff' />
            </S.ArrowIcon>
          </S.ArrowBox>
        </S.ArrowArea>
      </S.NoticeContent>
    </S.NoticeBarWrap>
  );
};
