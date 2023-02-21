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
`;
export const LogoArea = styled.div`
  width: 20%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const Logo = styled.img.attrs({ src: 'img/HeaderLogo.png' })`
  width: 1.56rem;
  height: 0.75rem;
  cursor: pointer;
`;
export const NavArea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
`;
export const IconBox = styled.div`
  width: 1.04rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const GreenBtn = styled.button`
  width: 1.04rem;
  height: 0.48rem;
  background-color: ${({ theme }) => theme.palette.green};
  border-radius: 0.05rem;
  font-size: 0.2rem;
  font-weight: 500;
  color: #ffffff;
`;
export const GrayBtn = styled(GreenBtn)`
  background-color: #ffffff;
  color: #999999;
  border: 0.01rem solid #999999;
`;
