import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 100%;
  min-width: 144rem;
`;
export const AddContainer = styled.div`
  width: 144rem;
  height: 100%;
`;
export const AddTitleContainer = styled.div`
  width: 100%;
  height: 6.2rem;
  margin-top: 4rem;
  margin-bottom: 3.2rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  display: flex;
  justify-content: space-between;
`;
export const AddTitleText = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
`;
export const AddSelectArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 23.3rem;
  height: 100%;
`;
export const RadioLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.txt};
  padding-left: 0.8rem;
`;
export const AddSelcetRadio = styled.input.attrs({ type: 'radio' })`
  width: 2rem;
  height: 2rem;
  accent-color: ${({ theme }) => theme.palette.green};
`;
export const AddInputContainer = styled.div`
  width: 100%;
  height: 77.9rem;
`;
export const InputArea = styled.div`
  width: 100%;
  height: 6.4rem;
  margin-bottom: 1.6rem;
  display: flex;
`;
export const InputTitleArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 20.1rem;
  height: 100%;
  padding: 0 2.4rem;
`;
export const InputTitle = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
`;
export const InputBasic = styled.input`
  width: 67.2rem;
  height: 100%;
  font-size: 2.4rem;
  font-weight: 400;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  color: ${({ theme }) => theme.palette.txt};
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  background-color: #ffffff;
`;
export const InputPhone = styled(InputBasic)`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const InputZipcode = styled(InputBasic)`
  width: 52rem;
  margin-right: 0.8rem;
`;
export const AddSearchBtn = styled.button`
  width: 14.4rem;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 2.4rem;
  font-weight: 400;
  color: #ffffff;
`;
export const InputDetailAdd = styled(InputBasic)`
  width: 52rem;
  margin-left: 1.6rem;
`;
export const ShippingDesArea = styled(InputArea)`
  height: 4.3rem;
  margin-bottom: 2.4rem;
  padding-left: 20.1rem;
  display: flex;
  flex-direction: column;
`;
export const ShippingSelect = styled.select`
  width: 67.2rem;
  height: 100%;
  font-size: 2.4rem;
  font-weight: 400;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  color: ${({ theme }) => theme.palette.txt};
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  background-color: #ffffff;
`;
export const ShippingDes = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.txt};
`;
export const OrderReqArea = styled(InputArea)`
  height: 21.3rem;
  padding: 2.4rem 0;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
`;
export const OrderReqTitleArea = styled(InputTitleArea)`
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1.7rem;
`;
export const OrderReqInput = styled.textarea`
  width: 67.2rem;
  height: 100%;
  font-size: 2.4rem;
  font-weight: 400;
  padding: 1.7rem 3.2rem;
  color: ${({ theme }) => theme.palette.txt};
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  background-color: #ffffff;
  resize: none;
`;
export const DaumPostBackground = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
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
