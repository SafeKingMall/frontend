import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin-top: 14.8rem;
  margin-bottom: 7.2rem;
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.txt};
`;
export const ListContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 144rem;
  height: 23.7rem;
  border-top: 0.2rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  font-size: 2.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  margin-bottom: 4.8rem;
`;
export const WhiteBtn = styled.button`
  width: 28rem;
  height: 8rem;
  border-radius: 10rem;
  font-size: 2.4rem;
  font-weight: 700;
  border: 0.2rem solid ${({ theme }) => theme.palette.green};
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.green};
`;
