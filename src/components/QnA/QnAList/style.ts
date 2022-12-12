import styled from 'styled-components';

// ---------------------------------------

export const Wrapper = styled.div`
  //   background-color: lavenderblush;
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
  // flex-direction: row;
  // flex-wrap: wrap;
  // align-items: end;
  // justify-content: space-between;
  align-items: center;
  padding: 2.4rem 2.4rem 2.4rem 5.8rem;
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      flex-grow: 1;
      // flex-shrink: 2;
    }
    &:nth-child(2) {
      display: flex;
      flex-grow: 3.7;
      svg {
        margin-left: 1rem;
      }
    }
    &:nth-child(3) {
      flex-grow: 2.5;
    }
    &:nth-child(4) {
      flex-grow: 0;
    }
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
