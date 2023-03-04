/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Header } from '../../components/common/Header';
import { MainBanner } from '../../components/main/MainBanner';
import { NoticeBar } from '../../components/main/NoticeBar';
import { MainCategory } from '../../components/main/MainCategory';
import { MainItemList } from '../../components/main/MainItemList';
import { ViewedItem } from '../../components/main/ViewedItem';
import axios from 'axios';

export const MainPage = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/category/list?sort=sort,asc`,
      }).then((res) => {
        setCategory(res.data.content);
        setSelectedCategory(res.data.content[0].name);
      });
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getItemData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/item/list?size=12&page=0&sort=viewPrice,desc&sort=name,asc&categoryName=${selectedCategory}`,
      }).then((res) => {
        setItemList(res.data.content);
      });
    };
    if (selectedCategory) {
      getItemData();
    }
  }, [selectedCategory]);

  return (
    <S.Container>
      <ViewedItem />
      <Header />
      <S.BannerNoticeWrap>
        <MainBanner />
        <NoticeBar />
      </S.BannerNoticeWrap>
      <MainCategory
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MainItemList itemList={itemList} slideNavIdx={category.map((el: any) => el.name).indexOf(selectedCategory)} />
    </S.Container>
  );
};
