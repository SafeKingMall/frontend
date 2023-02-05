import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const BannerWrap = styled.div`
  display: flex;
  width: 100%;
  height: 47rem;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Banner = styled.img.attrs({ src: 'img/ItemListBannerImg.png' })`
  width: 100%;
  height: 100%;
`;
export const BannerText = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const NavArea = styled.div`
  height: 8.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Nav = styled.div`
  height: 100%;
  width: 100rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const NavText = styled.span`
  color: ${(props) => props.theme.palette.txt};
  font-weight: 500;
  font-size: 2.4rem;
  cursor: pointer;
`;
