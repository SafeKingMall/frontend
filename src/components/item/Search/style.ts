import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const SearchArea = styled.div`
  width: 14.4rem;
  height: 0.4rem;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.02rem;
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
`;
export const SearchBtn = styled.button`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.palette.green};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
