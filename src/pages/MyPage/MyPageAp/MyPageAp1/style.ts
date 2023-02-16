import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
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
  width: 144rem;
  /* height: 109.6rem; */
  margin-bottom: 12rem;
`;

export const RefundH1 = styled.h3`
  font-size: 4rem;
  margin-top: 14.2rem;
`;
export const Top = styled.div`
  margin: 5.4rem 0 10.4rem 0;
  width: 30.2rem;
  height: 10.9rem;
  background-image: url('/img/Refund/Refund1.png');
  background-size: 100% 100%;
`;

export const H2 = styled.h3`
  font-size: 3.2rem;
  padding: 3.1rem 5rem;
  width: 144rem;
`;
export const InputContainer = styled.div`
  width: 144rem;
  border-bottom: 0.1rem solid #289951;
  border-top: 0.1rem solid #289951;

  h3 {
    font-size: 3.2rem;
    padding: 3.1rem 5rem;
    width: 144rem;
    border-bottom: 0.2rem solid ${({ theme }) => theme.palette.txt};
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 4.8rem;
  /* margin-bottom: 12rem; */
  width: 64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
    border-radius: 10rem;
    width: 31.2rem;
    height: 8rem;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3rem;
    :first-child {
      border: 0.1rem solid #289951;
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
  width: 144rem;
  font-size: 2rem;
  border-collapse: collapse;
  text-align: center;

  td,
  tr {
    height: 7.1rem;
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child,
    &:nth-child(2) {
      border-left: 0.1rem solid white;
    }
    border-left: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    &:first-child {
      height: 6.4rem;
    }
    padding: 0.5rem 0rem;
  }

  tr {
    &:first-child {
      background-color: #d4ebdc;
      border-top: 0.1rem solid #289951;
      td {
        &:nth-child(2) {
          border-left: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
        }
      }
    }
    td {
      &:last-child {
        width: 20.5rem;
      }
    }
  }
`;

export const ImgFlex = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;

export const Table = styled.table`
  width: 144rem;
  font-size: 2rem;
  border-collapse: collapse;
  margin-bottom: 4rem;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.txt};

  th {
    height: 7.1rem;
    background-color: #d4ebdc;
    width: 16.6rem;
    font-weight: normal;
  }
  td {
    width: 36.2rem;
  }

  td,
  tr {
    height: 7.1rem;
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    padding: 2rem;
  }
`;
