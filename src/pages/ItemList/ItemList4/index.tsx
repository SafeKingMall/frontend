import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Nav } from '../../../components/item/Nav';
import axios from 'axios';
import { List } from '../../../components/item/List';
import { Search } from '../../../components/item/Search';

const SEARCH_CATEGORY_LIST = process.env.REACT_APP_SEARCH_CATEGORY_LIST;
const SEARCH_ITEM_LIST = process.env.REACT_APP_SEARCH_ITEM_LIST;

export const ItemList4 = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectNav, setSelectNav] = useState('');
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .all([
          axios({ method: 'get', url: SEARCH_CATEGORY_LIST }),
          axios({ method: 'get', url: SEARCH_ITEM_LIST }),
        ])
        .then(
          axios.spread((res1, res2) => {
            res1.data.content.sort((a: any, b: any) => {
              return a.sort - b.sort;
            });
            setCategoryList(res1.data.content);
            setSelectNav(res1.data.content[3].name);
            setItemList(
              res2.data.content.filter((el: any) => el.categoryName === res1.data.content[3].name),
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
