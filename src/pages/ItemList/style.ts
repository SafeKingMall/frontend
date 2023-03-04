import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const LoadingBox = styled.div`
  width: 100%;
  height: 17.07em;
  ${({ theme }) => theme.common.flexCenter};
`;
