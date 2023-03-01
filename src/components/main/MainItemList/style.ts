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
  width: 14.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
    justify-content: space-between;
  }
`;
export const ItemContainer = styled.div`
  cursor: pointer;
  height: 5rem;
  width: 3.36rem;
  margin-right: 0.32rem;
  margin-bottom: 0.56rem;
  &:nth-child(4n) {
    margin-right: 0;
  }
  @media (max-width: 720px) {
    width: 47.5%;
    height: 100%;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }
`;
export const ItemImgWrap = styled.div`
  width: 3.36rem;
  height: 3.36rem;
  border: 1px solid #dddddd;
  @media (max-width: 720px) {
    width: 100%;
    padding-bottom: 100%;
    border: 1px solid #dddddd;
    position: relative;
  }
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 720px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const ItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1.5rem;
  @media (max-width: 720px) {
    height: 2.6rem;
  }
`;
export const Category = styled.p`
  font-size: 0.16rem;
  /* margin-top: 2.4rem; */
  @media (max-width: 720px) {
    font-size: 0.35rem;
  }
`;
export const ItemName = styled.p`
  font-size: 0.24rem;
  margin-top: 0.1rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (max-width: 720px) {
    font-size: 0.45rem;
  }
`;
export const Price = styled.p`
  font-size: 0.2rem;
  /* margin-top: 2.6rem; */
  color: ${(props) => props.theme.palette.txtgray};
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
