import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 144rem; */
  display: flex;
  // width: 100%;
  // height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 2.4rem 2.4rem 2.4rem 131rem;
  // display: flex;
  padding-top: 1.8rem;
  padding-bottom: 1.8rem;
  padding-right: 4.3rem;
  padding-left: 4.3rem;
  font-size: 1.5rem;
  align-items: center;

  justify-content: flex-end;
  // 오른쪽 정렬 안되서 나중에 다시 해보기
`;

export const QnAtitle = styled.div`
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
      flex-grow: 0;
    }
  }
`;

export const Banner = styled.div`
  background-color: #289951;
  // width: 100%;
  height: 47rem;
  position: relative;
  font-size: 10rem;
`;
