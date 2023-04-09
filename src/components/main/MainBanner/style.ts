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
  @media (max-width: 720px) {
    height: 7rem;
  }
`;
export const Banner = styled.img`
  width: 100%;
  height: 100%;
`;
export const Banner1 = styled(Banner).attrs({ src: 'img/MainBanner1.png' })``;
export const Banner2 = styled(Banner).attrs({ src: 'img/MainBanner2.png' })``;
export const Banner3 = styled(Banner).attrs({ src: 'img/MainBanner3.png' })``;
export const BannerTextArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const EnText = styled.div<{ slide: boolean }>`
  width: 1.5rem;
  height: 0.45rem;
  ${({ theme }) => theme.common.flexCenter};
  border-radius: 0.05rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.32rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.1rem;
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
    width: 2.2rem;
    height: 0.6rem;
    font-size: 0.48rem;
    margin-bottom: 0.24rem;
  }
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
export const BigText = styled.span<{ slide: boolean }>`
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
    margin-bottom: 0.24rem;
  }
`;
export const BigText2 = styled.span<{ slide: boolean }>`
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
  }
`;
// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;
// export const SmallText = styled.span<{ slide: boolean }>`
//   font-size: 0.32rem;
//   font-weight: 700;
//   color: #fdffaf;
//   ${(props) =>
//     props.slide
//       ? css`
//           animation: ${fadeIn};
//           animation-duration: 3s;
//         `
//       : css`
//           display: none;
//         `}
// `;
// export const BigText = styled.span<{ slide: boolean }>`
//   font-size: 0.64rem;
//   font-weight: 700;
//   color: #ffffff;
//   ${(props) =>
//     props.slide
//       ? css`
//           animation: ${fadeIn};
//           animation-duration: 3s;
//         `
//       : css`
//           display: none;
//         `}
// `;
