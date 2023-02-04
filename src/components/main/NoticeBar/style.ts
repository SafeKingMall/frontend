import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const NoticeBarWrap = styled.div`
  width: 100%;
  height: 8.8rem;
  background: #b1c7b9;
  margin-bottom: 12.8rem;
  display: flex;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 500;
  color: #212121;
`;
export const NoticeContent = styled.div`
  width: 144rem;
  position: relative;
  display: flex;
  align-items: center;
`;
export const LeftText = styled.span`
  position: absolute;
  left: 11.3rem;
`;
export const LeftBar = styled.div`
  position: absolute;
  left: 30.6rem;
  width: 0.2rem;
  height: 4rem;
  background-color: #ffffff;
`;
export const Title = styled.span`
  position: absolute;
  left: 41.8rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const ArrowBox = styled.div`
  position: absolute;
  left: 128.2rem;
  display: flex;
  align-items: center;
`;
export const ArrowArea = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const ArrowBar = styled.div`
  width: 0.1rem;
  height: 1.6rem;
  background-color: #ffffff;
  margin: 0 1.6rem;
`;
