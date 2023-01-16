import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: pink; */
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url(https://user-images.githubusercontent.com/91241596/212526764-a38ae3a1-34e0-4740-b6d0-741a4984431a.png);
  width: 156px;
  height: 76px;
  position: absolute;
  left: 110px;
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
  margin-right: 100px;
`;
export const MenuIcons = styled.div`
  display: flex;
  font-size: 24px;
  position: absolute;
  right: 90px;
`;
export const IconList = styled.div`
  margin-right: 20px;
`;
