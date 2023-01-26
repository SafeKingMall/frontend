import * as S from './style';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Searchcompo2 } from '../../../often/Searchcompo2';
import { Cookies } from 'react-cookie';

export const AdimWdList = (props: any) => {
  const [memberList, setMemberList] = useState([]);
  //회원명 (search할때 쓰일듯)
  const [memberName, setMemberName] = useState('');
  // 페이지 숫자
  const [page, setPage] = useState(0);
  // 전체 페이지 확인(전체 페이지 수만큼 페이지네이션 숫자 늘리기)
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  // select 옵션 선택
  const [filter, setFilter] = useState('');
  // select 박스
  const [searchText, setSearchText] = useState('');
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/member/withDrawlList?size=${size}&page=${page}&name=${memberName}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setMemberList(res.data.content);
        setTotalPages(res.data.totalElements);
      });
    };
    getData();
  }, [jwt, memberName, size, page]);

  const searchParameters = Object.keys(Object.assign({}, ...memberList));

  // const filterItems1 = {
  //   회원명: searchParameters[1],
  //   탈퇴일: searchParameters[2],
  // };

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {memberList.map((el: any, index: any) => {
          return (
            <S.Container key={index}>
              <div>{el.memberId}</div>
              <div>
                <div>{el.name}</div>
              </div>
              <div>{el.withdrawalDate}</div>
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

  const optionList = (filterItems: any) => {
    return (
      <S.Select onChange={(e) => setFilter(e.target.value)}>
        <option value=''>선택해주세요</option>
        <option value='name'>회원명</option>
      </S.Select>
    );
  };

  const search = () => {
    if (filter === searchParameters[1]) {
      setMemberName(searchText);
    } else {
      setMemberName('');
    }
  };

  //   if (props.error) {
  //     return <>{props.error.message}</>;
  // } else if (!props.loaded) {
  //     return <>loading...</>;
  // } else {
  return (
    <S.Wrapper>
      <div>
        <Searchcompo2
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
      </div>
    </S.Wrapper>
  );
  // }
};
