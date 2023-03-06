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
  @media (max-width: 720px) {
    margin-top: 0;
    margin-bottom: 0rem;
    height: 1.6rem;
    font-size: 0.72rem;
    ${({ theme }) => theme.common.flexCenter}
  }
`;
export const Group = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  flex-direction: column;
  @media (max-width: 720px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
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
  @media (max-width: 720px) {
    width: 100%;
    height: 7rem;
    font-size: 0.64rem;
    margin-bottom: 2rem;
  }
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
  @media (max-width: 720px) {
    width: 40%;
    height: 1.5rem;
    font-size: 0.48rem;
  }
`;
