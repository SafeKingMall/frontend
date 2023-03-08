import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const PaymentContainer = styled.div`
  width: 14.4rem;
  height: 3.63rem;
  margin-bottom: 0.4rem;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
    height: initial;
  }
`;
export const TitleArea = styled.div`
  width: 100%;
  height: 0.62rem;
  margin-top: 0.58rem;
  padding-bottom: 0.24rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  @media (max-width: 720px) {
    height: initial;
  }
`;
export const Title = styled.h1`
  font-size: 0.32rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  margin: 0 0.32rem;
  @media (max-width: 720px) {
    font-size: 0.56rem;
    font-weight: 700;
    margin: 0;
  }
`;
export const PaymentSelectArea = styled.div`
  width: 100%;
  height: 1.28rem;
  padding: 0.24rem 0.32rem;
  display: flex;
  @media (max-width: 720px) {
    flex-wrap: wrap;
    padding: 0.32rem 0;
    justify-content: space-between;
    height: initial;
  }
`;
export const PayBtn = styled.div`
  width: 1.2rem;
  height: 0.8rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  margin-right: 0.16rem;
  font-size: 0.16rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  @media (max-width: 720px) {
    width: 32%;
    height: 2.2rem;
    margin-right: 0;
    margin-bottom: 0.32rem;
  }
`;
export const PayRadio = styled.input.attrs({ type: 'radio' })`
  display: none;
`;
export const PayRadioLabel = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const PayIconArea = styled.div`
  width: 100%;
  height: 0.4rem;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    height: 1.3rem;
  }
`;
export const PayText = styled.p`
  font-size: 0.16rem;
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
export const VirtualPath1 = styled.path`
  fill: #999999;
`;
export const VirtualPath2 = styled.path`
  stroke: #999999;
  fill: none;
  stroke-width: 0.015rem;
`;
export const VirtualRect = styled.rect`
  fill: #fff;
  stroke-width: 0.005rem;
  stroke: #999;
`;
export const BankTransferPath1 = styled.path`
  fill: none;
  stroke: #999;
  stroke-width: 0.015rem;
`;
export const BankTransferPath2 = styled(BankTransferPath1)`
  stroke-linecap: round;
  stroke-linejoin: round;
`;
export const PaymentDesArea = styled.div`
  width: 100%;
  margin-bottom: 0.4rem;
  padding-left: 0.24rem;
  padding-bottom: 0.24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  line-height: 0.22rem;
  @media (max-width: 720px) {
    line-height: 0.56rem;
  }
`;
export const PaymentDes = styled.p`
  font-size: 0.16rem;
  font-weight: 400;
  color: #000000;
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
