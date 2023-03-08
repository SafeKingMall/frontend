import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const ListContainer = styled.div`
  width: 14.4rem;
  height: 100%;
  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
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
  @media (max-width: 720px) {
    width: 100%;
    height: 1.44rem;
    padding: 0 5%;
    font-size: 0.4rem;
    justify-content: space-between;
  }
`;
export const ListTitleArea = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`;
export const MobileTitle = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    font-size: 0.56rem;
    font-weight: 700;
  }
`;
export const TitleInfoArea = styled(ListTitleArea)`
  width: 10.8rem;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const TitleSaleArea = styled(ListTitleArea)`
  width: 1.8rem;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const TitlePriceArea = styled(ListTitleArea)`
  width: 1.8rem;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const ItemContainer = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  display: inline-block;
  padding-left: 0.9rem;
  padding-right: 0.3rem;
  @media (max-width: 720px) {
    padding: 0 5%;
    height: initial;
  }
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
  @media (max-width: 720px) {
    height: initial;
    position: relative;
  }
`;
export const ItemImgArea = styled.div`
  width: 1.84rem;
  height: 1.84rem;
  cursor: pointer;
  border: 0.01rem solid #efeff1;
  position: relative;
  @media (max-width: 720px) {
    width: 40%;
    padding-bottom: 40%;
    height: initial;
  }
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  @media (max-width: 720px) {
    width: 100%;
    height: 1.6rem;
    margin-left: 0;
    margin-bottom: 0.3rem;
  }
`;
export const ItemInfoArea = styled.div`
  width: 10.8rem;
  height: 100%;
  display: flex;
  @media (max-width: 720px) {
    /* width: 76%; */
    align-items: center;
  }
`;
export const ItemSaleArea = styled.div`
  width: 1.8rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    display: none;
  }
`;
export const ItemPriceArea = styled.div`
  width: 1.8rem;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    display: none;
  }
`;
export const ItemTextArea = styled.div`
  height: 100%;
  margin-left: 0.48rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 720px) {
    width: 60%;
    margin-left: 0;
    padding-left: 0.48rem;
  }
`;
export const CategoryText = styled.p`
  font-size: 0.16rem;
  margin-bottom: 0.08rem;
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
export const ItemNameText = styled.p`
  margin-bottom: 0.16rem;
  font-weight: 500;
  @media (max-width: 720px) {
    font-size: 0.48rem;
  }
`;
export const ItemPriceText = styled.p`
  font-size: 0.16rem;
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
export const MobileCountPriceArea = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: initial;
    position: absolute;
    left: 0.4rem;
    font-size: 0.48rem;
    font-weight: 500;
  }
`;
export const MobileCountPrice = styled.span`
  margin-left: 0.3rem;
  font-size: 0.48rem;
  font-weight: 400;
`;
export const MobileCountArea = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: initial;
    position: absolute;
    right: 0.4rem;
    font-size: 0.48rem;
    font-weight: 500;
  }
`;
export const MobileCount = styled.span`
  margin-left: 0.3rem;
  font-size: 0.48rem;
  font-weight: 500;
`;
export const CountText = styled.p`
  position: absolute;
  left: 0.51rem;
  font-weight: 500;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const CountNum = styled.p`
  position: absolute;
  left: 1.11rem;
  @media (max-width: 720px) {
    display: none;
  }
`;
