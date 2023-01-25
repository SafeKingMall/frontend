import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: pink; */
  /* width: 100%; */
  /* min-width: 180rem; */
  padding: 0 1rem;
  min-width: 130rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url(https://user-images.githubusercontent.com/91241596/212526764-a38ae3a1-34e0-4740-b6d0-741a4984431a.png);
  margin: 0 0 0 6rem;
  width: 156px;
  height: 76px;
  cursor: pointer;
`;
export const Menu = styled.ul`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  /* justify-content: center; */
  text-align: center;
  margin: 0 auto;
`;
export const MenuList = styled.li`
  margin: 0 5rem;
  padding: 1rem 1rem;
`;

export const MenuIcons = styled.div`
  margin: 0 10rem 0 0;
  display: flex;
  font-size: 24px;

  /* position: absolute;
  right: 10%; */
`;
export const IconList = styled.div`
  padding: 0 1rem;
  /* padding: 1rem 1rem; */
`;
