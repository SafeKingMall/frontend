import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media screen and (max-width: 720px) {
    min-width: 100%;
    height: 100%;
  }
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 14.4rem;
  /* height: 109.6rem; */
  margin-bottom: 1.2rem;
  @media screen and (max-width: 720px) {
    margin-left: 0;
    width: 100vw;
  }
`;

export const RefundH1 = styled.h3`
  font-size: 0.4rem;
  margin-top: 1.42rem;
  @media screen and (max-width: 720px) {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 900;
    padding: 4% 0 4% 0;
    width: 100vw;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.green};
  }
`;
export const Top = styled.div`
  margin: 0.54rem 0 1.04rem 0;
  width: 3.02rem;
  height: 1.09rem;
  background-image: url('/img/Refund/Refund1.png');
  background-size: 100% 100%;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const H2 = styled.h3`
  font-size: 0.32rem;
  padding: 0.31rem 0.5rem;
  width: 14.4rem;
  @media screen and (max-width: 720px) {
    background-color: ${({ theme }) => theme.palette.green};
    font-size: 0.45rem;
    color: white;
    width: 95vw;
    padding: 4%;
    border-radius: 3vw 3vw 0 0;
    font-weight: 400;
    margin-top: 5%;
  }
`;
export const InputContainer = styled.div`
  width: 14.4rem;
  border-bottom: 0.01rem solid #289951;
  border-top: 0.01rem solid #289951;
  @media screen and (max-width: 720px) {
    border-bottom: 0 solid #289951;
    border-top: 0 solid #289951;
    width: 95vw;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  width: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    width: 82vw;
  }
  > button {
    background-color: #fff;
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    @media screen and (max-width: 720px) {
      width: 40vw;
      height: 1.4rem;
    }
    :first-child {
      border: 0.01rem solid #289951;
      font-weight: 700;
      font-size: 24px;
      color: #289951;
      @media screen and (max-width: 720px) {
        font-size: 0.6rem;
      }
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 24px;
      color: #ffffff;
      @media screen and (max-width: 720px) {
        font-size: 0.6rem;
      }
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
`;

export const Table2 = styled.table`
  width: 14.4rem;
  font-size: 0.2rem;
  border-collapse: collapse;
  text-align: center;

  td,
  tr {
    height: 0.71rem;
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    @media screen and (max-width: 720px) {
      text-align: left;
      padding: 3%;
    }

    &:first-child,
    &:nth-child(2) {
      border-left: 0.01rem solid white;
      @media screen and (max-width: 720px) {
        border-left: 0 solid white;
      }
    }
    border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    @media screen and (max-width: 720px) {
      border-left: 0 solid ${({ theme }) => theme.palette.lightgray};
    }
    &:first-child {
      height: 0.64rem;
    }
    padding: 0.05rem 0rem;
  }

  tr {
    &:first-child {
      background-color: #d4ebdc;
      border-top: 0.01rem solid #289951;
      @media screen and (max-width: 720px) {
        background-color: white;
        border-top: 0 solid #289951;
      }
      td {
        &:nth-child(2) {
          width: 1.2rem;
          border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
          @media screen and (max-width: 720px) {
            border-left: 0 solid ${({ theme }) => theme.palette.lightgray};
          }
        }
        &:nth-child(3) {
          width: 1rem;
        }
        &:nth-child(4) {
          width: 1rem;
        }
        &:nth-child(5) {
          width: 1rem;
        }
      }
    }
    td {
      &:last-child {
        width: 2.05rem;
        @media screen and (max-width: 720px) {
          width: 70%;
        }
      }
    }
  }

  @media screen and (max-width: 720px) {
    font-size: 0.43rem;
    width: 95vw;
    border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-right: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    th {
      background-color: white;
      font-weight: 700;
      text-align: left;
      padding: 3%;
    }
  }
`;

export const ImgFlex = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;

export const Table = styled.table`
  width: 14.4rem;
  font-size: 0.2rem;
  border-collapse: collapse;
  margin-bottom: 0.4rem;
  border-top: 0.03rem solid ${({ theme }) => theme.palette.txt};

  th {
    height: 0.71rem;
    background-color: #d4ebdc;
    width: 1.66rem;
    font-weight: normal;
    @media screen and (max-width: 720px) {
      background-color: white;
      font-weight: 700;
      text-align: left;
      padding: 3%;
    }
  }
  td {
    width: 3.62rem;
  }

  td,
  tr {
    height: 0.71rem;
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    padding: 0.2rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.43rem;
    width: 95vw;
    border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-right: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-top: 0 solid ${({ theme }) => theme.palette.txt};
  }
`;
