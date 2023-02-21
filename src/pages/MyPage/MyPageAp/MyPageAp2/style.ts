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
  align-items: center;
  width: 14.4rem;
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
  background-image: url('/img/Refund/Refund2.png');
  background-size: 100% 100%;
`;

export const Mid = styled.div`
  display: flex;
  padding: 0.31rem 0.5rem;
  width: 14.4rem;
  h3 {
    font-size: 0.32rem;
  }
  p {
    color: ${({ theme }) => theme.palette.green};
    font-size: 0.24rem;
  }
`;

export const InputContainer = styled.div`
  width: 14.4rem;
  border-bottom: 0.01rem solid #289951 !important;
  border-top: 0.01rem solid #289951;

  h3 {
    font-size: 0.24rem;
    padding-bottom: 0.12rem;
    /* width: 144rem; */
    margin-bottom: 0.2rem;
  }
`;

//체크박스
export const RefundReason = styled.div`
  padding: 0.31rem 0.5rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
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
    ::placeholder {
      padding: 0.05rem;
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
  > button {
    background-color: #fff;
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    :first-child {
      border: 0.01rem solid #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;

      color: #289951;
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
`;
