import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  margin-top: 35px;
  width: 36rem;
  padding-left: 2rem;
  > div {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
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
    margin-top: 50px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #212121;
    > li {
      margin-bottom: 5rem;
    }
  }
`;
