import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: mistyrose; */
  width: 64rem;
  height: 27.2rem;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  color: #212121;
  border: 1px solid #efeff1;
  border-radius: 10px;
  padding: 2rem 2.4rem 0 2.4rem;
  white-space: pre-line;
  overflow-y: scroll;
`;
export const MainTitle = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
  color: #289951;
`;
export const Title = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
`;
export const Text = styled.p`
  margin-bottom: 1rem;
`;
export const SmallText = styled(Text)`
  font-size: 16px;
`;
