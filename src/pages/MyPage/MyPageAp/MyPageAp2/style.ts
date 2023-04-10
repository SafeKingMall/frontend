import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media screen and (max-width: 720px) {
    min-width: 100%;
    height: 100%;
  }
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14.4rem;
  margin-bottom: 1.2rem;
  @media screen and (max-width: 720px) {
    margin-left: 0;
    width: 100vw;
  }
`;

export const RefundH1 = styled.h3`
  font-size: 0.4rem;
  margin-top: 1.42rem;
  @media screen and (max-width: 720px) {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 900;
    padding: 4% 0 4% 0;
    width: 100vw;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.green};
  }
`;
export const Top = styled.div`
  margin: 0.54rem 0 1.04rem 0;
  width: 3.02rem;
  height: 1.09rem;
  background-image: url('/img/Refund/Refund2.png');
  background-size: 100% 100%;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Mid = styled.div`
  display: flex;
  padding: 0.31rem 0.5rem;
  width: 14.4rem;
  h3 {
    font-size: 0.32rem;
    @media screen and (max-width: 720px) {
      font-size: 0.45rem;
    }
  }
  p {
    color: ${({ theme }) => theme.palette.green};
    font-size: 0.24rem;
    @media screen and (max-width: 720px) {
      font-size: 0.4rem;
    }
  }
  @media screen and (max-width: 720px) {
    width: 100vw;
    padding-top: 4%;
    padding-bottom: 4%;
  }
`;

export const InputContainer = styled.div`
  width: 14.4rem;
  border-bottom: 0.01rem solid #289951;
  border-top: 0.01rem solid #289951;

  @media screen and (max-width: 720px) {
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    width: 100vw;
  }
  h3 {
    font-size: 0.24rem;
    padding-bottom: 0.12rem;
    /* width: 144rem; */
    margin-bottom: 0.2rem;
    @media screen and (max-width: 720px) {
      font-size: 0.45rem;
      padding-top: 4%;
    }
  }
`;

//체크박스
export const RefundReason = styled.div`
  padding: 0.31rem 0.5rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  @media screen and (max-width: 720px) {
    padding-bottom: 4%;
  }
  label {
    display: flex;
    align-items: center;
    user-select: none;
    padding: 0.2rem 0rem;
  }

  input[type='checkbox'] {
    appearance: none;
    border: 0.03rem solid gainsboro;
    /* border-radius: 0.35rem; */
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 0.5rem;

    :checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${({ theme }) => theme.palette.green};
    }
  }

  p {
    margin-left: 0.1rem;
    font-size: 0.24rem;
  }

  input[type='text'] {
    margin-left: 0.1rem;
    font-size: 0.2rem;
    width: 12.92rem;
    height: 0.4rem;
    border: 1px solid ${({ theme }) => theme.palette.lightgray};
    padding: 2%;
    @media screen and (max-width: 720px) {
      width: 100vw;
      height: 1.2rem;
      font-size: 0.4rem;
    }
    ::placeholder {
      color: ${({ theme }) => theme.palette.txtgray};
    }
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  width: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    width: 82vw;
  }
  > button {
    background-color: #fff;
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    @media screen and (max-width: 720px) {
      width: 40vw;
      height: 1.4rem;
    }
    :first-child {
      border: 0.01rem solid #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;

      color: #289951;
      @media screen and (max-width: 720px) {
        font-size: 0.6rem;
      }
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      @media screen and (max-width: 720px) {
        font-size: 0.6rem;
      }
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
`;
