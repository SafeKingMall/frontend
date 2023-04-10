import * as S from './style';
import { Searchcompo2 } from '../../../often/Searchcompo2';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
// import { useCookies } from 'react-cookie';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';
import { useNavigate } from 'react-router-dom';

const swal = withReactContent(Swal);

export const AdminMemberList = (props: any) => {
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  const navigate = useNavigate();
  // 들어온 데이터 넣는것
  const [memberList, setMemberList] = useState([]);
  const [sort] = useState(`sort=memberId,asc`);
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
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState<any[]>([]);

  //검색리스트 길이
  const [listLength, setListLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/admin/member/list?size=${size}&page=${page}&${sort}&name=${memberName}&status=${filter}`,
          headers: {
            Authorization: jwt,
          },
        }).then((res) => {
          setListLength(res.data.numberOfElements);
          setMemberList(res.data.content);
          setTotalPages(res.data.totalElements);
        });
      } catch (err: any) {
        navigate('/sign-in');
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        cookies.remove('loginUser');
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, memberName, size, page, jwt, filter, navigate]);

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
        {listLength !== 0 ? (
          data.map((el: any, index: any) => {
            return (
              <S.Container key={index}>
                <div>{el.memberId}</div>
                <div>{el.name}</div>
                <div>{el.memberStatus}</div>
                <div>
                  <S.CheckBox
                    type='checkbox'
                    name={`select-${el.memberId}`}
                    onChange={(e) => handleSingleCheck(e.target.checked, el.memberId)}
                    checked={checkItems.includes(el.memberId) ? true : false}
                  />
                </div>
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
        <div>상태</div>
        <div>
          <S.CheckBox
            type='checkbox'
            name='select-all'
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === memberList.length ? true : false}
          />
        </div>
      </S.AdminTitle>
    );
  };

  const optionList = () => {
    return (
      <S.Select onChange={(e: any) => setFilter(e.target.value)}>
        <option value=''>선택해주세요</option>
        <option value='COMMON'>일반 회원</option>
        <option value='HUMAN'>휴면 회원</option>
      </S.Select>
    );
  };

  const search = () => {
    if (filter === '') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '체크박스를 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      setMemberName(searchText);
    }
  };

  //탈퇴 알림창
  const deleteMemberAlert = () => {
    if (checkItems.length === 0) {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '탈퇴시킬 회원을 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: '회원을 탈퇴시키겠습니까? ',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (cookies.get('refreshToken')) {
              deleteMember();
              swal.fire({
                heightAuto: false,
                icon: 'success',
                text: '회원을 탈퇴하였습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
            } else {
              navigate('/sign-in');
              cookies.remove('accessToken');
              cookies.remove('refreshToken');
              cookies.remove('loginUser');
            }
          }
        });
    }
  };

  //탈퇴get
  const deleteMember = async () => {
    if (cookies.get('refreshToken')) {
      checkItems.map((el: any) => {
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
    } else {
      navigate('/sign-in');
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
    }
  };

  return (
    <S.Wrapper>
      <S.CenterContainer>
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
      </S.CenterContainer>
      <S.BtnArea>
        <S.QnAButton onClick={() => deleteMemberAlert()}>탈퇴</S.QnAButton>
      </S.BtnArea>
    </S.Wrapper>
  );
};
