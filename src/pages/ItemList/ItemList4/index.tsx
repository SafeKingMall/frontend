/* eslint-disable */
import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from '../style';
import { Nav } from '../../../components/item/Nav';
import axios from 'axios';
import { List } from '../../../components/item/List';
import { Search } from '../../../components/item/Search';
import { Header } from '../../../components/common/Header';
import { TailSpin } from 'react-loader-spinner';
import { categoryContext } from '../../../store/categoryStore';
import { MetaTag } from '../../../components/common/MetaTag';

export const ItemList4 = () => {
  const context: any = useContext(categoryContext);
  const [categoryList, setCategoryList] = useState([]);
  const [selectNav, setSelectNav] = useState('');
  const [itemList, setItemList] = useState([]);
  const [sort, setSort] = useState(`sort=viewPrice,desc&sort=createDate,desc`);
  const [searchItem, setSearchItem] = useState('');
  const [reqData, setReqData] = useState(``);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectSort, setSelectSort] = useState('가격 높은 순');
  const searchWord = useRef('');

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setPage(1);
      setCategoryList(context);
      setSelectNav(context[3]?.name);
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/item/list?size=12&page=0&${sort}&categoryName=${context[3]?.name}&itemName=${searchWord.current}`,
      }).then((res) => {
        setItemList(res.data.content);
        setReqData(`${sort}&categoryName=${context[3]?.name}&itemName=${searchWord.current}`);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      });
    };
    const getGoBackData = async () => {
      let goBackData: any = sessionStorage.getItem('itemList');
      let goBackPage: any = Number(sessionStorage.getItem('page'));
      let goBackTotalPages: any = Number(sessionStorage.getItem('totalPages'));
      let goBackReqData: any = sessionStorage.getItem('reqData');
      let goBackScroll: any = Number(sessionStorage.getItem('scroll'));
      let goBackSelectSort: any = sessionStorage.getItem('selectSort');
      let goBackSearchWord: any = sessionStorage.getItem('searchWord');
      setCategoryList(context);
      setSelectNav(context[3]?.name);
      setItemList(JSON.parse(goBackData));
      setPage(goBackPage);
      setTotalPages(goBackTotalPages);
      setReqData(goBackReqData);
      setSelectSort(goBackSelectSort);
      searchWord.current = goBackSearchWord;
      setLoading(false);
      window.scrollTo(0, goBackScroll);
      sessionStorage.removeItem('goBack');
    };
    if (context) {
      if (sessionStorage.getItem('goBack') === 'Y') {
        getGoBackData();
      } else {
        getData();
      }
    }
  }, [sort, searchItem, context]);

  const loadingData = () => {
    if (loading === true) {
      return (
        <S.LoadingBox>
          <TailSpin
            height='100'
            width='100'
            color='#289951'
            ariaLabel='tail-spin-loading'
            radius='1'
            visible={true}
          />
        </S.LoadingBox>
      );
    } else {
      return (
        <List
          itemList={itemList}
          setItemList={setItemList}
          reqData={reqData}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          selectSort={selectSort}
          searchWord={searchWord}
          slideNavIdx={3}
        />
      );
    }
  };

  return (
    <>
      <MetaTag
        title={`${selectNav} | 안전왕`}
        description={`안전왕, ${selectNav}상품 리스트`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url='https://safekingmall.com/itemlist-4'
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, ${selectNav}`}
      />
      <S.Container>
        <Header />
        <Nav categoryList={categoryList} selectNav={selectNav} slideNavIdx={3} />
        <Search
          setSort={setSort}
          selectSort={selectSort}
          setSelectSort={setSelectSort}
          setSearchItem={setSearchItem}
          searchWord={searchWord}
        />
        {loadingData()}
      </S.Container>
    </>
  );
};
