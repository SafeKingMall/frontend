import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
`;
export const AddContainer = styled.div`
  width: 14.4rem;
  height: 100%;
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
`;
export const AddTitleText = styled.h1`
  font-size: 0.32rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
`;
export const AddSelectArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 2.33rem;
  height: 100%;
`;
export const RadioLabel = styled.label`
  font-size: 0.16rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  padding-left: 0.08rem;
`;
export const AddSelcetRadio = styled.input.attrs({ type: 'radio' })`
  width: 0.2rem;
  height: 0.2rem;
  accent-color: ${({ theme }) => theme.palette.green};
`;
export const AddInputContainer = styled.div`
  width: 100%;
  height: 7.79rem;
`;
export const InputArea = styled.div`
  width: 100%;
  height: 0.64rem;
  margin-bottom: 0.05rem;
  display: flex;
`;
export const InputTitleArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 2.01rem;
  height: 100%;
  padding: 0 0.24rem;
`;
export const InputTitle = styled.span`
  font-size: 0.24rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
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
export const InputZipcode = styled(InputBasic)`
  width: 5.2rem;
  margin-right: 0.08rem;
`;
export const AddSearchBtn = styled.button`
  width: 1.44rem;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 400;
  color: #ffffff;
`;
export const InputDetailAdd = styled(InputBasic)`
  width: 5.2rem;
  margin-left: 0.16rem;
`;
export const ShippingDesArea = styled(InputArea)`
  height: 0.43rem;
  margin-bottom: 0.24rem;
  padding-left: 2.01rem;
  display: flex;
  flex-direction: column;
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
`;
export const ShippingDes = styled.span`
  font-size: 0.16rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
`;
export const OrderReqArea = styled(InputArea)`
  height: 2.13rem;
  padding: 0.24rem 0;
  border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
`;
export const OrderReqTitleArea = styled(InputTitleArea)`
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 0.17rem;
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
`;
export const DaumPostBackground = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const DaumPostDiv = styled.div`
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: '#ffffff';
`;
export const ValidationArea = styled.div`
  width: 100%;
  margin-bottom: 0.05rem;
  padding-left: 2.01rem;
  display: flex;
  flex-direction: column;
  height: 0.19rem;
`;
export const Validation = styled.span`
  font-size: 0.16rem;
  font-weight: 400;
  color: red;
`;
