import styled from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;
export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 129.8rem;
  /* height: 109.6rem; */
`;
export const Top = styled.div`
  background-image: url('https://user-images.githubusercontent.com/91241596/213257228-7525a33c-b048-4fa9-b9e3-27d8c5013223.png');
  margin: 5.6rem 0 0;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
  width: 40rem;
  height: 9.9rem;
`;
export const Mid = styled.div`
  margin: 7.2rem 0 1.6rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #289951;
`;
export const AreaWrapper = styled.div`
  /* background-color: mistyrose; */
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;
export const AreaText = styled.div`
  margin-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  & > label {
    padding-left: 20px;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    display: flex;
    align-items: center;
    > input {
      margin-right: 1.6rem;

      width: 3rem;
      height: 3rem;
      border: 0.3rem solid #d9d9d9;
      border-radius: 1rem;
      accent-color: #289951;
    }
  }
  & > button {
    width: 122px;
    height: 40px;
    background-color: #289951;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
  }
`;
export const AllAgree = styled.div`
  background-color: #f8f9fa;
  width: 64rem;
  height: 8.8rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  & > label {
    padding-left: 2rem;
    display: flex;
    align-items: center;
    > input {
      margin-right: 1.6rem;
      width: 3rem;
      height: 3rem;
      border: 0.3rem solid #d9d9d9;
      border-radius: 1rem;
      accent-color: #289951;
    }
  }
`;
export const BtnWrapper = styled.div`
  margin-top: 4.8rem;
  /* margin-bottom: 12rem; */
  width: 64rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
    border-radius: 10rem;
    width: 31.2rem;
    height: 8rem;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3rem;
    :first-child {
      border: 0.1rem solid #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #289951;
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      &:disabled {
        background-color: #aaaaaa;
      }
    }
  }
`;
