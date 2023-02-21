import styled from 'styled-components';

export const Banner = styled.div`
  font-weight: 900;
  background-image: url('/img/QnABannerImg.png');
  background-size: 100% 100%;
  height: 4.7rem;
  font-size: 0.4rem;
  /* margin-bottom: 7.8rem; */
  text-align: center;
  padding-top: 2.3rem;
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
  width: 4.6rem;
  height: 0.64rem;
  margin-top: 0.48rem;
  margin-bottom: 0.72rem;
  font-size: 0.24rem;
  padding: 0.1rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const PwBox = styled.div`
  /* position: absolute; */
  width: 14.4rem;
  /* height: 30rem; */
  display: grid;
  justify-content: center;
  font-size: 0.24rem;
  text-align: center;
  margin-top: 1.78rem;
  border-top: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Ladius = styled.div`
  border-radius: 50%;
  background-color: #a9d6b9;
  width: 1.48rem;
  height: 1.48rem;
  margin-top: 0.72rem;
  margin-bottom: 0.48rem;
  margin-left: 1.5rem;

  svg {
    margin-top: 0.2rem;
  }
`;

export const QnABox = styled.div`
  margin-top: 0.48rem;
  margin-bottom: 1.2rem;
`;

export const QnAButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
  margin-right: 0.08rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
`;
