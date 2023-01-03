import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Nav } from '../../../components/item/Nav';
import axios from 'axios';
import { List } from '../../../components/item/List';
import { Search } from '../../../components/item/Search';

export const ItemList6 = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectNav, setSelectNav] = useState('');
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .all([
          axios.get('http://safekingmall.ml/api/v1/category/list'),
          axios.get('http://safekingmall.ml/api/v1/item/list'),
        ])
        .then(
          axios.spread((res1, res2) => {
            res1.data.content.sort((a: any, b: any) => {
              return a.sort - b.sort;
            });
            setCategoryList(res1.data.content);
            setSelectNav(res1.data.content[5].name);
            setItemList(
              res2.data.content.filter((el: any) => el.categoryName === res1.data.content[5].name),
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
