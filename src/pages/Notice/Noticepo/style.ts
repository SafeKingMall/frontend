import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  font-weight: 900;
  background-image: url('/img/noticeBanner.png');
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
`;

export const NoticeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 0.24rem 0rem 1.2rem 13.1rem;
  width: 1.3rem;
  height: 0.7rem;
  font-size: 0.24rem;
  align-items: center;
`;

export const NoticeButton1 = styled.button`
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
  width: 1.3rem;
  height: 0.7rem;
  font-size: 0.24rem;
  align-items: center;
`;

export const NoticeButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin-left: 0.08rem;
  width: 1.3rem;
  height: 0.7rem;
  font-size: 0.24rem;
  align-items: center;
`;

export const ButtonBox = styled.div`
  margin-top: 1.48rem;
  font-size: 0.24rem;
  margin: 1.2rem 0rem 0rem 11.7rem;
`;

export const PoBox = styled.div`
  width: 14.4rem;
  margin-top: 0.24rem;
  font-size: 0.24rem;
  border-top: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.011rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 14.4rem;
  height: 100%;
  padding: 0.64rem 0.1rem 0.64rem 0.1rem;
  justify-content: space-between;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  div {
    &:first-child {
      display: flex;
      align-items: center;
      font-size: 0.32rem;
      text-align: left;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.48rem 0.23rem 0.48rem 0.23rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Description = styled.div`
  width: 100%;
  h1 {
    font-size: 0.64rem;
  }
  h2 {
    font-size: 0.56rem;
  }
  h3 {
    font-size: 0.48rem;
  }
  h4 {
    font-size: 0.4rem;
  }
  h5 {
    font-size: 0.32rem;
  }
  h6 {
    font-size: 0.24rem;
  }
  p {
    font-size: 0.16rem;
  }
  span {
    font-size: 0.16rem;
  }
  h1 > span {
    font-size: 0.64rem;
  }
  h2 > span {
    font-size: 0.64rem;
  }
  h3 > span {
    font-size: 0.64rem;
  }
  h4 > span {
    font-size: 0.64rem;
  }
  h5 > span {
    font-size: 0.64rem;
  }
  h6 > span {
    font-size: 0.64rem;
  }
  p > span {
    font-size: 0.16rem;
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
  padding-left: 0.1rem;
  padding-right: 0.1rem;
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
  font-size: 0.32rem;
  padding-bottom: 0.16rem;
`;

export const FirstDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.16rem;
  padding-bottom: 0.16rem;
  padding-top: 0.24rem;
`;

export const DateData = styled.div`
  cursor: pointer;
  padding-bottom: 0.24rem;
`;

export const NotPage = styled.div`
  font-size: 0.32rem;
`;

export const NotPage2 = styled.div`
  font-size: 0.32rem;
`;

export const Table = styled.table`
  width: 14.4rem;
  td {
    width: 7.2rem;
    height: 1.59rem;
    &:first-child {
      border-right: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
    }
    &:last-child {
      text-align: right;
    }
  }
`;
