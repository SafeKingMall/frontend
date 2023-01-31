import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
`;
export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailArea = styled.div`
  width: 144rem;
  height: 78rem;
  margin-top: 8.3rem;
  border-bottom: 0.1rem solid #000000;
  display: flex;
  flex-direction: row;
  margin-bottom: 17.6rem;
`;
export const ItemTextArea = styled.div`
  width: 66rem;
  height: 70rem;
  position: relative;
`;
export const Category = styled.p`
  font-size: 2.4rem;
  color: ${(props) => props.theme.palette.txtblack};
`;
export const ItemName = styled.p`
  font-size: 3.6rem;
  margin-top: 1.2rem;
  color: ${(props) => props.theme.palette.txtblack};
`;
export const ItemNameLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #909090;
  margin-top: 4.8rem;
`;
export const PriceArea = styled.div`
  width: 100%;
  height: 3.8rem;
  margin-top: 3.2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Price = styled.p`
  font-size: 3.2rem;
  display: flex;
  color: #000000;
`;
export const BtnArea = styled.div`
  width: 66rem;
  height: 10.4rem;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`;
export const Btn = styled.button`
  width: 31.8rem;
  height: 100%;
  font-size: 3.2rem;
  font-weight: 500;
`;
export const BasketBtn = styled(Btn)`
  background-color: ${(props) => props.theme.palette.green};
  color: #ffffff;
`;
export const PurchaseBtn = styled(Btn)`
  background-color: #ffffff;
  border: 0.1rem solid ${(props) => props.theme.palette.green};
  color: ${(props) => props.theme.palette.green};
`;
export const DesContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};
  overflow: hidden;
  align-items: flex-start;
  position: relative;
`;
export const Description = styled.div`
  width: 86rem;
  h1 {
    font-size: 6.4rem;
  }
  h2 {
    font-size: 5.6rem;
  }
  h3 {
    font-size: 4.8rem;
  }
  h4 {
    font-size: 4rem;
  }
  h5 {
    font-size: 3.2rem;
  }
  h6 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.6rem;
  }
  span {
    font-size: 1.6rem;
  }
  h1 > span {
    font-size: 6.4rem;
  }
  h2 > span {
    font-size: 6.4rem;
  }
  h3 > span {
    font-size: 6.4rem;
  }
  h4 > span {
    font-size: 6.4rem;
  }
  h5 > span {
    font-size: 6.4rem;
  }
  h6 > span {
    font-size: 6.4rem;
  }
  p > span {
    font-size: 1.6rem;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  img {
    width: 100%;
  }
`;
export const DesGradation = styled.div`
  width: 86rem;
  height: 16rem;
  position: absolute;
  background: linear-gradient(#ffffff 0%, rgba(255, 255, 255, 0) 100%, #ffffff 100%);
  bottom: 0;
  transform: rotate(180deg);
`;
export const ShowDesBtnContainer = styled.div`
  width: 100%;
  height: 8.1rem;
  ${({ theme }) => theme.common.flexCenter};
  margin-top: 3.6rem;
  margin-bottom: 20.1rem;
`;
export const ShowDesBtn = styled.div`
  width: 23.9rem;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 3.12rem;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
`;
export const CountBoxArea = styled.div`
  width: 66rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.palette.lightgray};
  position: absolute;
  bottom: 22.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CountText = styled.p`
  position: absolute;
  left: 5.1rem;
  font-size: 2rem;
  font-weight: 500;
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
export const TotalPriceArea = styled.div`
  width: 66rem;
  height: 12rem;
  position: absolute;
  bottom: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const TotalPriceTitle = styled.span`
  font-size: 3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  margin-right: 8.6rem;
`;
export const TotalPrice = styled(TotalPriceTitle)`
  font-weight: 700;
  margin-right: 0;
`;
export const LoadingBox = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 144rem;
  height: 78rem;
  margin-top: 8.3rem;
  border-bottom: 0.1rem solid #000000;
  margin-bottom: 17.6rem;
`;
export const DesLoadingBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};
  margin-bottom: 17.6rem;
`;
