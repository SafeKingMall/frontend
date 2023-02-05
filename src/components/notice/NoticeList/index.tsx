import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Searchcompo2 } from '../../often/Searchcompo2';
import { useState } from 'react';
import axios from 'axios';
import { useDateFormat } from '../../common/hooks/useDateFormat';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';

const swal = withReactContent(Swal);

export const NoticeList = (props: any) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  const admin = cookies.get('admin');

  // 들어온 데이터 넣는것
  const [itemList, setItemList] = useState([]);
  //creatdate로 sort 바꿀것
  const [sort] = useState(`sort=createDate,desc`);
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
  const [reqData, setReqData] = useState(``);
  //검색리스트 길이
  const [listLength, setListLength] = useState(0);

  // 토큰이 admin이면 notice-po로 토큰이 일반이면 notice-user-po로 연결
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        itemId: item,
        data: itemList,
        page: page,
        size: size,
        reqData: reqData,
      },
    });
  };
  const moveNoticewr = () => {
    navigate('/notice-wr', {
      state: {
        reqData: reqData,
        size: size,
      },
    });
  };

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/notice/list?size=${size}&page=${page}&${sort}&title=${categoryName}&createDate=${searchItem}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setItemList(res.data.content);
        setTotalPages(res.data.totalElements);
        setListLength(res.data.numberOfElements);
        setReqData(`${sort}&title=${categoryName}&lastModifiedDate=${searchItem}`);
      });
    };
    getData();
  }, [sort, searchItem, size, page, categoryName, jwt]);

  const { registDate2 } = useDateFormat();

  const DataList2 = (data: any) => {
    return (
      <S.DataList>
        {listLength !== 0 ? (
          data.map((el: any, index: any) => {
            return (
              <S.Container key={index} onClick={() => moveNoticepo(el.id)}>
                <div>{el.id}</div>
                <div>{el.title}</div>
                <div>{registDate2(el.createDate)}</div>
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
      <S.NoticeTitle>
        <div>No</div>
        <div>제목</div>
        <div>등록일</div>
      </S.NoticeTitle>
    );
  };

  //select 옵션
  const OptionList = () => {
    return (
      <S.Select onChange={(e: any) => setFilter(e.target.value)}>
        <option value=''>선택해주세요</option>
        <option value='title'>제목</option>
        <option value='createDate'>작성일</option>
      </S.Select>
    );
  };

  const search = () => {
    if (filter === '') {
      swal.fire({
        icon: 'warning',
        text: '체크박스를 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else if (filter === 'title') {
      setSearchItem('');

      setCategoryName(searchText);
    } else if (filter === 'createDate') {
      setSearchItem(searchText);
      setCategoryName('');
    }
    //  else {
    //   setSearchItem('');
    //   setCategoryName('');
    // }
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
          filter={filter}
          optionList={OptionList}
          size={size}
          dataList2={DataList2}
          TitleList={TitleList}
          search={search}
          setSearchText={setSearchText}
          data={itemList}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
      {admin ? <S.NoticeButton onClick={() => moveNoticewr()}>글쓰기</S.NoticeButton> : ''}
    </S.Wrapper>
  );
  // }
};
