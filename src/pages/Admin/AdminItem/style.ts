import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  margin-bottom: 7.1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin-left: 130rem;
  width: 13rem;
  height: 5rem;
  font-size: 1.5rem;
  position: absolute;
  bottom: 18%;
`;
