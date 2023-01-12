import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const List = (props: any) => {
  let itemList = props.itemList;
  const navigate = useNavigate();
  const moveDetail = (item: any) => {
    navigate('/itemDetail', {
      state: {
        itemId: item.id,
      },
    });
  };

  return (
    <S.Container>
      <S.ItemArea>
        {itemList.map((item: any) => {
          return (
            <S.ItemContainer key={item.id} onClick={() => moveDetail(item)}>
              <img
                src={process.env.REACT_APP_BASE_URL + item.fileName}
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
        })}
      </S.ItemArea>
    </S.Container>
  );
};
