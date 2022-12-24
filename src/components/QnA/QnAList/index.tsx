import * as S from './style';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { TfiLock } from 'react-icons/tfi';
import { Searchcompo } from '../../often/Searchcompo';
import { useState } from 'react';
import db from '../../../db.json';

export const QnAList = (props: any) => {
  const data1 = db.QnAcontent;
  const data = data1
    .sort((a: any, b: any) => {
      return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
    })
    .reverse();
  // const data = [...data1].reverse();

  const navigate = useNavigate();
  const moveQnApw = (item: any) => {
    navigate('/qna-pw', {
      state: {
        data: item,
      },
    });
  };

  const searchParameters = Object.keys(Object.assign({}, ...data));
  const filterItems = searchParameters.slice(1, 4);
  const filterItems1 = {
    제목: searchParameters[1],
    작성자: searchParameters[3],
    등록일: searchParameters[2],
  };

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
            <S.Container key={index} onClick={() => moveQnApw(el)}>
              <div>{el.itemQuestionId}</div>
              <div>
                <ul>{el.title}</ul>
                <TfiLock color='#D9D9D9' />
              </div>
              <div>{el.memberId}</div>
              <div>{registDate(el.createDate)}</div>
            </S.Container>
          );
        })}
      </S.DataList>
    );
  };

  const TitleList = () => {
    return (
      <S.QnATitle>
        <div>No</div>
        <div>제목</div>
        <div>작성자</div>
        <div>등록일</div>
      </S.QnATitle>
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
              : item === Object.values(filterItems1)[1]
              ? Object.keys(filterItems1)[1]
              : Object.keys(filterItems1)[2]}
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
