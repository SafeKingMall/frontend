import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { TfiLock } from 'react-icons/tfi';
import { Searchcompo2 } from '../../often/Searchcompo2';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDateFormat } from '../../common/hooks/useDateFormat';
import { Cookies } from 'react-cookie';
import { useMediaQuery } from 'react-responsive';

export const QnAList = (props: any) => {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:400px)' });
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  // 들어온 데이터 넣는것
  const [memberList, setMemberList] = useState([]);
  const [sort] = useState(`sort=createDate,desc`);

  // 페이지 숫자
  const [page, setPage] = useState(0);
  // 전체 페이지 확인
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  // select 옵션 선택
  const [filter, setFilter] = useState('title');
  // select 박스
  const [searchText, setSearchText] = useState('');
  // 데이터들
  const [title, setTitle] = useState('');
  //createDate
  const [lastModifiedDate, setLastModifiedDate] = useState('');
  const [memberId, setMemberId] = useState('');
  //검색리스트 길이
  const [listLength, setListLength] = useState(0);

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
        setListLength(res.data.numberOfElements);
      });
    };
    getData();
  }, [sort, title, lastModifiedDate, memberId, size, page, jwt]);

  const navigate = useNavigate();
  const moveQnApw = (item: any) => {
    if (cookies.get('refreshToken')) {
      navigate('/qna-pw', {
        state: {
          data: item,
        },
      });
    } else {
      navigate('/sign-in');
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
    }
  };

  const { registDate2 } = useDateFormat();

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {listLength !== 0 ? (
          data.map((el: any, index: any) => {
            return (
              <S.Container key={index} onClick={() => moveQnApw(el.id)}>
                <div>{el.id}</div>
                <div>
                  <ul>{el.title}</ul>
                  <TfiLock color='#D9D9D9' />
                </div>
                {isDesktopOrMobile !== true ? (
                  <div>
                    <p>{el.memberId}</p>
                    <p>{registDate2(el.createDate)}</p>
                  </div>
                ) : (
                  <div>
                    <ul>{el.memberId}</ul>
                    <ul>{registDate2(el.createDate)}</ul>
                  </div>
                )}
              </S.Container>
            );
          })
        ) : (
          <S.NoSearchItem>검색 결과가 없습니다.</S.NoSearchItem>
        )}
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

  const optionList = () => {
    return (
      <S.Select onChange={(e: any) => setFilter(e.target.value)}>
        <option value='title'>제목</option>
        <option value='memberId'>작성자</option>
        <option value='createDate'>등록일</option>
      </S.Select>
    );
  };

  const search = () => {
    if (filter === 'title') {
      setTitle(searchText);
      setLastModifiedDate('');
      setMemberId('');
    } else if (filter === 'memberId') {
      setMemberId(searchText);
      setTitle('');
      setLastModifiedDate('');
    } else if (filter === 'createDate') {
      setLastModifiedDate(searchText);
      setTitle('');
      setMemberId('');
    }
  };

  return (
    <S.Wrapper>
      <Searchcompo2
        filter={filter}
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
};
