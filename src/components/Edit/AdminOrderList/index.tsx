/* eslint-disable */
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pagination } from '../../often/pagination';
import { useDateFormat } from '../../common/hooks/useDateFormat';
import { useMoney } from '../../common/hooks/useMoney';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';

const swal = withReactContent(Swal);

export const AdminOrderList = (props: any) => {
  const { registDate, registDate2 } = useDateFormat();
  const { MoneyNumber } = useMoney();

  const navigate = useNavigate();
  const moveQnApw = (item: any) => {
    if (cookies.get('refreshToken')) {
      navigate('/admin-order-de', {
        state: {
          data: item,
        },
      });
    } else {
      navigate('/sign-in');
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '로그인이 만료되었습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }

  };

  const [itemList, setItemList] = useState([]);
  const [sort] = useState(`sort=date,desc`);
  // 페이지 숫자
  const [page, setPage] = useState(0);
  // 전체 페이지 확인(전체 페이지 수만큼 페이지네이션 숫자 늘리기)
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(7);
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  //페이지 네이션
  const [currentPage, setCurrentPage] = useState(page + 1);
  const [itemsPerPage] = useState(size);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // 검색시작날짜
  const [startDay, setStartDay] = useState('' as any);
  // 검색종료날짜
  const [finishDay, setFinishDay] = useState('' as any);

  //결제상태
  const [payStatus, setPayStatus] = useState('');

  // 배송상태
  const [deliStatus, setDeliStatus] = useState('');

  //상품명 입력
  const [keyWord, setKeyWord] = useState('');

  const [searchText, setSearchText] = useState('');
  //검색리스트 길이
  const [listLength, setListLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        await axios({
          method: 'get',

          url: `${process.env.REACT_APP_API_URL}/admin/order/list?sort=${sort}&page=${page}&size=${size}&fromDate=${finishDay}&toDate=${startDay}&keyword=${keyWord}&deliveryStatus=${deliStatus}&paymentStats=${payStatus}
          `,
          headers: {
            Authorization: jwt,
          },
        }).then((res) => {
          setItemList(res.data.orders);
          setTotalPages(res.data.total_elements);
          setListLength(res.data.total_elements);
        });
      } catch (err: any) {
        // if (err.response.status === 403) {
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
  }, [jwt, size, sort, page, startDay, finishDay, keyWord, deliStatus, payStatus, navigate]);

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {listLength !== 0 ? (
          data.map((el: any, index: any) => {
            return (
              <S.Container key={index} onClick={() => moveQnApw(el.id)}>
                <div>{el.id}</div>
                {el.order_item_count === 1 ? (
                  <div>{el.order_item.name}</div>
                ) : (
                  <div>
                    {el.order_item.name} 외 {el.order_item_count - 1}건
                  </div>
                )}
                <div>{MoneyNumber(el.price)}</div>
                <div>
                  {el.payment.status === 'PAID'
                    ? '결제완료'
                    : el.payment.status === 'READY'
                      ? '결제대기'
                      : el.payment.status === 'CANCEL'
                        ? '결제취소'
                        : '결제실패'}
                </div>

                <div>
                  {el.delivery.status === 'COMPLETE'
                    ? '배송완료'
                    : el.delivery.status === 'IN_DELIVERY'
                      ? '배송 중'
                      : el.delivery.status === 'PREPARATION'
                        ? '배송 준비'
                        : '배송취소'}
                </div>
                <div>{registDate(el.date)}</div>
                <div>
                  {el.member.name}/{el.delivery.receiver}
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
  //오늘
  const Now = () => {
    const date = new Date();
    setStartDay(registDate2(date));
    setFinishDay(registDate2(date));
  };

  //1주일 전
  const OneWeek = () => {
    const now = new Date();
    setStartDay(registDate2(now));
    const date = new Date(now.setDate(now.getDate() - 7));
    setFinishDay(registDate2(date));
  };

  // 3개월 전
  const ThreeMonth = () => {
    const now = new Date();
    setStartDay(registDate2(now));
    const date = new Date(now.setMonth(now.getMonth() - 3));
    setFinishDay(registDate2(date));
  };

  //6개월전
  const SixMonth = () => {
    const now = new Date();
    setStartDay(registDate2(now));
    const date = new Date(now.setMonth(now.getMonth() - 6));
    setFinishDay(registDate2(date));
  };

  const onChangeText = (e: any) => {
    setSearchText(e.target.value);
  };
  const onKeyDownEnter = (e: any) => {
    if (e.key === 'Enter') {
      search();
      e.target.blur();
    }
  };

  const searchClick = () => {
    setCurrentPage(1);
    setPage(0);
  };

  const search = () => {
    setKeyWord(searchText);
  };

  //   if (props.error) {
  //     return <>{props.error.message}</>;
  // } else if (!props.loaded) {
  //     return <>loading...</>;
  // } else {
  return (
    <S.Wrapper>
      <S.SearchBox>
        <S.SearchSecon>
          <S.DayButton onClick={Now}>오늘</S.DayButton>
          <S.DayButton onClick={OneWeek}>1주일</S.DayButton>
          <S.DayButton onClick={ThreeMonth}>3개월</S.DayButton>
          <S.DayButton onClick={SixMonth}>6개월</S.DayButton>
          <S.SearchThird>
            <S.DayInput
              type='date'
              value={finishDay}
              onChange={(e: any) => {
                setFinishDay(e.target.value);
              }}
            />
            <S.Tilde>~</S.Tilde>
            <S.DayInput
              type='date'
              value={startDay}
              onChange={(e: any) => {
                setStartDay(e.target.value);
              }}
            />
          </S.SearchThird>
        </S.SearchSecon>
        <S.SearchFive>
          <S.SearchH2>상품명</S.SearchH2>
          <S.SearchInput
            type='text'
            name='search-form'
            id='search-form'
            placeholder='Search for...'
            onClick={searchClick}
            onChange={(e: any) => onChangeText(e)}
            onKeyDown={(e: any) => onKeyDownEnter(e)}
            autoComplete='off'
          />
          <S.DeliSelect value={payStatus} onChange={(e: any) => setPayStatus(e.target.value)}>
            <option value=''>결제상태</option>
            <option value='PAID'>결제완료</option>
            <option value='READY'>결제대기</option>
            <option value='CANCEL'>결제취소</option>
            <option value='FAILED'>결제실패</option>
          </S.DeliSelect>
          <S.DeliSelect value={deliStatus} onChange={(e: any) => setDeliStatus(e.target.value)}>
            <option value=''>배송상태</option>
            <option value='PREPARATION'>배송준비</option>
            <option value='IN_DELIVERY'>배송중</option>
            <option value='COMPLETE'>배송완료</option>
            <option value='CANCEL'>배송취소</option>
          </S.DeliSelect>
          <S.SearchButton onClick={() => search()}>검색</S.SearchButton>
        </S.SearchFive>
      </S.SearchBox>
      <div>
        <S.BigTitle>상품 리스트</S.BigTitle>
      </div>
      <S.AdminOrdertitle>
        <div>상품번호</div>
        <div>상품명</div>
        <div>결제금액</div>
        <div>결제상태</div>
        <div>배송상태</div>
        <div>
          <div>처리일자</div>
          <div>(결제일자기준)</div>
        </div>
        <div>주문자/수령인</div>
      </S.AdminOrdertitle>
      {dataList2(itemList)}
      <Pagination
        data={itemList}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
      />
    </S.Wrapper>
  );
  // }
};
