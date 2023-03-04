import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const BannerWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 720px) {
    height: 7rem;
  }
`;
export const Banner = styled.img.attrs({ src: 'img/ItemListBannerImg.png' })`
  width: 100%;
  height: 100%;
  display: block;
`;
export const BannerText = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;
export const NavArea = styled.div`
  height: 0.88rem;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const Nav = styled.div`
  height: 100%;
  width: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const NavText = styled.span`
  color: ${(props) => props.theme.palette.txt};
  font-weight: 500;
  font-size: 0.24rem;
  cursor: pointer;
`;
export const SliderWrap = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const SliderContainer = styled.div`
  width: 100%;
  height: 1.2rem;
  /* overflow-x: hidden; */
  display: none;
  font-size: 0.5rem;
  font-weight: 500;
  padding: 0 5%;
  margin: 0.8rem 0;
  @media (max-width: 720px) {
    display: initial;
  }
`;
export const CustomSlider = styled(Slider)`
  .slick-list {
    height: 1.2rem;
  }
  .slick-prev {
    left: -5%;
    top: 56%;
    background: #ffffff;
    z-index: 1;
    height: 100%;
    width: 0.7rem;
  }
  .slick-next {
    right: -5%;
    top: 56%;
    background: #ffffff;
    z-index: 1;
    height: 100%;
    width: 0.7rem;
  }
  .slick-prev:before {
    color: black;
    font-size: 0.7rem;
  }
  .slick-next:before {
    color: black;
    font-size: 0.7rem;
  }
`;
export const SlickCategoryWrap = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  height: 1.2rem;
`;
export const Category = styled.span`
  padding: 0 0.3rem;
  ${({ theme }) => theme.common.flexCenter};
  height: 1.2rem;
`;
