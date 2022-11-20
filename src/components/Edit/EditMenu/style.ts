import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import safekinglogo from './safekinglogo.jpg';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.darkgreen};
  width: 25rem;
  height: 100rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 2rem;
  // font-weight: 400;
  // line-height: 19px;
  /* color: salmon; */
`;

export const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  padding: 1rem 1rem;
  margin: 0 auto;
  text-align: center;
  color: black;
  &:focus {
    color: ${(props) => props.theme.palette.green};
  }
`;

export const logo = styled.div`
  background-image: url('/img/HeaderLogo.png');
  background-size: 100% 100%;
  width: 50%;
  margin: 2rem 5rem;
  height: 8%;
`;
