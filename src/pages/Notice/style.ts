import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 720px) {
    padding: 0 5%;
  }
`;

export const NoticeButton = styled.button`
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
  /* background-color: ${({ theme }) => theme.palette.green}; */
  height: 4.7rem;
  font-size: 0.4rem;
  margin-bottom: 1.48rem;
  text-align: center;
  padding-top: 2.3rem;
  color: white;
  font-weight: 900;
  background-image: url('/img/noticeBanner.png');
  background-size: 100% 100%;
  @media screen and (max-width: 720px) {
    font-size: 0.7rem;
    padding-top: 15%;
  }
`;
