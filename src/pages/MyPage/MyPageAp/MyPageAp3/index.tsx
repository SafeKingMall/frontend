/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router';

export const MyPageAp3 = () => {
    const navigate = useNavigate();
    const { state } = useLocation();


    const moveRefundDe = () => {
        navigate('/mypage-rf-detail', {
            state: {
                data: state.orderId
            }
        })
    }

    return (
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
                        {/* <button onClick={() => navigate('/mypage-ap2')}>이전 단계</button> */}
                        <button onClick={moveRefundDe}>
                            취소내역보기
                        </button>
                    </S.BtnWrapper>
                </S.Wrapper>
            </S.ContentContainer>
        </S.Container>
    );
}