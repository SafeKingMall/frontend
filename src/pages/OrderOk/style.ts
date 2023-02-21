import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const OrderInfoWrap = styled.div`
  width: 14.4rem;
  padding-bottom: 0.64rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  margin-bottom: 0.48rem;
`;
export const IconArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 0.8rem;
  margin-top: 0.64rem;
  position: relative;
`;
export const IconUnderLine = styled.div`
  width: 2.01rem;
  height: 0.01rem;
  background-color: #000000;
  position: absolute;
  bottom: 0.04rem;
`;
export const TextArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  flex-direction: column;
  margin-top: 0.64rem;
`;
export const Text = styled.span`
  font-size: 0.24rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  margin-bottom: 0.05rem;
`;
export const GreenText = styled(Text)`
  color: ${({ theme }) => theme.palette.green};
`;
export const BtnArea = styled.div`
  width: 14.4rem;
  ${({ theme }) => theme.common.flexCenter};
  margin-bottom: 1.2rem;
`;
export const Btn = styled.button`
  width: 2.8rem;
  height: 0.8rem;
  border-radius: 1rem;
  font-size: 0.24rem;
  font-weight: 700;
`;
export const WhiteBtn = styled(Btn)`
  border: 0.02rem solid ${({ theme }) => theme.palette.green};
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.green};
  margin-right: 0.16rem;
`;
export const GreenBtn = styled(Btn)`
  background-color: ${({ theme }) => theme.palette.green};
  color: #ffffff;
`;
