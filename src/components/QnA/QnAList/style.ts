import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.4rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 720px) {
    padding: 0;
    width: 100%;
  }
`;

export const DataList = styled.ul`
  margin-bottom: 1.04rem;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const NoSearchItem = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 14.4rem;
  height: 3rem;
  border-bottom: 0.02rem solid ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 500;
  @media screen and (max-width: 720px) {
    width: 100%;
    margin-left: -85%;
    font-size: 0.5rem;
  }
`;

export const QnATitle = styled.div`
  width: 14.4rem;
  margin-top: 0.24rem;
  display: flex;
  background-color: ${({ theme }) => theme.palette.whitegreen};
  padding: 0.24rem 0.5rem 0.24rem 0.54rem;
  align-items: center;
  border-top: 0.03rem solid ${({ theme }) => theme.palette.green};
  /* border-bottom: 0.3rem solid ${({ theme }) => theme.palette.txtgray}; */
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      flex-grow: 1.5;
    }
    &:nth-child(2) {
      flex-grow: 3.8;
    }
    &:nth-child(3) {
      flex-grow: 2.1;
    }
    &:nth-child(4) {
      flex-grow: 0.1;
    }
  }
  @media screen and (max-width: 720px) {
    padding: 0;
    width: 100%;
    margin-top: 10%;

    div {
      display: none;
    }
  }
`;

export const Select = styled.select`
  margin-right: 0.08rem;
  width: 1.25rem;
  height: 0.4rem;
  border: 0.01rem solid #ddd;
  font-size: 0.2rem;
  padding: 0 0.08rem;
  font-weight: 400;
  background-color: #fefefe;
  color: #686868;
  outline: none;
  @media screen and (max-width: 720px) {
    width: 29%;
    height: 100%;
    margin-right: 1%;
    font-size: 0.5rem;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  width: 14.4rem;
  display: flex;
  align-items: center;
  padding: 0.24rem 0.24rem 0.24rem 0.58rem;
  border-bottom: 0.03rem solid ${({ theme }) => theme.palette.lightgray};
  font-size: 0.24rem;
  div {
    &:nth-child(1) {
      width: 1rem;
      @media screen and (max-width: 720px) {
        display: none;
      }
    }
    &:nth-child(2) {
      display: flex;
      width: 6.5rem;
      svg {
        margin-left: 0.1rem;
      }
    }
    &:nth-child(3) {
      display: flex;
      p {
        &:nth-child(1) {
          width: 3rem;
          text-align: center;
        }
      }
      p {
        width: 3rem;
        text-align: right;
      }
      @media screen and (max-width: 720px) {
        ul {
          margin-top: 2%;
          &:nth-child(1) {
            padding-right: 2%;
            text-align: left;
            border-right: 0.2vw solid ${({ theme }) => theme.palette.gray};
          }
          &:nth-child(2) {
            padding-left: 2%;
            width: 0;
            min-width: 20vw;
          }
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    display: grid;
    font-size: 0.4rem;
    padding: 0.24rem 0;
  }
`;
export const QnAButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;
export const QnAButton = styled.button`
  background-color: ${({ theme }) => theme.palette.green};
  color: white;
  width: 1.3rem;
  height: 0.5rem;
  font-size: 0.15rem;
  position: absolute;
  bottom: 2.9rem;
  @media screen and (max-width: 720px) {
    font-size: 0.5rem;
    width: 20%;
    height: 1.3rem;
    position: unset;
  }
`;
