import * as S from './style';
import { useNavigate } from 'react-router-dom';
import db from '../../../db.json';
import { useState } from 'react';
import { Searchcompo } from '../../often/Searchcompo';

export const NoticeList = (props: any) => {
  const data1 = db.noticecontents;

  const data = data1
    .sort((a: any, b: any) => {
      return new Date(a.lastModifiedDate).getTime() - new Date(b.lastModifiedDate).getTime();
    })
    .reverse();

  // console.log(data);

  // const data = [...data1].reverse();
  const navigate = useNavigate();
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        data: item,
      },
    });
  };

  //Optionlist
  const searchParameters = Object.keys(Object.assign({}, ...data));
  const filterItems = [];
  filterItems.push(searchParameters[1], searchParameters[3]);
  const filterItems1 = {
    제목: searchParameters[1],
    등록일: searchParameters[3],
  };

  //날짜 형식 바꾸기
  const registDate = (day: any) => {
    const date = new Date(day);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const date2 = date.getDate();

    return `${year}-${month >= 10 ? month : '0' + month}-${date2 >= 10 ? date2 : '0' + date2}`;
  };

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index} onClick={() => moveNoticepo(el)}>
              <div>{el.id}</div>
              <div>{el.title}</div>
              <div>{registDate(el.lastModifiedDate)}</div>
            </S.Container>
          );
        })}
      </S.DataList>
    );
  };

  const TitleList = () => {
    return (
      <S.NoticeTitle>
        <div>No</div>
        <div>제목</div>
        <div>등록일</div>
      </S.NoticeTitle>
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
      <Searchcompo
        filterItems={filterItems}
        optionList={optionList}
        filter={filter}
        dataList2={dataList2}
        data={data}
        TitleList={TitleList}
      />
    </S.Wrapper>
  );
  // }
};
