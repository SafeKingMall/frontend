import styled from 'styled-components';

export const Banner = styled.div`
  font-weight: 900;
  background-image: url('/img/QnABannerImg.png');
  background-size: 100% 100%;
  height: 4.7rem;
  font-size: 0.4rem;
  /* margin-bottom: 7.8rem; */
  text-align: center;
  padding-top: 2.3rem;
  color: white;
  @media screen and (max-width: 720px) {
    font-size: 0.7rem;
    padding-top: 15%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  @media screen and (max-width: 720px) {
    width: 100%;
    height: 100%;
  }
`;

export const QnApwInput = styled.input`
  justify-content: center;
  width: 4.6rem;
  height: 0.64rem;
  margin-top: 0.48rem;
  margin-bottom: 0.72rem;
  font-size: 0.24rem;
  padding: 0.1rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  @media screen and (max-width: 720px) {
    width: 55vw;
    height: 5vh;
    font-size: 0.5rem;
  }
`;

export const DivWeight = styled.div`
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    font-weight: 600;
  }
`;

export const PwBox = styled.div`
  /* position: absolute; */
  width: 14.4rem;
  /* height: 30rem; */
  display: grid;
  justify-content: center;
  font-size: 0.24rem;
  text-align: center;
  margin-top: 1.78rem;
  border-top: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  @media screen and (max-width: 720px) {
    width: 85%;
    font-size: 0.5rem;
    height: 30vh;
  }
`;

export const Ladius = styled.div`
  border-radius: 50%;
  background-color: #a9d6b9;
  width: 1.48rem;
  height: 1.48rem;
  margin-top: 0.72rem;
  margin-bottom: 0.48rem;
  margin-left: 1.5rem;

  svg {
    margin-top: 0.2rem;
  }
  @media screen and (max-width: 720px) {
    margin-left: 32%;
    width: 20vw;
    height: 10vh;
  }
`;

export const QnABox = styled.div`
  margin-top: 0.48rem;
  margin-bottom: 1.2rem;
  display: flex;
  @media screen and (max-width: 720px) {
    margin-top: 10%;
    margin-bottom: 0;
  }
`;

export const QnAButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
  margin-right: 0.08rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    width: 20vw;
    height: 5vh;
    margin-right: 5%;
  }
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    width: 20vw;
    height: 5vh;
  }
`;
