import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 30rem;
  // height: 100rem;
  padding: 1rem;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
`;

export const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  padding: 1rem 1rem;
  width: 15rem;
  height: 3rem;
  margin: 0 auto;
  text-align: center;
  color: black;
  margin-bottom: 4rem;
  &:focus {
    color: ${(props) => props.theme.palette.green};
  }
  &:hover {
    color: ${(props) => props.theme.palette.green};
  }
`;
