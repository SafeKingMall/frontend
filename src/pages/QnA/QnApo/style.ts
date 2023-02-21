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
`;

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 0.24rem 0rem 1.2rem 13.1rem;
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
export const PoBox = styled.div`
  width: 14.4rem;
  margin-top: 0.24rem;
  font-size: 0.24rem;
  border-top: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.011rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const TitleDiv = styled.div`
  text-align: center;
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
      justify-content: center;
      svg {
        margin-left: 0.1rem;
      }
      div {
        font-size: 0.32rem;
      }
    }
  }
`;

export const TitleDiv2 = styled.div`
  display: flex;
  width: 14.4rem;
  height: 100%;
  padding: 0.32rem 0.23rem 0.32rem 0.23rem;
  justify-content: space-between;
  div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-left: 0.1rem;
      }
      div {
        font-weight: bold;
      }
    }
    &:last-child {
      font-size: 0.16rem;
      color: ${({ theme }) => theme.palette.txtgray};
    }
  }
`;

export const TitleDiv3 = styled.div`
  text-align: center;
  display: flex;
  width: 14.4rem;
  height: 100%;
  padding: 0.42rem 0.1rem 0.18rem 0.1rem;
  font-size: 0.32rem;
  justify-content: space-between;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
`;

export const Content = styled.div`
  width: 14.4rem;
  height: 100%;
  padding: 0.48rem 0.23rem 0.23rem 0.23rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
`;
export const DivContent = styled.div`
  margin-bottom: 0.48rem;
`;

export const Content2 = styled.div`
  width: 14.4rem;
  height: 100%;
  padding: 0rem 0.23rem 0.32rem 0.23rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
`;

export const TextDiv = styled.div`
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  width: 14.4rem;
  height: 2rem;
  font-size: 0.24rem;
  position: relative;
  margin-bottom: 0.48rem;
  cursor: pointer;

  textarea {
    padding: 0.3rem;
    width: 12rem;
    height: 1.9rem;
    border: none;
    font-size: 0.24rem;
    resize: none;
    overflow: hidden;
    ::placeholder {
      color: ${({ theme }) => theme.palette.txtgray};
    }
  }

  textarea:focus {
    outline: none;
  }
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 0.24rem;
  cursor: pointer;
  margin-left: 12.65rem;
  margin-top: -2.27rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const Comment = styled.div`
  div {
    &:first-child {
      padding: 0.48rem 0.1rem 0.16rem 0.1rem;
      font-size: 0.32rem;
    }
  }
`;

//첨부파일
export const FileDown = styled.div`
  display: flex;
  margin-bottom: 0.1rem;
  height: 0.8rem;
  font-size: 0.24rem;
  align-items: center;
  padding: 0rem 0.1rem 0rem 0.1rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  div {
    &:nth-child(1) {
      width: 2rem;
    }
    &:nth-child(2) {
      width: 9.7rem;
    }
    &:nth-child(3) {
      width: 2rem;
      text-align: right;
    }
  }
`;
