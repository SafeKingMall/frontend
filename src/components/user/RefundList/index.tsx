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

export const RefundList = (props: any) => {
    const { registDate2 } = useDateFormat();
    const { MoneyNumber } = useMoney();

    const navigate = useNavigate();
    const moveRefundDe = (item: any) => {
        if (cookies.get('refreshToken')) {
            navigate('/mypage-rf-detail', {
                state: {
                    data: item,
                },
            });
        } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');
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

    //검색리스트 길이
    const [listLength, setListLength] = useState(0);

    //처리상태
    const [payStatus, setPayStatus] = useState('');


    useEffect(() => {
        const getData = async () => {
            try {
                await axios({
                    method: 'get',
                    url: `${process.env.REACT_APP_API_URL}/user/payment/cancel/list?page=${page}&size=${size}&fromDate=${finishDay}&toDate=${startDay}&paymentStatus=CANCEL
                `,
                    headers: {
                        Authorization: jwt,
                    },
                }).then((res) => {

                    setItemList(res.data.order);
                    setTotalPages(res.data.total_elements);
                    setListLength(res.data.total_elements);
                });

            } catch (err: any) {
                // if (err.response.status === 403) {
                navigate('/sign-in');
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
                cookies.remove('loginUser');
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
    }, [jwt, size, sort, page, startDay, finishDay, payStatus, navigate]);

    const dataList2 = (data: any) => {
        return (
            <S.DataList>
                {listLength !== 0 ? (
                    data.map((el: any, index: any) => {
                        return (
                            <S.Container key={index} onClick={() => moveRefundDe(el.id)}>
                                <div>{el.id}</div>
                                <div>{el.date.slice(0, 11)}</div>
                                <div>
                                    <p>{el.date.slice(0, 11)}</p>
                                    <p>[{el.merchant_uid}]</p>
                                </div>
                                <div>{el.order_item.name}</div>
                                <div>{el.count}</div>
                                <div>{MoneyNumber(el.payment.price)}</div>
                                <div>
                                    {el.payment.status === 'READY'
                                        ? '결제대기'
                                        : el.payment.status === 'PAID'
                                            ? '결제완료'
                                            : el.payment.status === 'CANCEL'
                                                ? '결제취소'
                                                : '결제실패'}
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

    //   if (props.error) {
    //     return <>{props.error.message}</>;
    // } else if (!props.loaded) {
    //     return <>loading...</>;
    // } else {
    return (
        <S.Wrapper>
            <S.Mid>환불 내역</S.Mid>
            <S.SearchBox>
                <S.SearchFirst>
                    {/* <S.DeliSelect value={payStatus} onChange={(e: any) => setPayStatus(e.target.value)}>
                        <option value=''>전체 처리상태</option>
                        <option value='PAID'>확인중</option>
                        <option value='CANCEL'>취소완료</option>
                    </S.DeliSelect> */}

                    <S.DayButton onClick={Now}>오늘</S.DayButton>
                    <S.DayButton onClick={OneWeek}>1주일</S.DayButton>
                    <S.DayButton onClick={ThreeMonth}>3개월</S.DayButton>
                    <S.DayButton onClick={SixMonth}>6개월</S.DayButton>
                </S.SearchFirst>

                <S.SearchSecon>
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
                    <S.SearchButton>조회</S.SearchButton>
                </S.SearchSecon>
            </S.SearchBox>
            <S.BigTitle>주문 상품 정보</S.BigTitle>
            <S.AdminOrdertitle>
                <div>No</div>
                <div>취소일자</div>
                <div>주문일자[번호]</div>
                <div>상품명</div>
                <div>수량</div>
                <div>상품구매금액</div>
                <div>처리상태</div>
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
