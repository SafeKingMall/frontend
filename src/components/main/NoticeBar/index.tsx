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
        url: `${process.env.REACT_APP_API_URL}/notice/list?size=7&page=0&sort=createDate,desc`,
      }).then((res) => {
        setNoticeList(res.data.content);
      });
    };
    getNoticeData();
  }, []);

  const preNotice = () => {
    if (noticeList.length > 6) {
      if (count === 0) {
        setCount(5);
      } else {
        setCount(count - 1);
      }
    } else {
      if (count === 0) {
        setCount(noticeList.length - 1);
      } else {
        setCount(count - 1);
      }
    }
  };

  const nextNotice = () => {
    if (noticeList.length > 6) {
      if (count === 5) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    } else {
      if (count === noticeList.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }
  };

  const moveDetail = (id: number) => {
    navigate('/notice-po', {
      state: {
        itemId: id,
        data: noticeList,
        page: 0,
        size: 7,
        reqData: 'sort=createDate,desc',
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
              <AiOutlineLeft color='#ffffff' size='100%' />
            </S.ArrowIcon>
            <S.ArrowBar />
            <S.ArrowIcon onClick={() => nextNotice()}>
              <AiOutlineRight color='#ffffff' size='100%' />
            </S.ArrowIcon>
          </S.ArrowBox>
        </S.ArrowArea>
      </S.NoticeContent>
    </S.NoticeBarWrap>
  );
};
