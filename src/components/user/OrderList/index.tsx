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
import { useMediaQuery } from 'react-responsive';

const swal = withReactContent(Swal);

export const OrderList = (props: any) => {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:400px)' });
    const { registDate2 } = useDateFormat();
    const { MoneyNumber } = useMoney();

    const navigate = useNavigate();
    //마이페이지 주문내역 상세내역으로 이동
    const moveRefundDe = (item: any) => {
        if (cookies.get('refreshToken')) {
            navigate('/mypage-od-detail', {
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

    //마이페이지 환불 신청
    const moveMypageAp = (item: any, status: any) => {
        if (cookies.get('refreshToken')) {
            if (status === 'COMPLETE') {
                swal.fire({
                    heightAuto: false,
                    icon: 'warning',
                    text: '배송완료된 상품은 환불신청이 안됩니다.',
                    confirmButtonText: '확인',
                    confirmButtonColor: '#289951',
                    width: 400,
                });
            }
            else if (status === 'CANCEL') {
                swal.fire({
                    heightAuto: false,
                    icon: 'warning',
                    text: '배송 실패된 상품은 환불신청이 안됩니다.',
                    confirmButtonText: '확인',
                    confirmButtonColor: '#289951',
                    width: 400,
                });
            } else if (status === 'IN_DELIVERY') {
                swal.fire({
                    heightAuto: false,
                    icon: 'warning',
                    text: '배송 중인 상품은 환불신청이 안됩니다.',
                    confirmButtonText: '확인',
                    confirmButtonColor: '#289951',
                    width: 400,
                });
            } else {
                navigate('/mypage-ap1', {
                    state: {
                        data: item,
                    },
                });
            }

        } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');

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

    //주문처리상태
    // const [payStatus, setPayStatus] = useState('');

    // 배송상태
    const [deliStatus, setDeliStatus] = useState('');

    //상품명 입력
    const [keyWord, setKeyWord] = useState('');

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                await axios({
                    method: 'get',
                    url: `${process.env.REACT_APP_API_URL}/user/order/list?page=${page}&size=${size}&fromDate=${finishDay}&toDate=${startDay}&deliveryStatus=${deliStatus}&keyword=${keyWord}
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
                navigate('/sign-in');
                cookies.remove('accessToken');
                cookies.remove('refreshToken');
                cookies.remove('loginUser');

            }


        };
        getData();
    }, [jwt, size, sort, page, startDay, finishDay, keyWord, navigate, deliStatus,]);

    const dataList2 = (data: any) => {
        return (
            <S.DataList>
                {listLength !== 0 ? (
                    data.map((el: any, index: any) => {
                        return (
                            <S.Container key={index} >
                                {isDesktopOrMobile !== true ? (<>  <div onClick={() => moveRefundDe(el.id)}>{el.id}</div>
                                    <div onClick={() => moveRefundDe(el.id)}>{el.date.slice(0, 11)}</div>
                                    <div onClick={() => moveRefundDe(el.id)}>{el.order_item.name}</div>
                                    <div onClick={() => moveRefundDe(el.id)}>{el.count}</div>
                                    <div onClick={() => moveRefundDe(el.id)}>{MoneyNumber(el.price)}</div>
                                    <div onClick={() => moveRefundDe(el.id)}>
                                        {el.delivery.status === 'PREPARATION'
                                            ? '배송준비'
                                            : el.delivery.status === 'IN_DELIVERY'
                                                ? '배송중'
                                                : el.delivery.status === 'COMPLETE'
                                                    ? '배송완료'
                                                    : '배송취소'}
                                    </div>
                                    <div>
                                        <S.RefundBtn onClick={() => moveMypageAp(el.id, el.delivery.status)}>요청하기</S.RefundBtn>

                                    </div></>) : (<ul>
                                        <div onClick={() => moveRefundDe(el.id)}>
                                            <p>{el.date.slice(0, 11)}[{el.merchant_uid}]</p>
                                            <p>자세히 보기 &gt;</p>

                                        </div>
                                        <div>
                                            <img
                                                src={el.order_item === '' ? '' : process.env.REACT_APP_BASE_URL + el.order_item.thumbnail}
                                                width='80'
                                                height='80'
                                                alt={el.order_item.name}
                                                style={{ border: '1px solid #DDDDDD' }} />
                                            <ul>
                                                <p >{el.order_item.name}</p>
                                                <p >{MoneyNumber(el.price)}</p>
                                                <p >종류 : {el.count}</p>
                                            </ul>
                                        </div>
                                        <div >
                                            {el.delivery.status === 'PREPARATION'
                                                ? '배송준비'
                                                : el.delivery.status === 'IN_DELIVERY'
                                                    ? '배송중'
                                                    : el.delivery.status === 'COMPLETE'
                                                        ? '배송완료'
                                                        : '배송취소'}
                                        </div>
                                        <div>
                                            <S.RefundBtn onClick={() => moveMypageAp(el.id, el.delivery.status)}>환불요청</S.RefundBtn>

                                        </div></ul>)}

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


    return (
        <S.Wrapper>
            <S.Mid>주문 내역</S.Mid>
            <S.SearchBox>
                {isDesktopOrMobile !== true ? (<S.SearchFirst>
                    {/* <S.DeliSelect value={payStatus} onChange={(e: any) => setPayStatus(e.target.value)}>
                        <option value=''>전체 주문처리상태</option>
                        <option value='READY'>주문접수</option>
                        <option value='COMPLETE'>주문완료</option>
                        <option value='CANCEL'>주문취소</option>
                    </S.DeliSelect> */}

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
                </S.SearchFirst>) : (<>   <S.SearchFirst>
                    {/* <S.DeliSelect value={payStatus} onChange={(e: any) => setPayStatus(e.target.value)}>
                        <option value=''>전체 주문처리상태</option>
                        <option value='READY'>주문접수</option>
                        <option value='COMPLETE'>주문완료</option>
                        <option value='CANCEL'>주문취소</option>
                    </S.DeliSelect> */}

                    <S.DayButton onClick={Now}>오늘</S.DayButton>
                    <S.DayButton onClick={OneWeek}>1주일</S.DayButton>
                    <S.DayButton onClick={ThreeMonth}>3개월</S.DayButton>
                    <S.DayButton onClick={SixMonth}>6개월</S.DayButton>
                </S.SearchFirst>
                    <S.SearchFirst>
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
                        <S.DeliSelect value={deliStatus} onChange={(e: any) => setDeliStatus(e.target.value)}>
                            <option value=''>배송상태</option>
                            <option value='PREPARATION'>배송준비</option>
                            <option value='IN_DELIVERY'>배송중</option>
                        </S.DeliSelect>
                    </S.SearchFirst></>)}


                <S.SearchSecon>
                    {isDesktopOrMobile !== true ? (<S.SearchFive>
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
                        <S.DeliSelect value={deliStatus} onChange={(e: any) => setDeliStatus(e.target.value)}>
                            <option value=''>배송상태</option>
                            <option value='PREPARATION'>배송준비</option>
                            <option value='IN_DELIVERY'>배송중</option>
                        </S.DeliSelect>
                        <S.SearchButton onClick={() => search()}>검색</S.SearchButton>
                    </S.SearchFive>) : (<S.SearchFive>
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

                        <S.SearchButton onClick={() => search()}>검색</S.SearchButton>
                    </S.SearchFive>)}

                </S.SearchSecon>
            </S.SearchBox>
            <S.BigTitle>주문 상품 정보</S.BigTitle>
            <S.AdminOrdertitle>
                <div>No</div>
                <div>주문일자[번호]</div>
                <div>상품명</div>
                <div>종류</div>
                <div>상품구매금액</div>
                <div>배송상태</div>
                <div>환불요청</div>
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
};
