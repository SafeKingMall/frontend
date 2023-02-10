import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #a9d6b9;
  min-width: 120rem;
  height: 20rem;
  display: flex;
  align-items: center;

  @media (max-width: 360px) {
    /* background-color: red; */
    min-width: 36rem;
    height: 26rem;
    flex-direction: column;
  }
`;
export const Logo = styled.div`
  margin: 0 0 0 28rem;
  > div {
    background-image: url(https://user-images.githubusercontent.com/91241596/212526703-b3b12d80-3d1f-4060-a0f3-af556e8839bf.png);
    width: 22rem;
    height: 11rem;
  }

  @media (max-width: 360px) {
    > div {
      /* background-color: green; */
      background-image: url('https://user-images.githubusercontent.com/91241596/214441923-62ec52d3-e664-402d-9800-b1ac7c2fc9b1.png');
      width: 10.6rem;
      height: 5rem;
      float: left;
    }
    margin: 2.4rem 0 0 1.6rem;
  }
`;
export const Text = styled.div`
  margin: 0 0 0 11rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  @media (max-width: 360px) {
    /* background-color: red; */
    min-width: 36rem;
    flex-direction: column;
    display: flex;
    justify-content: left;
    margin: 0.8rem 0 0 1.6rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #252525;
    & > span {
      font-weight: 600;
      line-height: 2.4rem;
    }
  }
`;
