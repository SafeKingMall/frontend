import * as S from './style';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { Searchcompo } from '../../often/Searchcompo';
import { useState } from 'react';
import db from '../../../db.json';
// import { useDateFormat } from '../../common/hooks/useDateFormat';

export const AdminItemList = (props: any) => {
  const data1 = db.AdminItemcontent;
  const data = data1
    .sort((a: any, b: any) => {
      return new Date(a.lastModifiedDate).getTime() - new Date(b.lastModifiedDate).getTime();
    })
    .reverse();
  // const data = [...data1].reverse();

  const navigate = useNavigate();
  const moveAdminItemPo = (item: any) => {
    navigate('/admin-item-po', {
      state: {
        data: item,
      },
    });
  };

  //   const { registDate2 } = useDateFormat();

  const searchParameters = Object.keys(Object.assign({}, ...data));
  const filterItems = searchParameters.slice(1, 3);
  const filterItems1 = {
    상품명: searchParameters[1],
    카테고리: searchParameters[2],
  };

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index} onClick={() => moveAdminItemPo(el)}>
              <div>{el.id}</div>
              <div>{el.name}</div>
              <div>{el.categoryName}</div>
              <S.AdminButton2 onClick={() => moveAdminItemPo(el)}>수정</S.AdminButton2>
              <S.AdminButton>삭제</S.AdminButton>
            </S.Container>
          );
        })}
      </S.DataList>
    );
  };

  const TitleList = () => {
    return (
      <S.AdminTitle>
        <div>No</div>
        <div>상품명</div>
        <div>카테고리</div>
      </S.AdminTitle>
    );
  };

  const [filter, setFilter] = useState('');

  const optionList = (filterItems: any) => {
    return (
      <S.Select onChange={(e) => setFilter(e.target.value)}>
        <option value=''>선택해주세요</option>
        {filterItems.map((item: any) => (
          <option key={item} value={item}>
            {item === Object.values(filterItems1)[0]
              ? Object.keys(filterItems1)[0]
              : Object.keys(filterItems1)[1]}
          </option>
        ))}
      </S.Select>
    );
  };

  //   if (props.error) {
  //     return <>{props.error.message}</>;
  // } else if (!props.loaded) {
  //     return <>loading...</>;
  // } else {
  return (
    <S.Wrapper>
      <div>
        <div>
          <S.BigTitle>상품 관리</S.BigTitle>
        </div>
        <Searchcompo
          filterItems={filterItems}
          optionList={optionList}
          filter={filter}
          dataList2={dataList2}
          data={data}
          TitleList={TitleList}
        />
      </div>
    </S.Wrapper>
  );
  // }
};
