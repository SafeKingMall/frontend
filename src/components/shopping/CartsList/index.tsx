import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const CartsList = (props: any) => {
  const data = props.data;
  const setData = props.setData;
  const setResultList = props.setResultList;
  const navigate = useNavigate();
  const [checkedList, setCheckedList] = useState<any>([]);
  const [countList, setCountList] = useState<any>(data.map((el: any) => el.itemQuantity));
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  //장바구니 아이템 개수 수정
  const itemCountEvent = async (itemId: number, itemCount: number) => {
    await axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_URL}/user/cartItem`,
      headers: {
        Authorization: jwt,
      },
      data: {
        itemId: itemId,
        count: itemCount,
      },
    });
  };

  //개별 아이템 삭제 알림
  const deleteItemAlert = (itemId: number, idx: number) => {
    swal
      .fire({
        heightAuto: false,
        icon: 'question',
        text: '장바구니에서 삭제하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteItem(itemId, idx);
          swal.fire({
            heightAuto: false,
            icon: 'success',
            text: '장바구니에서 삭제되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
        }
      });
  };

  //개별 아이템 삭제
  const deleteItem = async (itemId: number, idx: number) => {
    await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/user/cartItem?itemId=${itemId}`,
      headers: {
        Authorization: jwt,
      },
    }).then(() => {
      setData([...data.slice(0, idx), ...data.slice(idx + 1)]);
      setCountList(
        [...data.slice(0, idx), ...data.slice(idx + 1)].map((el: any) => el.itemQuantity),
      );
      setCheckedList(checkedList.filter((el: any) => el.id !== itemId));
    });
  };

  //선택 아이템 삭제 알림
  const deleteSelectItemAlert = () => {
    if (checkedList.length === 0) {
      swal.fire({
        heightAuto: false,
        icon: 'info',
        text: '선택한 상품이 없습니다. 상품을 선택해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: '선택상품을 장바구니에서 삭제하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            deleteSelectItem();
            swal.fire({
              heightAuto: false,
              icon: 'success',
              text: '선택상품이 장바구니에서 삭제되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          }
        });
    }
  };

  //선택 아이템 삭제
  const deleteSelectItem = async () => {
    if (!cookies.get('refreshToken')) {
      navigate('/sign-in');
    } else {
      let items = checkedList.map((item: any) => 'itemId=' + item.id + '&');
      let itemsString = items.join('');
      await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/user/cartItem?${itemsString}`,
        headers: {
          Authorization: jwt,
        },
      });
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/user/cart`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setData(res.data.content);
        setCountList(res.data.content.map((el: any) => el.itemQuantity));
        setCheckedList([]);
      });
    }
  };

  useEffect(() => {
    setResultList(
      checkedList.map((el: any) => {
        return {
          categoryName: el.categoryName,
          itemQuantity: Number((document.getElementById(el.id) as HTMLInputElement).value),
          id: el.id,
          itemName: el.itemName,
          itemPrice: el.itemPrice,
          thumbNail: el.thumbNail,
        };
      }),
    );
  }, [checkedList, setResultList, countList]);

  //썸네일 또는 아이템이름 클릭시 ItemDetail로 이동
  const moveDetail = (item: any) => {
    navigate('/itemDetail', {
      state: {
        itemId: item.id,
      },
    });
  };

  //개별 아이템 바로구매
  const moveOrders = (itemId: any) => {
    if (!cookies.get('refreshToken')) {
      navigate('/sign-in');
    } else {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: '해당상품을 구매하러 가시겠습니까?',
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
              url: `${process.env.REACT_APP_API_URL}/user/cart`,
              headers: {
                Authorization: jwt,
              },
            }).then((res) => {
              navigate('/orders', {
                state: {
                  data: res.data.content.filter((el: any) => el.id === itemId),
                },
              });
            });
          }
        });
    }
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
  const countInput = (itemId: number, value: string, idx: number) => {
    if (value.length > 3) return;
    let onlyNum = value.replace(/[^0-9]/g, '');
    setCountList([...countList.slice(0, idx), Number(onlyNum), ...countList.slice(idx + 1)]);
    itemCountEvent(itemId, Number(onlyNum));
  };
  //input 포커스아웃 이벤트
  const countInputBlur = (itemId: number, value: string, idx: number) => {
    if (Number(value) === 0) value = '1';
    setCountList([...countList.slice(0, idx), Number(value), ...countList.slice(idx + 1)]);
    itemCountEvent(itemId, Number(value));
  };
  //마이너스버튼 이벤트
  const countMinus = (itemId: number, itemCount: number, idx: number) => {
    if (itemCount <= 1) return;
    itemCount--;
    setCountList([...countList.slice(0, idx), itemCount, ...countList.slice(idx + 1)]);
    itemCountEvent(itemId, itemCount);
  };

  //플러스버튼 이벤트
  const countPlus = (itemId: number, itemCount: number, idx: number) => {
    if (itemCount >= 999) return;
    itemCount++;
    setCountList([...countList.slice(0, idx), itemCount, ...countList.slice(idx + 1)]);
    itemCountEvent(itemId, itemCount);
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
                    <S.ItemImg
                      src={`${process.env.REACT_APP_BASE_URL}${item.thumbNail}`}
                      alt={item.itemName}
                    />
                  </S.ItemImgArea>
                  <S.ItemTextArea>
                    <S.CategoryText>{item.categoryName}</S.CategoryText>
                    <S.ItemNameText onClick={() => moveDetail(item)}>
                      {item.itemName}
                    </S.ItemNameText>
                    <S.ItemPriceText>
                      {item.itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
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
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </p>
                </S.ItemPriceArea>
                <S.ItemSelcetArea>
                  <S.ListPurchaseBtn onClick={() => moveOrders(item.id)}>
                    바로구매
                  </S.ListPurchaseBtn>
                  <S.ListDelBtn onClick={() => deleteItemAlert(item.id, idx)}>삭제</S.ListDelBtn>
                </S.ItemSelcetArea>
              </S.ItemContentArea>
              <S.ItemCountArea>
                <S.CountText>수량.</S.CountText>
                <S.CountNum>{countList[idx]}개</S.CountNum>
                <S.CountBox>
                  <S.CountBtn onClick={() => countMinus(item.id, countList[idx], idx)}>
                    -
                  </S.CountBtn>
                  <S.CountInput
                    id={item.id}
                    type='text'
                    onChange={(e) => countInput(item.id, e.target.value, idx)}
                    onBlur={(e) => countInputBlur(item.id, e.target.value, idx)}
                    value={countList[idx]}
                  />
                  <S.CountBtn onClick={() => countPlus(item.id, countList[idx], idx)}>+</S.CountBtn>
                </S.CountBox>
              </S.ItemCountArea>
            </S.ItemContainer>
          );
        })}
        <S.SelectDelContainer>
          <S.SelectDelBtn onClick={() => deleteSelectItemAlert()}>선택삭제</S.SelectDelBtn>
        </S.SelectDelContainer>
      </S.ListContainer>
    </S.Container>
  );
};
