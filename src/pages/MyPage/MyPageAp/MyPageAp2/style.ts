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
  align-items: center;
  width: 144rem;
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
  background-image: url('/img/Refund/Refund2.png');
  background-size: 100% 100%;
`;

export const Mid = styled.div`
  display: flex;
  padding: 3.1rem 5rem;
  width: 144rem;
  h3 {
    font-size: 3.2rem;
  }
  p {
    color: ${({ theme }) => theme.palette.green};
    font-size: 2.4rem;
  }
`;

export const InputContainer = styled.div`
  width: 144rem;
  border-bottom: 0.1rem solid #289951 !important;
  border-top: 0.1rem solid #289951;

  h3 {
    font-size: 2.4rem;
    padding-bottom: 1.2rem;
    /* width: 144rem; */
    margin-bottom: 2rem;
  }
`;

//체크박스
export const RefundReason = styled.div`
  padding: 3.1rem 5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};

  input[type='checkbox'] {
    appearance: none;
    border: 0.3rem solid gainsboro;
    border-radius: 0.35rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 5rem;

    :checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${({ theme }) => theme.palette.green};
    }
  }

  label {
    display: flex;
    align-items: center;
    user-select: none;
    padding: 2rem 0rem;
  }

  p {
    margin-left: 1rem;
    font-size: 2.4rem;
  }

  input[type='text'] {
    margin-left: 1rem;
    font-size: 2rem;
    width: 129.2rem;
    height: 4rem;
    border: 1px solid ${({ theme }) => theme.palette.lightgray};
    ::placeholder {
      padding: 0.5rem;
      color: ${({ theme }) => theme.palette.txtgray};
    }
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 4.8rem;
  width: 64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    border-radius: 10rem;
    width: 31.2rem;
    height: 8rem;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3rem;
    :first-child {
      border: 0.1rem solid #289951;
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
