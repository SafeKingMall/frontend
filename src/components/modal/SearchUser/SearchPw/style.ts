import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 6.4rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 720px) {
    width: 100%;
    height: 100%;
  }
`;
export const Top = styled.div`
  margin: 0.48rem 0 0.48rem 0;
  font-weight: 400;
  font-size: 0.2rem;
  text-align: center;
  color: #000000;
  @media screen and (max-width: 720px) {
    width: 100%;
    font-size: 0.4rem;
    height: 100%;
  }
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
  @media screen and (max-width: 720px) {
    width: 32vw;
    height: 32vw;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export const InputContainer = styled.div`
  background-color: #fff;
  width: 5.92rem;
  height: 0.94rem;
  border: 0.01rem solid #efeff1;
  /* border: 0.1rem solid #fff; */
  border-radius: 0.1rem;
  @media screen and (max-width: 720px) {
    width: 90%;
    height: 13vw;
  }
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
  @media screen and (max-width: 720px) {
    height: 10vw;
    bottom: 0;
    top: 0.3vh;
  }
  & > label {
    display: inline-block;
    width: 1.5rem;
    height: 1.7rem;
    font-size: 0.18rem;
    font-weight: 700;
    line-height: 0.22rem;
    padding: 0.34rem 0 0 0.5rem;
    @media screen and (max-width: 720px) {
      width: 23%;
      height: 10vw;
      font-size: 0.5rem;
    }
  }
  & > input {
    background-color: #fff;
    font-size: 0.18rem;
    font-weight: 400;
    /* line-height: 0.22rem; */
    padding-left: 0.24rem;
    width: 70%;
    height: 95%;
    @media screen and (max-width: 720px) {
      font-size: 0.4rem;
    }
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
    @media screen and (max-width: 720px) {
      display: none;
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
  color: #ff003e;
  position: absolute;
  bottom: 4.3rem;
  left: 2rem;
  @media screen and (max-width: 720px) {
    font-size: 0.35rem;
    bottom: 35.7%;
    left: 28%;
  }
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
  color: #ffffff;
  :disabled {
    background-color: #aaa;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    width: 75%;
    height: 10vw;
    margin: 14% 0 3% 0;
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
    text-align: center;

    color: #000000;
  }
  & > div:nth-child(2) {
    font-weight: 400;
    font-size: 0.16rem;
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
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    width: 75%;
    height: 10vw;
  }
`;
