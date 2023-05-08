/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { Cookies } from 'react-cookie';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../../css/alert.css';
import { MetaTag } from '../../../../components/common/MetaTag';

const swal = withReactContent(Swal);

export const MyPageAp3 = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const { state } = useLocation();


    const moveRefundDe = () => {
        if (cookies.get('refreshToken')) {
            navigate('/mypage-rf-detail', {
                state: {
                    data: state.orderId
                }
            })
        } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');

        }

    }

    return (
        <>
            <MetaTag
                title={`환불신청3 | 안전왕`}
                description={`안전왕, 환불신청3`}
                imgsrc='https://safekingmall.com/img/HeaderLogo.png'
                url='https://safekingmall.com/mypage-ap3'
                keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 환불신청3`}
            />
            <S.Container>
                <Header />
                <S.ContentContainer>
                    <S.Wrapper>
                        <S.RefundH1>환불신청</S.RefundH1>
                        <S.Top></S.Top>

                        <S.InputContainer>
                            <S.Mid>
                                <S.ImgIcon />
                            </S.Mid>
                            <S.Last>
                                <p>
                                    {state.orderDate}에 주문하신
                                </p>

                                <div><p>[{state.refundItem}] &nbsp;</p> <p>상품이 환불 요청되었습니다.</p> </div>
                            </S.Last>
                        </S.InputContainer>
                        <S.BtnWrapper>
                            <button onClick={moveRefundDe}>
                                취소내역보기
                            </button>
                        </S.BtnWrapper>
                    </S.Wrapper>
                </S.ContentContainer>
            </S.Container>
        </>
    );
}