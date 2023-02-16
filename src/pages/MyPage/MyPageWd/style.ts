import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 144rem;
`;
export const Wrapper = styled.div`
  width: 79rem;
  /* background-color: #f7f7f7; */
  width: 105.6rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
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
    margin-bottom: 1.6rem;
    background-color: #fff;
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
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
      padding: 2rem 4rem;
    }
  }
`;
export const AreaWrap = styled.div`
  margin: 0 0 4.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Mid = styled.div`
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
export const InputWrapper = styled.div`
  background-color: #efeff1 !important;
  width: 1056px;
  height: 227px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    margin-bottom: 1.6rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > label {
      /* display: inline-block; */
      margin-right: 4rem;
      text-align: center;
      width: 18.6rem;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
    }
    > input {
      width: 73.6rem;
      height: 6.4rem;
      border: 0.1rem solid #efeff1;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.4rem;
      padding: 2rem 4rem;
    }
  }
  > div:nth-child(3) {
    margin-bottom: 0;
  }
`;
export const ErrInfo = styled.div`
  margin: 0 0 0 -16rem;
  font-size: 1.4rem;
  font-weight: 400;
  /* font-size: 16px; */
  /* line-height: 19px; */
  color: #d20000;
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ff003e;
  position: absolute;
  top: 4.4rem;
  left: 29.8rem;
`;

export const Btn = styled.button`
  margin: 4.4rem 0 0 0;
  background-color: #289951;
  width: 13rem;
  height: 5.6rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  :disabled {
    background-color: #aaa;
  }
`;
