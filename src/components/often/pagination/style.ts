import styled from 'styled-components';

export const PageNumbers = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const LiPageNumbers = styled.li`
  padding: 0.1rem;
  cursor: pointer;
  &:active {
    color: black;
  }
`;

export const ButtonPageNumbers = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.17rem;
  margin-bottom: 0.6rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
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
`;
