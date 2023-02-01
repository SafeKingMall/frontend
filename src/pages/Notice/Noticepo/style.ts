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
`;

export const NoticeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 2.4rem 0rem 12rem 131rem;
  width: 13rem;
  height: 7rem;
  font-size: 2.4rem;
  align-items: center;
`;

export const NoticeButton1 = styled.button`
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
  width: 13rem;
  height: 7rem;
  font-size: 2.4rem;
  align-items: center;
`;

export const NoticeButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin-left: 0.8rem;
  width: 13rem;
  height: 7rem;
  font-size: 2.4rem;
  align-items: center;
`;

export const ButtonBox = styled.div`
  margin-top: 14.8rem;
  font-size: 2.4rem;
  margin: 12rem 0rem 0rem 117rem;
`;

export const PoBox = styled.div`
  width: 144rem;
  margin-top: 2.4rem;
  font-size: 2.4rem;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.11rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 144rem;
  height: 100%;
  padding: 6.4rem 1rem 6.4rem 1rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  div {
    &:first-child {
      display: flex;
      align-items: center;
      font-size: 3.2rem;
      text-align: left;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.8rem 2.3rem 4.8rem 2.3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Description = styled.div`
  width: 100%;
  h1 {
    font-size: 6.4rem;
  }
  h2 {
    font-size: 5.6rem;
  }
  h3 {
    font-size: 4.8rem;
  }
  h4 {
    font-size: 4rem;
  }
  h5 {
    font-size: 3.2rem;
  }
  h6 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.6rem;
  }
  span {
    font-size: 1.6rem;
  }
  h1 > span {
    font-size: 6.4rem;
  }
  h2 > span {
    font-size: 6.4rem;
  }
  h3 > span {
    font-size: 6.4rem;
  }
  h4 > span {
    font-size: 6.4rem;
  }
  h5 > span {
    font-size: 6.4rem;
  }
  h6 > span {
    font-size: 6.4rem;
  }
  p > span {
    font-size: 1.6rem;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  img {
    width: 100%;
  }
`;

export const NextPage = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.txtgray};
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
`;
export const SecondDiv = styled.div`
  text-align: right;
  cursor: pointer;
  div {
    &:first-child {
      justify-content: flex-end;
    }
  }
`;

export const NextTitle = styled.div`
  cursor: pointer;
  font-size: 3.2rem;
  padding-bottom: 1.6rem;
`;

export const FirstDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  padding-bottom: 1.6rem;
  padding-top: 2.4rem;
`;

export const DateData = styled.div`
  cursor: pointer;
  padding-bottom: 2.4rem;
`;

export const NotPage = styled.div`
  font-size: 3.2rem;
`;

export const NotPage2 = styled.div`
  font-size: 3.2rem;
`;

export const Table = styled.table`
  width: 144rem;
  td {
    width: 72rem;
    height: 15.9rem;
    &:first-child {
      border-right: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
    }
    &:last-child {
      text-align: right;
    }
  }
`;
