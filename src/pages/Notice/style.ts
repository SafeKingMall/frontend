import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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

export const Banner = styled.div`
  background-color: #289951;
  height: 47rem;
  position: relative;
  font-size: 10rem;
`;
