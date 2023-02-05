import React from 'react';
import * as S from './style';
// import Slider from 'react-slick';

export const MainBanner = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: false,
    arrows: false,
  };
  return (
    <S.Container>
      <S.CustomSlider {...settings}>
        <S.BannerWrap>
          <S.Banner1 />
          <S.BannerTextArea>
            <S.SmallText>스마트한 안전관리 솔루션</S.SmallText>
            <S.BigText>누출사고 예방을 위한 안전왕</S.BigText>
            <S.BigText>스마트 누수알리미</S.BigText>
          </S.BannerTextArea>
        </S.BannerWrap>
        <S.BannerWrap>
          <S.Banner2 />
          <S.BannerTextArea>
            <S.SmallText>스마트한 안전관리 솔루션</S.SmallText>
            <S.BigText>누출사고 예방을 위한 안전왕</S.BigText>
            <S.BigText>스마트 누수알리미</S.BigText>
          </S.BannerTextArea>
        </S.BannerWrap>
        <S.BannerWrap>
          <S.Banner3 />
          <S.BannerTextArea>
            <S.SmallText>스마트한 안전관리 솔루션</S.SmallText>
            <S.BigText>누출사고 예방을 위한 안전왕</S.BigText>
            <S.BigText>스마트 누수알리미</S.BigText>
          </S.BannerTextArea>
        </S.BannerWrap>
      </S.CustomSlider>
    </S.Container>
  );
};
