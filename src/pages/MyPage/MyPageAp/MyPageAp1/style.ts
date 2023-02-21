import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
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
`;

export const RefundH1 = styled.h3`
  font-size: 0.4rem;
  margin-top: 1.42rem;
`;
export const Top = styled.div`
  margin: 0.54rem 0 1.04rem 0;
  width: 3.02rem;
  height: 1.09rem;
  background-image: url('/img/Refund/Refund1.png');
  background-size: 100% 100%;
`;

export const H2 = styled.h3`
  font-size: 0.32rem;
  padding: 0.31rem 0.5rem;
  width: 14.4rem;
`;
export const InputContainer = styled.div`
  width: 14.4rem;
  border-bottom: 0.01rem solid #289951;
  border-top: 0.01rem solid #289951;

  h3 {
    font-size: 0.32rem;
    padding: 0.31rem 0.5rem;
    width: 14.4rem;
    border-bottom: 0.02rem solid ${({ theme }) => theme.palette.txt};
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  /* margin-bottom: 12rem; */
  width: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    :first-child {
      border: 0.01rem solid #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      color: #289951;
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
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
    &:first-child,
    &:nth-child(2) {
      border-left: 0.01rem solid white;
    }
    border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child {
      height: 0.64rem;
    }
    padding: 0.05rem 0rem;
  }

  tr {
    &:first-child {
      background-color: #d4ebdc;
      border-top: 0.01rem solid #289951;
      td {
        &:nth-child(2) {
          border-left: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
        }
      }
    }
    td {
      &:last-child {
        width: 2.05rem;
      }
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
`;
