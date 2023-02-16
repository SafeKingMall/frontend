import styled from 'styled-components';

export const NoticeBarWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8.8rem;
  background-color: rgba(167, 237, 192, 0);
  display: flex;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 500;
  color: #ffffff;
  border-top: 0.05rem solid #ffffff;
`;
export const NoticeContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;
export const LeftTextArea = styled.div`
  /* width: 43.8rem; */
  width: 20%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  position: relative;
`;
export const LeftText = styled.span``;
export const LeftBar = styled.div`
  width: 0.2rem;
  height: 4rem;
  background-color: #ffffff;
  position: absolute;
  right: 0;
`;
export const TitleArea = styled.div`
  /* width: 100rem; */
  width: 60%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const Title = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const ArrowArea = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  position: relative;
`;
export const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 19rem;
`;
export const ArrowIcon = styled.div`
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
