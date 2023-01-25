import * as S from './style';
import { Searchcompo2 } from '../../../often/Searchcompo2';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const AdminMemberList = (props: any) => {
  // 들어온 데이터 넣는것
  const [memberList, setMemberList] = useState([]);
  const [sort] = useState(`sort=memberId,asc`);
  //회원명 (search할때 쓰일듯)
  const [memberName, setMemberName] = useState('');
  //보낼 쿼리
  // const [reqData, setReqData] = useState(``);
  // 페이지 숫자
  const [page, setPage] = useState(0);
  // 전체 페이지 확인(전체 페이지 수만큼 페이지네이션 숫자 늘리기)
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  //토큰
  // select 옵션 선택
  const [filter, setFilter] = useState('');
  // select 박스
  const [searchText, setSearchText] = useState('');
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([] as any);
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/member/list?size=${size}&page=${page}&${sort}&name=${memberName}&status=${filter}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setMemberList(res.data.content);
        setTotalPages(res.data.totalElements);
      });
    };
    getData();
  }, [sort, memberName, size, page, jwt, filter]);

  //체크박스
  const handleSingleCheck = (checked: any, id: any) => {
    if (checked) {
      setCheckItems((prev: any) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el: any) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: any) => {
    if (checked) {
      const idArray: any = [];
      memberList.forEach((el: any) => idArray.push(el.memberId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index}>
              <div>{el.memberId}</div>
              <div>{el.name}</div>
              <div>{el.memberStatus}</div>
              <div>
                <input
                  type='checkbox'
                  name={`select-${el.memberId}`}
                  onChange={(e) => handleSingleCheck(e.target.checked, el.memberId)}
                  checked={checkItems.includes(el.memberId) ? true : false}
                />
              </div>
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
        <div>상태</div>
        <div>
          <input
            type='checkbox'
            name='select-all'
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === memberList.length ? true : false}
          />
        </div>
      </S.AdminTitle>
    );
  };

  // const searchParameters = Object.keys(Object.assign({}, ...memberList));
  // const filterItems = searchParameters.slice(1, 3);
  // const filterItems1 = {
  //   일반회원: searchParameters[1],
  //   탈퇴회원: searchParameters[2],
  // };

  // const optionList = (filterItems: any) => {
  //   return (
  //     <S.Select onChange={(e) => setFilter(e.target.value)}>
  //       <option value=''>전체</option>
  //       {filterItems.map((item: any) => (
  //         <option key={item} value={item}>
  //           {item === Object.values(filterItems1)[0]
  //             ? Object.keys(filterItems1)[0]
  //             : Object.keys(filterItems1)[1]}
  //         </option>
  //       ))}
  //     </S.Select>
  //   );
  // };

  const optionList = () => {
    return (
      <S.Select onChange={(e: any) => setFilter(e.target.value)}>
        <option value=''>전체</option>
        <option value='COMMON'>일반 회원</option>
        <option value='HUMAN'>휴면 회원</option>
      </S.Select>
    );
  };

  const search = () => {
    setMemberName(searchText);
  };

  //탈퇴 알림창
  const deleteMemberAlert = () => {
    swal
      .fire({
        icon: 'question',
        text: '회원을 탈퇴시키실겁니까? ',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteMember();
          swal.fire({
            icon: 'success',
            text: '회원을 탈퇴하였습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
      });
  };

  //탈퇴get
  const deleteMember = async () => {
    await checkItems.map((el: any) => {
      return axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/withdrawal/${el}`,
        headers: {
          Authorization: jwt,
        },
      });
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/member/list?size=${size}&page=${page}&${sort}&name=${memberName}&status=${filter}`,
      headers: {
        Authorization: jwt,
      },
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/member/list?size=${size}&page=${page}&${sort}&name=${memberName}&status=${filter}`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setMemberList(res.data.content);
      setTotalPages(res.data.totalElements);
      setCheckItems([]);
    });
  };

  //   if (props.error) {
  //     return <>{props.error.message}</>;
  // } else if (!props.loaded) {
  //     return <>loading...</>;
  // } else {
  return (
    <S.Wrapper>
      <S.CenterContainer>
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
        <S.QnAButton onClick={() => deleteMemberAlert()}>탈퇴</S.QnAButton>
      </S.CenterContainer>
    </S.Wrapper>
  );
  // }
};
