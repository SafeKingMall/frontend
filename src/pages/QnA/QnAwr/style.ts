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
  tr{
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
      }}
  }
`;

export const tableinput = styled.input`
  width: 118.4rem;
  heith: 8rem;
  font-size: 3.2rem;
  margin-left: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  padding: 1.2rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
  }
`;

export const changebutton = styled.button`
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

export const tablediv = styled.div`
  width: 118.4rem;
  heith: 8rem;
  font-size: 3.2rem;
  margin-left: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  padding: 1.8rem;
  display: flex;
  // flex-direction: column;
  input {
    // display: none;
    position: relative;
    text-align: right;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    height: 5rem;
    max-width: 12.8rem;
  }
`;

export const notdownload = styled.div`
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
`;

export const tabletextarea = styled.textarea`
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

export const QnAbox = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 16rem;
  margin-left: 116rem;
`;

export const divlala = styled.div`
  justify-content: center;
  display: flex;
  button {
    margin-top: 0.8rem;
    margin-left: 0.5rem;
    color: gray;
  }
`;