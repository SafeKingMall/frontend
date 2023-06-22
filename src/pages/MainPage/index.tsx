/* eslint-disable */
import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Header } from '../../components/common/Header';
import { MainBanner } from '../../components/main/MainBanner';
import { NoticeBar } from '../../components/main/NoticeBar';
import { MainCategory } from '../../components/main/MainCategory';
import { MainItemList } from '../../components/main/MainItemList';
import { ViewedItem } from '../../components/main/ViewedItem';
import axios from 'axios';
import { categoryContext } from '../../store/categoryStore';
import { MetaTag } from '../../components/common/MetaTag';

export const MainPage = () => {
  const context: any = useContext(categoryContext);
  // const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [itemList, setItemList] = useState([]);

  // console.log(category);

  // useEffect(() => {
  //   const getCategory = async () => {
  //     await axios({
  //       method: 'get',
  //       url: `${process.env.REACT_APP_API_URL}/category/list?sort=sort,asc`,
  //     }).then((res) => {
  //       setCategory(res.data.content);
  //       setSelectedCategory(res.data.content[0].name);
  //     });
  //   };
  //   getCategory();
  // }, []);
  useEffect(() => {
    setSelectedCategory(context[0]?.name);
  }, [context]);

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
    <>
      <MetaTag
        title='안전왕'
        description='안전관리 솔루션을 제공하는 쇼핑몰 안전왕입니다. 중대사고예방, 화재사고예방, 누출사고예방, 해양사고예방에 대한 안전관리 솔루션을 제공합니다.'
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/'
        keywords='안전왕, 안전, 안전관리, 안전사고, 사고예방'
      />
      <S.Container>
        <ViewedItem />
        <Header />
        <S.BannerNoticeWrap>
          <MainBanner />
          <NoticeBar />
        </S.BannerNoticeWrap>
        <MainCategory
          category={context}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <MainItemList itemList={itemList} slideNavIdx={context.map((el: any) => el.name).indexOf(selectedCategory)} />
      </S.Container>
    </>
  );
};
