import React from 'react';
import * as S from './style';
// import Slider from 'react-slick';

export const MainBanner = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: false,
  };
  return (
    <S.Container>
      <S.CustomSlider {...settings}>
        <S.Banner1 />
        <S.Banner2 />
        <S.Banner3 />
      </S.CustomSlider>
    </S.Container>
  );
};
