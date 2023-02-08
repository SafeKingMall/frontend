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
  height: 70rem;
  margin-top: 8.3rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 10.4rem;
`;
export const DetailImgArea = styled.div`
  width: 70rem;
  height: 70rem;
  margin-right: 4rem;
  ${({ theme }) => theme.common.flexCenter};
  position: relative;
`;
export const DetailImg = styled.img`
  width: 70rem;
  height: 70rem;
  border: 0.1rem solid #dddddd;
`;
export const Soldout = styled.div`
  position: absolute;
  font-size: 2.4rem;
  font-weight: 500;
  color: #ffffff;
  width: 70rem;
  height: 70rem;
  ${({ theme }) => theme.common.flexCenter};
  /* background-color: rgba(33, 33, 33, 0.8); */
`;
export const ItemTextArea = styled.div`
  width: 66rem;
  height: 100%;
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
  height: 0.2rem;
  background-color: #212121;
  margin-top: 4.8rem;
  box-shadow: 0px 2px 6px 0px #00000080;
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
  border-radius: 0.5rem;
`;
export const PurchaseBtn = styled(Btn)`
  background-color: #ffffff;
  border: 0.1rem solid ${(props) => props.theme.palette.green};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.palette.green};
`;
export const DesContainer = styled.div`
  width: 144rem;
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
  /* img {
    width: 100%;
    height: auto;
  } */
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
export const TotalPriceWrap = styled.div`
  width: 66rem;
  height: 8rem;
  position: absolute;
  bottom: 12.8rem;
  display: flex;
  align-items: center;
  border-top: 0.1rem solid #999999;
  border-bottom: 0.1rem solid #999999;
`;
export const TotalPriceArea = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const CountBox = styled.div`
  position: absolute;
  top: 50%;
  left: 1.2rem;
  transform: translate(0, -50%);
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
export const TotalPriceBox = styled.div`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
`;
export const TotalPriceTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  margin-right: 1.6rem;
`;
export const TotalPrice = styled.span`
  font-size: 3.2rem;
  font-weight: 500;
  color: #ff003e;
`;
export const DesWrap = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
`;
export const DesLine = styled.div`
  width: 21rem;
  height: 0.6rem;
  box-shadow: 0px 2px 6px 0px #00000080;
  background-color: ${({ theme }) => theme.palette.green};
  margin-bottom: 15.2rem;
  border-radius: 1.5rem;
`;
export const LoadingBox = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 144rem;
  height: 78rem;
  margin-top: 8.3rem;
  margin-bottom: 10.4rem;
`;
export const DesLoadingBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenter};
  margin-bottom: 10.4rem;
`;
