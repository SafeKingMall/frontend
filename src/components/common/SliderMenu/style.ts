import styled, { css } from 'styled-components';

export const Container = styled.div<{ sliderToggle: boolean }>`
  display: none;
  @media (max-width: 720px) {
    display: initial;
    position: fixed;
    top: 0;
    height: calc(var(--vh, 1vh) * 100);
    /* height: 100%; */
    width: 50%;
    background-color: #ffffff;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    box-shadow: 1px 2px 2px #ccc;
    z-index: 2;
    outline: none;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ${(props) =>
      props.sliderToggle
        ? css`
            left: 0;
          `
        : css`
            left: calc(-50% - 2px);
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
    z-index: 1;
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
  border-bottom: 0.005rem solid #777777;
`;
export const Logo = styled.img.attrs({ src: 'img/HeaderLogo.png' })`
  width: 3.12rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const MenuUl = styled.ul`
  width: 100%;
  margin-top: 0.8rem;
  font-size: 0.65rem;
  font-weight: 600;
`;
export const MenuLi = styled.li`
  height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  cursor: pointer;
`;
export const LogoutLi = styled(MenuLi)<{ loginUser: string | undefined }>`
  ${(props) =>
    props.loginUser
      ? css``
      : css`
          display: none;
        `}
`;
