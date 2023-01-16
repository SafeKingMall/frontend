import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  //   width: 50%;
  //   height: 100%;
`;

export const Wrapper = styled.div`
  /* width: 144rem; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AdminWrapper = styled.div`
  display: flex;
  padding-left: 3.7rem;
  font-size: 2rem;
  h3 {
    margin-right: 0.3rem;
  }
  div {
    padding-top: 0.2rem;
  }
`;

export const AdminTitle = styled.div`
  // height: 100%;
  width: 144rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  align-items: end;
  padding: 2.4rem 5rem 2.4rem 5.4rem;
  align-items: center;
  font-size: 2.4rem;
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
  width: 128rem;
  // height: 92.3rem;
  font-size: 2rem;
  border-collapse: collapse;
  // border-top: 0.4rem solid ${({ theme }) => theme.palette.txt};
  margin-bottom:4rem;

  th {
    background-color: #d4ebdc;
    width:16.6rem;
    font-weight: normal;
  }

  td,
  tr {
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    padding: 2rem;
  }
  }
`;

export const OrderSelect = styled.select`
  width: 12.8rem;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 2rem;
`;

export const OrderInput = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 2rem;
  width: 15.7rem;
  height: 3.7rem;
  margin-top: 0.2rem;
  text-align: right;
  padding-right: 0.5rem;
`;

export const OrderH2 = styled.h2`
  font-size: 2.4rem;
  padding-bottom: 2.4rem;
  margin-left: 2.4rem;
  margin-top: 4rem;
`;

export const OrderDiv = styled.div`
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.txt};
`;

export const OrderDiv2 = styled.div`
  display: flex;
  padding: 1.6rem 0rem;
  margin-left: 83rem;
`;

export const Table2 = styled.table`
  width: 128rem;
  // height: 92.3rem;
  font-size: 2rem;
  border-collapse: collapse;
  text-align:center;

  tr {

    td{
      &:last-child{
        width:20.5rem;
      }
    }
    &: first-child{
      background-color: #d4ebdc;
      // width:16.6rem;
      td{
        &:nth-child(2){
          border-left : 0.1rem solid ${({ theme }) => theme.palette.lightgray};
        }

      }
    }

  }

  td,
  tr {
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child,
    &:nth-child(2){
border-left : 0.1rem solid white;

    }
border-left : 0.1rem solid ${({ theme }) => theme.palette.lightgray};
&:first-child{
  height:6.4rem;

}
    // height:11.4rem;
    padding: 0.5rem 0rem;
  }
  }
`;

//관리자 메모

export const AdminTextarea = styled.textarea`
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  width: 128rem;
  height: 21.6rem;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
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

export const QnABox = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 4rem;
  margin-left: 106rem;
  width: 30rem;
`;
