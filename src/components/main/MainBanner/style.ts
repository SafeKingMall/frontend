import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const CustomSlider = styled(Slider)`
  .slick-list {
    height: 47.2rem;
  }
`;
// export const BannerWrap = styled.div`
//   width: 100%;
//   height: 47.2rem;
// `;
export const Banner1 = styled.div`
  width: 100%;
  height: 47.2rem;
  background-color: red;
`;
export const Banner2 = styled.div`
  width: 100%;
  height: 47.2rem;
  background-color: green;
`;
export const Banner3 = styled.div`
  width: 100%;
  height: 47.2rem;
  background-color: blue;
`;
