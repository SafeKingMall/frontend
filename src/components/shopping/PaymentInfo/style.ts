import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const PaymentContainer = styled.div`
  width: 144rem;
  height: 36.3rem;
  margin-bottom: 4rem;
`;
export const TitleArea = styled.div`
  width: 100%;
  height: 6.2rem;
  margin-top: 5.8rem;
  padding-bottom: 2.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
`;
export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  margin: 0 3.2rem;
`;
export const PaymentSelectArea = styled.div`
  width: 100%;
  height: 12.8rem;
  padding: 2.4rem 3.2rem;
  display: flex;
`;
export const PayBtn = styled.div`
  width: 12rem;
  height: 8rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  margin-right: 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
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
  height: 4rem;
  ${({ theme }) => theme.common.flexCenter};
`;
export const VirtualPath1 = styled.path`
  fill: #999999;
`;
export const VirtualPath2 = styled.path`
  stroke: #999999;
  fill: none;
  stroke-width: 0.15rem;
`;
export const VirtualRect = styled.rect`
  fill: #fff;
  stroke-width: 0.05rem;
  stroke: #999;
`;
export const BankTransferPath1 = styled.path`
  fill: none;
  stroke: #999;
  stroke-width: 0.15rem;
`;
export const BankTransferPath2 = styled(BankTransferPath1)`
  stroke-linecap: round;
  stroke-linejoin: round;
`;
export const PaymentDesArea = styled.div`
  width: 100%;
  height: 11.5rem;
  margin-bottom: 4rem;
  padding-left: 2.4rem;
  padding-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
`;
export const PaymentDes = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #000000;
`;
