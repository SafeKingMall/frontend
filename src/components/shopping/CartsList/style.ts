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
  border-bottom: 0.1rem solid #efeff1;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.txt};
  font-size: 2.4rem;
  font-weight: 400;
`;
export const ListTitleArea = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`;
export const TitleCheckBoxArea = styled(ListTitleArea)`
  width: 8.333%;
`;
export const TitleInfoArea = styled(ListTitleArea)`
  width: 54.167%;
`;
export const TitleSaleArea = styled(ListTitleArea)`
  width: 12.5%;
`;
export const TitlePriceArea = styled(ListTitleArea)`
  width: 12.5%;
`;
export const TitleSelectArea = styled(ListTitleArea)`
  width: 12.5%;
`;
export const ItemContainer = styled.div`
  width: 100%;
  height: 40rem;
  // margin-top: 2.4rem;
  border-bottom: 0.1rem solid #efeff1;
  display: inline-block;
`;
export const ItemCheckBoxArea = styled.div`
  width: 8.333%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
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
  width: 91.667%;
  height: 10.4rem;
  background-color: #efeff1;
  margin-left: 8.333%;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
`;
export const ItemInfoArea = styled.div`
  width: 54.167%;
  height: 100%;
  display: flex;
`;
export const ItemSaleArea = styled.div`
  width: 12.5%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`;
export const ItemPriceArea = styled.div`
  width: 12.5%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`;
export const ItemSelcetArea = styled.div`
  width: 12.5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ItemImgArea = styled.div`
  width: 18.4rem;
  height: 100%;
  cursor: pointer;
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
  cursor: pointer;
`;
export const ItemPriceText = styled.p`
  font-size: 1.6rem;
`;
export const ListPurchaseBtn = styled.button`
  width: 12rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.palette.green};
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
`;
export const ListDelBtn = styled.button`
  width: 12rem;
  height: 4.8rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 1.6rem;
  font-weight: 400;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
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
export const CountBox = styled.div`
  position: absolute;
  right: 4rem;
  height: 4.8rem;
  width: 18.4rem;
  background-color: #ffffff;
`;
export const CountBtn = styled.button`
  width: 4.8rem;
  height: 100%;
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  color: #000000;
  font-size: 2rem;
  font-weight: 400;
`;
export const CountInput = styled.input`
  width: 8.8rem;
  height: 100%;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const AllCheckBox = styled.input`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 3.2rem;
  accent-color: ${({ theme }) => theme.palette.green};
`;
export const ItemCheckBox = styled(AllCheckBox)`
  position: absolute;
  top: -1.6rem;
`;
export const SelectDelContainer = styled.div`
  width: 100%;
  height: 4.8rem;
  margin-top: 4rem;
  margin-bottom: 8rem;
`;
export const SelectDelBtn = styled(ListDelBtn)`
  height: 100%;
`;
