import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
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
  margin-left: 130rem;
  width: 13rem;
  height: 5rem;
  font-size: 1.5rem;
  position: absolute;
  bottom: 18%;
`;

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.palette.green};
  height: 47rem;
  font-size: 4rem;
  margin-bottom: 14.8rem;
  text-align: center;
  padding-top: 23rem;
  color: white;
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
  &:active {
    background-color: ${({ theme }) => theme.palette.green};
    cursor: pointer;
    color: white;
  }
`;

export const pageNumbers = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 12rem;
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
