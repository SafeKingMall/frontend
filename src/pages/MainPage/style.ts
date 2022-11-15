import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: lavenderblush;
  /* width: 144rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Banner = styled.div`
  background-color: rgba(40, 153, 81, 0.2);
  width: 100%;
  height: 47rem;
  position: relative;
`;
export const BannerNotice = styled.div`
  background-color: ${({ theme }) => theme.palette.darkgreen};
  opacity: 0.7;
  width: 100%;
  height: 8.8rem;
  position: absolute;
  bottom: 0;
  font-size: 2.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const TempItemList = styled.div`
  background-color: pink;
  width: 100%;
  height: 20rem;
`;
export const Top = styled.div`
  margin: 12.6rem 0 0;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.8rem;
`;
export const Category = styled.ul`
  background-color: pink;
  margin: 5.6rem 0 10.4rem;
  display: flex;
`;
export const CateList = styled.li`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin: 0 4rem 0;
`;
export const CateWrap = styled.div`
  margin: 0 0 2.4rem;
  background-color: mistyrose;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
export const Mid = styled.div`
  font-size: 3.2rem;
  line-height: 3.8rem;
  font-weight: 700;
`;
export const More = styled.div`
  font-size: 1.8rem;
  line-height: 2.1rem;
  font-weight: 400;
  margin-bottom: 0.3rem;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1px;
    background-color: #333;
    width: 6.4rem;
    height: 0.1rem;
  }
`;
