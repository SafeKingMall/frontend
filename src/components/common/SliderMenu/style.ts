import styled, { css } from 'styled-components';

export const Container = styled.div<{ sliderToggle: boolean }>`
  display: none;
  @media (max-width: 720px) {
    display: initial;
    position: fixed;
    top: 0;
    height: calc(var(--vh, 1vh) * 100);
    /* height: 100%; */
    width: 60%;
    background-color: #ffffff;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    box-shadow: 1px 2px 2px #ccc;
    z-index: 3;
    outline: none;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
    ${(props) =>
      props.sliderToggle
        ? css`
            left: 0;
          `
        : css`
            left: calc(-60% - 2px);
          `}
    transition: left 0.3s ease-in;
  }
`;
export const SliderBackgorund = styled.div<{ sliderToggle: boolean }>`
  display: none;
  @media (max-width: 720px) {
    position: fixed;
    top: 0;
    left: 0;
    height: calc(var(--vh, 1vh) * 100);
    /* height: 100%; */
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    ${(props) =>
      props.sliderToggle
        ? css`
            display: initial;
          `
        : css`
            display: none;
          `}
  }
`;
export const LogoArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 1.8rem;
`;
export const Logo = styled.img.attrs({ src: 'https://safekingmall.com/img/HeaderLogo.png' })`
  width: 3.12rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const MenuUl = styled.ul`
  width: 100%;
  margin-top: 0.8rem;
  font-size: 0.65rem;
  font-weight: 600;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* > li:first-child {
    border-top: 1px solid #e0e0e0;
  } */
`;
// export const SmallTitle = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   width: 100%;
//   font-size: 0.52rem;
//   font-weight: 700;
//   padding-left: 0.8rem;
//   padding-right: 0.3rem;
// `;
// export const SmallTitleUnderLine = styled.div`
//   width: calc(100% - 0.8rem);
//   height: 1px;
//   background-color: black;
//   margin-left: 0.8rem;
// `;
export const MenuLi = styled.li`
  height: 2rem;
  width: 100%;
  padding: 0 0.8rem;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
  transition: height 0.3s ease-in;
`;
export const MenuText = styled.div`
  width: 100%;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
  > span:nth-child(2) {
    display: flex;
    align-items: center;
    color: #888888;
    transition: transform 0.3s;
  }
`;
export const OpenMenuUl = styled.ul`
  width: 100%;
  margin: 0.3rem 0;
  font-size: 0.56rem;
  font-weight: 500;
`;
export const OpenMenuLi = styled.li`
  line-height: 1rem;
`;
export const LoginLi = styled(MenuLi)<{ loginUser: string | undefined }>`
  ${(props) =>
    props.loginUser
      ? css``
      : css`
          display: none;
        `}
`;
