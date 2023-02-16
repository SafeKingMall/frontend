import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  margin-bottom: 6rem;
  /* background-color: pink; */
  width: 100%;
  /* height: 900px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const InputContainer = styled.div`
  margin-top: 15.4rem;
  /* background-color: #eee; */
  width: 54rem;
  height: 14.2rem;
`;
export const IdInput = styled.div`
  height: 7.1rem;
  display: flex;
`;
export const InputLine = styled.div`
  height: 7.1rem;
  display: flex;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 2rem;
    bottom: 0;
    width: 0.1rem;
    background-color: #efeff1;
    width: 50.1rem;
    height: 0.1rem;
  }
`;
export const LabelWrap = styled.div`
  width: 14.1rem;
  height: 7.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.2rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.1rem;
    background-color: #efeff1;
    width: 0.1rem;
    height: 2.4rem;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
export const InputForm = styled.input`
  border: none;
  width: 37.6rem;
  font-size: 2rem;
  height: 2.4rem;
  :focus {
    outline: none;
  }
`;
export const SignText = styled.div`
  margin-top: 1.6rem;
  width: 50rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IdCheck = styled.div`
  /* margin-top: 40px; */
  display: flex;
  align-items: center;
  > label {
    display: flex;
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 500;
  }
`;
export const IdCheckInput = styled.input`
  margin-right: 1.2rem;
  appearance: none;
  width: 2.6rem;
  height: 2.6rem;
  border: 0.1rem solid #efeff1;
  border-radius: 0.5rem;
  &:checked {
    background-color: #a9d6b9;
  }
`;
export const Span = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SpanList = styled.span`
  cursor: pointer;
`;
export const SearchModal = styled.div`
  background-color: #fff;
  z-index: 10;
  position: fixed;
  top: 10%;
`;
export const Btn = styled.button`
  margin: 4rem 0 5.6rem;
  width: 54rem;
  height: 9rem;
  border-radius: 8rem;
  cursor: pointer;
  font-size: 2.4rem;
  line-height: 2.9rem;
  font-weight: 400;
  background-color: #289951;
  /* opacity: 0.9; */
  color: #fff;
`;
export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 10.4rem;
    /* right: -1.2rem; */
    width: 54rem;
    background-color: #333;
    height: 0.5px;
  }
`;
export const SocialBtn = styled.button`
  margin-right: 2.4rem;
  margin-bottom: 1.6rem;
  width: 25.8rem;
  height: 6.4rem;
  border-radius: 8rem;
  cursor: pointer;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 500;
  background-color: #fff;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
