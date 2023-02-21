import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const ItemArea = styled.div`
  height: 100%;
  width: 14.4rem;
  margin-top: 0.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ScrollDiv = styled.div`
  height: 1.04rem;
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};
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
`;
export const ItemImg = styled.img`
  width: 3.36rem;
  height: 3.36rem;
  border: 1px solid #dddddd;
`;
export const ItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1.4rem;
`;
export const Category = styled.p`
  font-size: 0.16rem;
  /* margin-top: 2.4rem; */
`;
export const ItemName = styled.p`
  font-size: 0.24rem;
  margin-top: 0.1rem;
  width: 3.36rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const Price = styled.p`
  font-size: 0.2rem;
  /* margin-top: 2.6rem; */
  color: ${(props) => props.theme.palette.txtgray};
`;
export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 3rem;
  border-top: 0.02rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
`;
