import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const Nav = (props: any) => {
  const navigate = useNavigate();
  const categoryList = props.categoryList;
  let selectNav = props.selectNav;
  const location = window.location.pathname;
  const onChangeNav = (url: string) => {
    if (location !== url) {
      navigate(url);
    }
  };
  return (
    <S.Container>
      <S.BannerWrap>
        <S.Banner />
        <S.BannerText>{selectNav}</S.BannerText>
      </S.BannerWrap>
      <S.NavArea>
        <S.Nav id='item-nav'>
          {categoryList.map((el: any, idx: number) => {
            return (
              <S.NavText
                key={el.id}
                onClick={() => onChangeNav('/itemlist-' + (idx + 1))}
                style={{ color: selectNav === el.name ? '#289951' : '' }}
              >
                {el.name}
              </S.NavText>
            );
          })}
        </S.Nav>
      </S.NavArea>
    </S.Container>
  );
};
