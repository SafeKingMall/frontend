import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    padding: 0 5%;
  }
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.98rem;
  margin-bottom: 1.2rem;
  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
export const TopContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
`;
export const TopWrap = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 30%;
  @media (max-width: 720px) {
    width: 80%;
  }
`;
export const Top = styled.img.attrs({
  src: 'https://user-images.githubusercontent.com/91241596/213789468-e180ac8e-1a6a-4813-9e87-c972cebf0dff.png',
})`
  margin: 1.04rem 0 1.04rem 0;
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.3rem;
`;
export const Mid = styled.div`
  margin-bottom: 0.16rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  color: #289951;
  @media (max-width: 720px) {
    margin-bottom: 0.32rem;
    font-size: 0.52rem;
    line-height: initial;
  }
`;
export const InputContainer = styled.div`
  background-color: #fff;
  width: 6.4rem;
  border: 0.01rem solid #cccccc;
  border-radius: 0.1rem;
  & > div:last-child {
    &::after {
      display: none;
    }
  }
  @media (max-width: 720px) {
    width: 100%;
    border: none;
  }
`;
export const InputWrapper = styled.div`
  height: 0.88rem;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 720px) {
    height: initial;
    flex-direction: column;
    margin-bottom: 0.7rem;
    align-items: initial;
  }
  & > label {
    display: inline-block;
    width: 1.5rem;
    height: 0.17rem;
    font-size: 0.18rem;
    font-weight: 700;
    line-height: 0.22rem;
    padding-left: 0.3rem;
    @media (max-width: 720px) {
      width: 100%;
      height: 1rem;
      font-size: 0.52rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 0;
      line-height: initial;
      margin-bottom: 0.2rem;
    }
  }
  & > input {
    background-color: #fff;
    font-size: 0.18rem;
    font-weight: 400;
    line-height: 0.22rem;
    padding-left: 0.24rem;
    width: 50%;
    height: 95%;
    @media (max-width: 720px) {
      width: 100%;
      height: 1.6rem;
      font-size: 0.52rem;
      border: 1px solid #cccccc;
      border-radius: 5px;
    }
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
    @media (max-width: 720px) {
      display: none;
    }
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
    @media (max-width: 720px) {
      display: none;
    }
  }
  .smallInput {
    @media (max-width: 720px) {
      width: 72.5%;
      position: relative;
    }
  }
`;
export const AuthTimer = styled.div`
  position: absolute;
  top: 0.35rem;
  right: 1.15rem;
  @media (max-width: 720px) {
    ${({ theme }) => theme.common.flexCenter};
    width: 2rem;
    height: 1.6rem;
    top: 1.2rem;
    left: calc(72.5% - 2rem);
  }
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 0.14rem;
  line-height: 0.19rem;
  color: #ff003e;
  position: absolute;
  top: 0.61rem;
  left: 1.74rem;
  @media (max-width: 720px) {
    top: 3rem;
    left: 0;
    font-size: 0.4rem;
    line-height: initial;
  }
`;
export const SendBtn = styled.button`
  background-color: #fff;
  width: 1.35rem;
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
  @media (max-width: 720px) {
    width: 25%;
    height: 1.6rem;
    top: 1.2rem;
    right: 0;
    font-size: 0.52rem;
    border: 1px solid #a6a6a6;
    border-radius: 5px;
  }
`;
export const CheckBtn = styled.button`
  background-color: #fff;
  width: 0.76rem;
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
  @media (max-width: 720px) {
    width: 25%;
    height: 1.6rem;
    top: 1.2rem;
    right: 0;
    font-size: 0.52rem;
    border: 1px solid #a6a6a6;
    border-radius: 5px;
  }
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
      font-size: 0.24rem;
      line-height: 0.29rem;
      /* identical to box height */

      color: #289951;
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 0.24rem;
      line-height: 0.29rem;
      color: #ffffff;
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
  @media (max-width: 720px) {
    width: 100%;
    margin-top: 1rem;
    > button {
      background-color: #fff;
      border-radius: 1rem;
      width: 47.5%;
      height: 1.5rem;
      :first-child {
        border: 1px solid #289951;
        font-size: 0.48rem;
        line-height: initial;
      }
      :last-child {
        background-color: #289951;
        font-size: 0.48rem;
        line-height: initial;
      }
    }
  }
`;
