import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
  @media (max-width: 720px) {
    margin-bottom: 0.3rem;
  }
`;
export const TotalPriceContainer = styled.div`
  width: 14.4rem;
  height: 100%;
  border-top: 0.02rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  display: flex;
  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const TotalPriceTitleArea = styled.div`
  width: 50%;
  height: 3.7rem;
  @media (max-width: 720px) {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0 5%;
  }
`;
export const TotalPriceInfoArea = styled.div`
  width: 50%;
  height: 3.7rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
    height: 6rem;
  }
`;
export const Title = styled.h1`
  margin-top: 0.24rem;
  margin-left: 0.3rem;
  font-size: 0.32rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  @media (max-width: 720px) {
    font-size: 0.64rem;
    margin: 0;
  }
`;
export const InfoTextWrap = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #efeff1;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 720px) {
    font-size: 0.56rem;
    padding: 0;
  }
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
  @media (max-width: 720px) {
    font-size: 0.56rem;
  }
`;
export const ResultPriceArea = styled.div`
  width: 100%;
  height: 0.86rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 720px) {
    height: initial;
    padding: 0.5rem 0;
  }
`;
export const ResultPriceText = styled(InfoText)`
  font-weight: 700;
`;
export const ResultPrice = styled.span`
  font-size: 0.32rem;
  font-weight: 700;
  color: #d20000;
  @media (max-width: 720px) {
    font-size: 0.64rem;
  }
`;
