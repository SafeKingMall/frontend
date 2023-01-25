import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
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
export const BasicWrap = styled.div`
  /* background-color: mistyrose; */
  margin: 0 0 4.4rem 0;
  > div {
    margin-bottom: 1.6rem;
    /* background-color: pink; */
    position: relative;
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
  > div:nth-child(4) {
    margin-bottom: 4.4rem;
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
  top: 4.4rem;
  left: 29.8rem;
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
