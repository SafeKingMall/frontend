import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 14.4rem;
  @media screen and (max-width: 720px) {
    min-width: 100%;
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    margin-left: 0;
  }
`;
export const Top = styled.div`
  margin: 1rem 0 0.88rem 0;
  font-weight: 700;
  font-size: 0.4rem;
  line-height: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 720px) {
    margin: 4% 0 4% 0;
    font-size: 0.8rem;
    font-weight: 900;
  }
`;
