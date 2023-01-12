import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  background-color: #f7f7f7;
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
  background-color: mistyrose;
  > div {
    margin-bottom: 1.6rem;
    background-color: pink;
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
export const Btn = styled.button`
  width: 12.8rem;
  height: 5.6rem;
  border: 0.1rem solid #289951;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #289951;
`;

export const BtnWrap = styled.div`
  margin-top: 8.8rem;
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
  }
`;
