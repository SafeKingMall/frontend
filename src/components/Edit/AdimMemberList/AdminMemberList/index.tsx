import * as S from './style';
import { Searchcompo } from '../../../often/Searchcompo';
import { useState } from 'react';

export const AdminMemberList = (props: any) => {
  const data1: any = [
    {
      memberId: 1,
      name: 'user1',
      memberStatus: '탈퇴 회원',
    },
    {
      memberId: 2,
      name: 'user2',
      memberStatus: '휴먼 회원',
    },
    {
      memberId: 3,
      name: 'user3',
      memberStatus: '일반 회원',
    },
    {
      memberId: 4,
      name: 'user4',
      memberStatus: '일반 회원',
    },
    {
      memberId: 5,
      name: 'user5',
      memberStatus: '일반 회원',
    },
  ];
  const data = data1
    .sort((a: any, b: any) => {
      return new Date(a.lastModifiedDate).getTime() - new Date(b.lastModifiedDate).getTime();
    })
    .reverse();
  // const data = [...data1].reverse();

  const searchParameters = Object.keys(Object.assign({}, ...data));
  const filterItems = searchParameters.slice(1, 3);
  const filterItems1 = {
    회원명: searchParameters[1],
    상태: searchParameters[2],
  };

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([] as any);

  const handleSingleCheck = (checked: any, id: any) => {
    if (checked) {
      setCheckItems((prev: any) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el: any) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: any) => {
    if (checked) {
      const idArray: any = [];
      data.forEach((el: any) => idArray.push(el.memberId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
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
              <div>{el.memberStatus}</div>
              <div>
                <input
                  type='checkbox'
                  name={`select-${el.memberId}`}
                  onChange={(e) => handleSingleCheck(e.target.checked, el.memberId)}
                  checked={checkItems.includes(el.memberId) ? true : false}
                />
              </div>
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
        <div>상태</div>
        <div>
          <input
            type='checkbox'
            name='select-all'
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === data.length ? true : false}
          />
        </div>
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
      <S.CenterContainer>
        <Searchcompo
          filterItems={filterItems}
          optionList={optionList}
          filter={filter}
          dataList2={dataList2}
          data={data}
          TitleList={TitleList}
        />
        <S.QnAButton>탈퇴</S.QnAButton>
      </S.CenterContainer>
    </S.Wrapper>
  );
  // }
};
