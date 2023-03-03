import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
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
  padding: 0.24rem 1.2rem 0.24rem 0.54rem;
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
      flex-grow: 2;
    }
    &:nth-child(2) {
      flex-grow: 2;
    }
  }
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

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin-left: 13rem;
  width: 1.3rem;
  height: 0.5rem;
  font-size: 0.15rem;
  position: absolute;
  bottom: 18%;
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 14.4rem;
  height: 3rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
`;
