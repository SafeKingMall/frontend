import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Nav } from '../../components/item/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../css/alert.css';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import { Cookies } from 'react-cookie';
import history from '../../history';
import { TailSpin } from 'react-loader-spinner';

const swal = withReactContent(Swal);

export const ItemDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [itemData, setItemData] = useState<any>('');
  const [desHeight, setDesHeight] = useState(0);
  const [desToggle, setDesToggle] = useState(false);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const purchaseBtn = useRef(<div />);
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  //구매하기
  const moveOrders = useCallback(() => {
    swal
      .fire({
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
            url: `${process.env.REACT_APP_API_URL}/item/${state.itemId}`,
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
                      (document.getElementById(state.itemId) as HTMLInputElement).value,
                    ),
                    thumbNail: res.data.fileName,
                  },
                ],
              },
            });
          });
        }
      });
  }, [navigate, state]);

  useEffect(() => {
    if (!loading) {
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
      await axios
        .all([
          axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}/category/list?sort=sort,asc`,
          }),
          axios({ method: 'get', url: `${process.env.REACT_APP_API_URL}/item/${state.itemId}` }),
        ])
        .then(
          axios.spread((res1, res2) => {
            setCategoryList(res1.data.content);
            setItemData(res2.data);
            if (res2.data.viewPrice === 1000000000) {
              purchaseBtn.current = (
                <S.PurchaseBtn onClick={() => navigate('/estimate')}>견적서 요청</S.PurchaseBtn>
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
            setLoading(false);
          }),
        );
    };
    getData();
  }, [state.itemId, navigate, itemData, moveOrders]);

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
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/user/cartItem`,
      headers: {
        Authorization: jwt,
      },
      data: {
        itemId: state.itemId,
        count: count,
      },
    })
      .then(() => {
        swal.fire({
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
            icon: 'info',
            text: '동일한 상품이 장바구니에 있습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        } else if (err.response.data.code === 100) {
          swal.fire({
            icon: 'info',
            text: '장바구니가 가득 찼습니다. (최대 20개)',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
      });
  };

  return (
    <S.Container>
      <Header />
      <Nav categoryList={categoryList} selectNav={itemData.categoryName} />
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
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '원'
                    : '<가격관련 관리자 문의>'}
                </S.Price>
              </S.PriceArea>
              <div style={{ display: itemData.viewPrice === 1000000000 ? 'none' : '' }}>
                <S.TotalPriceWrap>
                  <S.TotalPriceArea>
                    <S.CountBox>
                      <S.CountBtn onClick={() => countMinus(count)}>-</S.CountBtn>
                      <S.CountInput
                        id={state.itemId}
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
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                        원
                      </S.TotalPrice>
                    </S.TotalPriceBox>
                  </S.TotalPriceArea>
                </S.TotalPriceWrap>
              </div>
              <S.BtnArea>
                <S.BasketBtn
                  style={{
                    visibility: itemData.viewPrice === 1000000000 ? 'hidden' : 'visible',
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
          <S.DesContainer style={{ height: desHeight, marginBottom: desToggle ? '' : 194 }}>
            <S.Description
              id='description'
              dangerouslySetInnerHTML={{ __html: itemData.description }}
            />
            <S.DesGradation style={{ display: desToggle ? 'inherit' : 'none' }} />
          </S.DesContainer>
        )}
        <S.ShowDesBtnContainer style={{ display: desToggle ? 'flex' : 'none' }}>
          <S.ShowDesBtn onClick={() => desEvent()}>
            <span>상세페이지 더보기</span>
            <AiOutlineDown style={{ width: 28, height: 24 }} />
          </S.ShowDesBtn>
        </S.ShowDesBtnContainer>
      </S.DesWrap>
      <Footer />
    </S.Container>
  );
};
