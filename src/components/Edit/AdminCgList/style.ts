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
  font-size: 2.4rem;
  width: 144rem;
  font-weight: 700;
  margin-top: 8rem;
`;

export const DragList = styled.div`
  cursor: pointer;
  width: 144rem;
  display: flex;
  align-items: center;
  padding: 2.4rem 2.4rem 2.4rem 5.8rem;
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
  div {
    &:nth-child(1) {
      flex-grow: 1.25;
    }
    &:nth-child(2) {
      flex-grow: 1.8;
    }
    &:nth-child(3) {
      flex-grow: 1;
    }
  }
`;

export const AdminCgBtn = styled.button`
  width: 6rem;
  height: 4rem;
  margin-left: 0.5rem;
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
`;

export const AdminCgBtn2 = styled.button`
  width: 6rem;
  height: 4rem;
  margin-left: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
`;

export const AdminCgtitle = styled.div`
  // height: 100%;
  width: 144rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.darkgreen};
  align-items: end;
  //   justify-content: space-between;
  padding: 2.4rem 5rem 2.4rem 5.4rem;
  align-items: center;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
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
  margin-top: 2.4rem;
  width: 144rem;
  text-align: right;
`;

export const AdminCgBtn3 = styled.button`
  width: 8.4rem;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
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
  padding-top: 13%;
  padding-left: 9%;
`;

export const PopUpBody = styled.div`
  width: 87rem;
  height: 35rem;
  background-color: #fff;
  margin: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  div {
    justify-content: center;
    margin-top: 4rem;
    h2 {
      padding-top: 4.8rem;
      font-size: 2.4rem;
    }
  }
`;

export const PopUpHeader = styled.div`
  width: 100%;
`;

export const AdminCgBtn4 = styled.button`
  width: 28.4rem;
  height: 5.6rem;
  margin-left: 0.5rem;
  font-size: 2rem;
  border-radius: 5rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
  color: ${({ theme }) => theme.palette.green};
`;

export const AdminCgBtn5 = styled.button`
  width: 28.4rem;
  border-radius: 5rem;
  font-size: 2rem;
  height: 5.6rem;
  margin-left: 0.5rem;
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
`;

export const ModalInput = styled.input`
  width: 72rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  height: 8rem;
  border-radius: 2rem;
  margin-top: 4rem;
  text-align: center;
  font-size: 2rem;
`;

export const ModalInput2 = styled.input`
  width: 72rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  height: 8rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 2rem;
  ::placeholder {
    color: black;
  }
`;
