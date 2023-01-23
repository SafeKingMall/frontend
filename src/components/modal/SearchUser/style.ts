import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 64rem;
  height: 103rem;
  overflow-y: scroll;
  overflow-x: scroll;
`;
export const BtnWrapper = styled.div`
  display: flex;
  & > button {
    background-color: #d4ebdc;
    width: 32rem;
    height: 8rem;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
`;
