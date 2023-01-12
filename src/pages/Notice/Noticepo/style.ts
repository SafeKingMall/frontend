import styled from 'styled-components';

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.palette.green};
  width: 100%;
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
`;

export const NoticeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 14.8rem 0rem 0rem 131rem;
  width: 13rem;
  height: 7rem;
  font-size: 2.4rem;
  align-items: center;
`;

export const PoBox = styled.div`
  width: 144rem;
  margin-top: 2.4rem;
  margin-bottom: 12rem;
  font-size: 2.4rem;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.11rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const TitleDiv = styled.div`
  text-align: center;
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
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  width: 144rem;
  height: 100%;
  padding: 4.8rem 2.3rem 4.8rem 2.3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const NextPage = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.txtgray};
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const SecondDiv = styled.div`
  text-align: right;
  div {
    &:first-child {
      justify-content: flex-end;
    }
  }
`;

export const NextTitle = styled.div`
  font-size: 3.2rem;
  padding-bottom: 1.6rem;
`;

export const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  padding-bottom: 1.6rem;
  padding-top: 2.4rem;
`;

export const DateData = styled.div`
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
