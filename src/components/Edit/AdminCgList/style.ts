import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Container = styled.div``;

export const BigTitle = styled.div`
  font-size: 0.24rem;
  width: 14.4rem;
  font-weight: 700;
  margin-top: 0.8rem;
`;

export const DragList = styled.div`
  cursor: pointer;
  width: 14.4rem;
  display: flex;
  align-items: center;
  padding: 0.24rem 0.24rem 0.24rem 0.58rem;
  border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      width: 1.5rem;
    }
    &:nth-child(2) {
      width: 5rem;
      text-align: center;
    }
    &:nth-child(3) {
      width: 6rem;
      text-align: center;
    }
  }
`;

export const AdminCgBtn = styled.button`
  width: 0.6rem;
  height: 0.4rem;
  margin-left: 0.05rem;
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
`;

export const AdminCgBtn2 = styled.button`
  width: 0.6rem;
  height: 0.4rem;
  margin-left: 0.05rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
`;

export const AdminCgtitle = styled.div`
  // height: 100%;
  width: 14.4rem;
  margin-top: 0.24rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  align-items: end;
  //   justify-content: space-between;
  padding: 0.24rem 0.5rem 0.24rem 0.54rem;
  align-items: center;
  border-top: 0.03rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      flex-grow: 2.1;
    }
    &:nth-child(2) {
      flex-grow: 2.7;
    }
    &:nth-child(3) {
      flex-grow: 2;
    }
    &:nth-child(4) {
      flex-grow: 3;
    }
  }
`;

export const CgBtnBox = styled.div`
  margin-top: 0.24rem;
  width: 14.4rem;
  text-align: right;
`;

export const AdminCgBtn3 = styled.button`
  width: 0.84rem;
  height: 0.4rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
`;

// 모달창 css
export const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  padding-top: 4rem;
  /* padding-left: 1%; */
`;

export const PopUpBody = styled.div`
  width: 8.7rem;
  height: 3.8rem;
  background-color: #fff;
  margin: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  div {
    justify-content: center;
    h2 {
      padding-top: 0.48rem;
      font-size: 0.24rem;
    }
  }
`;

export const PopUpHeader = styled.div`
  width: 100%;
`;

export const AdminCgBtn4 = styled.button`
  width: 2.84rem;
  height: 0.56rem;
  margin-left: 0.05rem;
  font-size: 0.2rem;
  border-radius: 0.5rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
`;

export const AdminCgBtn5 = styled.button`
  width: 2.84rem;
  border-radius: 0.5rem;
  font-size: 0.2rem;
  height: 0.56rem;
  margin-left: 0.05rem;
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
`;

export const ModalInput = styled.input`
  width: 7.2rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  height: 0.8rem;
  border-radius: 0.2rem;
  margin-top: 0.4rem;
  text-align: center;
  font-size: 0.2rem;
`;

export const ModalInput2 = styled.input`
  width: 7.2rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  height: 0.8rem;
  border-radius: 0.2rem;
  text-align: center;
  font-size: 0.2rem;
  ::placeholder {
    color: black;
  }
`;
