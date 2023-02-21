import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 5rem; */
`;
export const CategoryWrap = styled.div`
  width: 14.4rem;
  margin-bottom: 0.23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 0.4rem;
  font-weight: 700;
  color: #212121;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const CategoryNavArea = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.56rem;
  margin-bottom: 1.04rem;
`;
export const CategorySelect = styled.span`
  font-size: 0.24rem;
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
  font-size: 0.32rem;
  font-weight: 700;
  color: #212121;
`;
export const More = styled.span`
  font-size: 0.18rem;
  font-weight: 400;
  color: #333333;
  border-bottom: 0.01rem solid #333333;
  cursor: pointer;
`;
