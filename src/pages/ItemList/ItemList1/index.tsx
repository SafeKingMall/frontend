import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Nav } from '../../../components/item/Nav';
import axios from 'axios';
import { List } from '../../../components/item/List';
import { Search } from '../../../components/item/Search';

export const ItemList1 = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectNav, setSelectNav] = useState('');
  const [itemList, setItemList] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     await axios({ method: 'get', url: `${process.env.REACT_APP_API_URL}/cetegory/list` }).then((res) => {
  //       res.data.content.sort((a: any, b: any) => {
  //         return a.sort - b.sort;
  //       });
  //       setCategoryList(res.data.content);
  //       setSelectNav(res.data.content[0].name);
  //     });
  //   };
  //   getData();
  // }, []);

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
            setSelectNav(res1.data.content[0].name);
            setItemList(
              res2.data.content.filter((el: any) => el.categoryName === res1.data.content[0].name),
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
