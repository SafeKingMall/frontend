import styled from 'styled-components';

export const container = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #a9d6b9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoArea = styled.div`
  width: 35%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
  position: relative;
`;
export const Logo = styled.img.attrs({ src: 'img/FooterLogo.png' })`
  width: 22.6rem;
  height: 10.9rem;
  position: absolute;
  right: 11.7rem;
`;
export const TextArea = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const TextBox = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 400;
  color: #252525;
`;
