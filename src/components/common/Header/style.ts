import styled from 'styled-components';

// export const Wrapper = styled.div`
//   /* background-color: pink; */
//   /* width: 100%; */
//   /* min-width: 180rem; */
//   padding: 0 1rem;
//   width: 100%;
//   /* min-width: 130rem; */
//   height: 8rem;
//   display: flex;
//   /* position: fixed;
//   top: 0; */
//   background-color: white;
//   justify-content: space-between;
//   align-items: center;
// `;
// export const Logo = styled.div`
//   background-image: url(https://user-images.githubusercontent.com/91241596/212526764-a38ae3a1-34e0-4740-b6d0-741a4984431a.png);
//   margin: 0 0 0 6rem;
//   width: 15.6rem;
//   height: 7.6rem;
//   cursor: pointer;
// `;
// export const Menu = styled.ul`
//   display: flex;
//   font-size: 2rem;
//   font-weight: 500;
//   line-height: 2.4rem;
//   /* justify-content: center; */
//   text-align: center;
//   margin: 0 auto;
// `;
// export const MenuList = styled.li`
//   margin: 0 5rem;
//   padding: 1rem 1rem;
// `;

// export const MenuIcons = styled.div`
//   margin: 0 10rem 0 0;
//   display: flex;
//   font-size: 2.4rem;

//   /* position: absolute;
//   right: 10%; */
// `;
// export const IconList = styled.div`
//   padding: 0 1rem;
//   /* padding: 1rem 1rem; */
// `;

// //나중에 로그인버튼 바꿀떄
// export const SignInBtn = styled.button`
//   border-radius: 5rem;
//   border: 0.1rem solid #999999;
//   font-size: 2rem;
//   height: 4.8rem;
//   width: 10rem;
// `;
export const Container = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  color: #212121;
`;
export const LogoArea = styled.div`
  width: 20%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const Logo = styled.img.attrs({ src: 'img/HeaderLogo.png' })`
  width: 15.6rem;
  height: 7.5rem;
  cursor: pointer;
`;
export const NavArea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Nav = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  cursor: pointer;
  padding: 2rem 3rem;
`;
export const UserContentArea = styled.div`
  width: 20%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
`;
export const UserContentBox = styled.div`
  width: 24rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const IconBox = styled.div`
  width: 10.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const GreenBtn = styled.button`
  width: 10.4rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.palette.green};
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
`;
export const GrayBtn = styled(GreenBtn)`
  background-color: #ffffff;
  color: #999999;
  border: 0.1rem solid #999999;
`;
