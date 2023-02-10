/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../../components/common/Header';
import { Footer } from '../../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const MyPageAp2 = () => {
    const navigate = useNavigate();

    // 단순변심 하나만 선택
    const [checkBox, setCheckBox] = useState(false);
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
                        <S.RefundReason>
                            <h3>단순변심</h3>
                            <div>
                                <label>
                                    <input type='checkbox' />
                                    <p>상품이 맘에 들지 않음</p>
                                </label>
                            </div>
                        </S.RefundReason>
                        <S.RefundReason>
                            <h3>배송문제</h3>
                            <div>
                                <input type='checkbox' />
                                <label>
                                    <p>배송 지연으로 인한 취소</p>
                                </label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <label>
                                    <p>잘못된 상품 배송으로 인한 취소</p>
                                </label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <label>
                                    <p>상품 갯수 불일치로 취소</p>
                                </label>
                            </div>

                        </S.RefundReason>
                        <S.RefundReason>
                            <h3>상품문제</h3>
                            <div>
                                <input type='checkbox' />
                                <label>
                                    <p>상품이 설명과 다름</p>
                                </label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <label>
                                    <p>상품이 파손되어 배송</p>
                                </label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                <label>
                                    <p>상품 결함/기능에 이상이 있음 </p>
                                </label>
                            </div>
                        </S.RefundReason>
                        <S.RefundReason>
                            <h3>직접입력</h3>
                            <div>
                                <input type='checkbox' />
                                <input type='text' placeholder='텍스트를 직접 입력해주세요.' />
                            </div>

                        </S.RefundReason>

                    </S.InputContainer>
                    <S.BtnWrapper>
                        <button onClick={() => navigate('/mypage-ap1')}>이전 단계</button>
                        <button onClick={() => navigate('/mypage-ap3')}>
                            다음 단계
                        </button>
                    </S.BtnWrapper>
                </S.Wrapper>
            </S.ContentContainer>
            <Footer />
        </S.Container>
    );
}