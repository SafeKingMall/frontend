import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 15%;
  right: 0;
  width: 22.4rem;
  background-color: #fbfbfb;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 5px 0px 0px 5px;
  box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.25);
  border: 0.1rem solid ${({ theme }) => theme.palette.green};
  @media (max-width: 1919px) {
    display: none;
  }
`;
export const TitleArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 4.8rem;
`;
export const Title = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: #212121;
`;
export const ItemArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  height: 21.6rem;
  border-top: 0.1rem solid #9d9d9d;
`;
export const ItemContent = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  cursor: pointer;
`;
export const ItemImg = styled.img`
  width: 15.5rem;
  height: 15.5rem;
  border: 0.1rem solid #dddddd;
`;
export const ItemName = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #999999;
  margin-top: 1.6rem;
`;
export const PageArea = styled.div`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.palette.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.3rem;
`;
export const ArrowBox = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  cursor: pointer;
`;
export const PageText = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  font-size: 1.6rem;
  font-weight: 400;
  color: #ffffff;
`;
