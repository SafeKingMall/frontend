import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  margin: 0 0 4.4rem 0;
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div`
  margin: 10rem 0 8.8rem 0;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Mid = styled.div`
  margin-bottom: 1rem;
  /* 수정필요 */
  width: 105.6rem;
  padding-left: 2rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.9rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 4rem;
    background-color: #212121;
    width: 105.6rem;
    height: 0.1rem;
    z-index: 5;
  }
`;
export const Section1Wrap = styled.div`
  margin: 0 0 4.4rem 0;
  > div:first-child {
    display: flex;
    justify-content: right;
  }
`;
export const Section1Top = styled.div`
  margin: 1.6rem 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  & > div:first-child {
    margin: 0 3.8rem 0 0;
  }
  > div > span {
    font-weight: 700;
  }
`;
export const Section1Menu = styled.div`
  background-color: #e9f5ed;
  width: 105.6rem;
  height: 6.4rem;
  display: flex;
  font-weight: 400;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #000000;
  & > div {
    border-right: 1px solid #efeff1;
  }
  & > div:first-child {
    flex-basis: 29.7rem;
  }
  & > div:nth-child(2) {
    flex-basis: 12.5rem;
  }
  & > div:nth-child(3) {
    flex-basis: 6.7rem;
  }
  & > div:nth-child(4) {
    flex-basis: 12.6rem;
  }
  & > div:nth-child(5) {
    flex-basis: 10.7rem;
  }
  & > div:nth-child(6) {
    flex-basis: 10.7rem;
  }
  & > div:nth-child(7) {
    flex-basis: 10.2rem;
  }
  & > div:nth-child(8) {
    flex-basis: 12.5rem;
    border-right: none;
  }
`;
export const Section1Item = styled.div`
  background-color: #fff;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  border-bottom: 1px solid #efeff1;
  display: flex;

  & > div {
    height: 11.2rem;
    border-right: 1px solid #efeff1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:first-child {
    flex-basis: 29.7rem;
  }
  & > div:nth-child(2) {
    flex-basis: 12.5rem;
  }
  & > div:nth-child(3) {
    flex-basis: 6.7rem;
  }
  & > div:nth-child(4) {
    flex-basis: 12.6rem;
  }
  & > div:nth-child(5) {
    flex-basis: 10.7rem;
  }
  & > div:nth-child(6) {
    flex-basis: 10.7rem;
  }
  & > div:nth-child(7) {
    flex-basis: 10.2rem;
  }
  & > div:nth-child(8) {
    flex-basis: 12.5rem;
    border-right: none;
  }
`;
export const Section2Wrapper = styled.div`
  /* background-color: aliceblue; */
  margin: 0 0 4.4rem 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
  & > div:first-child {
    width: 52.8rem;
  }
`;
export const Section2Item = styled.div`
  /* width: 52.8rem; */
  border-bottom: 1px solid #efeff1;
  line-height: 7.2rem;
  display: flex;
  position: relative;
  & > div:first-child {
    background-color: #e9f5ed;
    width: 16.6rem;
    height: 7.2rem;
    text-align: center;
  }
  & > div:nth-child(2) {
    /* background-color: aliceblue; */
    width: 89rem;
    padding: 0 0 0 3rem;
    position: relative;
  }
`;
export const OrderInfoInput = styled.input`
  /* background-color: aliceblue; */
  width: 30rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;
export const Line = styled.div`
  display: flex;
  & > div > div:nth-child(2) {
    width: 36.2rem;
  }
`;
export const Btn = styled.button`
  margin: 0 auto;
  background-color: #289951;
  width: 13rem;
  height: 5.6rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #ffffff;
  :disabled {
    background-color: #aaaaaa;
  }
`;
