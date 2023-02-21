import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 14.4rem;
`;
export const Wrapper = styled.div`
  width: 7.9rem;
  /* background-color: #f7f7f7; */
  width: 10.56rem;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
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
    margin-bottom: 0.16rem;
    background-color: #fff;
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
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
      padding: 0.2rem 0.4rem;
    }
  }
`;
export const AreaWrap = styled.div`
  margin: 0 0 0.44rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Mid = styled.div`
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
export const InputWrapper = styled.div`
  background-color: #efeff1 !important;
  width: 1056px;
  height: 227px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    margin-bottom: 0.16rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > label {
      /* display: inline-block; */
      margin-right: 0.4rem;
      text-align: center;
      width: 1.86rem;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
    }
    > input {
      width: 7.36rem;
      height: 0.64rem;
      border: 0.01rem solid #efeff1;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 0.24rem;
      padding: 0.2rem 0.4rem;
    }
  }
  > div:nth-child(3) {
    margin-bottom: 0;
  }
`;
export const ErrInfo = styled.div`
  margin: 0 0 0 -1.6rem;
  font-size: 0.14rem;
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
  top: 0.44rem;
  left: 2.98rem;
`;

export const Btn = styled.button`
  margin: 0.44rem 0 0 0;
  background-color: #289951;
  width: 1.3rem;
  height: 0.56rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  :disabled {
    background-color: #aaa;
  }
`;
