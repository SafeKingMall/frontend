/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';

const swal = withReactContent(Swal);

export const MyPageAp2 = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const cookies = new Cookies();
    const jwt = cookies.get('accessToken');


    //직접입력
    const [selfInput, setSelfInput] = useState('');
    // 환불이유
    // const [checkReson, setCheckReson] = useState('');
    // 환불 버튼 disabled
    // const [isCheck, setIsCheck] = useState(false);


    const moveMypageAp1 = () => {
        if (cookies.get('refreshToken')) {
            navigate('/mypage-ap1', {
                state: {
                    data: state.orderId
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

    }


    // 환불 신청 
    const refundBtn = async () => {
        // notClickBtn()
        await swal
            .fire({
                heightAuto: false,
                icon: 'question',
                text: '환불신청 하시겠습니까?',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                showCancelButton: true,
                cancelButtonText: '취소',
                width: 400,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    if (cookies.get('refreshToken')) {
                        refundApi();

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

                }
            });

    };

    // const notClickBtn = () => {
    //     if (isCheck === false) {
    //         setCheckReson('');
    //         setSelfInput('');
    //     }

    //     if (checkReson !== '') {
    //         setSelfInput('');
    //     }
    // }

    const refundApi = async () => {
        try {
            await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API_URL}/user/payment/cancel`,
                headers: {
                    Authorization: jwt,
                },
                data: {
                    constant_cancel_reason: '',
                    custom_cancel_reason: selfInput,
                    imp_uid: state.imp_uid,
                    merchant_uid: state.merchant_uid,
                    return_fee: 0
                }
            }).then((res) => {
                if (res.status === 200) {
                    swal.fire({
                        heightAuto: false,
                        icon: 'success',
                        text: '환불 신청이 완료되었습니다.',
                        confirmButtonText: '확인',
                        confirmButtonColor: '#289951',
                        width: 400,
                    });
                    navigate('/mypage-ap3', {
                        state: {
                            refundItem: state.refundItem,
                            orderId: state.orderId,
                            orderDate: state.orderDate,
                        }
                    })

                }
            })
        } catch (err: any) {
            swal.fire({
                heightAuto: false,
                icon: 'warning',
                text: err.response.data.message,
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
            });
        };
    }


    //체크박스 하나만 선택
    // const checkOnlyOne = (checkThis: any) => {

    //     const checkboxes = document.getElementsByName('test');
    //     for (let i = 0; i < checkboxes.length; i++) {
    //         const checkBoxes = checkboxes[i] as HTMLInputElement;
    //         if (checkBoxes !== checkThis) {
    //             checkBoxes.checked = false
    //             setCheckReson(checkThis.value);
    //             setIsCheck(!isCheck);
    //         }
    //     }
    // };



    return (
        <S.Container>
            <Header />
            <S.ContentContainer>
                <S.Wrapper>
                    <S.RefundH1>환불신청</S.RefundH1>
                    <S.Top></S.Top>
                    <S.Mid>
                        <p>*</p>
                        <h3>상품에 어떠한 문제가 있습니까?</h3>
                    </S.Mid>
                    <S.InputContainer>
                        {/* <S.RefundReason>
                            <h3>단순변심</h3>
                            <div>
                                <label htmlFor='test'>
                                    <input type='checkbox' name='test' value='상품이 맘에 들지 않음' onChange={(e) => checkOnlyOne(e.target)} />
                                    <p>상품이 맘에 들지 않음</p>
                                </label>
                            </div>
                        </S.RefundReason>
                        <S.RefundReason>
                            <h3>배송문제</h3>
                            <div>
                                <label htmlFor='test'>
                                    <input type='checkbox' name='test' value='배송 지연으로 인한 취소' onChange={(e) => checkOnlyOne(e.target)} />

                                    <p>배송 지연으로 인한 취소</p>
                                </label>
                            </div>
                            <div>
                                <label htmlFor='test'>
                                    <input type='checkbox' name='test' value='잘못된 상품 배송으로 인한 취소' onChange={(e) => checkOnlyOne(e.target)} />

                                    <p>잘못된 상품 배송으로 인한 취소</p>
                                </label>
                            </div>
                            <div>
                                <label htmlFor='test'>
                                    <input type='checkbox' name='test' value='상품 갯수 불일치로 취소' onChange={(e) => checkOnlyOne(e.target)} />

                                    <p>상품 갯수 불일치로 취소</p>
                                </label>
                            </div>

                        </S.RefundReason>
                        <S.RefundReason>
                            <h3>상품문제</h3>
                            <div>
                                <label htmlFor='test'>
                                    <input type='checkbox' name='test' value='상품이 설명과 다름' onChange={(e) => checkOnlyOne(e.target)} />

                                    <p>상품이 설명과 다름</p>
                                </label>
                            </div>
                            <div>
                                <label htmlFor='test'>
                                    <input type='checkbox' name='test' value='상품이 파손되어 배송' onChange={(e) => checkOnlyOne(e.target)} />

                                    <p>상품이 파손되어 배송</p>
                                </label>
                            </div>
                            <div>
                                <label htmlFor='test'>
                                    <input type='checkbox' name='test' value='상품 결함/기능에 이상이 있음' onChange={(e) => checkOnlyOne(e.target)} />

                                    <p>상품 결함/기능에 이상이 있음 </p>
                                </label>
                            </div>
                        </S.RefundReason> */}
                        <S.RefundReason>
                            <h3>직접입력</h3>
                            <div>
                                <label htmlFor='test'>

                                    {/* <input type='checkbox' name='test' value='' onChange={(e) => checkOnlyOne(e.target)} /> */}
                                    <input type='text' value={selfInput} onChange={(e: any) => {
                                        setSelfInput(e.target.value)
                                    }} placeholder='텍스트를 직접 입력해주세요.' />
                                </label>

                            </div>

                        </S.RefundReason>

                    </S.InputContainer>
                    <S.BtnWrapper>
                        <button onClick={moveMypageAp1}>이전 단계</button>
                        <button onClick={refundBtn}>
                            환불 신청
                        </button>
                    </S.BtnWrapper>
                </S.Wrapper>
            </S.ContentContainer>
        </S.Container>
    );
}