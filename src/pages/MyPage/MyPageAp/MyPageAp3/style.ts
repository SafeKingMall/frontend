import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 14.4rem;
  /* height: 109.6rem; */
  margin-bottom: 1.2rem;
`;

export const RefundH1 = styled.h3`
  font-size: 0.4rem;
  margin-top: 1.42rem;
`;
export const Top = styled.div`
  margin: 0.54rem 0 1.04rem 0;
  width: 3.02rem;
  height: 1.09rem;
  background-image: url('/img/Refund/Refund3.png');
  background-size: 100% 100%;
`;

export const InputContainer = styled.div`
  width: 14.4rem;
  border-bottom: 0.01rem solid #289951;
  border-top: 0.01rem solid #289951;
  height: 3.35rem;

  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
`;

export const Mid = styled.div`
  width: 2.1rem;
  height: 0.8rem;
  ${({ theme }) => theme.common.flexCenter};
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.txtgray};
  margin-bottom: 0.64rem;
`;

export const Last = styled.div`
  text-align: center;
  font-size: 0.24rem;
  div {
    display: flex;
    padding-top: 0.1rem;
    p {
      &:first-child {
        color: ${({ theme }) => theme.palette.green};
      }
    }
  }
`;

export const ImgIcon = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-image: url('/img/RefundIcon.png');
  background-size: 100% 100%;
  justify-content: center;
`;

export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > button {
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 700;
    line-height: 0.3rem;
    background-color: #289951;
    color: #ffffff;
  }
`;
