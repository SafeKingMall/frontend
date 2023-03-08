import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media (max-width: 720px) {
    min-width: 100%;
    margin-bottom: 0.3rem;
  }
`;
export const AddContainer = styled.div`
  width: 14.4rem;
  height: 100%;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
  }
`;
export const AddTitleContainer = styled.div`
  width: 100%;
  height: 0.62rem;
  margin-top: 0.4rem;
  margin-bottom: 0.32rem;
  padding-left: 0.24rem;
  padding-right: 0.24rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    height: 1rem;
    padding-left: 0;
    padding-right: 0;
  }
`;
export const AddTitleText = styled.h1`
  font-size: 0.32rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  @media (max-width: 720px) {
    font-size: 0.56rem;
    display: flex;
    align-items: center;
    font-weight: 700;
  }
`;
export const AddSelectArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 2.33rem;
  height: 100%;
  @media (max-width: 720px) {
    display: flex;
    width: initial;
  }
`;
export const RadioLabel = styled.label`
  font-size: 0.16rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  padding-left: 0.08rem;
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
export const AddSelcetRadio = styled.input.attrs({ type: 'radio' })`
  width: 0.2rem;
  height: 0.2rem;
  accent-color: ${({ theme }) => theme.palette.green};
  @media (max-width: 720px) {
    width: 0.4rem;
    height: 0.4rem;
  }
`;
export const AddInputContainer = styled.div`
  width: 100%;
  /* height: 7.79rem; */
`;
export const InputArea = styled.div`
  width: 100%;
  height: 0.64rem;
  margin-bottom: 0.05rem;
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const InputTitleArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 2.01rem;
  height: 100%;
  padding: 0 0.24rem;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0;
    justify-content: flex-start;
    margin-bottom: 0.3rem;
  }
`;
export const InputTitle = styled.span`
  font-size: 0.24rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  @media (max-width: 720px) {
    font-size: 0.52rem;
  }
`;
export const InputBasic = styled.input`
  width: 6.72rem;
  height: 100%;
  font-size: 0.24rem;
  font-weight: 400;
  padding-left: 0.32rem;
  padding-right: 0.32rem;
  color: ${({ theme }) => theme.palette.txt};
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  background-color: #ffffff;
  @media (max-width: 720px) {
    width: 100%;
    font-size: 0.5rem;
    padding: 0.4rem;
    height: 1.5rem;
  }
`;
// export const InputPhone = styled(InputBasic)`
//   ::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   ::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
// `;
export const InputAddArea = styled(InputArea)`
  margin-bottom: 0.16rem;
  @media (max-width: 720px) {
    margin-bottom: 0.32rem;
  }
`;
export const ZipCodeWrap = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 720px) {
    height: 1.5rem;
    justify-content: space-between;
  }
`;
export const InputZipcode = styled(InputBasic)`
  width: 5.2rem;
  margin-right: 0.08rem;
  @media (max-width: 720px) {
    width: 69.5%;
    margin: 0;
  }
`;
export const AddSearchBtn = styled.button`
  width: 1.44rem;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 720px) {
    width: 28%;
    height: 100%;
    font-size: 0.5rem;
  }
`;
export const InputAdd = styled(InputBasic)`
  margin-left: 2.01rem;
  @media (max-width: 720px) {
    margin-left: 0;
    margin-bottom: 0.32rem;
  }
`;
export const InputDetailAdd = styled(InputBasic)`
  width: 5.2rem;
  margin-left: 0.16rem;
  @media (max-width: 720px) {
    width: 100%;
    margin: 0;
  }
`;
export const ShippingDesArea = styled(InputArea)`
  height: 0.43rem;
  margin-bottom: 0.24rem;
  padding-left: 2.01rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    height: initial;
    padding-left: 0;
    line-height: 0.44rem;
  }
`;
export const ShippingSelect = styled.select`
  width: 6.72rem;
  height: 100%;
  font-size: 0.24rem;
  font-weight: 400;
  padding-left: 0.32rem;
  padding-right: 0.32rem;
  color: ${({ theme }) => theme.palette.txt};
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  background-color: #ffffff;
  @media (max-width: 720px) {
    width: 100%;
    height: 1.5rem;
    font-size: 0.5rem;
    margin-bottom: 0.2rem;
  }
`;
export const ShippingDes = styled.span`
  font-size: 0.16rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
  @media (max-width: 720px) {
    font-size: 0.32rem;
  }
`;
export const OrderReqArea = styled(InputArea)`
  height: 2.13rem;
  padding: 0.24rem 0;
  border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  @media (max-width: 720px) {
    padding: 0;
    height: initial;
  }
`;
export const OrderReqTitleArea = styled(InputTitleArea)`
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 0.17rem;
  @media (max-width: 720px) {
    padding-top: 0.32rem;
    flex-direction: row;
  }
`;
export const OrderReqInput = styled.textarea`
  width: 6.72rem;
  height: 100%;
  font-size: 0.24rem;
  font-weight: 400;
  padding: 0.17rem 0.32rem;
  color: ${({ theme }) => theme.palette.txt};
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  background-color: #ffffff;
  resize: none;
  @media (max-width: 720px) {
    width: 100%;
    height: 3rem;
    font-size: 0.5rem;
  }
`;
export const DaumPostBackground = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const DaumPostDiv = styled.div`
  width: 500px;
  height: 460px;
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: '#ffffff';
  @media (max-width: 720px) {
    width: 95%;
    height: 70%;
    min-width: 328px;
    max-width: 500px;
  }
`;
export const ValidationArea = styled.div`
  width: 100%;
  margin-bottom: 0.05rem;
  padding-left: 2.01rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 720px) {
    padding: 0;
    margin: 0.2rem 0;
  }
`;
export const Validation = styled.span`
  font-size: 0.16rem;
  font-weight: 400;
  color: red;
  @media (max-width: 720px) {
    font-size: 0.4rem;
  }
`;
