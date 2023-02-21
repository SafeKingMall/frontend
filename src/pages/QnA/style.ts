import styled from 'styled-components';
// import qnaBanner from './qnaBanner.jpg';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  // width: 100%;
  // height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin-left: 13rem;
  width: 1.3rem;
  height: 0.5rem;
  font-size: 0.15rem;
  position: absolute;
  bottom: 18%;
`;

export const Banner = styled.div`
  height: 4.7rem;
  font-size: 0.4rem;
  margin-bottom: 1.48rem;
  text-align: center;
  padding-top: 2.3rem;
  color: white;
  font-weight: 900;
  background-image: url('/img/QnABannerImg.png');
  background-size: 100% 100%;
`;

export const content = styled.div`
  background-color: pink;
  width: 9.45rem;
  margin-top: 0.7rem;
  height: 0.24rem;
  //   margin: 0 0 2.4rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0.1rem;
  align-items: center;
`;

export const Paging2 = styled.li`
  padding: 0.1rem;
  cursor: pointer;
  font-size: 0.17rem;
  color: ${({ theme }) => theme.palette.txtgray};
  &:active {
    background-color: ${({ theme }) => theme.palette.green};
    cursor: pointer;
    color: white;
  }
`;

export const pageNumbers = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const lipageNumbers = styled.li`
  padding: 0.1rem;
  cursor: pointer;
  &:active {
    color: black;
  }
`;

export const buttonpageNumbers = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.15rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;
