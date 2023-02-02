import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  align-items: end;
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
`;

export const Select = styled.select`
  margin-right: 0.8rem;
  width: 12.5rem;
  height: 4rem;
  border: 0.1rem solid #ddd;
  font-size: 1.2rem;
  padding: 0 0.8rem;
  font-weight: 400;
  background-color: #fefefe;
  color: #686868;
  outline: none;
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
`;
export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 144rem;
  height: 30rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  font-size: 2.4rem;
  font-weight: 500;
`;
