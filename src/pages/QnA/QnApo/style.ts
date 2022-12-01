import styled from 'styled-components';

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.palette.green};
  width: 100%;
  height: 47rem;
  position: relative;
  font-size: 10rem;
`;

export const Wrapper = styled.div`
  /* width: 144rem; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: #e9f5ed;
`;

export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  margin: 14.8rem 0rem 0rem 131rem;
  padding: 1.8rem 4.3rem;
  font-size: 2.4rem;
  align-items: center;
`;

export const Pobox = styled.div`
  // position: absolute;
  width: 144rem;
  // height: 30rem;
  // display: grid;
  margin-top: 2.4rem;
  margin-bottom: 12rem;
  // justify-content: center;
  font-size: 2.4rem;
  // text-align: center;
  border-top: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  border-bottom: 0.11rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Titlediv = styled.div`
  text-align: center;
  display: flex;
  width: 144rem;
  height: 100%;
  padding: 6.4rem 1rem 6.4rem 1rem;
  // font-size: 3.2rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-left: 1rem;
      }
      div {
        font-size: 3.2rem;
      }
    }
  }
`;

export const Titlediv2 = styled.div`
  // text-align: center;
  display: flex;
  width: 144rem;

  height: 100%;
  padding: 3.2rem 2.3rem 3.2rem 2.3rem;
  justify-content: space-between;
  div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-left: 1rem;
      }
      div {
        font-weight: bold;
      }
    }
    &:last-child {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.palette.txtgray};
    }
  }
`;

export const Titlediv3 = styled.div`
  text-align: center;
  display: flex;
  width: 144rem;
  height: 100%;
  padding: 4.2rem 1rem 1.8rem 1rem;
  font-size: 3.2rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  }
`;

export const Content = styled.div`
  width: 144rem;
  height: 100%;
  padding: 4.8rem 2.3rem 4.8rem 2.3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Content2 = styled.div`
  width: 144rem;
  height: 100%;
  padding: 0rem 2.3rem 3.2rem 2.3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
`;

export const Comemntinput = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.palette.txtgray};
  width: 144rem;
  height: 20rem;
  font-size: 2.4rem;
  padding: 4rem 120rem 13.8rem 4rem;
  position: relative;
  margin-bottom: 4.8rem;
  // opacity: 0;
  // z-index: 2;
  cursor: pointer;
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
    padding: 4rem 120rem 13.8rem 0rem;
  }
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  padding: 6.5rem 5.6rem 6.5rem 5.6rem;
  font-size: 2.4rem;
  cursor: pointer;
  margin-left: 126.5rem;
  margin-top: -22.7rem;
  position: absolute;
  // z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const comment = styled.div`
  div {
    padding: 4.8rem 1rem 1.6rem 1rem;
    font-size: 3.2rem;
  }
`;
