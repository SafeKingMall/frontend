import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 47rem;
  background-color: ${(props) => props.theme.palette.green};
  justify-content: center;
  align-items: center;
`;
export const BannerText = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 4rem;
`;
export const NavArea = styled.div`
  height: 8.8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  /* border-bottom: 0.1rem solid ${(props) => props.theme.palette.txtblack}; */
`;
export const Nav = styled.div`
  height: 100%;
  width: 94.5rem;
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
