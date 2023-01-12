import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  width: 86.6rem;
  height: 128.8rem;
  margin-left: 2rem;
`;
export const Wrapper = styled.div`
  width: 79rem;
  position: relative;
`;
export const Top = styled.div`
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 3.9rem;
  border-bottom: 0.1rem solid #000;
  margin-bottom: 2.4rem;
  padding: 3.2rem 0 1.4rem 0;
`;
export const Area1 = styled.div`
  background-color: pink;
  width: 79rem;
  height: 49.4rem;
`;
export const Mid = styled.div`
  margin: 3rem 0 1.2rem;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 2.9rem;
`;
export const Area2 = styled.div`
  background-color: pink;
  width: 79rem;
  height: 17.6rem;
`;
export const Wrapper3 = styled.div`
  margin: 0 0 5rem;
  & > input {
    width: 79rem;
    height: 4.8rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
    padding: 0 0 0 2.2rem;
  }
`;
export const InputWrap = styled.div`
  margin: 1.4rem 0 0;
  display: flex;
  justify-content: space-between;
  height: 4.8rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.4rem;
  & > div {
    background-color: mistyrose;
    display: flex;
    align-items: center;
  }
  & > input {
    background-color: plum;
    width: 62.6rem;
    padding: 0 0 0 1.2rem;
    ::placeholder {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.4rem;
    }
  }
`;
export const ErrMsg = styled.div`
  margin: 1rem 0 0 16.6rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: #d91f1f;
`;
export const Btn = styled.button`
  margin: 3.4rem 0 0;
  width: 13rem;
  height: 5.6rem;
  background-color: #d9d9d9;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.4rem;
  position: absolute;
  right: 0;
`;
