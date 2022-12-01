import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
`;
export const TotalPriceContainer = styled.div`
  width: 144rem;
  height: 100%;
  border-top: 0.2rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.green};
  display: flex;
`;
export const TotalPriceTitleArea = styled.div`
  width: 50%;
  height: 37rem;
`;
export const TotalPriceInfoArea = styled.div`
  width: 50%;
  height: 37rem;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin-top: 2.4rem;
  margin-left: 3rem;
  font-size: 3.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
`;
export const InfoTextWrap = styled.div`
  width: 100%;
  height: 28.4rem;
  border-bottom: 0.1rem solid #efeff1;
  padding-left: 3rem;
  padding-right: 3rem;
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
  font-size: 2.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
`;
export const ResultPriceArea = styled.div`
  width: 100%;
  height: 8.6rem;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ResultPriceText = styled(InfoText)`
  font-weight: 700;
`;
export const ResultPrice = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  color: #d20000;
`;
