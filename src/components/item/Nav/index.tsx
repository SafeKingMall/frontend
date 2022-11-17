import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';

export const Nav = (props: any) => {
  const navigate = useNavigate();
  const navTextColor = '#289951';
  let title = props.title;
  const location = window.location.pathname;
  const { state } = useLocation();
  const selectNav = (url: string) => {
    if (location !== url) {
      navigate(url);
    }
  };
  if (location === '/itemDetail') {
    title = state.data.categoryName;
  }
  return (
    <S.Container>
      <S.Banner>
        <S.BannerText>{title}</S.BannerText>
      </S.Banner>
      <S.NavArea>
        <S.Nav id='item-nav'>
          <S.NavText
            onClick={() => selectNav('/itemlist-serious')}
            style={{ color: title === '중대사고예방' ? navTextColor : '' }}
          >
            중대사고예방
          </S.NavText>
          <S.NavText
            onClick={() => selectNav('/itemlist-fire')}
            style={{ color: title === '화재사고예방' ? navTextColor : '' }}
          >
            화재사고예방
          </S.NavText>
          <S.NavText
            onClick={() => selectNav('/itemlist-leck')}
            style={{ color: title === '누출사고예방' ? navTextColor : '' }}
          >
            누출사고예방
          </S.NavText>
          <S.NavText
            onClick={() => selectNav('/itemlist-marine')}
            style={{ color: title === '해양사고예방' ? navTextColor : '' }}
          >
            해양사고예방
          </S.NavText>
          <S.NavText
            onClick={() => selectNav('/itemlist-safety')}
            style={{ color: title === '안전사고예방' ? navTextColor : '' }}
          >
            안전사고예방
          </S.NavText>
        </S.Nav>
      </S.NavArea>
    </S.Container>
  );
};
