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
`;

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 2.4rem 0rem 12rem 131rem;
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
export const PoBox = styled.div`
  width: 144rem;
  margin-top: 2.4rem;
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
      justify-content: center;
      svg {
        margin-left: 1rem;
      }
      div {
        font-size: 3.2rem;
      }
    }
  }
`;

export const TitleDiv2 = styled.div`
  display: flex;
  width: 144rem;
  height: 100%;
  padding: 3.2rem 2.3rem 3.2rem 2.3rem;
  justify-content: space-between;
  div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-left: 1rem;
      }
      div {
        font-weight: bold;
      }
    }
    &:last-child {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.palette.txtgray};
    }
  }
`;

export const TitleDiv3 = styled.div`
  text-align: center;
  display: flex;
  width: 144rem;
  height: 100%;
  padding: 4.2rem 1rem 1.8rem 1rem;
  font-size: 3.2rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Content = styled.div`
  width: 144rem;
  height: 100%;
  padding: 4.8rem 2.3rem 2.3rem 2.3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;
export const DivContent = styled.div`
  margin-bottom: 4.8rem;
`;

export const Content2 = styled.div`
  width: 144rem;
  height: 100%;
  padding: 0rem 2.3rem 3.2rem 2.3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const ComemntInput = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  width: 144rem;
  height: 20rem;
  font-size: 2.4rem;
  padding: 4rem 120rem 13.8rem 4rem;
  position: relative;
  margin-bottom: 4.8rem;
  cursor: pointer;
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
    padding: 4rem 120rem 13.8rem 0rem;
  }
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  width: 16rem;
  height: 16rem;
  font-size: 2.4rem;
  cursor: pointer;
  margin-left: 126.5rem;
  margin-top: -22.7rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const Comment = styled.div`
  div {
    padding: 4.8rem 1rem 1.6rem 1rem;
    font-size: 3.2rem;
  }
`;

//첨부파일
export const FileDown = styled.div`
  display: flex;
  margin-bottom: 1rem;
  height: 8rem;
  font-size: 2.4rem;
  align-items: center;
  padding: 0rem 1rem 0rem 1rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  div {
    &:nth-child(1) {
      width: 20rem;
    }
    &:nth-child(2) {
      width: 97rem;
    }
    &:nth-child(3) {
      width: 20rem;
      text-align: right;
    }
  }
`;
