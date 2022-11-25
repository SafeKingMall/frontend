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
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.palette.darkgreen};
  align-items: end;
  justify-content: space-between;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  padding-right: 5rem;
  padding-left: 5.4rem;
  align-items: center;
  border-top: 0.3rem solid ${({ theme }) => theme.palette.green};
  border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
`;

export const Banner = styled.div`
  background-color: #289951;
  // width: 100%;
  height: 47rem;
  position: relative;
  font-size: 10rem;
`;

// export const QnAtitle = styled.div`
//   background-color: pink;
//   width: 94.5rem;
//   margin-top: 7rem;
//   height: 2.4rem;
//   //   margin: 0 0 2.4rem;
//   display: flex;
//   align-items: end;
//   justify-content: space-between;
//   padding: 1rem;
//   align-items: center;
// `;

export const content = styled.div`
  background-color: pink;
  width: 94.5rem;
  margin-top: 7rem;
  height: 2.4rem;
  //   margin: 0 0 2.4rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

export const Paging2 = styled.li`
  padding: 1rem;
  cursor: pointer;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.palette.txtgray};
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.palette.green};
    cursor: pointer;
    color: white;
  }
`;

export const pageNumbers = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const lipageNumbers = styled.li`
  padding: 1rem;
  cursor: pointer;
  &:active {
    color: black;
  }
`;

export const buttonpageNumbers = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:focus {
    outline: none;
  }
`;
