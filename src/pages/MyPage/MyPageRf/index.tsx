/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { RefundList } from '../../../components/user/RefundList';

export const MyPageRf = () => {
    return (
        <>
            <Header />
            <S.Container>
                <div style={{ marginTop: 190 }}>
                    <MyPageMenu />
                </div>
                <S.Wrapper>
                    <S.Top>환불내역</S.Top>
                    <RefundList />
                </S.Wrapper>
            </S.Container>
        </>
    );
};
