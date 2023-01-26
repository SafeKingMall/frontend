import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Searchcompo } from '../../often/Searchcompo';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const AdminItemList = (props: any) => {
  const navigate = useNavigate();
  const moveAdminItemPo = (itemId: any) => {
    navigate('/admin-item-po', {
      state: {
        data: itemId.id,
      },
    });
  };

  // 들어온 데이터 넣는것
  const [itemList, setItemList] = useState([]);
  const [sort] = useState(`sort=createDate,desc&sort=name,asc`);
  //itemName -> 상품명 (search할때 쓰일듯)
  const [searchItem, setSearchItem] = useState('');
  // 페이지 숫자
  const [page, setPage] = useState(0);
  // 전체 페이지 확인(전체 페이지 수만큼 페이지네이션 숫자 늘리기)
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  const [categoryName, setCategoryName] = useState('');
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
        url: `${process.env.REACT_APP_API_URL}/admin/item/list?size=${size}&page=${page}&${sort}&categoryName=${categoryName}&itemName=${searchItem}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setItemList(res.data.content);
        setTotalPages(res.data.totalElements);
      });
    };
    getData();
  }, [sort, searchItem, size, page, categoryName, jwt]);

  //삭제 알림창
  const deleteItemAlert = (itemId: number, name: string) => {
    swal
      .fire({
        icon: 'question',
        text: `${name} 상품을 삭제하시겠습니까?삭제하면 복구가 불가능합니다. `,
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteApi(itemId);
          swal.fire({
            icon: 'success',
            text: `${name} 상품이 삭제되었습니다.`,
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
      });
  };

  //삭제api
  const deleteApi = async (itemId: any) => {
    await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/admin/item/${itemId}`,
      headers: {
        Authorization: jwt,
      },
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/item/list?size=${size}&page=${page}&${sort}&categoryName=${categoryName}&itemName=${searchItem}`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setItemList(res.data.content);
      setTotalPages(res.data.totalElements);
    });
  };

  const DataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index}>
              <div>{el.id}</div>
              <div>{el.name}</div>
              <div>{el.categoryName}</div>
              <S.AdminButton2 onClick={() => moveAdminItemPo(el)}>수정</S.AdminButton2>
              <S.AdminButton onClick={() => deleteItemAlert(el.id, el.name)}>삭제</S.AdminButton>
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

  const searchParameters = Object.keys(Object.assign({}, ...itemList));
  const filterItems = searchParameters.slice(2, 4);
  const filterItems1 = {
    상품명: searchParameters[2],
    카테고리: searchParameters[3],
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
    if (filter === searchParameters[2]) {
      setSearchItem(searchText);
      setCategoryName('');
    } else if (filter === searchParameters[3]) {
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
        <div>
          <S.BigTitle>상품 관리</S.BigTitle>
        </div>
        <Searchcompo
          filterItems={filterItems}
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
    </S.Wrapper>
  );
  // }
};
