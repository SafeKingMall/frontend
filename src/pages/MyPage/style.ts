import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  background-color: #f7f7f7;
  width: 866px;
  height: 581px;
  margin-left: 20px;
`;
export const Top = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  border-bottom: 1px solid #000;
  margin-bottom: 44px;
  padding: 32px 0 14px 32px;
`;
export const MyWrapper = styled.div`
  margin-left: 32px;
  margin-bottom: 30px;
`;
export const MyText = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  margin-bottom: 10px;
`;
export const MyList = styled.div`
  /* background-color: pink; */
  width: 332px;
  height: 64px;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  position: relative;
`;
export const MyListSub = styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 26px;
    right: 0;
    background-color: #000;
    width: 332px;
    height: 1px;
  }
`;
export const MyListCon = styled.div`
  margin-top: 22px;
`;
export const Test = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
`;
export const MyLists = styled.div`
  /* background-color: pink; */
  width: 764px;
  height: 64px;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  position: relative;
`;
export const MyListSubs = styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 26px;
    right: 0;
    background-color: #000;
    width: 764px;
    height: 1px;
  }
`;
export const Tests = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
`;
export const MyBtn = styled.button`
  width: 130px;
  height: 56px;
  background-color: #d9d9d9;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  position: relative;
  left: 685px;
  bottom: 80px;
`;
