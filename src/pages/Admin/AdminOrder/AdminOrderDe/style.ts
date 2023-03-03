import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AdminWrapper = styled.div`
  display: flex;
  padding-left: 0.37rem;
  font-size: 0.2rem;
  h3 {
    margin-right: 0.03rem;
  }
  div {
    padding-top: 0.02rem;
  }
`;

export const AdminTitle = styled.div`
  width: 14.4rem;
  margin-top: 0.24rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  align-items: end;
  padding: 0.24rem 0.5rem 0.24rem 0.54rem;
  align-items: center;
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      flex-grow: 2.1;
    }
    &:nth-child(2) {
      flex-grow: 2.7;
    }
    &:nth-child(3) {
      flex-grow: 2;
    }
    &:nth-child(4) {
      flex-grow: 0;
    }
  }
`;

export const NoneOption = styled.option`
  display: none;
`;

export const Table = styled.table`
  width: 12.8rem;
  font-size: 0.2rem;
  border-collapse: collapse;
  margin-bottom: 0.4rem;

  th {
    height: 0.71rem;
    background-color: #d4ebdc;
    width: 1.66rem;
    font-weight: normal;
  }

  td,
  tr {
    height: 0.71rem;
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    padding: 0.2rem;
  }
`;

export const OrderSelect = styled.select`
  width: 1.28rem;
  height: 0.4rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.2rem;
`;

export const OrderInput = styled.input`
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.2rem;
  width: 1.57rem;
  height: 0.37rem;
  margin-top: 0.02rem;
  text-align: right;
  padding-right: 0.05rem;
`;

export const OrderH2 = styled.h2`
  font-size: 0.24rem;
  padding-bottom: 0.24rem;
  margin-left: 0.24rem;
  margin-top: 0.4rem;
  width: 12.5rem;
`;

export const OrderDiv = styled.div`
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.txt};
`;

export const OrderDiv2 = styled.div`
  display: flex;
  padding: 0.16rem 0rem;
  margin-left: 5.3rem;
`;

export const Table2 = styled.table`
  width: 12.8rem;
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
    padding: 0.05rem 0rem;
  }

  tr {
    &:first-child {
      background-color: #d4ebdc;
      td {
        &:nth-child(2) {
          width: 1.2rem;
          border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
        }
        &:nth-child(3) {
          width: 1rem;
        }
        &:nth-child(4) {
          width: 1.2rem;
        }
        &:nth-child(5) {
          width: 1rem;
        }
        &:nth-child(6) {
          width: 1.5rem;
        }
        &:nth-child(7) {
          width: 1rem;
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

//관리자 메모

export const AdminTextarea = styled.textarea`
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  width: 12.8rem;
  height: 2.16rem;
  resize: none;
  font-size: 0.2rem;
  padding: 0.1rem;
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

export const QnABox = styled.div`
  margin-top: 0.12rem;
  margin-bottom: 1.5rem;
  margin-left: 10.6rem;
  width: 3rem;
`;
