import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 14.4rem;
  @media (max-width: 720px) {
    min-width: 100%;
  }
`;
export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
`;

export const BannerWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 1.48rem;
  @media (max-width: 720px) {
    height: 7rem;
  }
`;
export const Banner = styled.img.attrs({ src: 'img/EstimateBannerImg.png' })`
  width: 100%;
  height: 100%;
  display: block;
`;
export const BannerText = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 720px) {
    font-size: 0.8rem;
  }
`;
export const ContentWrap = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 5%;
  }
`;
export const GuideArea = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  margin-bottom: 0.8rem;
`;
export const Guidetext = styled.span`
  font-size: 0.24rem;
  font-weight: 400;
  color: #000000;
  text-align: center;
  @media (max-width: 720px) {
    font-size: 0.48rem;
    line-height: 0.64rem;
    &:first-child {
      margin-bottom: 0.3rem;
    }
  }
  > br {
    display: none;
    @media (max-width: 720px) {
      display: initial;
    }
  }
  .space {
    @media (max-width: 720px) {
      display: none;
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  align-items: center;
`;
export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.32rem;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const RequestInputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.32rem;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const TitleArea = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.32rem;
  font-weight: 500;
  color: #212121;
  @media (max-width: 720px) {
    font-size: 0.48rem;
    margin: 0.5rem 0;
  }
`;
export const Essential = styled.span`
  height: 100%;
  font-size: 0.32rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.green};
  margin-left: 0.1rem;
  margin-top: 0.06rem;
  @media (max-width: 720px) {
    font-size: 0.48rem;
  }
`;
export const InputArea = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const BasicInput = styled.input`
  width: 100%;
  height: 0.8rem;
  border: 0.01rem solid #999999;
  font-size: 0.24rem;
  font-weight: 400;
  color: #212121;
  padding: 0 0.4rem;
  @media (max-width: 720px) {
    height: 1.5rem;
    font-size: 0.48rem;
    border-radius: 5px;
  }
`;
export const CategoryArea = styled.div`
  width: 38%;
  position: relative;
  ${({ theme }) => theme.common.flexCenter};
`;
export const Arrow = styled.div`
  position: absolute;
  font-size: 0.24rem;
  font-weight: 400;
  color: #777777;
  right: 0.2rem;
  pointer-events: none;
`;
export const Category = styled.select`
  width: 100%;
  height: 0.8rem;
  font-size: 0.24rem;
  font-weight: 400;
  color: #212121;
  padding: 0 0.4rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0.01rem solid #999999;
  background-color: #ffffff;
  @media (max-width: 720px) {
    height: 1.5rem;
    font-size: 0.48rem;
    border-radius: 5px;
  }
`;
export const ItemInput = styled(BasicInput)`
  width: 60%;
`;
export const CountInput = styled(BasicInput)`
  width: 38%;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const RequestInput = styled.textarea`
  width: 100%;
  height: 3.2rem;
  border: 0.01rem solid #999999;
  font-size: 0.24rem;
  font-weight: 400;
  color: #212121;
  padding: 0.26rem 0.4rem;
  resize: none;
  @media (max-width: 720px) {
    height: 7rem;
    font-size: 0.48rem;
    border-radius: 5px;
  }
`;
export const SubmitBtn = styled.button`
  width: 3.12rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.palette.green};
  font-size: 0.24rem;
  font-weight: 700;
  color: #ffffff;
  border-radius: 1rem;
  margin-top: 0.56rem;
  @media (max-width: 720px) {
    width: 50%;
    height: 1.5rem;
    font-size: 0.48rem;
    margin: 1rem 0;
  }
`;
