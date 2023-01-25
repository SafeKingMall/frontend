/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Footer } from '../../../../components/common/Footer';
import { Header } from '../../../../components/common/Header';
import { MyPageMenu } from '../../../../components/user/MyPageMenu';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { Cookies } from 'react-cookie';

export const MyPageOdDetail = () => {
  const [detailData, setDetailData] = useState<any>({});
  const [detailDataDelivery, setDetailDataDelivery] = useState<any>({});
  const [detailDataItems, setDetailDataItems] = useState<any>([]);
  const params = useParams();
  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  console.log(params);
  console.log(params.detail);

  const getDetail = async () => {
    await axios
      .get(`http://safekingmall.com/api/v1/user/order/detail/${params.detail}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setDetailData(res.data.order);
        setDetailDataDelivery(res.data.order.delivery);
        setDetailDataItems(res.data.order.order_items[0]);
      });
    console.log(detailData);
  };

  useEffect(() => {
    getDetail();
  }, []);

  // const getDetail = async (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   console.log('test');
  //   try {
  //     await axios
  //       .get(`http://safekingmall.com/api/v1/user/order/detail/${params.detail}`, {
  //         headers: {
  //           Authorization: token,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data.order);
  //         setDetailList(res.data.order);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(detailList, 'asd');
  // };

  //   useEffect(() => {
  //     getD();
  //   }, []);

  //   return (
  //     <div>
  //       <button onClick={test}>test</button>
  //       {detailList &&
  //         detailList.map((name) => {
  //           return (
  //             <>
  //               <p>{name.date}</p>
  //             </>
  //           );
  //         })}
  //       ;
  //     </div>
  //   );
  // };

  return (
    <>
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
          <button>test</button>
        </div>
        <S.Wrapper>
          <S.Top>주문 상세내역</S.Top>
          <S.Mid>주문 정보</S.Mid>
          <S.Section1Wrap>
            {/* 마진바텀처리 */}
            <S.Section1Top>
              <div>
                주문 번호 | <span> CKW39W5</span>
              </div>
              <div>
                주문 일시 | <span>2022-01-04 11:33:24</span>
              </div>
            </S.Section1Top>
            <S.Section1Menu>
              <div>상품명</div>
              <div>판매가</div>
              <div>수량</div>
              <div>주문금액</div>
              <div>결제 상태</div>
              <div>배송 상태</div>
              <div>배송료</div>
              <div>송장번호</div>
            </S.Section1Menu>
            <S.Section1Item>
              <div>현재 api 호출 불가 ㅠ</div>
              <div>{detailDataItems.id} </div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
            </S.Section1Item>
          </S.Section1Wrap>
          <S.Mid>주문 정보</S.Mid>
          <S.Section2Wrapper>
            <S.Line>
              <S.Section2Item>
                <div>수령인</div>
                <div>
                  <S.OrderInfoInput defaultValue={'어쩌구저쩌구'} />
                </div>
              </S.Section2Item>
              <S.Section2Item>
                <div>연락처</div>
                <div>
                  <S.OrderInfoInput defaultValue={'어쩌구저쩌구'} />
                </div>
              </S.Section2Item>
            </S.Line>
            <S.Section2Item>
              <div>주소</div>
              <div>
                <S.OrderInfoInput defaultValue={'어쩌구저쩌구'} />
              </div>
            </S.Section2Item>
            <S.Section2Item>
              <div>배송요청사항</div>
              <div>
                <S.OrderInfoInput defaultValue={'어쩌구저쩌구'} />
              </div>
            </S.Section2Item>
            <S.Section2Item>
              <div>주문요청사항</div>
              <div>
                <S.OrderInfoInput defaultValue={'어쩌구저쩌구'} />
              </div>
            </S.Section2Item>
          </S.Section2Wrapper>

          <S.Mid>결제 정보</S.Mid>
          <S.Section2Wrapper>
            <S.Line>
              <S.Section2Item>
                <div>결제방식</div>
                <div>api 내 정보없음 추후 수정되어야함</div>
              </S.Section2Item>
              <S.Section2Item>
                <div>결제금액</div>
                <div>이하동문</div>
              </S.Section2Item>
            </S.Line>
            <S.Line>
              <S.Section2Item>
                <div>입금자명</div>
                <div></div>
              </S.Section2Item>
              <S.Section2Item>
                <div>카드사</div>
                <div></div>
              </S.Section2Item>
            </S.Line>
            <S.Line>
              <S.Section2Item>
                <div>현금영수증 방식</div>
                <div></div>
              </S.Section2Item>
              <S.Section2Item>
                <div>사업자번호</div>
                <div></div>
              </S.Section2Item>
            </S.Line>
          </S.Section2Wrapper>
          <S.Btn>변경하기</S.Btn>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
