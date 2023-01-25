import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  margin: 0 0 4.4rem 2rem;
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
  margin-bottom: 4rem;
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
  }
`;
export const BackGrey = styled.div`
  background-color: #efeff1;
  width: 1056px;
  height: 200px;
`;
export const OrderListMenu = styled.div`
  background-color: #e9f5ed;
  width: 105.6rem;
  height: 6.4rem;
  display: flex;
  font-weight: 400;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  border-bottom: 1px solid #dedede;
  color: #000000;
  & > div:first-child {
    flex-basis: 20rem;
  }
  & > div:nth-child(2) {
    flex-basis: 36rem;
  }
  & > div:nth-child(3) {
    flex-basis: 8rem;
  }
  & > div:nth-child(4) {
    flex-basis: 20rem;
  }
  & > div:nth-child(5) {
    flex-basis: 10rem;
  }
  & > div:nth-child(6) {
    flex-basis: 10rem;
  }
`;
export const OrderListItem = styled.div`
  /* background-color: #e9f5ed; */

  width: 105.6rem;
  height: 6.4rem;
  display: flex;
  font-weight: 400;
  font-size: 20px;
  /* line-height: 64px; */
  text-align: center;
  /* justify-content: center; */
  align-items: center;
  border-bottom: 1px solid #dedede;
  color: #000000;
  & > div:first-child {
    flex-basis: 20rem;
  }
  & > div:nth-child(2) {
    flex-basis: 36rem;
  }
  & > div:nth-child(3) {
    flex-basis: 8rem;
  }
  & > div:nth-child(4) {
    flex-basis: 20rem;
  }
  & > div:nth-child(5) {
    flex-basis: 10rem;
  }
  & > div:nth-child(6) {
    flex-basis: 10rem;
  }
`;
