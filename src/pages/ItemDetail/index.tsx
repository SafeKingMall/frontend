import React, { useEffect, useState } from 'react';
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

const swal = withReactContent(Swal);

export const ItemDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [itemData, setItemData] = useState<any>('');
  const [desHeight, setDesHeight] = useState(0);
  const [desToggle, setDesToggle] = useState(false);
  // const [itemNavTop, setItemNavTop] = useState(0);
  const [count, setCount] = useState(1);
  const [purchaseBtn, setPurchaseBtn] = useState(
    <S.PurchaseBtn onClick={() => moveOders()}>구매하기</S.PurchaseBtn>,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if ((document.querySelector('#description') as HTMLElement).offsetHeight <= 1836) {
      setDesHeight((document.querySelector('#description') as HTMLElement).offsetHeight);
    } else {
      setDesHeight(1836);
      setDesToggle(true);
    }
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   setItemNavTop((document.querySelector('#item-nav') as HTMLElement).offsetTop);
  //   window.scrollTo({
  //     top: itemNavTop,
  //     behavior: 'smooth',
  //   });
  // }, [itemNavTop]);

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
              setPurchaseBtn(<S.PurchaseBtn>견적서 요청</S.PurchaseBtn>);
            }
          }),
        );
    };
    getData();
  }, [state.itemId]);

  //구매하기
  const moveOders = () => {
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
  };

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
    let jwt;
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/login`,
      data: {
        username: 'testUser1',
        password: 'testUser1*',
      },
    }).then((res) => {
      jwt = res.headers.authorization;
    });
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
        }
      });
  };

  return (
    <S.Container>
      <Header />
      <Nav categoryList={categoryList} selectNav={itemData.categoryName} />
      <S.DetailContainer>
        <S.DetailArea>
          <img
            src={itemData === '' ? '' : process.env.REACT_APP_BASE_URL + itemData.fileName}
            width='700'
            height='700'
            alt={itemData.name}
            style={{ border: '1px solid #DDDDDD', marginRight: '4rem' }}
          />
          <S.ItemTextArea>
            <S.Category>{itemData.categoryName}</S.Category>
            <S.ItemName>{itemData.name}</S.ItemName>
            <S.ItemNameLine />
            <S.PriceArea>
              <S.Price>
                {itemData.viewPrice !== 1000000000
                  ? itemData.viewPrice?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') +
                    '원'
                  : '관리자 문의'}
              </S.Price>
            </S.PriceArea>
            <div style={{ display: itemData.viewPrice === 1000000000 ? 'none' : '' }}>
              <S.CountBoxArea>
                <S.CountText>수량</S.CountText>
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
              </S.CountBoxArea>
              <S.TotalPriceArea>
                <S.TotalPriceTitle>합계</S.TotalPriceTitle>
                <S.TotalPrice>
                  {(itemData.viewPrice * count)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </S.TotalPrice>
              </S.TotalPriceArea>
            </div>
            <S.BtnArea>
              <S.BasketBtn
                style={{ visibility: itemData.viewPrice === 1000000000 ? 'hidden' : 'visible' }}
                onClick={() => addCart()}
              >
                장바구니
              </S.BasketBtn>
              {purchaseBtn}
            </S.BtnArea>
          </S.ItemTextArea>
        </S.DetailArea>
      </S.DetailContainer>
      <S.DesContainer style={{ height: desHeight, marginBottom: desToggle ? '' : 194 }}>
        <S.Description id='description'>
          <div style={{ fontSize: '3rem' }}>{itemData.description}</div>
        </S.Description>
        <S.DesGradation style={{ display: desToggle ? 'inherit' : 'none' }} />
      </S.DesContainer>
      <S.ShowDesBtnContainer style={{ display: desToggle ? 'flex' : 'none' }}>
        <S.ShowDesBtn onClick={() => desEvent()}>
          <span>상세페이지 더보기</span>
          <AiOutlineDown style={{ width: 28, height: 24 }} />
        </S.ShowDesBtn>
      </S.ShowDesBtnContainer>
      <Footer />
    </S.Container>
  );
};
