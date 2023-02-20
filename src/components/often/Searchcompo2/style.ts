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
`;
export const SearchArea = styled.div`
  width: 144rem;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  /* margin-top: 10.2rem; */
  @media screen and (max-width: 400px) {
    height: 13rem;
    margin-bottom: 5%;
  }
`;

export const SearchBar = styled.input`
  width: 24rem;
  height: 4rem;
  padding-left: 1.6rem;
  padding-right: 5.6rem;
  font-size: 1.2rem;
  background-color: #fefefe;
  border: 0.1rem solid #ddd;
  color: ${(props) => props.theme.palette.txtblack};
  outline: none;
  @media screen and (max-width: 400px) {
    width: 67%;
    height: 13rem;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const SearchButton = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: #289951;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 9%;
    height: 13rem;
  }
`;
