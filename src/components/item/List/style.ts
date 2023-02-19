import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const ItemArea = styled.div`
  height: 100%;
  width: 144rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ScrollDiv = styled.div`
  height: 10.4rem;
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const ItemContainer = styled.div`
  cursor: pointer;
  height: 50rem;
  width: 33.6rem;
  margin-right: 3.2rem;
  margin-bottom: 5.6rem;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;
export const ItemImg = styled.img`
  width: 33.6rem;
  height: 33.6rem;
  border: 1px solid #dddddd;
`;
export const ItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14rem;
`;
export const Category = styled.p`
  font-size: 1.6rem;
  /* margin-top: 2.4rem; */
`;
export const ItemName = styled.p`
  font-size: 2.4rem;
  margin-top: 1rem;
  width: 33.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const Price = styled.p`
  font-size: 2rem;
  /* margin-top: 2.6rem; */
  color: ${(props) => props.theme.palette.txtgray};
`;
export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 30rem;
  border-top: 0.2rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  font-size: 2.4rem;
  font-weight: 500;
`;
