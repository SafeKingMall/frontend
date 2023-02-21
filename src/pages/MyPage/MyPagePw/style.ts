import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 14.4rem;
`;
export const Wrapper = styled.div`
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
export const BasicWrap = styled.div`
  /* background-color: mistyrose; */
  margin: 0 0 0.44rem 0;
  > div {
    margin-bottom: 0.16rem;
    /* background-color: pink; */
    position: relative;
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
  > div:nth-child(4) {
    margin-bottom: 0.44rem;
  }
  > button {
    margin: 0 auto;
  }
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
export const MyBtn = styled.button`
  width: 130px;
  height: 56px;
  background-color: #289951;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  :disabled {
    background-color: #aaaaaa;
  }
  /* position: relative;
  left: 670px; */
`;
