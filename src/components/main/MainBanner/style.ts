import styled, { css } from 'styled-components';
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
    height: 5.6rem;
  }
  @media (max-width: 720px) {
    .slick-list {
      height: 7rem;
    }
  }
`;
export const BannerWrap = styled.div`
  width: 100%;
  height: 5.6rem;
  position: relative;
  ${({ theme }) => theme.common.flexCenter};
  overflow: hidden;
  @media (max-width: 720px) {
    height: 7rem;
  }
`;
export const Banner = styled.img`
  width: 100%;
  height: 100%;
`;
export const Banner1 = styled(Banner).attrs({
  src: 'img/MainBanner1.png',
  alt: '안전왕 메인 배너1',
})``;
export const Banner2 = styled(Banner).attrs({
  src: 'img/MainBanner2.png',
  alt: '안전왕 메인 배너2',
})``;
export const Banner3 = styled(Banner).attrs({
  src: 'img/MainBanner3.png',
  alt: '안전왕 메인 배너3',
})``;
export const BannerTextArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const BannerLogoArea = styled.div<{ slide: boolean }>`
  width: 1.6rem;
  padding-bottom: 0.85rem;
  ${({ theme }) => theme.common.flexCenter};
  color: #ffffff;
  margin-bottom: 0rem;
  ${(props) =>
    props.slide
      ? css`
          opacity: 1;
          transition: opacity 3s, transform 3s;
          transition-delay: 0.1s;
          transform: translateX(0);
        `
      : css`
          opacity: 0;
          transform: translateX(-1rem);
        `}
  @media (max-width: 720px) {
    width: 2.6rem;
    padding-bottom: 1.4rem;
  }
`;
export const BannerLogo = styled.img.attrs({ src: '/img/HeaderLogo.png', alt: '안전왕' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
// export const SmallText = styled.span<{ slide: boolean }>`
//   font-size: 0.32rem;
//   font-weight: 700;
//   color: #fdffaf;
//   margin-bottom: 0.1rem;
//   ${(props) =>
//     props.slide
//       ? css`
//           opacity: 1;
//           transition: opacity 3s, transform 3s;
//           transition-delay: 0.1s;
//           transform: translateX(0);
//         `
//       : css`
//           opacity: 0;
//           transform: translateX(-1rem);
//         `}
// `;
export const BigText = styled.h2<{ slide: boolean }>`
  font-size: 0.64rem;
  font-weight: 700;
  color: #fdffaf;
  margin-bottom: 0.1rem;
  white-space: nowrap;
  ${(props) =>
    props.slide
      ? css`
          opacity: 1;
          transition: opacity 3s, transform 3s;
          transition-delay: 0.7s;
        `
      : css`
          opacity: 0;
          transform: translateX(-1rem);
        `}
  @media (max-width: 720px) {
    font-size: 0.9rem;
    /* margin-bottom: 0.24rem; */
  }
`;
export const BigText2 = styled.h3<{ slide: boolean }>`
  font-size: 0.48rem;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  ${(props) =>
    props.slide
      ? css`
          opacity: 1;
          transition: opacity 3s, transform 3s;
          transition-delay: 1.4s;
        `
      : css`
          opacity: 0;
          transform: translateX(-1rem);
        `}
  @media (max-width: 720px) {
    font-size: 0.64rem;
    margin-bottom: 0.5rem;
  }
`;
