import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  margin-top: 0.35rem;
  width: 3.6rem;
  padding-left: 0.2rem;
  > div {
    font-weight: 700;
    font-size: 0.32rem;
    line-height: 0.38rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 3.6rem;
      height: 0.02rem;
      top: 0.5rem;
      right: 0;
      background-color: #000;
    }
  }
  > ul {
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 0.24rem;
    line-height: 0.29rem;
    color: #212121;
    > li {
      margin-bottom: 0.5rem;
    }
  }
`;
