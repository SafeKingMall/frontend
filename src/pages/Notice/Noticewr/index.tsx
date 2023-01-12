import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useNavigate } from 'react-router-dom';

export const NoticeWr = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <S.Banner>Noticewr</S.Banner>
      </div>
      <S.Wrapper>
        <S.Table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <S.TableInput placeholder='제목을 입력해주세요.' />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <S.TableTextarea placeholder='내용을 입력해주세요.' />
              </td>
            </tr>
          </tbody>
        </S.Table>
        <S.NoticeBox>
          <S.NoticeButton onClick={() => navigate('/notice')}>취소</S.NoticeButton>
          <S.NoticeButton2 onClick={() => navigate('/notice-po')}>등록</S.NoticeButton2>
        </S.NoticeBox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
