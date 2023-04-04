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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* @media screen and (max-width: 720px) {
    width: 80%;
  } */
`;
export const SearchArea = styled.div`
  width: 14.4rem;
  height: 0.4rem;
  display: flex;
  justify-content: flex-end;
  /* margin-top: 10.2rem; */
  @media screen and (max-width: 720px) {
    width: 100%;
    height: 1rem;
  }
`;
export const Select = styled.select`
  margin-right: 0.08rem;
  width: 1.25rem;
  height: 0.4rem;
  border: 0.01rem solid #ddd;
  font-size: 0.3rem;
  padding: 0 0.08rem;
  font-weight: 400;
  background-color: #fefefe;
  color: #686868;
  outline: none;
`;
export const SearchBar = styled.input`
  width: 2.4rem;
  height: 0.4rem;
  padding-left: 0.16rem;
  padding-right: 0.56rem;
  font-size: 0.2rem;
  background-color: #fefefe;
  border: 0.01rem solid #ddd;
  color: ${(props) => props.theme.palette.txtblack};
  outline: none;
  @media screen and (max-width: 720px) {
    width: 70%;
    height: 100%;
    font-size: 0.5rem;
  }
`;

export const SearchButton = styled.button`
  width: 0.4rem;
  height: 0.4rem;
  background-color: #289951;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    width: 10%;
    height: 1rem;
  }
`;
