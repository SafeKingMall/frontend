import styled, { css, keyframes } from 'styled-components';
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
export const Banner = styled.img`
  width: 100%;
  height: 100%;
`;
export const Banner1 = styled(Banner).attrs({ src: 'img/MainBanner1.png' })``;
export const Banner2 = styled(Banner).attrs({ src: 'img/MainBanner2.png' })``;
export const Banner3 = styled(Banner).attrs({ src: 'img/MainBanner3.png' })``;
export const BannerTextArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const SmallText = styled.span<{ slide: boolean }>`
  font-size: 3.2rem;
  font-weight: 700;
  color: #fdffaf;
  ${(props) =>
    props.slide
      ? css`
          animation: ${fadeIn};
          animation-duration: 3s;
        `
      : css`
          display: none;
        `}
`;
export const BigText = styled.span<{ slide: boolean }>`
  font-size: 6.4rem;
  font-weight: 700;
  color: #ffffff;
  ${(props) =>
    props.slide
      ? css`
          animation: ${fadeIn};
          animation-duration: 3s;
        `
      : css`
          display: none;
        `}
`;
