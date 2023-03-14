import styled from 'styled-components';

export const PopUpContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0, 0.5);
`;

export const PopUpBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  ul {
    justify-content: center;
  }
  @media screen and (max-width: 720px) {
    width: 74vw;
    height: 70vh;
  }
`;

//탭부분
export const TabMenu = styled.div`
  display: flex;
  list-style: none;
  cursor: pointer;
  justify-content: center;
  .submenu {
    display: flex;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 700;
    padding-left: 0.32rem;
    padding-right: 0.32rem;
    padding-top: 0.3rem;
    width: 3.2rem;
    background-color: #d4ebdc;
    @media screen and (max-width: 720px) {
      width: 37vw;
      height: 6vh;
      font-size: 0.5rem;
      padding-top: 5%;
    }
  }

  .focused {
    color: ${({ theme }) => theme.palette.green};
    background-color: white;
  }
`;
