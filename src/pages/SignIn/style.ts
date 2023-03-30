import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 0.85rem);
  position: relative;
  transition: height 0.2s ease-in;
  min-width: 100%;
`;
export const Wrapper = styled.div`
  margin-bottom: 0.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* position: relative; */
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  @media (max-width: 720px) {
    top: 30%;
    transform: translate(0, -30%);
    padding: 0 5%;
  }
`;

export const InputContainer = styled.div`
  /* margin-top: 1.54rem; */
  /* background-color: #eee; */
  width: 5.4rem;
  height: 1.42rem;
  @media (max-width: 720px) {
    width: 90%;
    height: 3rem;
  }
`;
export const IdInput = styled.div`
  height: 0.71rem;
  display: flex;
  @media (max-width: 720px) {
    /* width: 90%; */
    /* height: 1.5rem; */
  }
`;
export const InputLine = styled.div`
  height: 0.71rem;
  display: flex;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0.2rem;
    bottom: 0;
    width: 0.01rem;
    background-color: #cccccc;
    width: 5.01rem;
    height: 0.01rem;
  }
  @media (max-width: 720px) {
    /* width: 90%; */
    height: 1.5rem;
    &::after {
      width: 100%;
      height: 0.02rem;
    }
  }
`;
export const LabelWrap = styled.div`
  width: 1.41rem;
  height: 0.71rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.18rem;
  font-weight: 400;
  line-height: 0.22rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.01rem;
    background-color: #cccccc;
    width: 0.01rem;
    height: 0.24rem;
  }
  @media (max-width: 720px) {
    width: 30%;
    height: 100%;
    font-size: 0.56rem;
    &::after {
      width: 0.02rem;
      height: 50%;
    }
  }
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
  @media (max-width: 720px) {
    width: 70%;
    margin-left: 0;
    padding-left: 0.3rem;
  }
`;
export const InputForm = styled.input`
  border: none;
  width: 3.76rem;
  font-size: 0.2rem;
  height: 0.24rem;
  :focus {
    outline: none;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    font-size: 0.56rem;
  }
`;
export const SignText = styled.div`
  margin-top: 0.16rem;
  width: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
  }
`;
export const IdCheck = styled.div`
  /* margin-top: 40px; */
  display: flex;
  align-items: center;
  > label {
    display: flex;
    align-items: center;
    font-size: 0.2rem;
    line-height: 0.24rem;
    font-weight: 500;
  }
  @media (max-width: 720px) {
    width: 34%;
    height: 1.5rem;
    justify-content: center;
    > label {
      font-size: 0.56rem;
    }
  }
`;
export const IdCheckInput = styled.input`
  margin-right: 0.12rem;
  appearance: none;
  width: 0.26rem;
  height: 0.26rem;
  border: 0.01rem solid #cccccc;
  border-radius: 0.05rem;
  &:checked {
    background-color: #a9d6b9;
  }
  @media (max-width: 720px) {
    width: 0.56rem;
    height: 0.56rem;
  }
`;
export const Span = styled.div`
  font-weight: 400;
  font-size: 0.16rem;
  line-height: 0.19rem;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
export const SpanList = styled.span`
  cursor: pointer;
`;
export const SearchModal = styled.div`
  background-color: #fff;
  z-index: 10;
  position: fixed;
  top: 10%;
`;
export const BtnWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const Btn = styled.button`
  margin: 0.4rem 0 0.56rem;
  width: 5.4rem;
  height: 0.9rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 0.24rem;
  line-height: 0.29rem;
  font-weight: 400;
  background-color: #289951;
  /* opacity: 0.9; */
  color: #fff;
  @media (max-width: 720px) {
    margin-top: 0.3rem;
    margin-bottom: 0;
    width: 100%;
    height: 1.8rem;
    font-size: 0.56rem;
  }
`;
export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 1.04rem;
    /* right: -1.2rem; */
    width: 5.4rem;
    background-color: #333;
    height: 0.5px;
  }
`;
export const SocialBtn = styled.button`
  margin-right: 0.24rem;
  margin-bottom: 0.16rem;
  width: 2.58rem;
  height: 0.64rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: 500;
  background-color: #fff;
  box-shadow: 0rem 0.04rem 0.04rem rgba(0, 0, 0, 0.25);
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
