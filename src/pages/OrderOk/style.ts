import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
`;
export const OrderInfoWrap = styled.div`
  width: 144rem;
  padding-bottom: 6.4rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  margin-bottom: 4.8rem;
`;
export const IconArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 8rem;
  margin-top: 6.4rem;
  position: relative;
`;
export const IconUnderLine = styled.div`
  width: 20.1rem;
  height: 0.1rem;
  background-color: #000000;
  position: absolute;
  bottom: 0.4rem;
`;
export const TextArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  flex-direction: column;
  margin-top: 6.4rem;
`;
export const Text = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  margin-bottom: 0.5rem;
`;
export const GreenText = styled(Text)`
  color: ${({ theme }) => theme.palette.green};
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
