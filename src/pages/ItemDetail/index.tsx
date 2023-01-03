import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Nav } from '../../components/item/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import axios from 'axios';

export const ItemDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [itemData, setItemData] = useState<any>('');
  const [desHeight, setDesHeight] = useState(0);
  const [desToggle, setDesToggle] = useState(false);
  const [itemNavTop, setItemNavTop] = useState(0);
  const [count, setCount] = useState(1);
  const [purchaseBtn, setPurchaseBtn] = useState(
    <S.PurchaseBtn onClick={() => moveOders()}>구매하기</S.PurchaseBtn>,
  );

  useEffect(() => {
    if ((document.querySelector('#description') as HTMLElement).offsetHeight <= 1836) {
      setDesHeight((document.querySelector('#description') as HTMLElement).offsetHeight);
    } else {
      setDesHeight(1836);
      setDesToggle(true);
    }
  }, []);

  useEffect(() => {
    setItemNavTop((document.querySelector('#item-nav') as HTMLElement).offsetTop);
    window.scrollTo({
      top: itemNavTop,
      behavior: 'smooth',
    });
  }, [itemNavTop]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .all([
          axios.get('http://safekingmall.ml/api/v1/category/list'),
          axios.get('http://safekingmall.ml/api/v1/item/' + state.itemId),
        ])
        .then(
          axios.spread((res1, res2) => {
            res1.data.content.sort((a: any, b: any) => {
              return a.sort - b.sort;
            });
            setCategoryList(res1.data.content);
            setItemData(res2.data);
            if (res2.data.price === null) {
              setPurchaseBtn(<S.PurchaseBtn>견적서 요청</S.PurchaseBtn>);
            }
          }),
        );
    };
    getData();
  }, [state.itemId]);

  const moveOders = () => {
    navigate('/orders');
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

  return (
    <S.Container>
      <Nav categoryList={categoryList} selectNav={itemData.categoryName} />
      <S.DetailContainer>
        <S.DetailArea>
          <img
            src={itemData === '' ? '' : 'http://safekingmall.ml' + itemData.fileName}
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
                {itemData.price
                  ? itemData.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '원'
                  : '관리자 문의'}
              </S.Price>
            </S.PriceArea>
            <div style={{ display: itemData.price === null ? 'none' : '' }}>
              <S.CountBoxArea>
                <S.CountText>수량</S.CountText>
                <S.CountBox>
                  <S.CountBtn onClick={() => countMinus(count)}>-</S.CountBtn>
                  <S.CountInput
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
                  {(itemData.price * count)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </S.TotalPrice>
              </S.TotalPriceArea>
            </div>
            <S.BtnArea>
              <S.BasketBtn style={{ visibility: itemData.price === null ? 'hidden' : 'visible' }}>
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
    </S.Container>
  );
};
