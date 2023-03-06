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
    /* padding: 0 5%; */
  }
`;
export const ListTitleBar = styled.div`
  width: 100%;
  height: 0.72rem;
  border-bottom: 0.01rem solid #efeff1;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.txt};
  font-size: 0.24rem;
  font-weight: 400;
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
export const TitleCheckBoxArea = styled(ListTitleArea)`
  width: 8.333%;
  @media (max-width: 720px) {
    ${({ theme }) => theme.common.flexCenter};
    width: initial;
  }
`;
export const TitleInfoArea = styled(ListTitleArea)`
  width: 54.167%;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const TitleSaleArea = styled(ListTitleArea)`
  width: 12.5%;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const TitlePriceArea = styled(ListTitleArea)`
  width: 12.5%;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const TitleSelectArea = styled(ListTitleArea)`
  width: 12.5%;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const ItemContainer = styled.div`
  width: 100%;
  height: 4rem;
  // margin-top: 2.4rem;
  border-bottom: 0.01rem solid #efeff1;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    padding: 0 5%;
    height: initial;
  }
`;
export const ItemCheckBoxArea = styled.div`
  width: 8.333%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 720px) {
    justify-content: flex-start;
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
    /* justify-content: space-between; */
  }
`;
// export const MobileListBetween = styled.div`
//   display: flex;
//   width: 62.5%;
//   @media (max-width: 720px) {
//     display: flex;
//   }
// `;
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
  width: 91.667%;
  height: 1.04rem;
  background-color: #efeff1;
  margin-left: 8.333%;
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
  width: 54.167%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    width: 76%;
    align-items: center;
  }
`;
export const ItemSaleArea = styled.div`
  width: 12.5%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
  @media (max-width: 720px) {
    display: none;
  }
`;
export const ItemPriceArea = styled.div`
  width: 12.5%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
  @media (max-width: 720px) {
    display: none;
  }
`;
export const ItemSelectArea = styled.div`
  width: 12.5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 720px) {
    position: absolute;
    right: 0;
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
  cursor: pointer;
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
export const ListPurchaseBtn = styled.button`
  width: 1.2rem;
  height: 0.48rem;
  background-color: ${({ theme }) => theme.palette.green};
  color: #ffffff;
  font-size: 0.16rem;
  font-weight: 400;
  margin-bottom: 0.16rem;
  @media (max-width: 720px) {
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
    margin-bottom: 0.4rem;
  }
`;
export const ListDelBtn = styled.button`
  width: 1.2rem;
  height: 0.48rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 0.16rem;
  font-weight: 400;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  @media (max-width: 720px) {
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
  }
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
export const CountBox = styled.div`
  position: absolute;
  right: 0.4rem;
  height: 0.48rem;
  width: 1.84rem;
  background-color: #ffffff;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    width: 3.8rem;
    height: 1rem;
  }
`;
export const CountBtn = styled.button`
  width: 0.48rem;
  height: 100%;
  border: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  color: #000000;
  font-size: 0.2rem;
  font-weight: 400;
  @media (max-width: 720px) {
    width: 1rem;
    height: 1rem;
    font-size: 0.64rem;
  }
`;
export const CountInput = styled.input`
  width: 0.88rem;
  height: 100%;
  border-top: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.txtgray};
  text-align: center;
  font-size: 0.2rem;
  font-weight: 400;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: 720px) {
    width: 1.8rem;
    height: 1rem;
    font-size: 0.48rem;
  }
`;
export const AllCheckBox = styled.input`
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 0.32rem;
  accent-color: ${({ theme }) => theme.palette.green};
  @media (max-width: 720px) {
    width: 0.64rem;
    height: 0.64rem;
  }
`;
export const AllCheckBoxLabel = styled.label.attrs({ htmlFor: 'allCheck' })`
  display: none;
  @media (max-width: 720px) {
    display: initial;
    padding-left: 0.2rem;
  }
`;
export const MobileSelectDel = styled.div`
  display: none;
  @media (max-width: 720px) {
    ${({ theme }) => theme.common.flexCenter};
    height: 100%;
    color: #999999;
  }
`;
export const ItemCheckBox = styled(AllCheckBox)`
  position: absolute;
  top: -0.16rem;
  @media (max-width: 720px) {
    top: 0;
  }
`;
export const SelectDelContainer = styled.div`
  width: 100%;
  height: 0.48rem;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const SelectDelBtn = styled(ListDelBtn)`
  height: 100%;
`;
