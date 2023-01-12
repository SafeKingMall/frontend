import styled from 'styled-components';

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.palette.green};
  height: 47rem;
  position: relative;
  font-size: 10rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 71.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const QnApwInput = styled.input`
  justify-content: center;
  width: 46rem;
  height: 6.4rem;
  margin-bottom: 7.2rem;
  font-size: 2.4rem;
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const PwBox = styled.div`
  position: absolute;
  width: 144rem;
  height: 30rem;
  magin-top: 14.8rem;
  display: grid;
  justify-content: center;
  font-size: 2.4rem;
  text-align: center;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  div {
    margin-top: 7.2rem;
    margin-bottom: 7.2rem;
  }
`;

export const QnABox = styled.div`
  margin-top: 65rem;
  margin-bottom: 16rem;
`;

export const QnAButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 1.6rem;
  width: 12.8rem;
  height: 5.6rem;
  align-items: center;
  margin-right: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 1.6rem;
  width: 12.8rem;
  height: 5.6rem;
  align-items: center;
`;
