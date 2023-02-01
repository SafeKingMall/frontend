import styled from 'styled-components';

export const Banner = styled.div`
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
  height: 92.3rem;
  font-size: 2.8rem;
  margin-top: 14.8rem;
  border-collapse: collapse;
  td,
  tr {
    border-top: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
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
    &:nth-child(3) {
      height: 58.3rem;
    }
    &:last-child {
      td {
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
  margin-left: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  padding: 1.2rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
  }
`;

export const ChangeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 2.4rem;
  width: 12.8rem;
  height: 5.2rem;
  cursor: pointer;
  margin-left: 102.5rem;
  margin-top: -1rem;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const TableDiv = styled.div`
  width: 118.4rem;
  /* height: 8rem; */
  font-size: 2.5rem;
  margin-left: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  padding: 1.8rem;
  display: flex;
  input {
    position: relative;
    text-align: right;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    height: 5rem;
    max-width: 12.8rem;
  }
`;
export const DivImg = styled.div`
  justify-content: space-between;
  display: flex;
  border-radius: 3rem;
  border: 0.1rem solid #efeff1;
  display: flex;
  padding: 1rem;
  background-color: #efeff1;
  align-items: center;
  font-weight: 400;
  margin-bottom: 2rem;
  button {
    margin-left: 0.5rem;
    color: gray;
    background-color: white;
    border-radius: 5rem;
    height: 3rem;
  }
`;

export const NotDownload = styled.div`
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
`;

export const TableTextarea = styled.textarea`
  width: 118.4rem;
  min-height: 53.8rem;
  margin-left: 1.2rem;
  padding: 1.2rem;
  font-size: 3.2rem;
  outline: none;
  resize: none;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
    padding-top: 25rem;
  }
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
  margin-bottom: 16rem;
  margin-left: 116rem;
  width: 30rem;
`;
