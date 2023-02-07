import styled from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  width: 129.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 109.6rem; */
`;
export const ProcessBar = styled.div`
  margin: 5.6rem 0 0;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
  width: 40rem;
  height: 9.9rem;
  background-image: url('https://user-images.githubusercontent.com/91241596/213253660-d5f39637-aafc-43b1-b6a9-abb3978e5c15.png');
`;
export const Mid = styled.div`
  margin: 7.2rem 0 1.6rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #289951;
  display: block;
  align-items: left;
`;
export const InputContainer = styled.div`
  background-color: #fff;
  width: 64rem;
  height: 70.4rem;
  border: 1px solid #efeff1;
  /* border: 0.1rem solid #fff; */
  border-radius: 1rem;
  & > div:last-child {
    &::after {
      display: none;
    }
  }
`;
export const InputWrapper = styled.div`
  /* background-color: mistyrose; */
  height: 8.8rem;
  position: relative;
  & > label {
    /* background-color: thistle; */
    display: inline-block;
    width: 20rem;
    height: 17rem;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.2rem;
    padding: 3.4rem 0 0 3rem;
    > span {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #289951;
    }
  }
  & > button {
    background-color: #fff;
    width: 10.4rem;
    height: 4rem;
    border: 0.1rem solid #289951;
    border-radius: 1rem;
    color: #289951;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;
    position: absolute;
    top: 2.5rem;
    right: 2.4rem;
  }
  & > input {
    background-color: #fff;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    padding-left: 2.4rem;
    width: 42rem;
  }
  & > p {
    color: red;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position: absolute;
    top: 3.5rem;
    right: 11.5rem;
  }
  & > div {
    background-color: lavenderblush;
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
    left: 1.6rem;
  }
  &::before {
    content: '';
    position: absolute;
    left: 20rem;
    top: 3.4rem;
    width: 0.1rem;
    background-color: #efeff1;
    width: 0.1rem;
    height: 2.4rem;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.1rem;
    background-color: #efeff1;
    width: 63.8rem;
    height: 0.1rem;
  }
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ff003e;
  position: absolute;
  top: 6.1rem;
  left: 22.4rem;
`;
export const BtnWrapper = styled.div`
  margin-top: 4.8rem;
  /* margin-bottom: 12rem; */
  width: 64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
    border-radius: 10rem;
    width: 31.2rem;
    height: 8rem;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3rem;
    :first-child {
      border: 0.1rem solid #289951;
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
  width: 50rem;
  height: 80rem;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: '#ffffff'; */
`;
export const DaumPostBackground = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
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
