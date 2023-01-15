import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  margin-bottom: 60px;
  /* background-color: pink; */
  width: 1298px;
  /* height: 900px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Logo = styled.div`
  background-color: pink;
  width: 268px;
  height: 130px;
  margin: 72px 0 72px;
`;
export const InputContainer = styled.div`
  margin-top: 104px;
  /* background-color: #eee; */
  width: 540px;
  height: 142px;
`;
export const IdInput = styled.div`
  height: 71px;
  display: flex;
`;
export const InputLine = styled.div`
  height: 71px;
  display: flex;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 20px;
    bottom: 0;
    width: 1px;
    background-color: #efeff1;
    width: 501px;
    height: 1px;
  }
`;
export const LabelWrap = styled.div`
  width: 141px;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    background-color: #efeff1;
    width: 1px;
    height: 24px;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
export const InputForm = styled.input`
  border: none;
  width: 376px;
  height: 24px;
  :focus {
    outline: none;
  }
`;
export const SignText = styled.div`
  margin-top: 16px;
  width: 500px;
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
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
  }
`;
export const IdCheckInput = styled.input`
  margin-right: 12px;
  appearance: none;
  width: 26px;
  height: 26px;
  border: 1px solid #efeff1;
  border-radius: 5px;
  &:checked {
    background-color: #a9d6b9;
  }
`;
export const Span = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SpanList = styled.span`
  cursor: pointer;
`;
export const Btn = styled.button`
  margin: 40px 0 56px;
  width: 540px;
  height: 90px;
  border-radius: 80px;
  cursor: pointer;
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
  background-color: #289951;
  opacity: 0.9;
  color: #fff;
`;
export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 104px;
    /* right: -12px; */
    width: 540px;
    background-color: #333;
    height: 0.5px;
  }
`;
export const SocialBtn = styled.button`
  margin-right: 24px;
  margin-bottom: 16px;
  width: 258px;
  height: 64px;
  border-radius: 80px;
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
