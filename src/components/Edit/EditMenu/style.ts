import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 3rem;
  padding: 0.1rem;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  font-size: 0.24rem;
`;

export const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  padding: 0.1rem 0.1rem;
  width: 1.5rem;
  height: 0.3rem;
  margin: 0 auto;
  text-align: center;
  color: black;
  margin-bottom: 0.4rem;
  &:focus {
    color: ${(props) => props.theme.palette.green};
  }
  &:hover {
    color: ${(props) => props.theme.palette.green};
  }
`;
