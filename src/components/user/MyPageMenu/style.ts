import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  margin-top: 3.5rem;
  width: 36rem;
  padding-left: 2rem;
  > div {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.8rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 36rem;
      height: 0.2rem;
      top: 5rem;
      right: 0;
      background-color: #000;
    }
  }
  > ul {
    margin-top: 5rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: #212121;
    > li {
      margin-bottom: 5rem;
    }
  }
`;
