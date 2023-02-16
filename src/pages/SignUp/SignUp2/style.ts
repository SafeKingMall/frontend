import styled from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 129.8rem;
  /* height: 109.6rem; */
  margin-bottom: 12rem;
`;
export const Top = styled.div`
  background-image: url('https://user-images.githubusercontent.com/91241596/213789468-e180ac8e-1a6a-4813-9e87-c972cebf0dff.png');
  margin: 10.4rem 0 10.4rem 0;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
  width: 40.1rem;
  height: 9.9rem;
`;
export const Mid = styled.div`
  margin-bottom: 1.6rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #289951;
`;
export const InputContainer = styled.div`
  background-color: #fff;
  width: 64rem;
  height: 35.2rem;
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
    width: 15rem;
    height: 17rem;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.2rem;
    padding: 3.4rem 0 0 3rem;
  }
  & > input {
    background-color: #fff;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    padding-left: 2.4rem;
    width: 22rem;
  }
  /* & > div {
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
  } */
  &::before {
    content: '';
    position: absolute;
    left: 14.9rem;
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
export const AuthTimer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 11.5rem;
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ff003e;
  position: absolute;
  top: 6.1rem;
  left: 17.4rem;
`;
export const SendBtn = styled.button`
  background-color: #fff;
  width: 13.5rem;
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
`;
export const CheckBtn = styled.button`
  background-color: #fff;
  width: 7.6rem;
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
      color: #ffffff;
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
`;
