import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { TfiLock } from 'react-icons/tfi';
import { Searchcompo } from '../../often/Searchcompo';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDateFormat } from '../../common/hooks/useDateFormat';
import { Cookies } from 'react-cookie';

export const QnAList = (props: any) => {
  // 들어온 데이터 넣는것
  const [memberList, setMemberList] = useState([]);
  const [sort] = useState(`sort=title,desc&sort=contents,asc&sort=itemId,desc`);

  // // 페이지 숫자
  const [page, setPage] = useState(0);
  // // 전체 페이지 확인
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  // //토큰
  // // select 옵션 선택
  const [filter, setFilter] = useState('');
  // // select 박스
  const [searchText, setSearchText] = useState('');
  // // 데이터들
  const [title, setTitle] = useState('');
  //createDate
  const [lastModifiedDate, setLastModifiedDate] = useState('');
  const [memberId, setMemberId] = useState('');
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/itemQna/list?size=${size}&page=${page}&${sort}&createDate=${lastModifiedDate}&memberId=${memberId}&title=${title}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setMemberList(res.data.content);
        setTotalPages(res.data.totalElements);
      });
    };
    getData();
  }, [sort, title, lastModifiedDate, memberId, size, page, jwt]);

  const navigate = useNavigate();
  const moveQnApw = (item: any) => {
    navigate('/qna-pw', {
      state: {
        data: item,
      },
    });
  };

  const searchParameters = Object.keys(Object.assign({}, ...memberList));
  const filterItems: any = [];
  filterItems.push(searchParameters[1], searchParameters[3], searchParameters[5]);
  const filterItems1 = {
    제목: searchParameters[1],
    작성자: searchParameters[3],
    등록일: searchParameters[4],
  };

  const { registDate2 } = useDateFormat();

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index} onClick={() => moveQnApw(el.id)}>
              <div>{el.id}</div>
              <div>
                <ul>{el.title}</ul>
                <TfiLock color='#D9D9D9' />
              </div>
              <div>{el.memberId}</div>
              <div>{registDate2(el.lastModifiedDate)}</div>
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

  const optionList = (filterItems: any) => {
    return (
      <S.Select onChange={(e: any) => setFilter(e.target.value)}>
        <option value=''>선택해주세요</option>
        {filterItems.map((item: any, index: any) => (
          <option key={index} value={item}>
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

  const search = () => {
    if (filter === searchParameters[1]) {
      setTitle(searchText);
      setLastModifiedDate('');
      setMemberId('');
    } else if (filter === searchParameters[3]) {
      setMemberId(searchText);
      setTitle('');
      setLastModifiedDate('');
    } else if (filter === searchParameters[4]) {
      setLastModifiedDate(searchText);
      setTitle('');
      setMemberId('');
    } else {
      setLastModifiedDate('');
      setTitle('');
      setMemberId('');
    }
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
        size={size}
        dataList2={dataList2}
        TitleList={TitleList}
        search={search}
        setSearchText={setSearchText}
        data={memberList}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </S.Wrapper>
  );
  // }
};
