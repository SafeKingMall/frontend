import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 5rem; */
`;
export const CategoryWrap = styled.div`
  width: 14.4rem;
  margin-bottom: 0.23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
  }
`;
export const Title = styled.span`
  font-size: 0.4rem;
  font-weight: 700;
  color: #212121;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;
export const CategoryNavArea = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.56rem;
  margin-bottom: 1.04rem;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const CategorySelect = styled.span`
  font-size: 0.24rem;
  font-weight: 500;
  color: #212121;
  cursor: pointer;
`;
export const SelectedCategoryArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const SelectedCategory = styled.span`
  font-size: 0.32rem;
  font-weight: 700;
  color: #212121;
`;
export const More = styled.span`
  font-size: 0.18rem;
  font-weight: 400;
  color: #333333;
  border-bottom: 0.01rem solid #333333;
  cursor: pointer;
  @media (max-width: 720px) {
    font-size: 0.4rem;
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
