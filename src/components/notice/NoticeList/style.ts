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
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      flex-grow: 1;
    }
    &:nth-child(2) {
      display: flex;
      flex-grow: 8;
    }
    &:nth-child(3) {
      flex-grow: 0;
    }
  }
`;
