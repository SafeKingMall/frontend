import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  /* background-color: pink; */
  width: 1298px;
  height: 805px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const InputContainer = styled.div`
  background-color: #eee;
  width: 540px;
  height: 142px;
`;
export const IdInput = styled.div`
  height: 71px;
  display: flex;
`;
export const PwInput = styled.div`
  height: 71px;
  display: flex;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 20px;
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
  background-color: #eee;
  border: none;
  width: 376px;
  height: 24px;
  :focus {
    outline: none;
  }
`;
export const IdCheck = styled.div`
  margin-top: 40px;
`;
export const Btn = styled.button`
  margin-top: 40px;
  width: 543px;
  height: 90px;
  border-radius: 80px;
  cursor: pointer;
  font-size: 24px;
  line-height: 29px;
  font-weight: 400;
`;
export const Span = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
`;
export const SpanList = styled.span`
  cursor: pointer;
`;
export const Social = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SocialList = styled.button`
  width: 541px;
  height: 64px;
  border-radius: 80px;
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`;
