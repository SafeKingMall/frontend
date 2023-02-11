/* eslint-disable */
import React from 'react';
import * as S from './style';
import { Header } from '../../../../components/common/Header';
import { useNavigate } from 'react-router-dom';

export const MyPageAp1 = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <Header />
            <S.ContentContainer>
                <S.Wrapper>
                    <S.RefundH1>환불신청</S.RefundH1>
                    <S.Top></S.Top>
                    <S.H2>신청 목록</S.H2>
                    <S.InputContainer>

                        <S.Table2>
                            <tbody>
                                <tr>
                                    <td >주문일자[번호]</td>
                                    <td>상품명</td>
                                    <td>판매가</td>
                                    <td>수량</td>
                                    <td>결제상태</td>
                                    <td>배송상태</td>
                                </tr>
                                {/* {itemInfor.map((al: any, index: any) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={al === '' ? '' : process.env.REACT_APP_BASE_URL + al.thumbnail}
                          width='70'
                          height='70'
                          alt={al.name}
                          style={{ border: '1px solid #DDDDDD' }}
                        />
                      </td>

                      <td>{al.name}</td>
                      <td>{MoneyNumber(al.price) || ''}</td>
                      <td>{al.count || ''}</td>
                      <td>{MoneyNumber(al.price * al.count) || ''}</td>
                      <td>{payValue(payMentStatus)}</td>
                      <td>{deliValue(deliveryStatus)}</td>

                      <td>{MoneyNumber(deliInfor.cost)}</td>
                      <td>
                        <div>{deliComStatus || ''}</div>
                        <div>{deliNumber}</div>
                      </td>
                    </tr>
                  );
                })} */}
                            </tbody>
                        </S.Table2>
                        <h3>결제 정보</h3>

                        <S.Table>
                            <tbody>
                                <tr>
                                    <th>결제방식</th>
                                    <td>{''}</td>
                                    <th>결제금액</th>
                                    <td>{''}</td>
                                </tr>
                                <tr>
                                    <th>입금자명</th>
                                    <td>{''}</td>
                                    <th>카드사</th>
                                    <td>{''}</td>
                                </tr>
                                <tr>
                                    <th>현금영수증방식</th>
                                    <td>{''}</td>
                                    <th>사업자 번호</th>
                                    <td>{''}</td>
                                </tr>
                            </tbody>
                        </S.Table>
                    </S.InputContainer>
                    <S.BtnWrapper>
                        <button onClick={() => navigate('/mypage-od')}>목록</button>
                        <button onClick={() => navigate('/mypage-ap2')}>
                            다음 단계
                        </button>
                    </S.BtnWrapper>
                </S.Wrapper>
            </S.ContentContainer>
        </S.Container>
    );
}