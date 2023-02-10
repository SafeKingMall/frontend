import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* margin-left: 60rem; */
  min-width: 144rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 105.6rem;
  margin-left: 2rem;
  flex-direction: column;
`;

export const Top = styled.div`
  margin: 10rem 0 8.8rem 40rem;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.8rem;
  display: flex;
`;
export const Mid = styled.div`
  margin-bottom: 1.5rem;
  width: 105.6rem;
  padding-left: 2rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 4rem;
    background-color: #212121;
    width: 105.6rem;
    height: 0.1rem;
    z-index: 5;
  }
`;

export const Section1Wrap = styled.div`
  margin: 0 0 4.4rem 0;
  > div:first-child {
    display: flex;
    justify-content: right;
  }
`;

export const Section1Top = styled.div`
  margin: 1.6rem 0rem;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  & > div:first-child {
    margin: 0 3.8rem 0 0;
  }
  > div {
    display: flex;
    font-size: 2rem;
  }
`;
export const Section2Wrapper = styled.div`
  margin: 0 0 4.4rem 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
  & > div:first-child {
    width: 52.8rem;
  }
`;

export const Table = styled.table`
  width: 105.6rem;
  font-size: 2rem;
  border-collapse: collapse;
  margin-bottom: 4rem;

  th {
    height: 7.1rem;
    background-color: #d4ebdc;
    width: 16.6rem;
    font-weight: normal;
  }
  td {
    width: 36.2rem;
  }

  td,
  tr {
    height: 7.1rem;
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    padding: 2rem;
  }
`;

export const OrderH2 = styled.h2`
  font-size: 2.4rem;
  padding-bottom: 2.4rem;
  margin-left: 2.4rem;
  margin-top: 4rem;
  width: 105.6rem;
`;

export const OrderDiv = styled.div`
  width: 105.6rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.txt};
`;

export const Table2 = styled.table`
  width: 105.6rem;
  font-size: 2rem;
  border-collapse: collapse;
  text-align: center;

  td,
  tr {
    height: 7.1rem;
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child,
    &:nth-child(2) {
      border-left: 0.1rem solid white;
    }
    border-left: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child {
      height: 6.4rem;
    }
    padding: 0.5rem 0rem;
  }

  tr {
    &:first-child {
      background-color: #d4ebdc;
      td {
        &:nth-child(2) {
          border-left: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
        }
      }
    }
    td {
      &:last-child {
        width: 20.5rem;
      }
    }
  }
`;

export const QnAButton = styled.button`
  color: white;
  font-size: 1.6rem;
  width: 12.8rem;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.palette.green}; ;
`;

export const QnABox = styled.div`
  margin-bottom: 12rem;
  margin-left: 45rem;
`;
