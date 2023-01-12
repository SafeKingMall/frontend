import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Nav } from '../../../components/item/Nav';
import axios from 'axios';
import { List } from '../../../components/item/List';
import { Search } from '../../../components/item/Search';
import { Header } from '../../../components/common/Heaeder';
import { Footer } from '../../../components/common/Footer';

export const ItemList2 = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectNav, setSelectNav] = useState('');
  const [itemList, setItemList] = useState([]);
  const [sort, setSort] = useState(`sort=createDate,desc&sort=name,asc`);
  const [searchItem, setSearchItem] = useState('');
  const [reqData, setReqData] = useState(``);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let categoryName: string = '';
      setPage(1);
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/category/list?sort=sort,asc`,
      }).then((res) => {
        categoryName = res.data.content[1].name;
        setCategoryList(res.data.content);
        setSelectNav(categoryName);
      });
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/item/list?size=12&page=0&${sort}&categoryName=${categoryName}&itemName=${searchItem}`,
      }).then((res) => {
        setItemList(res.data.content);
        setReqData(`${sort}&categoryName=${categoryName}&itemName=${searchItem}`);
        setTotalPages(res.data.totalPages);
      });
    };
    getData();
  }, [sort, selectNav, searchItem]);

  return (
    <S.Container>
      <Header />
      <Nav categoryList={categoryList} selectNav={selectNav} />
      <Search setSort={setSort} setSearchItem={setSearchItem} />
      <List
        itemList={itemList}
        setItemList={setItemList}
        reqData={reqData}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
      <Footer />
    </S.Container>
  );
};
