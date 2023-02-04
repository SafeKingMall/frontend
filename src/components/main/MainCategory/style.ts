import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CategoryWrap = styled.div`
  width: 144rem;
  margin-bottom: 2.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 4rem;
  font-weight: 700;
  color: #212121;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const CategoryNavArea = styled.div`
  width: 100rem;
  display: flex;
  justify-content: space-around;
  margin-top: 5.6rem;
  margin-bottom: 10.4rem;
`;
export const CategorySelect = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  color: #212121;
  cursor: pointer;
`;
export const SelectedCategoryArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectedCategory = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  color: #212121;
`;
export const More = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  color: #333333;
  border-bottom: 0.1rem solid #333333;
  cursor: pointer;
`;
