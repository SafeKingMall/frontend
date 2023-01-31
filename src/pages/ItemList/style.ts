import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 144rem;
`;
export const LoadingBox = styled.div`
  width: 100%;
  height: 170.7em;
  ${({ theme }) => theme.common.flexCenter};
`;
