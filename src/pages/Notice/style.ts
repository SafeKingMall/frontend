import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoticeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 2.4rem 2.4rem 2.4rem 131rem;
  padding: 1.8rem 4.3rem;
  font-size: 1.5rem;
  align-items: center;
`;

export const Noticetitle = styled.div`
  width: 144rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: #e9f5ed;
  align-items: end;
  padding: 2.4rem 5rem 2.4rem 5.4rem;
  align-items: center;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
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

export const Banner = styled.div`
  background-color: #289951;
  height: 47rem;
  position: relative;
  font-size: 10rem;
`;

export const content = styled.div`
  background-color: pink;
  width: 94.5rem;
  margin-top: 7rem;
  height: 2.4rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

export const Paging2 = styled.li`
  padding: 1rem;
  cursor: pointer;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.palette.txtgray};
  &:active {
    background-color: ${({ theme }) => theme.palette.green};
    cursor: pointer;
    color: white;
  }
`;

export const pageNumbers = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 12rem;
`;

export const lipageNumbers = styled.li`
  padding: 1rem;
  cursor: pointer;
  &:active {
    color: black;
  }
`;

export const buttonpageNumbers = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;
