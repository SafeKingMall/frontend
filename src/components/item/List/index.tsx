import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const List = (props: any) => {
  let data = props.data;
  const navigate = useNavigate();
  const moveDetail = (item: any) => {
    navigate('/itemDetail', {
      state: {
        data: item,
      },
    });
  };

  const dataList = data.map((item: any) => {
    return (
      <S.ItemContainer key={item.itemId} onClick={() => moveDetail(item)}>
        <img
          src='https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c48f324a0b9c48f77dbce3a43bd11ce785'
          width='336'
          height='336'
          alt={item.name}
          style={{ border: '1px solid #DDDDDD' }}
        />
        <S.Category>{item.categoryName}</S.Category>
        <S.ItemName>{item.name}</S.ItemName>
        <S.Price>
          {item.price
            ? item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '원'
            : '금액표시없음'}
        </S.Price>
      </S.ItemContainer>
    );
  });
  return (
    <S.Container>
      <S.ItemArea>{dataList}</S.ItemArea>
    </S.Container>
  );
};
