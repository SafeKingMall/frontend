import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const SearchArea = styled.div`
  width: 144rem;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  margin-top: 10.2rem;
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
export const SearchBar = styled.input`
  width: 24rem;
  height: 4rem;
  padding-left: 1.6rem;
  padding-right: 5.6rem;
  font-size: 1.2rem;
  background-color: #fefefe;
  border: 1px solid #ddd;
  color: ${(props) => props.theme.palette.txtblack};
  outline: none;
`;

export const Searchbutton = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: #289951;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
