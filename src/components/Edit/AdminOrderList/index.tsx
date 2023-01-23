import * as S from './style';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { useState } from 'react';
// import {useEffect} from 'react';
import db from '../../../db.json';
import { Pagination } from '../../often/pagination';
import { useDateFormat } from '../../common/hooks/useDateFormat';
import { useMoney } from '../../common/hooks/useMoney';

export const AdminOrderList = (props: any) => {
  const data1 = db.orders;
  const data = data1
    .sort((a: any, b: any) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();
  // const data = [...data1].reverse();

  const { registDate, registDate2 } = useDateFormat();
  const { MoneyNumber } = useMoney();

  const navigate = useNavigate();
  const moveQnApw = (item: any) => {
    navigate('/admin-order-de', {
      state: {
        data: item,
      },
    });
  };

  //페이지 네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const dataList2 = (data: any) => {
    return (
      <S.DataList>
        {data.map((el: any, index: any) => {
          return (
            <S.Container key={index} onClick={() => moveQnApw(el)}>
              <div>{el.id}</div>
              {el.orderItem_count === 1 ? (
                <div>{el.orderItem.name}</div>
              ) : (
                <div>
                  {el.orderItem.name} 외 {el.orderItem_count - 1}건
                </div>
              )}
              <div>{MoneyNumber(el.price)}</div>
              <div>
                {el.payment.status === 'COMPLETE'
                  ? '결제완료'
                  : el.payment.status === 'CANCEL'
                  ? '결제취소'
                  : '결제취소중'}
              </div>
              <div>{el.delivery.status === 'COMPLETE' ? '배송완료' : '배송중'}</div>
              <div>{registDate(el.date)}</div>
              <div>
                {el.member.name}/{el.delivery.receiver}
              </div>
            </S.Container>
          );
        })}
      </S.DataList>
    );
  };

  // 검색시작날짜
  const [startDay, setStartDay] = useState('' as any);
  // 검색종료날짜
  const [finishDay, setFinishDay] = useState('' as any);

  //결제상태
  const [payStatus, setPayStatus] = useState('');

  // 배송상태
  const [deliStatus, setDeliStatus] = useState('');

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

  const SearchBox = () => {
    return (
      <S.SearchBox>
        <S.SearchSecon>
          <S.DayButton onClick={Now}>오늘</S.DayButton>
          <S.DayButton onClick={OneWeek}>1주일</S.DayButton>
          <S.DayButton onClick={ThreeMonth}>3개월</S.DayButton>
          <S.DayButton onClick={SixMonth}>6개월</S.DayButton>
          <S.SearchThird>
            <S.SearchFour>
              <S.DayInput
                type='date'
                value={startDay}
                onChange={(e: any) => {
                  setStartDay(e.target.value);
                }}
              />
              {/* input date icon 디자인 바꾸기  */}
              {/* <S.SearchButton>라</S.SearchButton> */}
            </S.SearchFour>
            <S.Tilde>~</S.Tilde>
            <S.DayInput
              type='date'
              value={finishDay}
              onChange={(e: any) => {
                setFinishDay(e.target.value);
              }}
            />
          </S.SearchThird>
        </S.SearchSecon>
        <S.SearchFive>
          <S.SearchH2>상품명</S.SearchH2>
          <S.SearchInput type='search' />
          <S.DeliSelect value={payStatus} onChange={(e: any) => setPayStatus(e.target.value)}>
            <option>결제상태</option>
            <option>결제완료</option>
            <option>결제취소</option>
            <option>결제취소중</option>
          </S.DeliSelect>
          <S.DeliSelect value={deliStatus} onChange={(e: any) => setDeliStatus(e.target.value)}>
            <option>배송상태</option>
            <option>배송완료</option>
            <option>배송중</option>
          </S.DeliSelect>
          <S.SearchButton>검색</S.SearchButton>
        </S.SearchFive>
      </S.SearchBox>
    );
  };

  //   if (props.error) {
  //     return <>{props.error.message}</>;
  // } else if (!props.loaded) {
  //     return <>loading...</>;
  // } else {
  return (
    <S.Wrapper>
      <SearchBox />
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
      {dataList2(currentItems)}
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
        indexOfLastItem={indexOfLastItem}
        indexOfFirstItem={indexOfFirstItem}
        currentItems={currentItems}
      />
    </S.Wrapper>
  );
  // }
};
