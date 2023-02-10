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
    weight: 700;
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
  }
`;

export const RefundReason = styled.div`
  padding: 3.1rem 5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  div {
    display: flex;
    font-size: 2.4rem;
    padding: 1.2rem 0rem;
  }
  input[type='checkbox'] {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.palette.lightgray};
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 2.4rem;
  }
  input[type='text'] {
    width: 129.2rem;
    height: 4rem;
    border: 1px solid ${({ theme }) => theme.palette.lightgray};
    ::placeholder {
      color: ${({ theme }) => theme.palette.txtgray};
    }
  }
`;

// export const InputText = styled.input`
//   border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
// `;

export const BtnWrapper = styled.div`
  margin-top: 4.8rem;
  /* margin-bottom: 12rem; */
  width: 64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
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
      /* identical to box height */

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
