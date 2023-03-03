import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const CenterContainer = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%; */
`;

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin-left: 13.5rem;
  width: 0.64rem;
  height: 0.4rem;
  /* top: 79rem; */
  font-size: 0.15rem;
  position: absolute;
  bottom: 12.5%;
`;

export const Select = styled.select`
  margin-right: 0.08rem;
  width: 1.25rem;
  height: 0.4rem;
  border: 0.01rem solid #ddd;
  font-size: 0.2rem;
  padding: 0 0.08rem;
  font-weight: 400;
  background-color: #fefefe;
  color: #686868;
  outline: none;
`;

export const DataList = styled.div`
  margin-bottom: 0.24rem;
`;

export const AdminTitle = styled.div`
  width: 14.4rem;
  margin-top: 0.24rem;
  display: flex;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  padding: 0.24rem 0.9rem 0.24rem 0.54rem;
  align-items: center;
  border-top: 0.03rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      flex-grow: 1.85;
    }
    &:nth-child(2) {
      flex-grow: 2;
    }
    &:nth-child(3) {
      flex-grow: 2;
    }
    &:nth-child(4) {
    }
  }
`;

export const Container = styled.div`
  cursor: pointer;
  width: 14.4rem;
  display: flex;
  align-items: center;
  padding: 0.24rem 0.9rem 0.24rem 0.58rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      // flex-grow: 2;
      width: 2rem;
    }
    &:nth-child(2) {
      width: 4.4rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 4.8rem;
      text-align: center;
    }
    &:nth-child(4) {
      width: 2rem;
      text-align: right;
    }
  }
`;

export const CheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  accent-color: ${({ theme }) => theme.palette.green};
  width: 0.32rem;
  height: 0.32rem;
`;

export const AdminButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 0.16rem;
  width: 0.64rem;
  height: 0.4rem;
  align-items: center;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
`;

export const AdminButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 0.16rem;
  width: 0.64rem;
  height: 0.4rem;
  margin-right: 0.08rem;
  align-items: center;
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 14.4rem;
  height: 3rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
`;
