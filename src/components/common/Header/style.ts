import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.2rem;
  font-weight: 500;
  color: #212121;
  /* border-bottom: 0.005rem solid #777777; */
  @media (max-width: 720px) {
    height: 1.8rem;
  }
`;
export const MenuBtnArea = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    height: 100%;
    width: 20%;
  }
`;
export const LogoArea = styled.div`
  width: 20%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    width: 30%;
  }
`;
export const Logo = styled.img.attrs({ src: 'img/HeaderLogo.png' })`
  width: 1.56rem;
  height: 0.75rem;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 3.12rem;
    height: 1.5rem;
  }
`;
export const NavArea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const Nav = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  cursor: pointer;
  padding: 0.2rem 0.3rem;
`;
export const UserContentArea = styled.div`
  width: 20%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const UserContentBox = styled.div`
  width: 2.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 720px) {
    width: 75%;
    margin-right: 0.8rem;
    /* justify-content: space-between; */
  }
`;
export const IconBox = styled.div`
  width: 1.04rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const IconWrap = styled.div`
  width: 0.35rem;
  height: 0.35rem;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    width: 0.75rem;
    height: 0.75rem;
  }
`;
export const GreenBtn = styled.button`
  width: 1.04rem;
  height: 0.48rem;
  background-color: ${({ theme }) => theme.palette.green};
  border-radius: 0.05rem;
  font-size: 0.2rem;
  font-weight: 500;
  color: #ffffff;
  @media (max-width: 720px) {
    width: 1.8rem;
    height: 0.8rem;
    border-radius: 0.1rem;
    font-size: 0.3rem;
  }
`;
export const GrayBtn = styled(GreenBtn)`
  background-color: #ffffff;
  color: #999999;
  border: 0.01rem solid #999999;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const SliderWrap = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: initial;
    height: calc(var(--vh, 1vh) * 100);
    width: 50%;
    background-color: red;
  }
`;
