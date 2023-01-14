import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  // justify-content: center;
  // position: relative;
`;

export const BigTitle = styled.div`
  font-size: 2.4rem;
  width: 14rem;
  font-weight: 700;
  margin-top: 10rem;
  margin-left: 1.5rem;
  position: absolute;
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

export const DataList = styled.ul`
  margin-bottom: 10.4rem;s
`;

export const AdminTitle = styled.div`
  width: 144rem;
  margin-top: 2.4rem;
  display: flex;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  padding: 2.4rem 5rem 2.4rem 5.4rem;
  align-items: center;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      flex-grow: 1.5;
    }
    &:nth-child(2) {
      flex-grow: 2;
    }
    &:nth-child(3) {
      flex-grow: 2;
    }
    &:nth-child(4) {
      flex-grow: 0;
    }
  }
`;

export const Container = styled.div`
  cursor: pointer;
  width: 144rem;
  display: flex;
  align-items: center;
  padding: 2.4rem 2.4rem 2.4rem 5.8rem;
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      flex-grow: 2.1;
    }
    &:nth-child(2) {
      flex-grow: 2.5;
    }
    &:nth-child(3) {
      flex-grow: 1.9;
    }
    &:nth-child(4) {
      flex-grow: 0;
    }
  }
`;

export const AdminButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 1.6rem;
  width: 6.4rem;
  height: 4rem;
  align-items: center;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
`;

export const AdminButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 1.6rem;
  width: 6.4rem;
  height: 4rem;
  margin-right: 0.8rem;
  align-items: center;
`;
