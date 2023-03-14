import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const ContentContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  @media (max-width: 720px) {
    padding: 0 5%;
  }
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
export const TopContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
`;
export const TopWrap = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 30%;
  @media (max-width: 720px) {
    width: 80%;
  }
`;
export const Top = styled.img.attrs({
  src: 'https://user-images.githubusercontent.com/91241596/213257228-7525a33c-b048-4fa9-b9e3-27d8c5013223.png',
})`
  margin: 1.04rem 0 1.04rem 0;
  width: 100%;
  height: 100%;
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.3rem;
`;
export const Mid = styled.div`
  margin-bottom: 0.16rem;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.29rem;
  color: #289951;
  @media (max-width: 720px) {
    margin-bottom: 0.32rem;
    font-size: 0.52rem;
    line-height: initial;
  }
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
  @media (max-width: 720px) {
    height: 1.2rem;
  }
  & > label {
    padding-left: 0.2rem;
    font-weight: 500;
    font-size: 0.18rem;
    line-height: 0.22rem;
    color: #212121;
    display: flex;
    align-items: center;
    @media (max-width: 720px) {
      font-size: 0.48rem;
    }
    > input {
      margin-right: 0.16rem;

      width: 0.3rem;
      height: 0.3rem;
      border: 0.03rem solid #d9d9d9;
      border-radius: 0.1rem;
      accent-color: #289951;
      @media (max-width: 720px) {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
  & > button {
    width: 1.22rem;
    height: 0.4rem;
    background-color: #289951;
    border-radius: 0.1rem;
    font-weight: 400;
    font-size: 0.16rem;
    line-height: 0.19rem;
    color: #ffffff;
    @media (max-width: 720px) {
      display: none;
    }
  }
`;
export const AllAgree = styled.div`
  background-color: #f8f9fa;
  width: 6.4rem;
  height: 0.88rem;
  font-weight: 500;
  font-size: 0.18rem;
  line-height: 0.22rem;
  color: #212121;
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    font-size: 0.48rem;
    height: 1.2rem;
    margin-top: 0.2rem;
  }
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
      @media (max-width: 720px) {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
`;
export const BtnWrapper = styled.div`
  margin-top: 0.48rem;
  width: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: #fff;
    border-radius: 1rem;
    width: 3.12rem;
    height: 0.8rem;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.3rem;
    :first-child {
      border: 0.01rem solid #289951;
      font-weight: 700;
      font-size: 0.24rem;
      line-height: 0.29rem;
      color: #289951;
    }
    :last-child {
      background-color: #289951;
      font-weight: 700;
      font-size: 0.24rem;
      line-height: 0.29rem;
      color: #ffffff;
      :disabled {
        background-color: #aaaaaa;
      }
    }
  }
  @media (max-width: 720px) {
    width: 100%;
    margin-top: 1rem;
    > button {
      background-color: #fff;
      border-radius: 1rem;
      width: 47.5%;
      height: 1.5rem;
      :first-child {
        border: 1px solid #289951;
        font-size: 0.48rem;
        line-height: initial;
      }
      :last-child {
        background-color: #289951;
        font-size: 0.48rem;
        line-height: initial;
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
