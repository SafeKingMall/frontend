import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Searchcompo } from '../../often/Searchcompo';
import { useState } from 'react';
import axios from 'axios';
import { useDateFormat } from '../../common/hooks/useDateFormat';
import { Cookies } from 'react-cookie';

export const NoticeList = (props: any) => {
  const navigate = useNavigate();

  // 들어온 데이터 넣는것
  const [itemList, setItemList] = useState([]);
  //creatdate로 sort 바꿀것
  const [sort, setSort] = useState(`sort=createDate,desc&sort=title,asc`);
  //itemName -> 상품명 (search할때 쓰일듯)
  const [searchItem, setSearchItem] = useState('');
  // 페이지 숫자
  const [page, setPage] = useState(0);
  // 전체 페이지 확인(전체 페이지 수만큼 페이지네이션 숫자 늘리기)
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  const [categoryName, setCategoryName] = useState('');
  //토큰
  // select 옵션 선택
  const [filter, setFilter] = useState('');
  // select 박스
  const [searchText, setSearchText] = useState('');

  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        itemId: item,
        data: itemList,
        page: page,
        size: size,
      },
    });
  };

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/notice/list?size=${size}&page=${page}&${sort}&title=${categoryName}&lastModifiedDate=${searchItem}`,
        headers: {
          // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
          Authorization: jwt,
        },
      }).then((res) => {
        setItemList(res.data.content);
        setTotalPages(res.data.totalElements);
      });
    };
    getData();
  }, [sort, searchItem, size, page, categoryName, jwt]);

  const { registDate2 } = useDateFormat();

  const DataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index} onClick={() => moveNoticepo(el.id)}>
              <div>{el.id}</div>
              <div>{el.title}</div>
              <div>{registDate2(el.lastModifiedDate)}</div>
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

  const searchParameters = Object.keys(Object.assign({}, ...itemList));
  const filterItems = [];
  filterItems.push(searchParameters[1], searchParameters[4]);
  const filterItems1 = {
    제목: searchParameters[1],
    등록일: searchParameters[4],
  };

  //select 옵션
  const OptionList = (filterItems: any) => {
    return (
      <S.Select onChange={(e: any) => setFilter(e.target.value)}>
        <option value=''>선택해주세요</option>
        {filterItems.map((item: any, index: any) => (
          <option key={index} value={item}>
            {item === Object.values(filterItems1)[0]
              ? Object.keys(filterItems1)[0]
              : Object.keys(filterItems1)[1]}
          </option>
        ))}
      </S.Select>
    );
  };

  const search = () => {
    if (filter === searchParameters[1]) {
      setSearchItem(searchText);

      setCategoryName('');
    } else if (filter === searchParameters[4]) {
      setSearchItem('');
      setCategoryName(searchText);
    } else {
      setSearchItem('');
      setCategoryName('');
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
        <Searchcompo
          filterItems={filterItems}
          optionList={OptionList}
          size={size}
          dataList2={DataList2}
          TitleList={TitleList}
          search={search}
          setSearchText={setSearchText}
          data={itemList}
          // reqData={reqData}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          // 굳이 필요가 없는뎅
          setSort={setSort}
        />
      </div>
    </S.Wrapper>
  );
  // }
};
