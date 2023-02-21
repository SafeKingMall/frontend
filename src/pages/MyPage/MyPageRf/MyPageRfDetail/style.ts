import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* margin-left: 60rem; */
  min-width: 14.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 10.56rem;
  margin-left: 0.2rem;
  flex-direction: column;
`;

export const Top = styled.div`
  margin: 1rem 0 0.88rem 4rem;
  font-weight: 700;
  font-size: 0.4rem;
  line-height: 0.48rem;
  display: flex;
`;
export const Mid = styled.div`
  margin-bottom: 0.15rem;
  width: 10.56rem;
  padding-left: 0.2rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0.4rem;
    background-color: #212121;
    width: 10.56rem;
    height: 0.01rem;
    z-index: 5;
  }
`;

export const Section1Wrap = styled.div`
  margin: 0 0 0.44rem 0;
  > div:first-child {
    display: flex;
    justify-content: right;
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
  }
  > div {
    display: flex;
    font-size: 0.2rem;
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
`;

export const OrderH2 = styled.h2`
  font-size: 0.24rem;
  padding-bottom: 0.24rem;
  margin-left: 0.24rem;
  margin-top: 0.4rem;
  width: 10.56rem;
`;

export const OrderDiv = styled.div`
  width: 10.56rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.txt};
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
          border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
        }
      }
    }
    td {
      &:last-child {
        width: 2.05rem;
      }
    }
  }
`;

export const QnAButton = styled.button`
  color: white;
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  background-color: ${({ theme }) => theme.palette.green}; ;
`;

export const QnABox = styled.div`
  margin-bottom: 1.2rem;
  margin-left: 4.5rem;
`;
