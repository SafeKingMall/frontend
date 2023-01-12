import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Nav } from '../../../components/item/Nav';
import axios from 'axios';
import { List } from '../../../components/item/List';
import { Search } from '../../../components/item/Search';

export const ItemList7 = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectNav, setSelectNav] = useState('');
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .all([
          axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/category/list?sort=sort,asc`,
          }),
          axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/item/list?size=20&page=1&sort=id,desc`,
          }),
        ])
        .then(
          axios.spread((res1, res2) => {
            setCategoryList(res1.data.content);
            setSelectNav(res1.data.content[6].name);
            setItemList(
              res2.data.content.filter((el: any) => el.categoryName === res1.data.content[6].name),
            );
          }),
        );
    };
    getData();
  }, []);

  return (
    <S.Container>
      <Nav categoryList={categoryList} selectNav={selectNav} />
      <Search />
      <List itemList={itemList} />
    </S.Container>
  );
};
