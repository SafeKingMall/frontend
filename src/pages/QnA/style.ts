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
  bottom: 28%;
  @media screen and (max-width: 400px) {
    margin-left: 62%;
    font-size: 0.5rem;
    width: 20vw;
    height: 5vh;
    position: unset;
    margin-bottom: 10%;
  }
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
  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
    padding-top: 15%;
  }
`;
