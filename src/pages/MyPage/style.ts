import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 144rem;
`;
export const Wrapper = styled.div`
  /* background-color: #f7f7f7; */
  margin: 0 0 0 2rem;
  width: 105.6rem;

  display: flex;
  flex-direction: column;
  > div:nth-child(3) {
    margin: 10rem 0 0 0;
  }
`;
export const Top = styled.div`
  margin: 10rem 0 8.8rem 0;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.8rem;
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
      width: 25.6rem;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
    }
    > input {
      width: 73.6rem;
      height: 6.4rem;
      border: 0.1rem solid #efeff1;
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.4rem;
      padding: 2rem 4rem;
    }
  }
  > div:nth-child(6) {
    /* background-color: lavenderblush !important; */
    > input {
      width: 54.5rem;
    }
    > button {
      margin: 0 0 0 0.8rem;
      background-color: #289951;
      width: 183px;
      height: 64px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;

      color: #ffffff;
    }
  }
`;
export const Mid = styled.h1`
  margin-bottom: 4rem;
  width: 105.6rem;
  padding-left: 2rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 4rem;
    background-color: #212121;
    width: 105.6rem;
    height: 0.1rem;
  }
`;
export const MemberWrap = styled.div`
  background-color: peachpuff;
`;
export const BtnWrap = styled.div`
  margin: 4.4rem 0 4.4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button:first-child {
    margin-right: 1rem;
    width: 12.8rem;
    height: 5.6rem;
    border: 0.1rem solid #289951;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #289951;
  }
  button:last-child {
    width: 12.8rem;
    height: 5.6rem;
    background: #289951;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #ffffff;
    :disabled {
      background-color: #aaaaaa;
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
export const InputWrap = styled.div`
  height: 9rem;
  position: relative;
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ff003e;
  position: absolute;
  bottom: 0.4rem;
  left: 25.6rem;
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
