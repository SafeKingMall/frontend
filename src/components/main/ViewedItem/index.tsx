import React, { useContext, useRef, useState } from 'react';
import * as S from './style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { categoryContext } from '../../../store/categoryStore';

export const ViewedItem = () => {
  const context = useContext(categoryContext);
  const categoryList = context.map((el: any) => el.name);
  const [count, setCount] = useState(1);
  const [idx, setIdx] = useState([0, 1, 2]);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const getString: any = localStorage.getItem('viewedItems');
  const viewedItems = useRef<any>(getString ? JSON.parse(getString) : []);

  const totalPageSet = () => {
    if (viewedItems.current.length < 4) {
      return 1;
    } else if (viewedItems.current.length < 7) {
      return 2;
    } else if (viewedItems.current.length < 10) {
      return 3;
    } else if (viewedItems.current.length < 13) {
      return 4;
    } else if (viewedItems.current.length < 16) {
      return 5;
    }
  };
  const totalPage = useRef(totalPageSet());

  const countMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      setIdx(idx.map((i) => i - 3));
    }
  };
  const countPlus = () => {
    if (count < (totalPage.current ? totalPage.current : 1)) {
      setCount(count + 1);
      setIdx(idx.map((i) => i + 3));
    }
  };

  const moveDetail = (id: number, categoryName: string) => {
    navigate(`/itemdetail/${id}`, {
      state: {
        itemId: id,
        slideNavIdx: categoryList.indexOf(categoryName),
      },
    });
  };

  return (
    <S.Container style={{ display: viewedItems.current.length === 0 || close ? 'none' : '' }}>
      <S.TitleArea>
        <S.Title>내가 본 상품</S.Title>
        <S.closeBtnArea onClick={() => setClose(true)}>
          <AiOutlineClose size='0.2rem' />
        </S.closeBtnArea>
      </S.TitleArea>
      <S.ItemArea>
        {viewedItems.current[idx[0]] ? (
          <S.ItemContent
            onClick={() =>
              moveDetail(viewedItems.current[idx[0]].id, viewedItems.current[idx[0]].categoryName)
            }
          >
            <S.ItemImg
              src={`${process.env.REACT_APP_BASE_URL + viewedItems.current[idx[0]].fileName}`}
              alt={viewedItems.current[idx[0]].name}
            />
            <S.ItemName>{viewedItems.current[idx[0]].name}</S.ItemName>
          </S.ItemContent>
        ) : (
          ''
        )}
      </S.ItemArea>
      <S.ItemArea>
        {viewedItems.current[idx[1]] ? (
          <S.ItemContent
            onClick={() =>
              moveDetail(viewedItems.current[idx[1]].id, viewedItems.current[idx[1]].categoryName)
            }
          >
            <S.ItemImg
              src={`${process.env.REACT_APP_BASE_URL + viewedItems.current[idx[1]].fileName}`}
              alt={viewedItems.current[idx[1]].name}
            />
            <S.ItemName>{viewedItems.current[idx[1]].name}</S.ItemName>
          </S.ItemContent>
        ) : (
          ''
        )}
      </S.ItemArea>
      <S.ItemArea>
        {viewedItems.current[idx[2]] ? (
          <S.ItemContent
            onClick={() =>
              moveDetail(viewedItems.current[idx[2]].id, viewedItems.current[idx[2]].categoryName)
            }
          >
            <S.ItemImg
              src={`${process.env.REACT_APP_BASE_URL + viewedItems.current[idx[2]].fileName}`}
              alt={viewedItems.current[idx[2]].name}
            />
            <S.ItemName>{viewedItems.current[idx[2]].name}</S.ItemName>
          </S.ItemContent>
        ) : (
          ''
        )}
      </S.ItemArea>
      <S.PageArea>
        <S.ArrowBox>
          <AiOutlineLeft size='0.2rem' color='#ffffff' onClick={() => countMinus()} />
        </S.ArrowBox>
        <S.PageText>
          {count} / {totalPage.current}
        </S.PageText>
        <S.ArrowBox>
          <AiOutlineRight size='0.2rem' color='#ffffff' onClick={() => countPlus()} />
        </S.ArrowBox>
      </S.PageArea>
    </S.Container>
  );
};
