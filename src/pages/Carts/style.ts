import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
`;
export const BtnContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 0.8rem;
  margin-top: 0.48rem;
  margin-bottom: 1.6rem;
`;
export const Btn = styled.button`
  width: 2.8rem;
  height: 100%;
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
