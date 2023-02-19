import * as S from './style';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Searchcompo2 } from '../../../often/Searchcompo2';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';
import { useNavigate } from 'react-router-dom';

const swal = withReactContent(Swal);

export const AdimWdList = (props: any) => {
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState([]);
  //회원명 (search할때 쓰일듯)
  const [memberName, setMemberName] = useState('');
  // 페이지 숫자
  const [page, setPage] = useState(0);
  // 전체 페이지 확인(전체 페이지 수만큼 페이지네이션 숫자 늘리기)
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  // select 옵션 선택
  const [filter, setFilter] = useState('name');
  // select 박스
  const [searchText, setSearchText] = useState('');
  //검색리스트 길이
  const [listLength, setListLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/admin/member/withDrawlList?size=${size}&page=${page}&name=${memberName}`,
          headers: {
            Authorization: jwt,
          },
        }).then((res) => {
          setMemberList(res.data.content);
          setTotalPages(res.data.totalElements);
          setListLength(res.data.numberOfElements);
        });
      } catch (err: any) {
        // if (err.response.status === 812) {
        navigate('/sign-in');
        swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: '로그인이 만료되었습니다.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          cancelButtonText: '취소',
          width: 400,
        });
        // }
      }
    };
    getData();
  }, [jwt, memberName, size, page, navigate]);

  const searchParameters = Object.keys(Object.assign({}, ...memberList));

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {listLength !== 0 ? (
          memberList.map((el: any, index: any) => {
            return (
              <S.Container key={index}>
                <div>{el.memberId}</div>
                <div>
                  <div>{el.name}</div>
                </div>
                <div>{el.withdrawalDate}</div>
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
        <div>회원명</div>
        <div>탈퇴일</div>
      </S.AdminTitle>
    );
  };

  const optionList = (filterItems: any) => {
    return (
      <S.Select onChange={(e) => setFilter(e.target.value)}>
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
