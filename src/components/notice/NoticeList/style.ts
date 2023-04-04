import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 14.4rem;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  height: 100%;
  width: 14.4rem;
  display: flex;
  align-items: center;
  padding: 0.24rem 0.24rem 0.24rem 0.58rem;
  border-bottom: 0.03rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      width: 2rem;
    }
    &:nth-child(2) {
      width: 8.5rem;
    }
    &:nth-child(3) {
      width: 3rem;
      text-align: right;
    }
  }
  @media (max-width: 720px) {
    justify-content: space-between;
    width: 100%;
    font-size: 0.45rem;
    padding: 0.4rem 2%;
    div {
      &:first-child {
        display: none;
      }
    }
  }
`;

export const DataList = styled.ul`
  margin-bottom: 1.04rem;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const NoticeTitle = styled.div`
  width: 14.4rem;
  margin-top: 0.24rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  /* align-items: end; */
  padding: 0.24rem 0.5rem 0.24rem 0.54rem;
  align-items: center;
  border-top: 0.03rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.03rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.24rem;
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
  @media screen and (max-width: 720px) {
    padding: 0;
    width: 100%;
    margin-top: 0.8rem;

    div {
      display: none;
    }
  }
`;

export const Select = styled.select`
  /* margin-right: 0.8rem; */
  width: 1.25rem;
  height: 0.4rem;
  border: 0.01rem solid #ddd;
  font-size: 0.2rem;
  padding: 0 0.08rem;
  font-weight: 400;
  background-color: #fefefe;
  color: #686868;
  outline: none;
  @media screen and (max-width: 720px) {
    width: 29%;
    height: 100%;
    margin-right: 1%;
    font-size: 0.5rem;
  }
`;
export const NoticeButtonArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;
export const NoticeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  /* margin-left: 13rem; */
  width: 1.3rem;
  height: 0.5rem;
  font-size: 0.15rem;
  position: absolute;
  bottom: 2.9rem;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    width: 20%;
    height: 1.3rem;
    position: unset;
  }
`;
export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 14.4rem;
  height: 3rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
  @media screen and (max-width: 720px) {
    width: 272%;
    margin-left: -85%;
    font-size: 0.5rem;
  }
`;
