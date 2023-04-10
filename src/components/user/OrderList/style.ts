import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 144rem; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    width: 100%;
    height: 100%;
  }
`;

export const BigTitle = styled.div`
  font-size: 0.24rem;
  width: 10.56rem;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    width: 100vw;
    padding-left: 3%;
    font-size: 0.45rem;
  }
`;

export const Mid = styled.div`
  margin-bottom: 0.4rem;
  width: 10.56rem;
  padding-left: 0.2rem;
  padding-bottom: 0.1rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  position: relative;
  border-bottom: 0.01rem solid #212121;
  text-align: center;

  @media screen and (max-width: 720px) {
    width: 100vw;
    padding-left: 3%;
    padding-top: 3%;
    border-bottom: 0 solid #212121;
    border-top: 1px solid ${({ theme }) => theme.palette.green};

    text-align: left;
    font-size: 0.45rem;
    margin-bottom: 0;
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
  @media screen and (max-width: 720px) {
    width: 100vw;
    padding: 0;
    div {
      display: none;
    }
  }
`;
export const Container = styled.div`
  cursor: pointer;
  width: 10.56rem;
  display: flex;
  align-items: center;
  padding: 0.17rem 0.15rem 0.17rem 0.32rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
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
  @media screen and (max-width: 720px) {
    width: 100vw;
    cursor: default;
    > ul {
      border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
      border-radius: 3vw 3vw 0 0;
      margin: 2% 0;
    }
    div {
      &:nth-child(1) {
        display: flex;
        justify-content: space-between;
        background-color: ${({ theme }) => theme.palette.green};
        font-size: 0.4rem;
        color: white;
        width: 95vw;
        padding: 3%;
        border-radius: 3vw 3vw 0 0;
      }
      &:nth-child(2) {
        display: flex;
        width: 95vw;
        text-align: left;
        padding: 2%;
        ul {
          padding: 3% 4%;

          p {
            padding-bottom: 2%;
            font-size: 0.45rem;
            &:nth-child(1) {
              font-weight: 700;
            }
          }
        }
      }
      &:nth-child(3) {
        width: 95vw;
        background-color: ${({ theme }) => theme.palette.lightgray};
        text-align: left;
        font-size: 0.4rem;
        padding: 2%;
        font-weight: 600;
      }
      &:nth-child(4) {
        padding: 2% 0 2% 43%;
      }
    }
  }
`;

export const RefundBtn = styled.button`
  width: 0.64rem;
  height: 0.4rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
  font-size: 0.16rem;
  @media screen and (max-width: 720px) {
    /* margin-left: 61%; */
    font-size: 0.4rem;
    width: 17vw;
    height: 1.2rem;
    border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
    color: ${({ theme }) => theme.palette.txt};
  }
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
  @media screen and (max-width: 720px) {
    width: 100vw;
    height: initial;
    padding: 5%;
  }
`;

export const DayButton = styled.button`
  width: 1.12rem;
  height: 0.56rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  background-color: white;
  font-size: 0.2rem;
  margin-right: 0.08rem;
  @media screen and (max-width: 720px) {
    width: 40vw;
    height: 1.2rem;
    font-size: 0.45rem;
    border: 0.02rem solid ${({ theme }) => theme.palette.txtgray};
    margin-right: 2%;
  }
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
  @media screen and (max-width: 720px) {
    margin-top: 3%;
    margin-left: -2.5%;
  }
`;

export const SearchThird = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.16rem;
  @media screen and (max-width: 720px) {
    margin-right: 0;
    margin-top: 2.5%;
  }
`;

export const SearchFive = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchH2 = styled.h2`
  font-size: 0.24rem;
  margin-right: 0.28rem;
`;

export const SearchInput = styled.input`
  width: 4.65rem;
  height: 0.56rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  margin-right: 0.16rem;
  padding-left: 0.08rem;
  font-size: 0.2rem;
  @media screen and (max-width: 720px) {
    width: 68vw;
    height: 1.2rem;
    margin-right: 1%;
    margin-left: 1%;
    font-size: 0.45rem;
  }
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
    @media screen and (max-width: 720px) {
      width: 30%;
    }
  }
  @media screen and (max-width: 720px) {
    width: 30.6vw;
    height: 1.2rem;
    font-size: 0.4rem;
    border: 0.03rem solid ${({ theme }) => theme.palette.lightgreen};
  }
`;

export const Tilde = styled.div`
  font-size: 0.2rem;
  margin-left: 0.16rem;
  margin-right: 0.08rem;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    font-weight: 700;
  }
`;

export const DeliSelect = styled.select`
  width: 2.36rem;
  height: 0.56rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 0.2rem;
  margin-right: 0.36rem;
  padding-left: 0.22rem;
  @media screen and (max-width: 720px) {
    font-size: 0.47rem;
    width: 22vw;
    margin-top: 2.5%;
    margin-left: 2%;
    height: 1.2rem;
  }
`;

export const SearchButton = styled.button`
  width: 1.12rem;
  height: 0.56rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.2rem;
  color: white;
  @media screen and (max-width: 720px) {
    width: 21vw;
    height: 1.2rem;
    font-size: 0.45rem;
    margin-left: 2%;
  }
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 10.56rem;
  height: 3rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
  @media screen and (max-width: 720px) {
    width: 100vw;
    font-size: 0.45rem;
    border-bottom: 0.02rem solid ${({ theme }) => theme.palette.txtgray};
  }
`;
