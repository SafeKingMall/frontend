import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.02rem;
  @media (max-width: 720px) {
    padding: 0 5%;
    margin-bottom: 0.7rem;
    margin-top: 0.3rem;
  }
`;
export const SearchArea = styled.div`
  width: 14.4rem;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 720px) {
    width: 100%;
    /* justify-content: flex-start; */
  }
`;
export const Select = styled.select`
  margin-right: 0.08rem;
  width: 1.25rem;
  height: 0.4rem;
  border: 0.01rem solid #ddd;
  font-size: 0.12rem;
  padding: 0 0.08rem;
  font-weight: 400;
  background-color: #fefefe;
  color: #686868;
  outline: none;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 25%;
    height: 1rem;
    font-size: 0.36rem;
  }
`;
export const SearchBar = styled.input`
  width: 2.4rem;
  height: 0.4rem;
  padding-left: 0.16rem;
  padding-right: 0.56rem;
  font-size: 0.12rem;
  background-color: #fefefe;
  border: 0.01rem solid #ddd;
  color: ${(props) => props.theme.palette.txtblack};
  outline: none;
  @media (max-width: 720px) {
    width: 75%;
    height: 1rem;
    font-size: 0.36rem;
  }
`;
export const SearchBtn = styled.button`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.palette.green};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    width: 1rem;
    height: 1rem;
  }
`;
