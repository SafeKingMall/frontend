import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';

export const Nav = (props: any) => {
  const navigate = useNavigate();
  const categoryList = props.categoryList;
  let selectNav = props.selectNav;
  const slideNavIdx = props.slideNavIdx;
  const location = useLocation();
  const onChangeNav = (path: string) => {
    if (location.pathname === path) {
      window.location.reload();
    } else {
      navigate(path);
    }
  };
  const sliderIndex = () => {
    if (slideNavIdx < 3) {
      return 0;
    } else if (slideNavIdx >= 3 && slideNavIdx < 6) {
      return 3;
    } else if (slideNavIdx >= 6) {
      return 6;
    }
  };
  const settings = {
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    useTransform: false,
    arrows: true,
    initialSlide: sliderIndex(),
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
      <S.SliderWrap>
        <S.SliderContainer>
          <S.CustomSlider {...settings}>
            {categoryList.map((el: any, idx: number) => {
              return (
                <S.SlickCategoryWrap key={el.id}>
                  <S.Category
                    onClick={() => onChangeNav('/itemlist-' + (idx + 1))}
                    style={{ color: selectNav === el.name ? '#289951' : '' }}
                  >
                    {el.name}
                  </S.Category>
                </S.SlickCategoryWrap>
              );
            })}
          </S.CustomSlider>
        </S.SliderContainer>
      </S.SliderWrap>
    </S.Container>
  );
};
