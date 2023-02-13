import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* padding: 0 5rem; */
`;
export const ItemArea = styled.div`
  height: 100%;
  width: 144rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 6.4rem;
`;
export const ItemContainer = styled.div`
  cursor: pointer;
  height: 46.5rem;
  width: 33.6rem;
  margin-right: 3.2rem;
  margin-bottom: 5.6rem;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;
export const ItemImgArea = styled.div`
  width: 33.6rem;
  height: 33.6rem;
  border: 1px solid #dddddd;
`;
export const ItemImg = styled.img`
  width: 33.6rem;
  height: 33.6rem;
  border: 1px solid #dddddd;
`;
export const Category = styled.p`
  font-size: 1.6rem;
  margin-top: 2.4rem;
`;
export const ItemName = styled.p`
  font-size: 2.4rem;
  margin-top: 1rem;
`;
export const Price = styled.p`
  font-size: 2rem;
  margin-top: 2.6rem;
  color: ${(props) => props.theme.palette.txtgray};
`;
