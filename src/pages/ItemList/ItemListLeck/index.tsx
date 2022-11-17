import React from 'react';
import * as S from './style';
import { Nav } from '../../../components/item/Nav';
import { List } from '../../../components/item/List';
import { Search } from '../../../components/item/Search';
import db from '../../../../src/db.json';

export const ItemListLeck = () => {
  const title = '누출사고예방';
  const data = db.content.filter((el) => el.categoryName === '누출사고예방');
  return (
    <S.Container>
      <Nav title={title} />
      <Search />
      <List data={data} />
    </S.Container>
  );
};
