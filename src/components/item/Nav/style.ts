import styled from 'styled-components';

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
`;
export const NavArea = styled.div`
  height: 0.88rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Nav = styled.div`
  height: 100%;
  width: 10rem;
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
