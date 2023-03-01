import styled from 'styled-components';

export const NoticeBarWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0.88rem;
  background-color: rgba(167, 237, 192, 0);
  display: flex;
  justify-content: center;
  font-size: 0.24rem;
  font-weight: 500;
  color: #ffffff;
  border-top: 0.1px solid rgba(255, 255, 255, 0.7);
  @media (max-width: 720px) {
    height: 1.2rem;
    font-size: 0.38rem;
  }
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
  width: 0.02rem;
  height: 0.4rem;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  @media (max-width: 720px) {
    height: 0.6rem;
  }
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
  display: inline-block;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ArrowArea = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 720px) {
    justify-content: center;
    padding-right: 5%;
  }
`;
export const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1.9rem;
  @media (max-width: 720px) {
    position: initial;
  }
`;
export const ArrowIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 0.24rem;
  height: 0.24rem;
  @media (max-width: 720px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;
export const ArrowBar = styled.div`
  width: 0.01rem;
  height: 0.16rem;
  background-color: #ffffff;
  margin: 0 0.16rem;
  @media (max-width: 720px) {
    height: 0.4rem;
    width: 0.02rem;
    margin: 0 0.4rem;
  }
`;
