/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

export const List = (props: any) => {
  const itemList = props.itemList;
  const setItemList = props.setItemList;
  const reqData = props.reqData;
  const page = props.page;
  const setPage = props.setPage;
  const totalPages = props.totalPages;
  const selectSort = props.selectSort;
  const searchWord = props.searchWord;
  const [scrollLoading, setScrollLoading] = useState(false);
  const navigate = useNavigate();

  const moveDetail = (item: any) => {
    sessionStorage.setItem('scroll', window.scrollY.toString());
    sessionStorage.setItem('itemList', JSON.stringify(itemList));
    sessionStorage.setItem('page', page);
    sessionStorage.setItem('totalPages', totalPages);
    sessionStorage.setItem('reqData', reqData);
    sessionStorage.setItem('selectSort', selectSort);
    sessionStorage.setItem('searchWord', searchWord.current);
    navigate('/itemDetail', {
      state: {
        itemId: item.id,
      },
    });
  };

  const onScroll = () => {
    if (page < totalPages) {
      pageUp();
    } else return;
  };

  const pageUp = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !scrollLoading) {
      setScrollLoading(true);
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/item/list?size=12&page=${page}&${reqData}`,
      }).then((res) => {
        setItemList([...itemList, ...res.data.content]);
      });
      setPage(page + 1);
      setScrollLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <S.Container>
      <S.ItemArea>
        {itemList?.length ? (
          itemList.map((item: any) => {
            return (
              <S.ItemContainer key={item.id} onClick={() => moveDetail(item)}>
                <S.ItemImg src={process.env.REACT_APP_BASE_URL + item.fileName} alt={item.name} />
                <S.Category>{item.categoryName}</S.Category>
                <S.ItemName>{item.name}</S.ItemName>
                <S.Price>
                  {item.viewPrice !== 1000000000
                    ? item.viewPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                    '원'
                    : '금액표시없음'}
                </S.Price>
              </S.ItemContainer>
            );
          })
        ) : (
          <S.NoSearchItem>검색 결과가 없습니다.</S.NoSearchItem>
        )}
        <S.ScrollDiv>
          <TailSpin
            height='60'
            width='60'
            color='#289951'
            ariaLabel='tail-spin-loading'
            radius='1'
            visible={scrollLoading ? true : false}
          />
        </S.ScrollDiv>
      </S.ItemArea>
    </S.Container>
  );
};
