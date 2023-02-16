import styled from 'styled-components';

export const PopUpContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0, 0.5);
  /* padding-top: 20rem; */
  /* padding-left: 1%; */
`;

export const PopUpBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* margin: auto; */

  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  ul {
    justify-content: center;
  }
`;

// export const PopUpHeader = styled.div`
//   width: 100%;
// `;

// export const AdminCgBtn4 = styled.button`
//   width: 28.4rem;
//   height: 5.6rem;
//   margin-left: 0.5rem;
//   font-size: 2rem;
//   border-radius: 5rem;
//   border: 0.1rem solid ${({ theme }) => theme.palette.green};
//   color: ${({ theme }) => theme.palette.green};
// `;

// export const AdminCgBtn5 = styled.button`
//   width: 28.4rem;
//   border-radius: 5rem;
//   font-size: 2rem;
//   height: 5.6rem;
//   margin-left: 0.5rem;
//   background-color: ${({ theme }) => theme.palette.green};
//   color: white;
// `;

// export const ModalInput = styled.input`
//   width: 72rem;
//   border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
//   height: 8rem;
//   border-radius: 2rem;
//   margin-top: 4rem;
//   text-align: center;
//   font-size: 2rem;
// `;

// export const ModalInput2 = styled.input`
//   width: 72rem;
//   border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
//   height: 8rem;
//   border-radius: 2rem;
//   text-align: center;
//   font-size: 2rem;
//   ::placeholder {
//     color: black;
//   }
// `;

//탭부분
export const TabMenu = styled.div`
  display: flex;
  list-style: none;
  cursor: pointer;
  justify-content: center;
  .submenu {
    display: flex;
    height: 8rem;
    font-size: 2.4rem;
    font-weight: 700;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-top: 3rem;
    width: 32rem;
    background-color: #d4ebdc;
  }

  .focused {
    color: ${({ theme }) => theme.palette.green};
    background-color: white;
  }
`;
