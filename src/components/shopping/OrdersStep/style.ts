import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const StepContainer = styled.div`
  width: 14.4rem;
  height: 3.89rem;
  margin-top: 1.48rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  ${({ theme }) => theme.common.flexCenter};
  position: relative;
  flex-direction: column;
`;
export const StepTitle = styled.h1`
  font-size: 0.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.txt};
  position: absolute;
  top: 0;
`;
export const StepIconContainer = styled.div`
  width: 5.44rem;
  height: 1.12rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.24rem;
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
`;
export const StepTextContainer = styled.div`
  width: 5.44rem;
  height: 0.29rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StepText = styled.div`
  width: 1.12rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  font-size: 0.24rem;
  color: ${({ theme }) => theme.palette.txt};
  font-weight: 400;
`;
