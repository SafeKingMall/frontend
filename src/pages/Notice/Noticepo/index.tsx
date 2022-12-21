import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import db from '../../../db.json';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const NoticePo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        data: item,
      },
    });
  };

  const data = state.data;
  const nextData = db.noticecontents;
  const nextData1 = nextData
    .sort((a: any, b: any) => {
      return new Date(a.lastModifiedDate).getTime() - new Date(b.lastModifiedDate).getTime();
    })
    .reverse();
  const chageNumber = nextData1.findIndex((el: any) => el.id === data.id);
  const nextData2 = nextData1[chageNumber - 1];
  const nextData3 = nextData1[chageNumber + 1];

  const registDate = (day: any) => {
    const today = new Date(day);
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day2 = ('0' + today.getDate()).slice(-2);

    return `${year}-${month}-${day2}`;
  };

  return (
    <div>
      <div>
        <S.Banner>Noticepo</S.Banner>
      </div>
      <S.Wrapper>
        <S.NoticeButton onClick={() => navigate('/notice')}>목록</S.NoticeButton>
        <S.PoBox>
          <S.TitleDiv>
            <div>{data.title}</div>
            <div>{registDate(data.lastModifiedDate)}</div>
          </S.TitleDiv>
          <S.Content>
            <div>{data.contents}</div>
          </S.Content>
          <S.NextPage>
            <S.Table>
              <tbody>
                <tr>
                  <td>
                    {chageNumber === 0 ? (
                      <S.NotPage2>이전글이 없습니다.</S.NotPage2>
                    ) : (
                      <div onClick={() => moveNoticepo(nextData2)}>
                        <S.FirstDiv>
                          <AiOutlineLeft size={15} />
                          <div>이전글</div>
                        </S.FirstDiv>
                        <S.NextTitle>{nextData2.title}</S.NextTitle>
                        <S.DateData>{registDate(nextData2.lastModifiedDate)}</S.DateData>
                      </div>
                    )}
                  </td>
                  <td>
                    {nextData1.length - 1 === chageNumber ? (
                      <S.NotPage>다음글이 없습니다.</S.NotPage>
                    ) : (
                      <S.SecondDiv onClick={() => moveNoticepo(nextData3)}>
                        <S.FirstDiv>
                          <div>다음글</div>
                          <AiOutlineRight size={15} />
                        </S.FirstDiv>
                        <S.NextTitle>{nextData3.title}</S.NextTitle>
                        <S.DateData>{registDate(nextData3.lastModifiedDate)}</S.DateData>
                      </S.SecondDiv>
                    )}
                  </td>
                </tr>
              </tbody>
            </S.Table>
          </S.NextPage>
        </S.PoBox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
