import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Table = styled.table`
  width: 128rem;
  // height: 92.3rem;
  font-size: 2.4rem;
  margin-top: 14.8rem;
  border-collapse: collapse;
  tr {
    &:last-child {
      height: 27.5rem;
    }
  }
  td,
  tr {
    border-top: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  }
  tr {
    td {
      &:first-child,
      &:nth-child(3) {
        background-color: #d4ebdc;
        width: 20rem;
        text-align: center;
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      input {
        text-align: right;
      }
    }
  }
`;

export const TableInput = styled.input`
  width: 40.4rem;
  heith: 8rem;
  font-size: 2.4rem;
  margin: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 1.2rem;
  color: ${(props) => (props.value === '숫자로 기입해주세요' ? 'red' : 'black')};
  ::placeholder {
    text-align: left;
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 2.4rem;
  }
`;

export const PayInput = styled.div`
  display: flex;
  item-align: center;
`;

export const PayP = styled.p`
  padding-top: 2.8rem;
  padding-right: 1rem;
`;

//체크박스
export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;

  &:before {
    display: block;
    content: '';
    height: 2rem;
    width: 2rem;
    background-color: white;
    border: 0.2rem solid gainsboro;
    border-radius: 5rem;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: '';
    height: 2rem;
    width: 2rem;
    border: 0.2rem solid transparent;
    border-radius: 5rem;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.palette.txtgray};
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 0.1rem;
  overflow: hidden;
  white-space: nowrap;
  width: 0.1rem;

  &:checked + ${StyledLabel} {
    :after {
      opacity: 1;
    }
  }
`;

export const StyledP = styled.p`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 2rem;
`;

export const CheckPay = styled.div`
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 2rem;
  margin-left: 1.2rem;
  margin-bottom: 1.2rem;
`;

//카테고리 select
export const Select = styled.select`
  width: 40rem;
  heith: 8rem;
  // font-size:  ${(props) => (props.value === '' ? '2rem' : '3.2rem')};
  font-size: 2.4rem;
  margin-left: 1.2rem;
  padding: 1.2rem;
  color: ${(props) => (props.value === '' ? props.theme.palette.txtgray : '')};
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};

  }
`;
export const NoneOption = styled.option`
  display: none;
`;

//사진업로드

export const ChangeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 2.4rem;
  width: 12.8rem;
  height: 5.2rem;
  cursor: pointer;
  margin-left: 90rem;
  margin-top: -1rem;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const TableDiv = styled.div`
  width: 90.4rem;
  font-size: 2.5rem;
  margin: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 1.8rem;
  display: flex;
  input {
    position: relative;
    text-align: right;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    max-width: 12.8rem;
    left: 65rem;
  }
`;

export const DivImg = styled.div`
  justify-content: space-between;
  display: flex;
  border-radius: 3rem;
  border: 0.1rem solid #efeff1;
  display: flex;
  padding: 1rem;
  background-color: #efeff1;
  align-items: center;
  font-weight: 400;
  button {
    margin-left: 0.5rem;
    color: gray;
    background-color: white;
    border-radius: 5rem;
    height: 3rem;
  }
`;

export const NotDownload = styled.div`
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 2.4rem;
`;

export const QnAButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 1.6rem;
  width: 12.8rem;
  height: 5.6rem;
  align-items: center;
  margin-right: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 1.6rem;
  width: 12.8rem;
  height: 5.6rem;
  align-items: center;
`;

export const QnABox = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 16rem;
  margin-left: 116rem;
  width: 30rem;
`;
