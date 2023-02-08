import styled from 'styled-components';

export const Banner = styled.div`
  font-weight: 900;
  background-image: url('/img/qnaBanner.png');
  background-size: 100% 100%;
  height: 47rem;
  font-size: 4rem;
  /* margin-bottom: 7.8rem; */
  text-align: center;
  padding-top: 23rem;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: relative; */
`;

export const QnApwInput = styled.input`
  justify-content: center;
  width: 46rem;
  height: 6.4rem;
  margin-top: 4.8rem;
  margin-bottom: 7.2rem;
  font-size: 2.4rem;
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const PwBox = styled.div`
  /* position: absolute; */
  width: 144rem;
  /* height: 30rem; */
  display: grid;
  justify-content: center;
  font-size: 2.4rem;
  text-align: center;
  margin-top: 17.8rem;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Ladius = styled.div`
  border-radius: 50%;
  background-color: #a9d6b9;
  width: 14.8rem;
  height: 14.8rem;
  margin-top: 7.2rem;
  margin-bottom: 4.8rem;
  margin-left: 15rem;

  svg {
    margin-top: 2rem;
  }
`;

export const QnABox = styled.div`
  margin-top: 4.8rem;
  margin-bottom: 12rem;
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
