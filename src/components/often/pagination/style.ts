import styled from 'styled-components';

export const PageNumbers = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    margin-bottom: 1rem;
  }
`;

export const LiPageNumbers = styled.li`
  display: flex;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  &:active {
    color: black;
  }
`;

export const ButtonPageNumbers = styled.button`
  height: 0.42rem;
  background-color: transparent;
  border: none;
  font-size: 0.17rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 720px) {
    margin-bottom: 0;
    font-size: 0.5rem;
    height: 1.2rem;
  }
`;

export const Paging2 = styled.li`
  padding: 0.1rem;
  cursor: pointer;
  font-size: 0.17rem;
  color: ${({ theme }) => theme.palette.txtgray};
  &:active {
    background-color: ${({ theme }) => theme.palette.green};
    cursor: pointer;
    color: white;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    padding: 5% 10%;
  }
`;
