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
  width: 105.6rem;
  font-weight: 700;
`;

export const Mid = styled.div`
  margin-bottom: 4rem;
  width: 105.6rem;
  padding-left: 2rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 4rem;
    background-color: #212121;
    width: 105.6rem;
    height: 0.1rem;
  }
`;

export const DataList = styled.ul`
  margin-bottom: 2.4rem;
`;

export const AdminOrdertitle = styled.div`
  width: 105.6rem;
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
  font-size: 2rem;
  div {
    &:first-child {
      width: 7rem;
      text-align: left;
    }
    &:nth-child(2) {
      width: 14rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 20rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 18rem;
      text-align: center;
    }
    &:nth-child(5) {
      width: 22rem;

      text-align: center;
    }
    &:nth-child(6) {
      width: 12rem;
      text-align: center;
    }
    &:nth-child(7) {
      width: 7rem;
    }
  }
`;
export const Container = styled.div`
  cursor: pointer;
  width: 105.6rem;
  display: flex;
  align-items: center;
  padding: 1.7rem 1.5rem 1.7rem 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 2rem;
  div {
    &:first-child {
      width: 7rem;
      text-align: left;
    }
    &:nth-child(2) {
      width: 14rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 20rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 18rem;
      text-align: center;
    }
    &:nth-child(5) {
      width: 22rem;

      text-align: center;
    }
    &:nth-child(6) {
      width: 12rem;
      text-align: center;
    }
    &:nth-child(7) {
      width: 7rem;
      text-align: right;
    }
  }
`;

export const RefundBtn = styled.button`
  width: 6.4rem;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
  font-size: 1.6rem;
`;

// 검색 박스

export const SearchBox = styled.div`
  background-color: ${({ theme }) => theme.palette.lightgray};
  width: 105.6rem;
  height: 20rem;
  padding: 3.2rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

export const DayButton = styled.button`
  width: 11.2rem;
  height: 5.6rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  background-color: white;
  font-size: 2rem;
  margin-right: 0.8rem;
`;

export const SearchFirst = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const SearchSecon = styled.div`
  display: flex;
  margin-top: 2.4rem;
  align-items: center;
  justify-content: center;
`;

export const SearchThird = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.6rem;
`;

export const DayInput = styled.input`
  width: 23.6rem;
  height: 5.6rem;
  font-size: 2rem;
  margin-left: 0.8rem;
  padding-left: 2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgreen};
  ::-webkit-calendar-picker-indicator {
    opacity: 1;
    display: block;
    background: url('/img/calendar.png') center/100% no-repeat white;
    width: 26%;
    height: 100%;
    cursor: pointer;
  }
`;

export const Tilde = styled.div`
  font-size: 2rem;
  margin-left: 1.6rem;
  margin-right: 0.8rem;
`;

export const DeliSelect = styled.select`
  width: 23.6rem;
  height: 5.6rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2rem;
  margin-right: 3.6rem;
  padding-left: 2.2rem;
`;

export const SearchButton = styled.button`
  width: 11.2rem;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 2rem;
  color: white;
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 105.6rem;
  height: 30rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  font-size: 2.4rem;
  font-weight: 500;
`;
