import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  height: 4.7rem;
  font-size: 0.4rem;
  margin-bottom: 1.48rem;
  text-align: center;
  padding-top: 2.3rem;
  color: white;
  font-weight: 900;
  background-image: url('/img/noticeBanner.png');
  background-size: 100% 100%;
  @media screen and (max-width: 720px) {
    font-size: 0.7rem;
    padding-top: 14%;
    margin-bottom: 5%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const Table = styled.table`
  width: 14.4rem;
  height: 100%;
  font-size: 0.32rem;
  margin-top: 1.48rem;
  border-collapse: collapse;
  td,
  tr {
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  }
  tr {
    td {
      &:first-child {
        background-color: #d4ebdc;
        width: 2.24rem;
        text-align: center;
        @media screen and (max-width: 720px) {
          font-size: 0.5rem;
          font-weight: 700;
        }
      }
    }
  }
  tr {
    &:last-child {
      td {
        &:first-child {
          margin-bottom: 2rem;
        }
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
  @media screen and (max-width: 720px) {
    width: 85%;
    margin-top: 0;
  }
`;

export const TableInput = styled.input`
  width: 11.84rem;
  height: 0.8rem;
  font-size: 0.32rem;
  margin: 0.12rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 0.12rem;
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 0.24rem;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    font-size: 0.5rem;
    ::placeholder {
      font-size: 0.5rem;
    }
  }
`;

export const NoticeButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
  margin-right: 0.08rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  @media screen and (max-width: 720px) {
    margin-right: 5%;
    font-size: 0.5rem;
    width: 20vw;
    height: 5vh;
  }
`;

export const NoticeButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    width: 20vw;
    height: 5vh;
  }
`;

export const NoticeBox = styled.div`
  margin-top: 0.12rem;
  margin-bottom: 1.6rem;
  margin-left: 11.6rem;
  width: 3rem;
  display: flex;
  @media screen and (max-width: 720px) {
    width: 50%;
    margin: 5% 0 0 50%;
  }
`;
