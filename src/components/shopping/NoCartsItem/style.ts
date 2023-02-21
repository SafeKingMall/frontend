import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin-top: 1.48rem;
  margin-bottom: 0.72rem;
  font-size: 0.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.txt};
`;
export const ListContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 14.4rem;
  height: 2.37rem;
  border-top: 0.02rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  margin-bottom: 0.48rem;
`;
export const GreenBtn = styled.button`
  width: 2.8rem;
  height: 0.8rem;
  border-radius: 1rem;
  font-size: 0.24rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.palette.green};
  color: #ffffff;
  margin-bottom: 1.2rem;
`;
