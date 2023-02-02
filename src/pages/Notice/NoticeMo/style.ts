import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.green};
  height: 47rem;
  font-size: 4rem;
  margin-bottom: 14.8rem;
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
  position: relative;
`;

export const Table = styled.table`
  width: 144rem;
  height: 100%;
  font-size: 3.2rem;
  margin-top: 14.8rem;
  border-collapse: collapse;
  td,
  tr {
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  }
  tr {
    td {
      &:first-child {
        background-color: #d4ebdc;
        width: 22.4rem;
        text-align: center;
      }
    }
  }
  tr {
    &:last-child {
      td {
        &:first-child {
          margin-bottom: 20rem;
        }
        &:last-child {
          position: relative;
          input {
            position: absolute;
            top: 2.7rem;
            right: 2.8rem;
          }
        }
      }
    }
  }
`;

export const TableInput = styled.input`
  width: 118.4rem;
  height: 8rem;
  font-size: 3.2rem;
  margin: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 1.2rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
  }
`;

export const TableTextarea = styled.textarea`
  width: 118.4rem;
  min-height: 53.8rem;
  margin: 1.2rem;
  padding: 1.2rem;
  font-size: 3.2rem;
  outline: none;
  resize: none;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
    padding-top: 25rem;
  }
`;

export const NoticeButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 1.6rem;
  width: 12.8rem;
  height: 5.6rem;
  align-items: center;
  margin-right: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
`;

export const NoticeButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 1.6rem;
  width: 12.8rem;
  height: 5.6rem;
  align-items: center;
`;

export const NoticeBox = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 16rem;
  margin-left: 116rem;
  width: 30rem;
`;
