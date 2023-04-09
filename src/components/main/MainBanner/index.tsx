import React, { useEffect, useState } from 'react';
import * as S from './style';
// import Slider from 'react-slick';

export const MainBanner = () => {
  const [slide, setSlide] = useState(false);
  useEffect(() => {
    setSlide(true);
  }, []);
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: false,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    afterChange: () => {
      setSlide(true);
    },
    beforeChange: () => {
      setSlide(false);
    },
  };

  return (
    <S.Container>
      <S.CustomSlider {...settings}>
        <S.BannerWrap>
          <S.Banner1 />
          <S.BannerTextArea>
            <S.EnText slide={slide}>Safeking</S.EnText>
            <S.BigText slide={slide}>스마트한 안전관리</S.BigText>
            <S.BigText2 slide={slide}>안전사고 예방을 위한 최고의 솔루션</S.BigText2>
          </S.BannerTextArea>
        </S.BannerWrap>
        <S.BannerWrap>
          <S.Banner2 />
          <S.BannerTextArea>
            <S.EnText slide={slide}>Safeking</S.EnText>
            {/* <S.SmallText slide={slide}>Safeking</S.SmallText> */}
            <S.BigText slide={slide}>스마트한 안전관리</S.BigText>
            <S.BigText2 slide={slide}>누출사고 예방을 위한 최고의 솔루션</S.BigText2>
          </S.BannerTextArea>
        </S.BannerWrap>
        <S.BannerWrap>
          <S.Banner3 />
          <S.BannerTextArea>
            <S.EnText slide={slide}>Safeking</S.EnText>
            {/* <S.SmallText slide={slide}>Safeking</S.SmallText> */}
            <S.BigText slide={slide}>스마트한 안전관리</S.BigText>
            <S.BigText2 slide={slide}>중대사고 예방을 위한 최고의 솔루션</S.BigText2>
          </S.BannerTextArea>
        </S.BannerWrap>
      </S.CustomSlider>
    </S.Container>
  );
};
