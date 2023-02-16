import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Searchcompo2 } from '../../often/Searchcompo2';
import { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';

const swal = withReactContent(Swal);

export const AdminItemList = (props: any) => {
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  const navigate = useNavigate();
  const moveAdminItemPo = (itemId: any) => {
    navigate('/admin-item-po', {
      state: {
        data: itemId.id,
      },
    });
  };

  const moveItemDetail = (itemId: any) => {
    navigate('/itemdetail', {
      state: {
        itemId: itemId.id,
      },
    });
  };

  // 들어온 데이터 넣는것
  const [itemList, setItemList] = useState([]);
  const [sort] = useState(`sort=createDate,desc`);
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

  //검색리스트 길이
  const [listLength, setListLength] = useState(0);

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
        setListLength(res.data.numberOfElements);
      });
    };
    getData();
  }, [sort, searchItem, size, page, categoryName, jwt]);

  // //삭제 알림창
  // const deleteItemAlert = (itemId: number, name: string) => {
  //   swal
  //     .fire({
  //       icon: 'question',
  //       text: `${name} 상품을 삭제하시겠습니까?
  //       삭제하면 복구가 불가능합니다. `,
  //       confirmButtonText: '확인',
  //       confirmButtonColor: '#289951',
  //       showCancelButton: true,
  //       cancelButtonText: '취소',
  //       width: 400,
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         deleteApi(itemId);
  //         swal.fire({
  //           icon: 'success',
  //           text: `${name} 상품이 삭제되었습니다.`,
  //           confirmButtonText: '확인',
  //           confirmButtonColor: '#289951',
  //           width: 400,
  //         });
  //       }
  //     });
  // };

  // //삭제api
  // const deleteApi = async (itemId: any) => {
  //   await axios({
  //     method: 'delete',
  //     url: `${process.env.REACT_APP_API_URL}/admin/item/${itemId}`,
  //     headers: {
  //       Authorization: jwt,
  //     },
  //   });

  //   await axios({
  //     method: 'get',
  //     url: `${process.env.REACT_APP_API_URL}/admin/item/list?size=${size}&page=${page}&${sort}&categoryName=${categoryName}&itemName=${searchItem}`,
  //     headers: {
  //       Authorization: jwt,
  //     },
  //   }).then((res) => {
  //     setItemList(res.data.content);
  //     setTotalPages(res.data.totalElements);
  //   });
  // };

  const DataList2 = (data: any) => {
    return (
      <S.DataList>
        {listLength !== 0 ? (
          data.map((el: any, index: any) => {
            return (
              <S.Container key={index}>
                <div onClick={() => moveItemDetail(el)}>{el.id}</div>
                <div onClick={() => moveItemDetail(el)}>{el.name}</div>
                <div onClick={() => moveItemDetail(el)}>{el.categoryName}</div>
                <S.AdminButton onClick={() => moveAdminItemPo(el)}>수정</S.AdminButton>
                {/* <S.AdminButton onClick={() => deleteItemAlert(el.id, el.name)}>삭제</S.AdminButton> */}
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
      <S.AdminTitle>
        <div>No</div>
        <div>상품명</div>
        <div>카테고리</div>
      </S.AdminTitle>
    );
  };

  const OptionList = () => {
    return (
      <S.Select onChange={(e: any) => setFilter(e.target.value)}>
        <option value=''>선택해주세요</option>
        <option value='itemName'>상품명</option>
        <option value='categoryName'>카테고리명</option>
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
    } else if (filter === 'itemName') {
      setSearchItem(searchText);
      setCategoryName('');
    } else if (filter === 'categoryName') {
      setSearchItem('');
      setCategoryName(searchText);
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
      <S.QnAButton onClick={() => navigate('/admin-item-wr')}>등록</S.QnAButton>
    </S.Wrapper>
  );
  // }
};
