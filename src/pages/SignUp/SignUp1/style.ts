import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 12.98rem;
  /* height: 109.6rem; */
  margin-bottom: 1.2rem;
`;
export const Top = styled.div`
  background-image: url('https://user-images.githubusercontent.com/91241596/213788582-b96fbd33-cbac-4b4c-8d28-588936cea9e7.png');
  margin: 1.04rem 0 1.04rem 0;
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.3rem;
  width: 4.01rem;
  height: 0.99rem;
`;
export const Mid = styled.div`
  margin: 0.22rem 0 0.16rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #289951;
`;
export const InputContainer = styled.div`
  background-color: #fff;
  width: 6.4rem;
  height: 3.52rem;
  border: 1px solid #efeff1;
  /* border: 0.1rem solid #fff; */
  border-radius: 0.1rem;
  & > div:last-child {
    &::after {
      display: none;
    }
  }
`;
export const InputWrapper = styled.div`
  /* background-color: mistyrose; */
  height: 0.88rem;
  position: relative;
  & > label {
    /* background-color: thistle; */
    display: inline-block;
    width: 1.5rem;
    height: 1.7rem;
    font-size: 0.18rem;
    font-weight: 700;
    line-height: 0.22rem;
    padding: 0.34rem 0 0 0.3rem;
  }
  & > input {
    background-color: #fff;
    font-size: 0.18rem;
    font-weight: 400;
    line-height: 0.22rem;
    padding-left: 0.24rem;
    width: 3.2rem;
  }
  & > button {
    background-color: #fff;
    width: 0.76rem;
    height: 0.4rem;
    border: 0.01rem solid #a6a6a6;
    border-radius: 0.1rem;
    color: #a6a6a6;
    font-size: 0.16rem;
    font-weight: 400;
    line-height: 0.19rem;
    position: absolute;
    top: 0.25rem;
    right: 0.16rem;
  }
  & > div {
    /* background-color: lavenderblush;
    width: 66rem;
    height: 5.8rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 3.2rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    position: absolute;
    bottom: 2rem;
    left: 1.6rem; */
    position: absolute;
    top: 0.31rem;
    right: 1rem;
    font-size: 0.28rem;
    color: #a6a6a6;
  }
  & > p {
    position: absolute;
    top: 0.31rem;
    right: 0.3rem;
    font-size: 0.26rem;
    color: #a6a6a6;
  }
  &::before {
    content: '';
    position: absolute;
    left: 1.49rem;
    top: 0.34rem;
    width: 0.01rem;
    background-color: #efeff1;
    width: 0.01rem;
    height: 0.24rem;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.01rem;
    background-color: #efeff1;
    width: 6.38rem;
    height: 0.01rem;
  }
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ff003e;
  position: absolute;
  top: 0.61rem;
  left: 1.74rem;
`;

export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  /* margin-bottom: 12rem; */
  width: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    :first-child {
      border: 0.01rem solid #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      color: #289951;
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
`;
