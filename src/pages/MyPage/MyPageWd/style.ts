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
  width: 7.9rem;
  width: 10.56rem;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
    margin: 0;
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
export const BasicWrap = styled.div`
  /* background-color: mistyrose; */
  > div {
    margin-bottom: 0.16rem;
    background-color: #fff;
    > label {
      display: inline-block;
      text-align: center;
      width: 2.56rem;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
    }
    > input {
      width: 7.36rem;
      height: 0.64rem;
      border: 0.01rem solid #efeff1;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
      padding: 0.2rem 0.4rem;
    }
  }
`;
export const AreaWrap = styled.div`
  margin: 0 0 0.44rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    width: 100vw;
    padding: 0 5%;
    margin-bottom: 1rem;
  }
`;
export const Mid = styled.div`
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
    margin-bottom: 0.5rem;
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
export const InputWrapper = styled.div`
  background-color: #efeff1 !important;
  width: 10.56rem;
  height: 2.27rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    width: 100vw;
    height: 7rem;
    padding: 0 5%;
    justify-content: flex-start;
  }
  > div {
    margin-bottom: 0.16rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 720px) {
      width: 100%;
      flex-direction: column;
      align-items: initial;
      justify-content: initial;
    }
    > label {
      /* display: inline-block; */
      margin-right: 0.4rem;
      text-align: center;
      width: 1.86rem;
      font-weight: 500;
      font-size: 0.2rem;
      @media (max-width: 720px) {
        width: 100%;
        text-align: initial;
        font-size: 0.48rem;
        margin: 0.3rem 0;
      }
    }
    > input {
      width: 7.36rem;
      height: 0.64rem;
      border: 0.01rem solid #efeff1;
      font-weight: 500;
      font-size: 0.2rem;
      padding: 0.2rem 0.4rem;
      @media (max-width: 720px) {
        width: 100%;
        height: 1.5rem;
        font-size: 0.48rem;
      }
    }
  }
  > div:nth-child(3) {
    margin-bottom: 0;
  }
`;
export const ErrInfo = styled.div`
  margin: 0 0 0 -2.3rem;
  font-size: 0.14rem;
  font-weight: 400;
  color: #d20000;
  @media (max-width: 720px) {
    margin: 0.35rem 0 0 0;
    font-size: 0.4rem;
  }
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 0.14rem;
  line-height: 0.19rem;
  color: #ff003e;
  position: absolute;
  top: 0.44rem;
  left: 2.98rem;
`;

export const Btn = styled.button`
  margin: 0.44rem 0 0 0;
  background-color: #289951;
  width: 1.3rem;
  height: 0.56rem;
  font-weight: 500;
  font-size: 0.18rem;
  line-height: 0.19rem;
  color: #ffffff;
  :disabled {
    background-color: #aaa;
  }
  @media (max-width: 720px) {
    margin: 1.2rem 0;
    width: 50%;
    height: 1.5rem;
    font-size: 0.48rem;
    border-radius: 5rem;
  }
`;
