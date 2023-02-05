import React, { useState } from 'react';
import * as S from './style';
// import Slider from 'react-slick';

export const MainBanner = () => {
  const [slide, setSlide] = useState(true);
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: false,
    arrows: false,
    afterChange: () => {
      setSlide(true);
    },
    beforeChange: () => {
      setSlide(false);
    },
  };
  console.log(slide);

  return (
    <S.Container>
      <S.CustomSlider {...settings}>
        <S.BannerWrap>
          <S.Banner1 />
          <S.BannerTextArea>
            <S.SmallText slide={slide}>스마트한 안전관리 솔루션</S.SmallText>
            <S.BigText slide={slide}>안전사고 예방을 위한 안전왕</S.BigText>
            <S.BigText slide={slide}>스마트 안전알리미</S.BigText>
          </S.BannerTextArea>
        </S.BannerWrap>
        <S.BannerWrap>
          <S.Banner2 />
          <S.BannerTextArea>
            <S.SmallText slide={slide}>스마트한 안전관리 솔루션</S.SmallText>
            <S.BigText slide={slide}>누출사고 예방을 위한 안전왕</S.BigText>
            <S.BigText slide={slide}>스마트 누수알리미</S.BigText>
          </S.BannerTextArea>
        </S.BannerWrap>
        <S.BannerWrap>
          <S.Banner3 />
          <S.BannerTextArea>
            <S.SmallText slide={slide}>스마트한 안전관리 솔루션</S.SmallText>
            <S.BigText slide={slide}>중대사고 예방을 위한 안전왕</S.BigText>
            <S.BigText slide={slide}>스마트 중대알리미</S.BigText>
          </S.BannerTextArea>
        </S.BannerWrap>
      </S.CustomSlider>
    </S.Container>
  );
};
