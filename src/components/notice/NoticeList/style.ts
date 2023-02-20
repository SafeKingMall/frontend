import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 400px) {
    padding: 0;
    width: 80%;
    font-size: 70%;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  height: 100%;
  width: 144rem;
  display: flex;
  align-items: center;
  padding: 2.4rem 2.4rem 2.4rem 5.8rem;
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      width: 20rem;
    }
    &:nth-child(2) {
      width: 85rem;
    }
    &:nth-child(3) {
      width: 30rem;
      text-align: right;
    }
  }
  @media screen and (max-width: 400px) {
    justify-content: space-between;
    width: 115rem;
    div {
      &:first-child {
        display: none;
      }
    }
  }
`;

export const DataList = styled.ul`
  margin-bottom: 10.4rem;
`;

export const NoticeTitle = styled.div`
  width: 144rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  /* align-items: end; */
  padding: 2.4rem 5rem 2.4rem 5.4rem;
  align-items: center;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      flex-grow: 3;
    }
    &:nth-child(2) {
      flex-grow: 6;
    }
    &:nth-child(3) {
      flex-grow: 0;
    }
  }
  @media screen and (max-width: 400px) {
    padding: 0;
    width: 80%;
    div {
      display: none;
    }
  }
`;

export const Select = styled.select`
  /* margin-right: 0.8rem; */
  width: 12.5rem;
  height: 4rem;
  border: 0.1rem solid #ddd;
  font-size: 1.2rem;
  padding: 0 0.8rem;
  font-weight: 400;
  background-color: #fefefe;
  color: #686868;
  outline: none;
  @media screen and (max-width: 400px) {
    width: 29%;
    height: 13rem;
    margin-right: 1%;
  }
`;

export const NoticeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin-left: 130rem;
  width: 13rem;
  height: 5rem;
  font-size: 1.5rem;
  position: absolute;
  bottom: 18%;
  @media screen and (max-width: 400px) {
    width: 24%;
    height: 15rem;
    margin-left: 56%;
  }
`;
export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 144rem;
  height: 30rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  font-size: 2.4rem;
  font-weight: 500;
`;
