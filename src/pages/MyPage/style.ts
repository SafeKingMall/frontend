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
  /* background-color: #f7f7f7; */
  margin: 0 0 0 0.2rem;
  width: 10.56rem;
  display: flex;
  flex-direction: column;
  #profile {
    margin: 1rem 0 0.4rem 0;
    @media (max-width: 720px) {
      margin: 1rem 0 0 0;
    }
  }
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
    font-weight: 900;
    border-bottom: 1px solid ${({ theme }) => theme.palette.green};
  }
`;
export const BasicWrap = styled.div`
  > div {
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
      font-weight: 400;
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
  #short-input {
    width: 5.45rem;
    @media (max-width: 720px) {
      width: 63%;
      position: absolute;
      top: 1.1rem;
      left: 5%;
    }
  }
  #short-input-btn {
    margin: 0 0 0 0.08rem;
    background-color: #289951;
    width: 1.83rem;
    height: 0.64rem;
    font-weight: 500;
    font-size: 0.2rem;
    line-height: 0.24rem;
    color: #ffffff;
    @media (max-width: 720px) {
      position: absolute;
      width: 24.5%;
      height: 1.4rem;
      top: 1.1rem;
      right: 5%;
      font-size: 0.52rem;
      border-radius: 5px;
    }
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
    padding: 0.3rem 5%;
    width: 100vw;
    font-size: 0.56rem;
    line-height: initial;
    border-bottom: 1px solid #cccccc;
    &::after {
      display: none;
    }
  }
`;
export const MemberWrap = styled.div`
  background-color: peachpuff;
`;
export const BtnWrap = styled.div`
  margin: 0.44rem 0 0.44rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    justify-content: space-between;
    margin: 1rem 0 2.5rem 0;
  }
  button:first-child {
    margin-right: 0.1rem;
    width: 1.28rem;
    height: 0.56rem;
    border: 0.01rem solid #289951;
    font-weight: 500;
    font-size: 0.16rem;
    color: #289951;
    @media (max-width: 720px) {
      width: 47.5%;
      height: 1.5rem;
      font-size: 0.48rem;
      border-radius: 5rem;
    }
  }
  button:last-child {
    width: 1.28rem;
    height: 0.56rem;
    background: #289951;
    font-weight: 500;
    font-size: 0.16rem;
    line-height: 0.19rem;
    color: #ffffff;
    :disabled {
      background-color: #aaaaaa;
    }
    @media (max-width: 720px) {
      width: 47.5%;
      height: 1.5rem;
      font-size: 0.48rem;
      border-radius: 5rem;
    }
  }
`;
export const PostModal = styled.div`
  z-index: 10;
  position: fixed;
  width: 5rem;
  height: 8rem;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  height: 0.9rem;
  position: relative;
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 0.16rem;
  color: #ff003e;
  position: absolute;
  bottom: -0.1rem;
  left: 2.56rem;
  @media (max-width: 720px) {
    bottom: -0.2rem;
    left: 5%;
    font-size: 0.4rem;
  }
`;
export const DaumPostBackground = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const DaumPostDiv = styled.div`
  width: 500px;
  height: 460px;
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: '#ffffff';
  @media (max-width: 720px) {
    width: 95%;
    height: 70%;
    min-width: 328px;
    max-width: 500px;
  }
`;
