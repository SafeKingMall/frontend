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
  width: 12.8rem;
  // height: 92.3rem;
  font-size: 0.24rem;
  margin-top: 1.48rem;
  border-collapse: collapse;
  tr {
    &:last-child {
      height: 2.75rem;
    }
  }
  td,
  tr {
    border-top: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
    border-bottom: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  }
  tr {
    td {
      &:first-child,
      &:nth-child(3) {
        background-color: #d4ebdc;
        width: 2rem;
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
  width: 4.04rem;
  font-size: 0.24rem;
  margin: 0.12rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 0.12rem;
  color: ${(props) => (props.value === '숫자로 기입해주세요' ? 'red' : 'black')};
  ::placeholder {
    text-align: left;
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 0.24rem;
  }
`;

export const PayInput = styled.div`
  display: flex;
`;

export const PayP = styled.p`
  padding-top: 0.28rem;
  padding-right: 0.1rem;
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
    height: 0.2rem;
    width: 0.2rem;
    background-color: white;
    border: 0.02rem solid gainsboro;
    border-radius: 0.5rem;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: '';
    height: 0.2rem;
    width: 0.2rem;
    border: 0.02rem solid transparent;
    border-radius: 0.5rem;
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
  height: 0.01rem;
  overflow: hidden;
  white-space: nowrap;
  width: 0.01rem;

  &:checked + ${StyledLabel} {
    :after {
      opacity: 1;
    }
  }
`;

export const StyledP = styled.p`
  margin-left: 0.05rem;
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 0.2rem;
`;

export const CheckPay = styled.div`
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 0.2rem;
  margin-left: 0.12rem;
  margin-bottom: 0.12rem;
`;

//카테고리 select
export const Select = styled.select`
  width: 4rem;
  // font-size:  ${(props) => (props.value === '' ? '2rem' : '3.2rem')};
  font-size: 0.24rem;
  margin-left: 0.12rem;
  padding: 0.12rem;
  color: ${(props) => (props.value === '' ? props.theme.palette.txtgray : '')};
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
`;
export const NoneOption = styled.option`
  display: none;
`;

//사진업로드

export const ChangeButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 0.24rem;
  width: 1.28rem;
  height: 0.52rem;
  cursor: pointer;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  margin-left: 9rem;
  margin-top: -0.1rem;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const TableDiv = styled.div`
  width: 9.04rem;
  font-size: 0.25rem;
  margin: 0.12rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  padding: 0.18rem;
  display: flex;
  input {
    position: relative;
    text-align: right;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    max-width: 1.28rem;
    left: 6.5rem;
  }
`;

export const DivImg = styled.div`
  justify-content: space-between;
  display: flex;
  border-radius: 0.3rem;
  border: 0.01rem solid #efeff1;
  display: flex;
  padding: 0.1rem;
  background-color: #efeff1;
  align-items: center;
  font-weight: 400;
  button {
    margin-left: 0.05rem;
    color: gray;
    background-color: white;
    border-radius: 0.5rem;
    height: 0.3rem;
  }
`;

export const NotDownload = styled.div`
  color: ${({ theme }) => theme.palette.txtgray};
  font-size: 0.24rem;
`;

export const QnAButton = styled.button`
  color: ${({ theme }) => theme.palette.green};
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
  margin-right: 0.08rem;
  border: 0.01rem solid ${({ theme }) => theme.palette.green};
`;

export const QnAButton2 = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  font-size: 0.16rem;
  width: 1.28rem;
  height: 0.56rem;
  align-items: center;
`;

export const QnABox = styled.div`
  margin-top: 0.12rem;
  margin-bottom: 1.6rem;
  margin-left: 11.6rem;
  width: 3rem;
`;

export const TableTextarea = styled.textarea`
  width: 10.4rem;

  min-height: 5.38rem;
  margin: 0.12rem;
  padding: 0.12rem;
  font-size: 0.2rem;
  outline: none;
  resize: none;
  border: 0.01rem solid ${({ theme }) => theme.palette.lightgray};
  ::placeholder {
    color: ${({ theme }) => theme.palette.txtgray};
    font-size: 0.24rem;
    padding-top: 2.5rem;
  }
`;

export const RedDiv = styled.div`
  color: red;
  font-size: 0.2rem;
  padding-left: 0.12rem;
  padding-bottom: 0.12rem;
`;
