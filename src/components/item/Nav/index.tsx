import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';

export const Nav = (props: any) => {
  const navigate = useNavigate();
  const categoryList = props.categoryList;
  let selectNav = props.selectNav;
  const location = useLocation();
  const onChangeNav = (path: string) => {
    if (location.pathname === path) {
      window.location.reload();
    } else {
      navigate(path);
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
