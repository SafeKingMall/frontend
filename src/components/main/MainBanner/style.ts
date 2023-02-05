import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
export const CustomSlider = styled(Slider)`
  .slick-list {
    height: 56rem;
  }
`;
export const BannerWrap = styled.div`
  width: 100%;
  height: 56rem;
  position: relative;
  ${({ theme }) => theme.common.flexCenter};
`;
export const Banner1 = styled.img.attrs({ src: 'img/MainBannerImg1.png' })`
  width: 100%;
  height: 100%;
`;
export const Banner2 = styled.img.attrs({ src: 'img/MainBannerImg2.png' })`
  width: 100%;
  height: 100%;
`;
export const Banner3 = styled.img.attrs({ src: 'img/MainBannerImg3.png' })`
  width: 100%;
  height: 100%;
`;
export const BannerTextArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const SmallText = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  color: #fdffaf;
`;
export const BigText = styled.span`
  font-size: 6.4rem;
  font-weight: 700;
  color: #ffffff;
`;
