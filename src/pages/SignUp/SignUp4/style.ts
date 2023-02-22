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
  width: 12.98rem;
  /* height: 109.6rem; */
  margin-bottom: 1.2rem;
`;
export const Top = styled.div`
  background-image: url('https://user-images.githubusercontent.com/91241596/213257228-7525a33c-b048-4fa9-b9e3-27d8c5013223.png');
  margin: 1.04rem 0 1.04rem 0;
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.3rem;
  width: 4.01rem;
  height: 0.99rem;
`;
export const Mid = styled.div`
  margin-bottom: 0.16rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #289951;
`;
export const AreaWrapper = styled.div`
  /* background-color: mistyrose; */
  display: flex;
  flex-direction: column;
  margin-bottom: 0.24rem;
`;
export const AreaText = styled.div`
  margin-top: 0.24rem;
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
      margin-right: 0.16rem;

      width: 0.3rem;
      height: 0.3rem;
      border: 0.03rem solid #d9d9d9;
      border-radius: 0.1rem;
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
  width: 6.4rem;
  height: 0.88rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
  & > label {
    padding-left: 0.2rem;
    display: flex;
    align-items: center;
    > input {
      margin-right: 0.16rem;
      width: 0.3rem;
      height: 0.3rem;
      border: 0.03rem solid #d9d9d9;
      border-radius: 0.1rem;
      accent-color: #289951;
    }
  }
`;
export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  /* margin-bottom: 12rem; */
  width: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    /* border: 0.1rem solid #000; */
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    :first-child {
      border: 0.01rem solid #289951;
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
export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
