import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const ListContainer = styled.div`
  width: 144rem;
  height: 100%;
`;
export const ListTitleBar = styled.div`
  width: 100%;
  height: 7.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.txt};
  font-size: 2.4rem;
  font-weight: 400;
  padding-right: 3rem;
`;
export const ListTitleArea = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`;
export const TitleInfoArea = styled(ListTitleArea)`
  width: 108rem;
`;
export const TitleSaleArea = styled(ListTitleArea)`
  width: 18rem;
`;
export const TitlePriceArea = styled(ListTitleArea)`
  width: 18rem;
`;
export const ItemContainer = styled.div`
  width: 100%;
  height: 40rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  display: inline-block;
  padding-left: 9rem;
  padding-right: 3rem;
`;
export const ItemContentArea = styled.div`
  width: 100%;
  height: 18.4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
`;
export const ItemCountArea = styled.div`
  width: 100%;
  height: 10.4rem;
  background-color: ${({ theme }) => theme.palette.lightgray};
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
`;
export const ItemInfoArea = styled.div`
  width: 108rem;
  height: 100%;
  display: flex;
`;
export const ItemSaleArea = styled.div`
  width: 18rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const ItemPriceArea = styled.div`
  width: 18rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const ItemImgArea = styled.div`
  width: 18.4rem;
  height: 100%;
`;
export const ItemTextArea = styled.div`
  height: 100%;
  margin-left: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CategoryText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
`;
export const ItemNameText = styled.p`
  margin-bottom: 1.6rem;
  font-weight: 500;
`;
export const ItemPriceText = styled.p`
  font-size: 1.6rem;
`;
export const CountText = styled.p`
  position: absolute;
  left: 5.1rem;
  font-weight: 500;
`;
export const CountNum = styled.p`
  position: absolute;
  left: 11.1rem;
`;
