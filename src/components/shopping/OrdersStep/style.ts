import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 14.4rem;
  height: 100%;
  padding-bottom: 1.04rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.green};
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
    height: 1.6rem;
    padding-bottom: 0;
  }
`;
export const StepContainer = styled.div`
  width: 14.4rem;
  height: 100%;
  margin-top: 1.48rem;
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
    margin-top: 0;
  }
`;
export const StepTitle = styled.h1`
  font-size: 0.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.txt};
  margin-bottom: 0.72rem;
  /* position: absolute;
  top: 0; */
  @media (max-width: 720px) {
    font-size: 0.72rem;
    margin-bottom: 0;
  }
`;
export const StepIconContainer = styled.div`
  width: 5.44rem;
  height: 1.12rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.24rem;
  @media (max-width: 720px) {
    width: 9rem;
    height: 2.24rem;
    display: none;
  }
`;
export const StepIconLine = styled.div`
  width: 100%;
  height: 0.01rem;
  background-color: ${({ theme }) => theme.palette.green};
  position: absolute;
  z-index: 0;
`;
export const StepIconBox = styled.div`
  width: 1.12rem;
  height: 100%;
  border-radius: 1.12rem;
  border: 0.02rem solid ${({ theme }) => theme.palette.green};
  background-color: #ffffff;
  z-index: 1;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    width: 2.24rem;
  }
`;
export const StepTextContainer = styled.div`
  width: 5.44rem;
  height: 0.29rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 720px) {
    width: 9rem;
    display: none;
  }
`;
export const StepText = styled.div`
  width: 1.12rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  font-size: 0.24rem;
  color: ${({ theme }) => theme.palette.txt};
  font-weight: 400;
  @media (max-width: 720px) {
    width: 2.24rem;
  }
`;
