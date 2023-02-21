import styled from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  width: 12.98rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 109.6rem; */
  margin-bottom: 1.2rem;
`;
export const ProcessBar = styled.div`
  margin: 1.04rem 0 1.04rem 0;
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.3rem;
  width: 4.01rem;
  height: 0.99rem;
  background-image: url('https://user-images.githubusercontent.com/91241596/213253660-d5f39637-aafc-43b1-b6a9-abb3978e5c15.png');
`;
export const Mid = styled.div`
  margin-bottom: 0.16rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #289951;
  display: block;
  align-items: left;
`;
export const InputContainer = styled.div`
  background-color: #fff;
  width: 6.4rem;
  height: 7.04rem;
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
    width: 2rem;
    height: 1.7rem;
    font-size: 0.18rem;
    font-weight: 700;
    line-height: 0.22rem;
    padding: 0.34rem 0 0 0.3rem;
    > span {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #289951;
    }
  }
  & > button {
    background-color: #fff;
    width: 1.04rem;
    height: 0.4rem;
    border: 0.01rem solid #289951;
    border-radius: 0.1rem;
    color: #289951;
    font-size: 0.16rem;
    font-weight: 400;
    line-height: 0.19rem;
    position: absolute;
    top: 0.25rem;
    right: 0.24rem;
  }
  & > input {
    background-color: #fff;
    font-size: 0.18rem;
    font-weight: 400;
    line-height: 0.22rem;
    padding-left: 0.24rem;
    width: 4.2rem;
  }
  & > p {
    color: red;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position: absolute;
    top: 0.35rem;
    right: 1.15rem;
  }
  & > div {
    background-color: lavenderblush;
    width: 6.6rem;
    height: 0.58rem;
    border-radius: 0.05rem;
    display: flex;
    align-items: center;
    padding-left: 0.32rem;
    font-size: 0.18rem;
    font-weight: 400;
    line-height: 0.22rem;
    position: absolute;
    bottom: 0.2rem;
    left: 0.16rem;
  }
  &::before {
    content: '';
    position: absolute;
    left: 2rem;
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
  left: 2.24rem;
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
      /* identical to box height */

      color: #ffffff;
      :disabled {
        background-color: #aaaaaa;
      }
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
  /* background-color: '#ffffff'; */
`;
export const DaumPostBackground = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const DaumPostDiv = styled.div`
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: '#ffffff';
`;
