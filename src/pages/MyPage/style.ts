import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 14.4rem;
`;
export const Wrapper = styled.div`
  /* background-color: #f7f7f7; */
  margin: 0 0 0 0.2rem;
  width: 10.56rem;

  display: flex;
  flex-direction: column;
  > div:nth-child(3) {
    margin: 1rem 0 0 0;
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
`;
export const BasicWrap = styled.div`
  /* background-color: mistyrose; */
  > div {
    /* margin-bottom: 1.6rem; */
    /* background-color: pink; */
    > label {
      display: inline-block;
      text-align: center;
      width: 2.56rem;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
    }
    > input {
      width: 7.36rem;
      height: 0.64rem;
      border: 0.01rem solid #efeff1;
      font-weight: 400;
      font-size: 0.2rem;
      line-height: 0.24rem;
      padding: 0.2rem 0.4rem;
    }
  }
  > div:nth-child(6) {
    /* background-color: lavenderblush !important; */
    > input {
      width: 5.45rem;
    }
    > button {
      margin: 0 0 0 0.08rem;
      background-color: #289951;
      width: 1.83rem;
      height: 0.64rem;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;

      color: #ffffff;
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
`;
export const MemberWrap = styled.div`
  background-color: peachpuff;
`;
export const BtnWrap = styled.div`
  margin: 0.44rem 0 0.44rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button:first-child {
    margin-right: 0.1rem;
    width: 1.28rem;
    height: 0.56rem;
    border: 0.01rem solid #289951;
    font-weight: 500;
    font-size: 0.16rem;
    line-height: 0.19rem;
    color: #289951;
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
export const InputWrap = styled.div`
  height: 0.9rem;
  position: relative;
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 0.16rem;
  line-height: 0.19rem;
  color: #ff003e;
  position: absolute;
  bottom: 0.04rem;
  left: 2.56rem;
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
