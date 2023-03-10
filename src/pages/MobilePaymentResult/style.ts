import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const TitleWrap = styled.div`
  width: 14.4rem;
  height: 1.6rem;
  ${({ theme }) => theme.common.flexCenter};
  border-bottom: 1px solid #289951;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 0.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.txt};
  @media (max-width: 720px) {
    font-size: 0.72rem;
    margin-bottom: 0;
  }
`;
export const Group = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  flex-direction: column;
  @media (max-width: 720px) {
    height: 70vh;
  }
`;
export const OrderInfoWrap = styled.div`
  width: 14.4rem;
  padding-bottom: 0.64rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.green};
  margin-bottom: 0.48rem;
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
export const IconArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  margin-top: 0.64rem;
  position: relative;
  @media (max-width: 720px) {
    margin: 0;
  }
`;
export const IconWrap = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    width: 15%;
    height: initial;
    /* padding-bottom: 20%; */
  }
`;
export const Icon = styled.img.attrs({ src: 'img/OrderOkIcon.png' })`
  width: 100%;
  height: 100%;
`;
export const IconUnderLine = styled.div`
  width: 2.01rem;
  height: 0.01rem;
  background-color: #000000;
  position: absolute;
  bottom: 0.04rem;
  @media (max-width: 720px) {
    width: 50%;
    height: 0.05rem;
    bottom: 0.09rem;
    border-radius: 0.05rem;
  }
`;
export const TextArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  flex-direction: column;
  margin-top: 0.64rem;
  @media (max-width: 720px) {
    margin-top: 1rem;
    padding: 0 5%;
  }
`;
export const Text = styled.span`
  font-size: 0.24rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  margin-bottom: 0.05rem;
  @media (max-width: 720px) {
    font-size: 0.48rem;
  }
`;
export const GreenText = styled(Text)`
  color: ${({ theme }) => theme.palette.green};
`;
export const BtnArea = styled.div`
  width: 14.4rem;
  ${({ theme }) => theme.common.flexCenter};
  margin-bottom: 1.2rem;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
    justify-content: space-between;
  }
`;
export const Btn = styled.button`
  width: 2.8rem;
  height: 0.8rem;
  border-radius: 1rem;
  font-size: 0.24rem;
  font-weight: 700;
  @media (max-width: 720px) {
    width: 48.75%;
    height: 1.5rem;
    font-size: 0.48rem;
  }
`;
export const WhiteBtn = styled(Btn)`
  border: 0.02rem solid ${({ theme }) => theme.palette.green};
  background-color: #ffffff;
  color: ${({ theme }) => theme.palette.green};
  margin-right: 0.16rem;
  @media (max-width: 720px) {
    margin: 0;
  }
`;
export const GreenBtn = styled(Btn)`
  background-color: ${({ theme }) => theme.palette.green};
  color: #ffffff;
`;
