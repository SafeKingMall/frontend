import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  width: 64rem;
  height: 94.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
export const Top = styled.div`
  margin: 4.8rem 0 4.8rem 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #000000;
`;
export const InputContainer = styled.div`
  background-color: #fff;
  width: 59.2rem;
  height: 26.4rem;
  border: 1px solid #efeff1;
  /* border: 0.1rem solid #fff; */
  border-radius: 1rem;
  & > div:last-child {
    border-bottom: none;
  }
`;
export const InputWrapper = styled.div`
  /* background-color: mistyrose; */
  height: 8.8rem;
  border-bottom: 1px solid #efeff1;
  position: relative;
  & > label {
    /* background-color: thistle; */
    display: inline-block;
    width: 15rem;
    height: 17rem;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.2rem;
    padding: 3.4rem 0 0 3rem;
  }
  & > input {
    background-color: #fff;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.2rem;
    padding-left: 2.4rem;
    width: 32rem;
  }

  & > div {
    /* background-color: lavenderblush;
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
    left: 1.6rem; */
    position: absolute;
    top: 3.1rem;
    right: 10rem;
    font-size: 2.8rem;
    color: #a6a6a6;
  }
  & > p {
    position: absolute;
    top: 3.1rem;
    right: 3rem;
    font-size: 2.6rem;
    color: #a6a6a6;
  }
  &::before {
    content: '';
    position: absolute;
    left: 14.9rem;
    top: 3.4rem;
    width: 0.1rem;
    background-color: #efeff1;
    width: 0.1rem;
    height: 2.4rem;
  }
`;
export const PhoneBtn = styled.button`
  background-color: #fff;
  width: 13.5rem;
  height: 4rem;
  border: 0.1rem solid #289951;
  border-radius: 1rem;
  color: #289951;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  position: absolute;
  top: 2.5rem;
  right: 2.4rem;
  :disabled {
    border-color: #aaaaaa;
    color: #aaaaaa;
  }
`;
export const chekcBtn = styled.button`
  background-color: #fff;
  width: 7.6rem;
  height: 4rem;
  border: 0.1rem solid #a6a6a6;
  border-radius: 1rem;
  color: #a6a6a6;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  position: absolute;
  top: 2.5rem;
  right: 2.4rem;
  :disabled {
    border-color: #aaaaaa;
    color: #aaaaaa;
  }
`;
export const ErrMsg = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #ff003e;
  position: absolute;
  top: 6.4rem;
  left: 17.4rem;
`;
export const SearchBtn = styled.button`
  margin: 4.8rem 0 4.8rem 0;
  background-color: #289951;
  width: 312px;
  height: 80px;

  background: #289951;
  border-radius: 100px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  :disabled {
    background-color: #aaa;
  }
`;
export const Result = styled.div``;
export const TextWrapper = styled.div`
  width: 59rem;
  height: 22rem;
  background-color: #efeff1;
  border-radius: 1rem;
  & > div:first-child {
    padding-top: 4rem;
    margin-bottom: 4rem;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #000000;
  }
  & > div:nth-child(2) {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;

    color: #000000;
  }
`;
export const BtnWrapper = styled.div`
  margin-top: 4.8rem;
  /* margin-bottom: 12rem; */
  width: 59.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
    border-radius: 10rem;
    width: 28.4rem;
    height: 8rem;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3rem;
    :first-child {
      border: 0.1rem solid #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      color: #289951;
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
`;
