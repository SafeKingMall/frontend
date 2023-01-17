import * as S from './style';
import { Searchcompo } from '../../../often/Searchcompo';
import { useState } from 'react';
import { useDateFormat } from '../../../common/hooks/useDateFormat';

export const AdimWdList = (props: any) => {
  const data1: any = [
    {
      memberId: 1,
      name: 'user1',
      secessionDay: '2022-11-14 23:23:59.847240',
    },
    {
      memberId: 2,
      name: 'user2',
      secessionDay: '2022-11-14 23:23:59.847240',
    },
    {
      memberId: 3,
      name: 'user3',
      secessionDay: '2022-11-14 23:23:59.847240',
    },
    {
      memberId: 4,
      name: 'user4',
      secessionDay: '2022-11-14 23:23:59.847240',
    },
    {
      memberId: 5,
      name: 'user5',
      secessionDay: '2022-11-15 23:23:59.847240',
    },
  ];
  const data = data1
    .sort((a: any, b: any) => {
      return new Date(a.lastModifiedDate).getTime() - new Date(b.lastModifiedDate).getTime();
    })
    .reverse();
  // const data = [...data1].reverse();
  const { registDate2 } = useDateFormat();

  const searchParameters = Object.keys(Object.assign({}, ...data));
  const filterItems = searchParameters.slice(1, 3);
  const filterItems1 = {
    회원명: searchParameters[1],
    탈퇴일: searchParameters[2],
  };

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index}>
              <div>{el.memberId}</div>
              <div>
                <ul>{el.name}</ul>
              </div>
              <div>{registDate2(el.secessionDay)}</div>
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
        <div>회원명</div>
        <div>탈퇴일</div>
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
