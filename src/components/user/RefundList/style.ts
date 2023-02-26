import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 144rem; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
`;

export const BigTitle = styled.div`
  font-size: 0.24rem;
  width: 10.56rem;
  font-weight: 700;
  @media screen and (max-width: 400px) {
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

  @media screen and (max-width: 400px) {
    width: 100vw;
    padding-left: 3%;
    padding-top: 3%;
    border-bottom: 0 solid #212121;
    border-top: 0.3vh solid ${({ theme }) => theme.palette.green};

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
    &:nth-child(1) {
      flex-grow: 0.7;
    }
    &:nth-child(2) {
      flex-grow: 1.2;
    }
    &:nth-child(3) {
      flex-grow: 1.5;
    }
    &:nth-child(4) {
      flex-grow: 1.2;
    }
    &:nth-child(5) {
      flex-grow: 0.9;
    }
    &:nth-child(6) {
      flex-grow: 0.7;
    }
    &:nth-child(7) {
      flex-grow: 0;
    }
  }
  @media screen and (max-width: 400px) {
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
      width: 2.8rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 2rem;
      text-align: center;
    }
    &:nth-child(5) {
      width: 1.3rem;

      text-align: center;
    }
    &:nth-child(6) {
      width: 2rem;
      text-align: center;
    }
    &:nth-child(7) {
      width: 1rem;
      text-align: right;
    }
  }
  @media screen and (max-width: 400px) {
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
        padding: 2% 0 2% 40%;
      }
    }
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
  @media screen and (max-width: 400px) {
    width: 100vw;
    height: 17.5vh;
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
  @media screen and (max-width: 400px) {
    width: 40vw;
    height: 5vh;
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
  @media screen and (max-width: 400px) {
    margin-top: 3%;
    margin-left: -2.5%;
  }
`;

export const SearchThird = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.16rem;
  @media screen and (max-width: 400px) {
    margin-right: 0;
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
    @media screen and (max-width: 400px) {
      width: 30%;
      padding-top: 1%;
    }
  }
  @media screen and (max-width: 400px) {
    width: 30.6vw;
    height: 5vh;
    font-size: 0.4rem;
    border: 0.03rem solid ${({ theme }) => theme.palette.lightgreen};
  }
`;

export const Tilde = styled.div`
  font-size: 0.2rem;
  margin-left: 0.16rem;
  margin-right: 0.08rem;
  @media screen and (max-width: 400px) {
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
`;

export const SearchButton = styled.button`
  width: 1.12rem;
  height: 0.56rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.2rem;
  color: white;
  @media screen and (max-width: 400px) {
    width: 21vw;
    height: 5vh;
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
  @media screen and (max-width: 400px) {
    width: 100vw;
    font-size: 0.45rem;
    border-bottom: 0.02rem solid ${({ theme }) => theme.palette.txtgray};
  }
`;
