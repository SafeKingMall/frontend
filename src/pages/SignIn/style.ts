import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  /* background-color: pink; */
  width: 1298px;
  height: 900px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Logo = styled.div`
  background-color: pink;
  width: 268px;
  height: 130px;
  margin: 72px 0 72px;
`;
export const InputContainer = styled.div`
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
    background-color: #ccc;
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
    background-color: #ccc;
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
  margin-top: 40px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IdCheck = styled.div`
  /* margin-top: 40px; */
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
`;
export const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SpanList = styled.span`
  cursor: pointer;
`;
export const Btn = styled.button`
  margin: 40px 0 72px;
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
  flex-direction: column;
`;
export const SocialBtn = styled.button`
  margin-bottom: 16px;
  width: 541px;
  height: 64px;
  border-radius: 80px;
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
