import styled from 'styled-components';

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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  padding-right: 2.4rem;
  padding-left: 7rem;
  align-items: center;
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
`;
