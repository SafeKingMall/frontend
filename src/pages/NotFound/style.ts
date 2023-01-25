import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > button {
    margin: 0 0 3rem 0;
    width: 284px;
    height: 80px;

    background: #ffffff;
    border: 1px solid #289951;
    border-radius: 100px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #289951;
  }
`;
