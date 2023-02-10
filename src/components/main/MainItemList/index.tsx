import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const MainItemList = (props: any) => {
  const itemList = props.itemList;
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
              {/* <S.ItemImgArea> */}
              <S.ItemImg src={process.env.REACT_APP_BASE_URL + item.fileName} alt={item.name} />
              {/* </S.ItemImgArea> */}
              <S.Category>{item.categoryName}</S.Category>
              <S.ItemName>{item.name}</S.ItemName>
              <S.Price>
                {item.viewPrice !== 1000000000
                  ? item.viewPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '원'
                  : '금액표시없음'}
              </S.Price>
            </S.ItemContainer>
          );
        })}
      </S.ItemArea>
    </S.Container>
  );
};
