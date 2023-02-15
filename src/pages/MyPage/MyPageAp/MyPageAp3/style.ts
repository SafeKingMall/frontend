import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
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
  width: 144rem;
  /* height: 109.6rem; */
  margin-bottom: 12rem;
`;

export const RefundH1 = styled.h3`
  font-size: 4rem;
  margin-top: 14.2rem;
`;
export const Top = styled.div`
  margin: 5.4rem 0 10.4rem 0;
  width: 30.2rem;
  height: 10.9rem;
  background-image: url('/img/Refund/Refund3.png');
  background-size: 100% 100%;
`;

export const InputContainer = styled.div`
  width: 144rem;
  border-bottom: 0.1rem solid #289951;
  border-top: 0.1rem solid #289951;
  height: 33.5rem;

  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
`;

export const Mid = styled.div`
  width: 21rem;
  height: 8rem;
  ${({ theme }) => theme.common.flexCenter};
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.txtgray};
  margin-bottom: 6.4rem;
`;

export const Last = styled.div`
  text-align: center;
  font-size: 2.4rem;
  div {
    display: flex;
    padding-top: 1rem;
    p {
      &:first-child {
        color: ${({ theme }) => theme.palette.green};
      }
    }
  }
`;

export const ImgIcon = styled.div`
  width: 8rem;
  height: 8rem;
  background-image: url('/img/RefundIcon.png');
  background-size: 100% 100%;
  justify-content: center;
`;

export const BtnWrapper = styled.div`
  margin-top: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > button {
    border-radius: 10rem;
    width: 31.2rem;
    height: 8rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3rem;
    background-color: #289951;
    color: #ffffff;
  }
`;
