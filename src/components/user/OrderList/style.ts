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
  width: 10.56rem;
  font-weight: 700;
`;

export const Mid = styled.div`
  margin-bottom: 0.4rem;
  width: 10.56rem;
  padding-left: 0.2rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0.4rem;
    background-color: #212121;
    width: 10.56rem;
    height: 0.01rem;
  }
`;

export const DataList = styled.ul`
  margin-bottom: 0.24rem;
`;

export const AdminOrdertitle = styled.div`
  width: 10.56rem;
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
  font-size: 0.2rem;
  div {
    &:first-child {
      width: 0.7rem;
      text-align: left;
    }
    &:nth-child(2) {
      width: 1.4rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 2rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 1.8rem;
      text-align: center;
    }
    &:nth-child(5) {
      width: 2.2rem;

      text-align: center;
    }
    &:nth-child(6) {
      width: 1.2rem;
      text-align: center;
    }
    &:nth-child(7) {
      width: 0.7rem;
    }
  }
`;
export const Container = styled.div`
  cursor: pointer;
  width: 10.56rem;
  display: flex;
  align-items: center;
  padding: 0.17rem 0.15rem 0.17rem 0.32rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.2rem;
  div {
    &:first-child {
      width: 0.7rem;
      text-align: left;
    }
    &:nth-child(2) {
      width: 1.4rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 2rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 1.8rem;
      text-align: center;
    }
    &:nth-child(5) {
      width: 2.2rem;

      text-align: center;
    }
    &:nth-child(6) {
      width: 1.2rem;
      text-align: center;
    }
    &:nth-child(7) {
      width: 0.7rem;
      text-align: right;
    }
  }
`;

export const RefundBtn = styled.button`
  width: 0.64rem;
  height: 0.4rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
  font-size: 0.16rem;
`;

// 검색 박스

export const SearchBox = styled.div`
  background-color: ${({ theme }) => theme.palette.lightgray};
  width: 10.56rem;
  height: 2rem;
  padding: 0.32rem;
  margin-bottom: 0.4rem;
  margin-top: 0.2rem;
  align-items: center;
  justify-content: center;
`;

export const DayButton = styled.button`
  width: 1.12rem;
  height: 0.56rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  background-color: white;
  font-size: 0.2rem;
  margin-right: 0.08rem;
`;

export const SearchFirst = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const SearchSecon = styled.div`
  display: flex;
  margin-top: 0.24rem;
  align-items: center;
  justify-content: center;
`;

export const SearchThird = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.16rem;
`;

export const DayInput = styled.input`
  width: 2.36rem;
  height: 0.56rem;
  font-size: 0.2rem;
  margin-left: 0.08rem;
  padding-left: 0.2rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgreen};
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
  font-size: 0.2rem;
  margin-left: 0.16rem;
  margin-right: 0.08rem;
`;

export const DeliSelect = styled.select`
  width: 2.36rem;
  height: 0.56rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 0.2rem;
  margin-right: 0.36rem;
  padding-left: 0.22rem;
`;

export const SearchButton = styled.button`
  width: 1.12rem;
  height: 0.56rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.2rem;
  color: white;
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 10.56rem;
  height: 3rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
`;
