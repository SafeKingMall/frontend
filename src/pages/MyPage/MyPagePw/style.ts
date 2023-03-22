import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 14.4rem;
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const Wrapper = styled.div`
  width: 10.56rem;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
    margin: 0;
    padding: 0 5%;
  }
`;
export const Top = styled.div`
  margin: 1rem 0 0.88rem 0;
  font-weight: 700;
  font-size: 0.4rem;
  line-height: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    width: 100vw;
    line-height: initial;
    margin: 0;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    font-size: 0.8rem;
    font-weight: 800;
    border-bottom: 1px solid ${({ theme }) => theme.palette.green};
  }
`;
export const Mid = styled.h1`
  margin-bottom: 0.4rem;
  width: 10.56rem;
  padding-left: 0.2rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0.4rem;
    background-color: #212121;
    width: 10.56rem;
    height: 0.01rem;
  }
  @media (max-width: 720px) {
    margin-bottom: 0;
    padding: 0.5rem 5%;
    width: 100vw;
    font-size: 0.56rem;
    line-height: initial;
    border-bottom: 1px solid #cccccc;
    &::after {
      display: none;
    }
  }
`;
export const BasicWrap = styled.div`
  margin: 0 0 0.44rem 0;
  > div {
    margin-bottom: 0.16rem;
    position: relative;
    @media (max-width: 720px) {
      width: 100%;
      height: 3rem;
      display: flex;
      flex-direction: column;
      padding: 0 5%;
      position: relative;
    }
    > label {
      display: inline-block;
      text-align: center;
      width: 2.56rem;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
      @media (max-width: 720px) {
        display: flex;
        width: 100%;
        font-size: 0.48rem;
        line-height: 0.5rem;
        margin: 0.4rem 0;
      }
    }
    > input {
      width: 7.36rem;
      height: 0.64rem;
      border: 0.01rem solid #efeff1;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
      padding: 0.2rem 0.4rem;
      @media (max-width: 720px) {
        display: flex;
        width: 100%;
        height: 1.4rem;
        font-size: 0.48rem;
        line-height: initial;
        border: 1px solid #cccccc;
        border-radius: 5px;
        margin-bottom: 0.4rem;
      }
    }
  }
  > div:nth-child(4) {
    margin-bottom: 0.44rem;
  }
  > button {
    margin: 2rem auto;
  }
`;

export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 0.16rem;
  color: #ff003e;
  position: absolute;
  bottom: -0.25rem;
  left: 2.56rem;
  @media (max-width: 720px) {
    bottom: -0.2rem;
    left: 5%;
    font-size: 0.4rem;
  }
`;
export const MyBtn = styled.button`
  width: 1.3rem;
  height: 0.56rem;
  background-color: #289951;
  color: #fff;
  font-weight: 500;
  font-size: 0.18rem;
  line-height: 0.19rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  :disabled {
    background-color: #aaaaaa;
  }
  @media (max-width: 720px) {
    width: 50%;
    height: 1.5rem;
    font-size: 0.48rem;
    border-radius: 5rem;
  }
`;
