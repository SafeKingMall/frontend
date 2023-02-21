import styled from 'styled-components';

export const Banner = styled.div`
  font-weight: 900;
  background-image: url('/img/QnABannerImg.png');
  background-size: 100% 100%;
  height: 4.7rem;
  font-size: 0.4rem;
  margin-bottom: 1.48rem;
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
  position: relative;
`;

export const Table = styled.table`
  width: 14.4rem;
  height: 9.23rem;
  font-size: 0.28rem;
  margin-top: 1.48rem;
  border-collapse: collapse;
  td,
  tr {
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  }
  tr {
    &:first-child {
      height: 1.12rem;
    }
    &:nth-child(2) {
      height: 1.12rem;
    }
    td {
      &:first-child {
        background-color: #d4ebdc;
        width: 2.24rem;
        text-align: center;
      }
    }
  }
  tr {
    &:nth-child(3) {
      height: 5.83rem;
    }
    &:last-child {
      height: 1.12rem;
      td {
        &:last-child {
          position: relative;
          input {
            position: absolute;
            top: 0.27rem;
            right: 0.28rem;
          }
        }
      }
    }
  }
`;

export const TableInput = styled.input`
  width: 11.84rem;
  min-height: 0.8rem;
  font-size: 0.32rem;
  margin-left: 0.12rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 0.12rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 0.24rem;
  }
`;

export const ChangeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 0.24rem;
  width: 1.28rem;
  height: 0.52rem;
  cursor: pointer;
  margin-left: 10.25rem;
  margin-top: -0.1rem;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const TableDiv = styled.div`
  width: 11.84rem;
  min-height: 0.8rem;

  /* height: 8rem; */
  font-size: 0.25rem;
  margin-left: 0.12rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 0.18rem;
  display: flex;
  input {
    position: relative;
    text-align: right;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    height: 0.5rem;
    max-width: 1.28rem;
  }
`;
export const DivImg = styled.div`
  justify-content: space-between;
  display: flex;
  border-radius: 0.3rem;
  border: 0.01rem solid #efeff1;
  display: flex;
  padding: 0.1rem;
  background-color: #efeff1;
  align-items: center;
  font-weight: 400;
  button {
    margin-left: 0.05rem;
    color: gray;
    background-color: white;
    border-radius: 0.5rem;
    height: 0.3rem;
  }
`;

export const NotDownload = styled.div`
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 0.24rem;
`;

export const TableTextarea = styled.textarea`
  width: 11.84rem;
  min-height: 5.38rem;
  margin-left: 0.12rem;
  padding: 0.12rem;
  font-size: 0.32rem;
  outline: none;
  resize: none;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 0.24rem;
    padding-top: 2.5rem;
  }
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
  margin-bottom: 1.6rem;
  margin-left: 11.6rem;
  width: 3rem;
`;
