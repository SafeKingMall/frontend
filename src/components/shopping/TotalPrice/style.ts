import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const TotalPriceContainer = styled.div`
  width: 14.4rem;
  height: 100%;
  border-top: 0.02rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  display: flex;
`;
export const TotalPriceTitleArea = styled.div`
  width: 50%;
  height: 3.7rem;
`;
export const TotalPriceInfoArea = styled.div`
  width: 50%;
  height: 3.7rem;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin-top: 0.24rem;
  margin-left: 0.3rem;
  font-size: 0.32rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
`;
export const InfoTextWrap = styled.div`
  width: 100%;
  height: 2.84rem;
  border-bottom: 0.01rem solid #efeff1;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const InfoTextArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const InfoText = styled.span`
  font-size: 0.24rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
`;
export const ResultPriceArea = styled.div`
  width: 100%;
  height: 0.86rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ResultPriceText = styled(InfoText)`
  font-weight: 700;
`;
export const ResultPrice = styled.span`
  font-size: 0.32rem;
  font-weight: 700;
  color: #d20000;
`;
