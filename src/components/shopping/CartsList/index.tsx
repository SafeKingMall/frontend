import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const CartsList = (props: any) => {
  const data = props.data;
  const setResultList = props.setResultList;
  const navigate = useNavigate();
  const [checkedList, setCheckedList] = useState<any>([]);
  const [countList, setCountList] = useState<any>(data.map((el: any) => el.itemQuantity));
  // console.log(checkedList);

  useEffect(() => {
    setResultList(
      checkedList.map((el: any) => {
        return {
          categoryName: el.categoryName,
          itemQuantity: Number((document.getElementById(el.id) as HTMLInputElement).value),
          id: el.id,
          itemName: el.itemName,
          itemPrice: el.itemPrice,
        };
      }),
    );
  }, [checkedList, setResultList, countList]);
  const moveDetail = (item: any) => {
    navigate('/itemDetail', {
      state: {
        data: item,
      },
    });
  };
  //전체선택 체크박스 이벤트
  const onCheckedAll = (checked: boolean) => {
    if (checked) {
      const checkedListArray: any = [];
      data.forEach((list: {}) => checkedListArray.push(list));
      setCheckedList(checkedListArray);
    } else {
      setCheckedList([]);
    }
  };
  //개별 아이템 체크박스 이벤트
  const onCheckedItem = (checked: boolean, list: any) => {
    if (checked) {
      setCheckedList([...checkedList, list]);
    } else {
      setCheckedList(checkedList.filter((el: any) => el.id !== list.id));
    }
  };
  //카운트박스 input입력 이벤트
  const countInput = (value: string, idx: number) => {
    if (value.length > 3) return;
    let onlyNum = value.replace(/[^0-9]/g, '');
    setCountList([...countList.slice(0, idx), onlyNum, ...countList.slice(idx + 1)]);
  };
  //input 포커스아웃 이벤트
  const countInputBlur = (value: string, idx: number) => {
    if (Number(value) === 0) value = '1';
    setCountList([...countList.slice(0, idx), Number(value), ...countList.slice(idx + 1)]);
  };
  //마이너스버튼 이벤트
  const countMinus = (itemCount: number, idx: number) => {
    if (itemCount <= 1) return;
    itemCount--;
    setCountList([...countList.slice(0, idx), itemCount, ...countList.slice(idx + 1)]);
  };
  //플러스버튼 이벤트
  const countPlus = (itemCount: number, idx: number) => {
    if (itemCount >= 999) return;
    itemCount++;
    setCountList([...countList.slice(0, idx), itemCount, ...countList.slice(idx + 1)]);
  };
  return (
    <S.Container>
      <S.ListContainer>
        <S.ListTitleBar>
          <S.TitleCheckBoxArea>
            <S.AllCheckBox
              type='checkbox'
              onChange={(e) => onCheckedAll(e.target.checked)}
              checked={
                checkedList.length === 0 ? false : checkedList.length === data.length ? true : false
              }
            />
          </S.TitleCheckBoxArea>
          <S.TitleInfoArea>상품 정보</S.TitleInfoArea>
          <S.TitleSaleArea>할인 금액</S.TitleSaleArea>
          <S.TitlePriceArea>결제 금액</S.TitlePriceArea>
          <S.TitleSelectArea>선택</S.TitleSelectArea>
        </S.ListTitleBar>
        {data.map((item: any, idx: number) => {
          return (
            <S.ItemContainer key={item.id}>
              <S.ItemContentArea>
                <S.ItemCheckBoxArea>
                  <S.ItemCheckBox
                    type='checkbox'
                    onChange={(e) => onCheckedItem(e.target.checked, item)}
                    checked={checkedList.includes(item) ? true : false}
                  />
                </S.ItemCheckBoxArea>
                <S.ItemInfoArea>
                  <S.ItemImgArea onClick={() => moveDetail(item)}>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}${item.thumbNail}`}
                      width='184'
                      height='184'
                      alt={item.itemName}
                      style={{ border: '0.1rem solid #efeff1' }}
                    />
                  </S.ItemImgArea>
                  <S.ItemTextArea>
                    <S.CategoryText>{item.categoryName}</S.CategoryText>
                    <S.ItemNameText onClick={() => moveDetail(item)}>
                      {item.itemName}
                    </S.ItemNameText>
                    <S.ItemPriceText>
                      {item.itemPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
                    </S.ItemPriceText>
                  </S.ItemTextArea>
                </S.ItemInfoArea>
                <S.ItemSaleArea>
                  <p>-</p>
                </S.ItemSaleArea>
                <S.ItemPriceArea>
                  <p>
                    {(item.itemPrice * countList[idx])
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </p>
                </S.ItemPriceArea>
                <S.ItemSelcetArea>
                  <S.ListPurchaseBtn onClick={() => navigate('/Orders')}>
                    바로구매
                  </S.ListPurchaseBtn>
                  <S.ListDelBtn>삭제</S.ListDelBtn>
                </S.ItemSelcetArea>
              </S.ItemContentArea>
              <S.ItemCountArea>
                <S.CountText>수량.</S.CountText>
                <S.CountNum>{countList[idx]}개</S.CountNum>
                <S.CountBox>
                  <S.CountBtn onClick={() => countMinus(countList[idx], idx)}>-</S.CountBtn>
                  <S.CountInput
                    id={item.id}
                    type='text'
                    onChange={(e) => countInput(e.target.value, idx)}
                    onBlur={(e) => countInputBlur(e.target.value, idx)}
                    value={countList[idx]}
                  />
                  <S.CountBtn onClick={() => countPlus(countList[idx], idx)}>+</S.CountBtn>
                </S.CountBox>
              </S.ItemCountArea>
            </S.ItemContainer>
          );
        })}
        <S.SelectDelContainer>
          <S.SelectDelBtn>선택삭제</S.SelectDelBtn>
        </S.SelectDelContainer>
      </S.ListContainer>
    </S.Container>
  );
};
