import styled from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 129.8rem;
  height: 109.6rem;
`;
export const Top = styled.div`
  margin: 5.6rem 0 0;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
`;
export const Mid = styled.div`
  margin: 7.2rem 0 2.8rem;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
`;
export const InputContainer = styled.div`
  background-color: mistyrose;
  width: 69.3rem;
  height: 68rem;
  border-radius: 1rem;
`;
export const InputWrapper = styled.div`
  /* background-color: mistyrose; */
  height: 17rem;

  position: relative;
  & > label {
    /* background-color: thistle; */
    display: inline-block;
    width: 15rem;
    height: 17rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    padding: 3.4rem 0 0 3rem;
  }
  & > input {
    background-color: mistyrose;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    padding-left: 3.4rem;
    width: 32rem;
  }
  & > button {
    background-color: lightpink;
    width: 10rem;
    height: 4.2rem;
    border-radius: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;
    position: absolute;
    top: 2.6rem;
    right: 2.8rem;
  }
  & > div {
    background-color: lavenderblush;
    width: 66rem;
    height: 5.8rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 3.2rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    position: absolute;
    bottom: 2rem;
    left: 1.6rem;
  }
  &::before {
    content: '';
    position: absolute;
    left: 14.9rem;
    top: 3.4rem;
    width: 0.1rem;
    background-color: pink;
    width: 0.1rem;
    height: 2.4rem;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.1rem;
    background-color: pink;
    width: 69.3rem;
    height: 0.1rem;
  }
`;
export const BtnWrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
`;
export const Btn = styled.button`
  background-color: #fff;
  border: 0.1rem solid #000;
  border-radius: 10rem;
  width: 33.6rem;
  height: 8.8rem;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
`;
