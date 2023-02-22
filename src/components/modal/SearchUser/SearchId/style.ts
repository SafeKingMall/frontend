import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 6.4rem;
  height: 9rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Top = styled.div`
  margin: 0.48rem 0 0.48rem 0;
  font-weight: 400;
  font-size: 0.2rem;
  line-height: 0.24rem;
  text-align: center;

  color: #000000;
`;
export const InputContainer = styled.div`
  background-color: #fff;
  width: 5.92rem;
  height: 2.64rem;
  border: 0.01rem solid #efeff1;
  border-radius: 0.1rem;
`;
export const InputWrapper = styled.div`
  height: 0.88rem;
  border-bottom: 0.01rem solid #efeff1;
  position: relative;
  display: flex;
  align-items: center;
  label {
    display: inline-block;
    width: 1.5rem;
    height: 0.17rem;
    font-size: 0.18rem;
    font-weight: 700;
    line-height: 0.22rem;
    padding-left: 0.3rem;
  }
  input {
    background-color: #fff;
    font-size: 0.18rem;
    font-weight: 400;
    line-height: 0.22rem;
    padding-left: 0.24rem;
    width: 3.2rem;
    height: 95%;
  }

  & > div {
    position: absolute;
    top: 0.31rem;
    right: 1rem;
    padding-top: 0.05rem;
    margin-right: 0.2rem;
    font-size: 0.28rem;
    color: #a6a6a6;
  }
  /* & > p {
    position: absolute;
    top: 0.31rem;
    right: 0.3rem;
    font-size: 0.26rem;
    color: #a6a6a6;
  } */
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
`;

export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 0.14rem;
  bottom: 4.3rem;
  line-height: 0.19rem;
  color: #ff003e;
  position: absolute;
  top: 0.64rem;
  left: 1.74rem;
`;
export const SearchBtn = styled.button`
  margin: 0.48rem 0 0.48rem 0;
  background-color: #289951;
  width: 3.12rem;
  height: 0.8rem;

  background: #289951;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  color: #ffffff;
  :disabled {
    background-color: #aaa;
  }
`;
export const Result = styled.div``;
export const TextWrapper = styled.div`
  width: 5.9rem;
  height: 2.2rem;
  background-color: #efeff1;
  border-radius: 0.1rem;
  & > div:first-child {
    padding-top: 0.4rem;
    margin-bottom: 0.4rem;
    font-weight: 500;
    font-size: 0.2rem;
    line-height: 0.24rem;
    text-align: center;

    color: #000000;
  }
  & > div:nth-child(2) {
    font-weight: 400;
    font-size: 0.16rem;
    line-height: 0.28rem;
    text-align: center;

    color: #000000;
  }
`;
export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  width: 5.92rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    border-radius: 1rem;
    width: 2.84rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    :first-child {
      border: 0.01rem solid #289951;
      font-weight: 700;
      font-size: 0.24rem;
      line-height: 0.29rem;

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
`;

export const AuthTimer = styled.div`
  position: absolute;
  top: 0.35rem;
  right: 1.15rem;
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
`;
