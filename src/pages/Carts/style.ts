import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const BtnContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 8rem;
  margin-top: 4.8rem;
  margin-bottom: 16rem;
`;
export const Btn = styled.button`
  width: 28rem;
  height: 100%;
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
