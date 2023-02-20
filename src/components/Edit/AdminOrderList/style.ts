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
  font-size: 2.4rem;
  width: 128rem;
  font-weight: 700;
  margin-left: 2.2rem;
`;

export const DataList = styled.ul`
  margin-bottom: 2.4rem;
`;

export const AdminOrdertitle = styled.div`
  width: 128rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  align-items: end;
  padding: 1.7rem 1.5rem 1.7rem 3.2rem;
  align-items: center;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
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
          font-size: 1.5rem;
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
  width: 128rem;
  display: flex;
  align-items: center;
  padding: 2.4rem 1.5rem 2.4rem 5.8rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      width: 7rem;
      text-align: left;
    }
    &:nth-child(2) {
      width: 20rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 18rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 13rem;
      text-align: center;
    }
    &:nth-child(5) {
      width: 13rem;

      text-align: center;
    }
    &:nth-child(6) {
      width: 28rem;
      text-align: center;
    }
    &:nth-child(7) {
      width: 23rem;
      text-align: right;
    }
  }
`;

// 검색 박스

export const SearchBox = styled.div`
  background-color: ${({ theme }) => theme.palette.lightgray};
  width: 128rem;
  height: 15.2rem;
  padding: 2.4rem;
  margin-bottom: 4rem;
  margin-top: 8.2rem;
`;

export const DayButton = styled.button`
  width: 9.2rem;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  background-color: white;
  font-size: 2rem;
  margin-right: 0.8rem;
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
  width: 23.6rem;
  height: 4rem;
  font-size: 2rem;
  margin-left: 0.8rem;
  padding-left: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgreen};
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
  font-size: 2rem;
  margin-left: 1.6rem;
  margin-right: 0.8rem;
`;

export const SearchFive = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
`;

export const SearchH2 = styled.h2`
  font-size: 2.4rem;
  margin-right: 2.8rem;
`;

export const SearchInput = styled.input`
  width: 46.5rem;
  height: 4.8rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  margin-right: 1.6rem;
  padding-left: 0.8rem;
  font-size: 2rem;
`;

export const DeliSelect = styled.select`
  width: 18.4rem;
  height: 4.8rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2rem;
  margin-right: 0.8rem;
  padding-left: 2.2rem;
`;

export const SearchButton = styled.button`
  width: 11.2rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 2rem;
  color: white;
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 128rem;
  height: 30rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  font-size: 2.4rem;
  font-weight: 500;
`;
