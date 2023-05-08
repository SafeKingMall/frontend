/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../components/common/Header';
import { MyPageMenu } from '../../../components/user/MyPageMenu';
import { RefundList } from '../../../components/user/RefundList';
import { MetaTag } from '../../../components/common/MetaTag';

export const MyPageRf = () => {
    return (
        <>
            <MetaTag
                title={`환불내역 | 안전왕`}
                description={`안전왕, 환불내역`}
                imgsrc='https://safekingmall.com/img/HeaderLogo.png'
                url='https://safekingmall.com/mypage-rf'
                keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, 환불내역`}
            />
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
