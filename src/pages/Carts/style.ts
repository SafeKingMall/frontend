import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const BtnContainer = styled.div`
  /* ${({ theme }) => theme.common.flexCenter}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8.8rem;
  height: 0.8rem;
  margin-top: 0.48rem;
  margin-bottom: 1.6rem;
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    padding: 0 5%;
  }
`;
export const Btn = styled.button`
  width: 2.8rem;
  height: 100%;
  border-radius: 1rem;
  font-size: 0.24rem;
  font-weight: 700;
  @media (max-width: 720px) {
    width: 32%;
    height: 1.3rem;
    font-size: 0.48rem;
  }
`;
export const WhiteBtn = styled(Btn)`
  border: 0.02rem solid ${({ theme }) => theme.palette.green};
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.green};
`;
export const GreenBtn = styled(Btn)`
  background-color: ${({ theme }) => theme.palette.green};
  color: #ffffff;
`;
