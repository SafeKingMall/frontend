import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10.2rem;
`;

export const AdminMembertitle = styled.div`
  width: 144rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.darkgreen};
  align-items: end;
  padding: 2.4rem 5rem 2.4rem 5.4rem;
  align-items: center;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      flex-grow: 2.1;
    }
    &:nth-child(2) {
      flex-grow: 2.7;
    }
    &:nth-child(3) {
      flex-grow: 2;
    }
    &:nth-child(4) {
      flex-grow: 0;
    }
  }
`;

export const BigTitle = styled.div`
  font-size: 2.4rem;
  width: 14rem;
  font-weight: 700;
  margin-top: 10rem;
  position: absolute;
`;

export const TabMenu = styled.div`
  display: flex;
  list-style: none;
  cursor: pointer;
  margin-right: 115rem;
  top: 10rem;
  .submenu {
    display: flex;
    height: 3rem;
    font-size: 2.4rem;
    font-weight: 700;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    &:first-child {
      border-right: 0.2rem solid black;
      width: 11rem;
    }
    &:last-child {
      width: 20rem;
    }
  }

  .focused {
    color: ${({ theme }) => theme.palette.green};
  }
`;
