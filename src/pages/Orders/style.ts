import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const CheckArea = styled.div`
  width: 144rem;
  margin: 2.6rem 0 4.9rem 0;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
`;
export const CheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  accent-color: ${({ theme }) => theme.palette.green};
  width: 3.2rem;
  height: 3.2rem;
`;
export const CheckText = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  margin-left: 1.6rem;
`;
export const BtnArea = styled.div`
  width: 144rem;
  ${({ theme }) => theme.common.flexCenter};
  margin-bottom: 12rem;
`;
export const Btn = styled.button`
  width: 28rem;
  height: 8rem;
  border-radius: 10rem;
  font-size: 2.4rem;
  font-weight: 700;
`;
export const WhiteBtn = styled(Btn)`
  border: 0.2rem solid ${({ theme }) => theme.palette.green};
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.green};
  margin-right: 1.6rem;
`;
export const GreenBtn = styled(Btn)`
  background-color: ${({ theme }) => theme.palette.green};
  color: #ffffff;
`;
