import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* margin-left: 60rem; */
  min-width: 14.4rem;
  @media screen and (max-width: 400px) {
    min-width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 10.56rem;
  margin-left: 0.2rem;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    margin-left: 0;
    width: 100vw;
  }
`;

export const Top = styled.div`
  margin: 1rem 0 0.88rem 4rem;
  font-weight: 700;
  font-size: 0.4rem;
  line-height: 0.48rem;
  display: flex;
  text-align: center;
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    font-weight: 900;
    margin: 4% 0 4% 35%;
  }
`;
export const Mid = styled.div`
  margin-bottom: 0.15rem;
  width: 10.56rem;
  padding-left: 0.2rem;
  padding-bottom: 0.1rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  position: relative;
  border-bottom: 0.01rem solid #212121;
  @media screen and (max-width: 400px) {
    width: 100vw;
    padding: 3%;
    border-bottom: 0 solid #212121;
    border-top: 0.3vh solid ${({ theme }) => theme.palette.green};
    border-bottom: 0.1vh solid ${({ theme }) => theme.palette.lightgray};
    text-align: left;
    font-size: 0.45rem;
    margin-bottom: 0;
  }
`;

export const Section1Wrap = styled.div`
  margin: 0 0 0.44rem 0;
  > div:first-child {
    display: flex;
    justify-content: right;
    @media screen and (max-width: 400px) {
      display: flow-root;
      border-bottom: 0.5vh solid ${({ theme }) => theme.palette.lightgray};
    }
  }
`;

export const Section1Top = styled.div`
  margin: 0.16rem 0rem;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  & > div:first-child {
    margin: 0 0.38rem 0 0;
    @media screen and (max-width: 400px) {
      margin: 0;
    }
  }
  > div {
    display: flex;
    font-size: 0.2rem;
    @media screen and (max-width: 400px) {
      font-size: 0.3rem;
      padding: 0 3%;
    }
  }
  @media screen and (max-width: 400px) {
    margin: 0;
  }
`;
export const Section2Wrapper = styled.div`
  margin: 0 0 0.44rem 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
  & > div:first-child {
    width: 5.28rem;
  }
`;

export const Table = styled.table`
  width: 10.56rem;
  font-size: 0.2rem;
  border-collapse: collapse;
  margin-bottom: 0.4rem;

  th {
    height: 0.71rem;
    background-color: #d4ebdc;
    width: 1.66rem;
    font-weight: normal;
    @media screen and (max-width: 400px) {
      background-color: white;
      font-weight: 700;
      text-align: left;
      padding: 2%;
    }
  }
  td {
    width: 3.62rem;
  }

  td,
  tr {
    height: 0.71rem;
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    padding: 0.2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.43rem;
    width: 95vw;
    margin-left: 4.9%;
    border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-right: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  }
`;

export const OrderH2 = styled.h2`
  font-size: 0.24rem;
  padding-bottom: 0.24rem;
  margin-left: 0.24rem;
  margin-top: 0.4rem;
  width: 10.56rem;
  @media screen and (max-width: 400px) {
    background-color: ${({ theme }) => theme.palette.green};
    font-size: 0.45rem;
    color: white;
    width: 95vw;
    padding: 4%;
    border-radius: 3vw 3vw 0 0;
    font-weight: 400;
    margin-top: 0;
  }
`;

export const OrderDiv = styled.div`
  width: 10.56rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.txt};
  @media screen and (max-width: 400px) {
    border-bottom: 0 solid ${({ theme }) => theme.palette.txt};
  }
`;

export const Table2 = styled.table`
  width: 10.56rem;
  font-size: 0.2rem;
  border-collapse: collapse;
  text-align: center;

  td,
  tr {
    height: 0.71rem;
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child,
    &:nth-child(2) {
      border-left: 0.01rem solid white;
    }
    border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child {
      height: 0.64rem;
    }
    padding: 0.05rem 0rem;
  }

  tr {
    &:first-child {
      background-color: #d4ebdc;
      td {
        &:nth-child(2) {
          width: 1rem;
          border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
        }
        &:nth-child(3) {
          width: 1rem;
        }
        &:nth-child(4) {
          width: 1rem;
        }
        &:nth-child(5) {
          width: 0.8rem;
        }
        &:nth-child(6) {
          width: 0.8rem;
        }
        &:nth-child(7) {
          width: 0.8rem;
        }
      }
    }
    td {
      &:last-child {
        width: 2rem;
      }
    }
  }
`;

export const Mobail = styled.div`
  @media screen and (max-width: 400px) {
    width: 100vw;
    cursor: default;
    margin-left: 2.5%;
    > ul {
      border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
      border-radius: 3vw 3vw 0 0;
      margin: 2% 0;
    }
    div {
      &:nth-child(1) {
        display: flex;
        justify-content: space-between;
        background-color: ${({ theme }) => theme.palette.green};
        font-size: 0.43rem;
        color: white;
        width: 95vw;
        padding: 3%;
        border-radius: 3vw 3vw 0 0;
      }
      &:nth-child(2) {
        display: flex;
        width: 95vw;
        text-align: left;
        padding: 2%;
        ul {
          padding: 3% 4%;

          p {
            padding-bottom: 2%;
            font-size: 0.45rem;
            &:nth-child(1) {
              font-weight: 700;
            }
          }
        }
      }
      &:nth-child(3) {
        width: 95vw;
        background-color: ${({ theme }) => theme.palette.lightgray};
        text-align: left;
        font-size: 0.43rem;
        padding: 2%;
        font-weight: 800;
      }
      &:nth-child(4) {
        width: 95vw;
        padding: 2% 0 2% 2%;
        font-size: 0.43rem;
        display: flex;
        border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
        p:first-child {
          font-weight: 600;
          width: 20vw;
        }
      }
      &:nth-child(5) {
        padding: 2% 0 2% 2%;
        font-size: 0.43rem;
        display: flex;
        p:first-child {
          width: 20vw;
          font-weight: 600;
        }
      }
    }
  }
`;

export const QnAButton = styled.button`
  color: white;
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  background-color: ${({ theme }) => theme.palette.green};
  @media screen and (max-width: 400px) {
    width: 50vw;
    height: 6vh;
    font-size: 0.5rem;
    border-radius: 10vw;
  }
`;

export const QnABox = styled.div`
  margin-bottom: 1.2rem;
  margin-left: 4.5rem;
  @media screen and (max-width: 400px) {
    margin-left: 24%;
  }
`;
