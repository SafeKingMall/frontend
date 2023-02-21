import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 6.4rem;
  height: 9rem;
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

export const Ladius = styled.div`
  border-radius: 50%;
  background-color: #a9d6b9;
  width: 1.48rem;
  height: 1.48rem;
  margin-top: 0.42rem;
  margin-bottom: 0.48rem;
  display: flex;
  ${({ theme }) => theme.common.flexCenter}
`;

export const InputContainer = styled.div`
  background-color: #fff;
  width: 5.92rem;
  height: 0.94rem;
  border: 0.01rem solid #efeff1;
  /* border: 0.1rem solid #fff; */
  border-radius: 0.1rem;
  & > div:last-child {
    &::after {
      display: none;
    }
  }
`;
export const InputWrapper = styled.div`
  height: 0.88rem;
  position: relative;
  bottom: 0.45rem;
  & > label {
    display: inline-block;
    width: 1.5rem;
    height: 1.7rem;
    font-size: 0.18rem;
    font-weight: 700;
    line-height: 0.22rem;
    padding: 0.34rem 0 0 0.5rem;
  }
  & > input {
    background-color: #fff;
    font-size: 0.18rem;
    font-weight: 400;
    line-height: 0.22rem;
    padding-left: 0.24rem;
    width: 3.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 1.49rem;
    top: 0.8rem;
    width: 0.01rem;
    background-color: #efeff1;
    width: 0.01rem;
    height: 0.24rem;
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
  top: 0.22rem;
  right: 0.24rem;
`;
export const chekcBtn = styled.button`
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
  right: 0.24rem;
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 0.14rem;
  line-height: 0.19rem;
  color: #ff003e;
  position: absolute;
  bottom: 4.3rem;
  left: 2rem;
`;
export const SearchBtn = styled.button`
  margin: 0.48rem 0 0 0;
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
export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
export const LoginBtn = styled.div`
  margin-top: 0.08rem;
  width: 5.92rem;
  border-radius: 1rem;
  width: 3.12rem;
  height: 0.8rem;
  background: #289951;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
