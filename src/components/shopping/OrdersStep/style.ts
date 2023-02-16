import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const StepContainer = styled.div`
  width: 144rem;
  height: 38.9rem;
  margin-top: 14.8rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  ${({ theme }) => theme.common.flexCenter};
  position: relative;
  flex-direction: column;
`;
export const StepTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.txt};
  position: absolute;
  top: 0;
`;
export const StepIconContainer = styled.div`
  width: 54.4rem;
  height: 11.2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;
export const StepIconLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.palette.green};
  position: absolute;
  z-index: 0;
`;
export const StepIconBox = styled.div`
  width: 11.2rem;
  height: 100%;
  border-radius: 11.2rem;
  border: 0.2rem solid ${({ theme }) => theme.palette.green};
  background-color: #ffffff;
  z-index: 1;
  ${({ theme }) => theme.common.flexCenter};
`;
export const StepTextContainer = styled.div`
  width: 54.4rem;
  height: 2.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StepText = styled.div`
  width: 11.2rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.palette.txt};
  font-weight: 400;
`;
