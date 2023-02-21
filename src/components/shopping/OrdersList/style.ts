import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const ListContainer = styled.div`
  width: 14.4rem;
  height: 100%;
`;
export const ListTitleBar = styled.div`
  width: 100%;
  height: 0.72rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.txt};
  font-size: 0.24rem;
  font-weight: 400;
  padding-right: 0.3rem;
`;
export const ListTitleArea = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`;
export const TitleInfoArea = styled(ListTitleArea)`
  width: 10.8rem;
`;
export const TitleSaleArea = styled(ListTitleArea)`
  width: 1.8rem;
`;
export const TitlePriceArea = styled(ListTitleArea)`
  width: 1.8rem;
`;
export const ItemContainer = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  display: inline-block;
  padding-left: 0.9rem;
  padding-right: 0.3rem;
`;
export const ItemImg = styled.img`
  width: 1.84rem;
  height: 1.84rem;
  border: 0.01rem solid #efeff1;
`;
export const ItemContentArea = styled.div`
  width: 100%;
  height: 1.84rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  display: flex;
  font-size: 0.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
`;
export const ItemCountArea = styled.div`
  width: 100%;
  height: 1.04rem;
  background-color: ${({ theme }) => theme.palette.lightgray};
  position: relative;
  display: flex;
  align-items: center;
  font-size: 0.2rem;
  font-weight: 400;
`;
export const ItemInfoArea = styled.div`
  width: 10.8rem;
  height: 100%;
  display: flex;
`;
export const ItemSaleArea = styled.div`
  width: 1.8rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const ItemPriceArea = styled.div`
  width: 1.8rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const ItemImgArea = styled.div`
  width: 1.84rem;
  height: 100%;
`;
export const ItemTextArea = styled.div`
  height: 100%;
  margin-left: 0.48rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CategoryText = styled.p`
  font-size: 0.16rem;
  margin-bottom: 0.08rem;
`;
export const ItemNameText = styled.p`
  margin-bottom: 0.16rem;
  font-weight: 500;
`;
export const ItemPriceText = styled.p`
  font-size: 0.16rem;
`;
export const CountText = styled.p`
  position: absolute;
  left: 0.51rem;
  font-weight: 500;
`;
export const CountNum = styled.p`
  position: absolute;
  left: 1.11rem;
`;
