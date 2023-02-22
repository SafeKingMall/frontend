import styled from 'styled-components';

export const container = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #a9d6b9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: 0;
  /* transform: translateY(-100%); */
  @media (max-width: 720px) {
    height: 6.3rem;
    flex-direction: column;
    justify-content: initial;
  }
`;
export const LogoArea = styled.div`
  width: 35%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
  position: relative;
  @media (max-width: 720px) {
    width: 100%;
    height: 2rem;
  }
`;
export const Logo = styled.img.attrs({ src: 'img/FooterLogo.png' })`
  width: 2.26rem;
  height: 1.09rem;
  position: absolute;
  right: 1.17rem;
  @media (max-width: 720px) {
    right: initial;
    width: 2.76rem;
    height: 1.49rem;
  }
`;
export const TextArea = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const TextBox = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.18rem;
  font-weight: 400;
  color: #252525;
  line-height: 0.25rem;
  @media (max-width: 720px) {
    font-size: 0.35rem;
    line-height: 0.49rem;
    height: initial;
  }
`;
export const TextLine = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const Bar = styled.div`
  height: 0.18rem;
  width: 0.015rem;
  background-color: #888888;
  display: inline-block;
  margin: 0 0.1rem;
`;
export const LinkText = styled.span`
  font-weight: 600;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export const TextLineGray = styled(TextLine)`
  color: #666666;
`;
export const Spacing = styled.br`
  display: none;
  @media (max-width: 720px) {
    display: initial;
  }
`;
