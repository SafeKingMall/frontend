import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 144rem; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BigTitle = styled.div`
  font-size: 0.24rem;
  width: 12.8rem;
  font-weight: 700;
  margin-left: 0.22rem;
`;

export const DataList = styled.ul`
  margin-bottom: 0.24rem;
`;

export const AdminOrdertitle = styled.div`
  width: 12.8rem;
  margin-top: 0.24rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  align-items: end;
  padding: 0.17rem 0.15rem 0.17rem 0.32rem;
  align-items: center;
  border-top: 0.03rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      flex-grow: 1.3;
    }
    &:nth-child(2) {
      flex-grow: 1.8;
    }
    &:nth-child(3) {
      flex-grow: 1.2;
    }
    &:nth-child(4) {
      flex-grow: 0.8;
    }
    &:nth-child(5) {
      flex-grow: 2;
    }
    &:nth-child(6) {
      flex-grow: 3;
      div {
        &:last-child {
          font-size: 0.15rem;
        }
      }
    }
    &:nth-child(7) {
      flex-grow: 0;
    }
  }
`;
export const Container = styled.div`
  cursor: pointer;
  width: 12.8rem;
  display: flex;
  align-items: center;
  padding: 0.24rem 0.15rem 0.24rem 0.58rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      width: 0.7rem;
      text-align: left;
    }
    &:nth-child(2) {
      width: 2rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 1.8rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 1.3rem;
      text-align: center;
    }
    &:nth-child(5) {
      width: 1.3rem;

      text-align: center;
    }
    &:nth-child(6) {
      width: 2.8rem;
      text-align: center;
    }
    &:nth-child(7) {
      width: 2.3rem;
      text-align: right;
    }
  }
`;

// 검색 박스

export const SearchBox = styled.div`
  background-color: ${({ theme }) => theme.palette.lightgray};
  width: 12.8rem;
  height: 1.52rem;
  padding: 0.24rem;
  margin-bottom: 0.4rem;
  margin-top: 0.82rem;
`;

export const DayButton = styled.button`
  width: 0.92rem;
  height: 0.4rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  background-color: white;
  font-size: 0.2rem;
  margin-right: 0.08rem;
`;

export const SearchSecon = styled.div`
  display: flex;
`;

export const SearchThird = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DayInput = styled.input`
  width: 2.36rem;
  height: 0.4rem;
  font-size: 0.2rem;
  margin-left: 0.08rem;
  padding-left: 0.05rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgreen};
  ::-webkit-calendar-picker-indicator {
    opacity: 1;
    display: block;
    background: url('/img/calendar.png') center/100% no-repeat white;
    width: 18%;
    height: 100%;
    cursor: pointer;
  }
`;

export const Tilde = styled.div`
  font-size: 0.2rem;
  margin-left: 0.16rem;
  margin-right: 0.08rem;
`;

export const SearchFive = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.16rem;
`;

export const SearchH2 = styled.h2`
  font-size: 0.24rem;
  margin-right: 0.28rem;
`;

export const SearchInput = styled.input`
  width: 4.65rem;
  height: 0.48rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  margin-right: 0.16rem;
  padding-left: 0.08rem;
  font-size: 0.2rem;
`;

export const DeliSelect = styled.select`
  width: 1.84rem;
  height: 0.48rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 0.2rem;
  margin-right: 0.08rem;
  padding-left: 0.22rem;
`;

export const SearchButton = styled.button`
  width: 1.12rem;
  height: 0.48rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.2rem;
  color: white;
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 12.8rem;
  height: 3rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
`;
