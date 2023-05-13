/* eslint-disable */
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Nav } from '../../components/item/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import { Header } from '../../components/common/Header';
import { Cookies } from 'react-cookie';
import history from '../../history';
import { TailSpin } from 'react-loader-spinner';
import { ExchangeInfoContent } from '../../components/common/ExchangeInfoContent';
import { categoryContext } from '../../store/categoryStore';
import { MetaTag } from '../../components/common/MetaTag';

const swal = withReactContent(Swal);

export const ItemDetail = () => {
  const context = useContext(categoryContext);
  const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [itemData, setItemData] = useState<any>('');
  const [desHeight, setDesHeight] = useState(0);
  const [desToggle, setDesToggle] = useState(false);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const purchaseBtn = useRef(<div />);
  const viewedItem = useRef<any>({});
  const cookies = new Cookies();
  const itemId = location.pathname.replace('/itemdetail/', '')

  //구매하기
  const moveOrders = useCallback(() => {
    if (!cookies.get('refreshToken')) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      navigate('/sign-in');
    } else {
      if (cookies.get('loginUser') === 'admin') {
        swal.fire({
          heightAuto: false,
          icon: 'info',
          text: '관리자는 구매하기버튼을 이용할 수 없습니다.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      } else {
        swal
          .fire({
            heightAuto: false,
            icon: 'question',
            text: '결제 페이지로 이동하시겠습니까?',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            showCancelButton: true,
            cancelButtonText: '취소',
            width: 400,
          })
          .then(async (result) => {
            if (result.isConfirmed) {
              await axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}/item/${itemId}`,
              }).then((res) => {
                navigate('/orders', {
                  state: {
                    data: [
                      {
                        categoryName: res.data.categoryName,
                        id: res.data.id,
                        itemName: res.data.name,
                        itemPrice: res.data.viewPrice,
                        itemQuantity: Number(
                          (document.getElementById(itemId) as HTMLInputElement).value,
                        ),
                        thumbNail: res.data.fileName,
                      },
                    ],
                  },
                });
              });
            }
          });
      }
    }
  }, [navigate, state]);

  useEffect(() => {
    if (!loading) {
      //내가 본 상품
      if (localStorage.getItem('viewedItems')) {
        let viewedItems: any = localStorage.getItem('viewedItems');
        viewedItems = JSON.parse(viewedItems);
        //내가 본 상품에 이미 들어있는 경우
        if (viewedItems.map((item: any) => item.id).includes(viewedItem.current.id)) {
          viewedItems = viewedItems.filter((item: any) => item.id !== viewedItem.current.id);
          viewedItems.unshift(viewedItem.current);
          localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
          //내가 본 상품이 가득찬 경우
        } else if (viewedItems.length === 15) {
          viewedItems.pop();
          viewedItems.unshift(viewedItem.current);
          localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
        } else {
          viewedItems.unshift(viewedItem.current);
          localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
        }
      } else {
        let viewedItems = [];
        viewedItems.unshift(viewedItem.current);
        localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
      }

      setTimeout(() => {
        if ((document.querySelector('#description') as HTMLElement).offsetHeight <= 1836) {
          setDesHeight((document.querySelector('#description') as HTMLElement).offsetHeight);
        } else {
          setDesHeight(1836);
          setDesToggle(true);
        }
      }, 300);
    }
  }, [loading]);

  //뒤로가기 감지
  useEffect(() => {
    const listenBack = () => {
      sessionStorage.setItem('goBack', 'Y');
    };
    const historyEvent = history.listen(({ action }) => {
      if (action === 'POP') {
        listenBack();
      }
    });
    return historyEvent;
  }, [navigate]);

  useEffect(() => {
    const getData = async () => {
      setCategoryList(context);
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/item/${itemId}`,
      }).then((res) => {
        setItemData(res.data);
        if (res.data.viewPrice === 1000000000) {
          purchaseBtn.current = (
            <S.estimateBtn
              onClick={() =>
                navigate('/estimate', {
                  state: {
                    categoryName: itemData.categoryName,
                    itemName: itemData.name,
                  },
                })
              }
            >
              견적서 요청
            </S.estimateBtn>
          );
        } else {
          purchaseBtn.current = (
            <S.PurchaseBtn
              onClick={() => moveOrders()}
              style={{
                color: itemData.quantity ? '' : '#aaaaaa',
                borderColor: itemData.quantity ? '' : '#aaaaaa',
              }}
              disabled={!itemData.quantity}
            >
              구매하기
            </S.PurchaseBtn>
          );
        }
        viewedItem.current = {
          id: res.data.id,
          name: res.data.name,
          fileName: res.data.fileName,
          categoryName: res.data.categoryName,
        };
        setLoading(false);
      });
    };
    if (context) {
      getData();
    }
  }, [
    // state.itemId,
    navigate,
    moveOrders,
    itemData.quantity,
    itemData.id,
    itemData.fileName,
    itemData.categoryName,
    itemData.name,
    context,
  ]);

  const desEvent = () => {
    setDesHeight((document.querySelector('#description') as HTMLElement).offsetHeight);
    setDesToggle(false);
  };

  const countMinus = (itemCount: number) => {
    if (itemCount <= 1) return;
    itemCount--;
    setCount(itemCount);
  };

  const countPlus = (itemCount: number) => {
    if (itemCount >= 999) return;
    itemCount++;
    setCount(itemCount);
  };

  const countInput = (value: string) => {
    if (value.length > 3) return;
    let onlyNum = value.replace(/[^0-9]/g, '');
    setCount(Number(onlyNum));
  };

  const countInputBlur = (value: string) => {
    if (Number(value) === 0) value = '1';
    setCount(Number(value));
  };

  const addCart = async () => {
    if (!cookies.get('refreshToken')) {
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      navigate('/sign-in');
    } else {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/user/cartItem`,
        headers: {
          Authorization: cookies.get('accessToken'),
        },
        data: {
          itemId: itemId,
          count: count,
        },
      })
        .then(() => {
          swal.fire({
            heightAuto: false,
            icon: 'success',
            title: '성공',
            text: '장바구니에 추가되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        })
        .catch((err) => {
          if (err.response.data.code === 301) {
            swal.fire({
              heightAuto: false,
              icon: 'info',
              text: '동일한 상품이 장바구니에 있습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else if (err.response.data.code === 100) {
            swal.fire({
              heightAuto: false,
              icon: 'info',
              text: '장바구니가 가득 찼습니다. (최대 20개)',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else if (err.response.data.code === 300) {
            swal.fire({
              heightAuto: false,
              icon: 'info',
              text: '관리자는 장바구니를 이용할 수 없습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else {
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');
            navigate('/sign-in');
          }
        });
    }
  };

  return (
    <>
      <MetaTag
        title={`${itemData.name} | 안전왕`}
        description={`안전왕, ${itemData.name}`}
        imgsrc='https://safekingmall.com/img/HeaderLogo.png'
        url={`https://safekingmall.com/itemdetail/${itemId}`}
        keywords={`안전왕, 안전, 안전관리, 안전사고, 사고예방, ${itemData.name}`}
      />
      <S.Container>
        <Header />
        <Nav categoryList={categoryList} selectNav={itemData.categoryName} slideNavIdx={state ? state.slideNavIdx : 1} />
        <S.DetailContainer>
          {loading ? (
            <S.LoadingBox>
              <TailSpin
                height='100'
                width='100'
                color='#289951'
                ariaLabel='tail-spin-loading'
                radius='1'
                visible={true}
              />
            </S.LoadingBox>
          ) : (
            <S.DetailArea>
              <S.DetailImgArea>
                <S.DetailImg
                  src={itemData === '' ? '' : process.env.REACT_APP_BASE_URL + itemData.fileName}
                  alt={itemData.name}
                />
                <S.Soldout
                  style={{
                    backgroundColor: itemData.quantity ? '' : 'rgba(33, 33, 33, 0.5)',
                    display: itemData.quantity ? 'none' : '',
                  }}
                >
                  해당 상품은 품절된 상품입니다.
                </S.Soldout>
              </S.DetailImgArea>
              <S.ItemTextArea>
                <S.Category>{itemData.categoryName}</S.Category>
                <S.ItemName>{itemData.name}</S.ItemName>
                <S.ItemNameLine />
                <S.PriceArea>
                  <S.Price>
                    {itemData.viewPrice !== 1000000000
                      ? itemData.viewPrice
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'
                      : '<가격관련 관리자 문의>'}
                  </S.Price>
                </S.PriceArea>
                <div style={{ display: itemData.viewPrice === 1000000000 ? 'none' : '' }}>
                  <S.TotalPriceWrap>
                    <S.TotalPriceArea>
                      <S.CountBox>
                        <S.CountBtn onClick={() => countMinus(count)}>-</S.CountBtn>
                        <S.CountInput
                          id={itemId}
                          type='text'
                          onChange={(e) => countInput(e.target.value)}
                          onBlur={(e) => countInputBlur(e.target.value)}
                          value={count}
                        />
                        <S.CountBtn onClick={() => countPlus(count)}>+</S.CountBtn>
                      </S.CountBox>
                      <S.TotalPriceBox>
                        <S.TotalPriceTitle>합계</S.TotalPriceTitle>
                        <S.TotalPrice>
                          {(itemData.viewPrice * count)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          원
                        </S.TotalPrice>
                      </S.TotalPriceBox>
                    </S.TotalPriceArea>
                  </S.TotalPriceWrap>
                </div>
                <S.BtnArea style={{ justifyContent: itemData.viewPrice === 1000000000 ? 'flex-end' : 'space-between' }}>
                  <S.BasketBtn
                    style={{
                      // visibility: itemData.viewPrice === 1000000000 ? 'hidden' : 'visible',
                      display: itemData.viewPrice === 1000000000 ? 'none' : '',
                      backgroundColor: itemData.quantity ? '' : '#aaaaaa',
                    }}
                    disabled={!itemData.quantity}
                    onClick={() => addCart()}
                  >
                    장바구니
                  </S.BasketBtn>
                  {purchaseBtn.current}
                </S.BtnArea>
              </S.ItemTextArea>
            </S.DetailArea>
          )}
        </S.DetailContainer>
        <S.DesWrap>
          <S.DesLine />
          {loading ? (
            <S.DesLoadingBox>
              <TailSpin
                height='100'
                width='100'
                color='#289951'
                ariaLabel='tail-spin-loading'
                radius='1'
                visible={true}
              />
            </S.DesLoadingBox>
          ) : (
            <S.DesContainer style={{ height: desHeight, marginBottom: desToggle ? '' : '1.94rem' }}>
              <S.Description
                id='description'
                dangerouslySetInnerHTML={{ __html: itemData.description }}
              >
              </S.Description>
              <S.DesGradation style={{ display: desToggle ? 'inherit' : 'none' }} />
            </S.DesContainer>
          )}
          <S.ShowDesBtnContainer style={{ display: desToggle ? 'flex' : 'none' }}>
            <S.ShowDesBtn onClick={() => desEvent()}>
              <span>상세페이지 더보기</span>
              <AiOutlineDown style={{ width: 28, height: 24 }} />
            </S.ShowDesBtn>
          </S.ShowDesBtnContainer>
          <S.ExchangeInfoArea>
            {ExchangeInfoContent()}
          </S.ExchangeInfoArea>
        </S.DesWrap>
      </S.Container>
    </>
  );
};
