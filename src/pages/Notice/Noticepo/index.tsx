import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import db from '../../../db.json';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const Noticepo = () => {
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
  const chagenumber = +data.id;
  const nextdata1 = db.noticecontents;
  const nextdata2 = nextdata1[chagenumber - 2];
  const nextdata3 = nextdata1[chagenumber];

  const RegistDate = (day: any) => {
    const today = new Date(day);
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day2 = ('0' + today.getDate()).slice(-2);

    return `${year}-${month}-${day2}`;
  };

  const Datefun = (day2: any) => {
    return Object.keys(day2).includes('lastModifiedDate')
      ? RegistDate(day2.lastModifiedDate)
      : RegistDate(day2.createDate);
  };

  return (
    <div>
      <div>
        <S.Banner>Noticepo</S.Banner>
      </div>
      <S.Wrapper>
        <S.QnAButton onClick={() => navigate('/notice')}>목록</S.QnAButton>
        <S.Pobox>
          <S.Titlediv>
            <div>{data.title}</div>
            <div>{Datefun(data)}</div>
          </S.Titlediv>
          <S.Content>
            <div>{data.contents}</div>
          </S.Content>
          <S.Nextpage>
            <S.Table>
              <tr>
                <td>
                  {chagenumber - 1 === 0 ? (
                    <S.Notpage2>이전글이 없습니다.</S.Notpage2>
                  ) : (
                    <div onClick={() => moveNoticepo(nextdata2)}>
                      <S.firstdiv>
                        <AiOutlineLeft size={15} />
                        <div>이전글</div>
                      </S.firstdiv>
                      <S.Nexttitle>{nextdata2.title}</S.Nexttitle>
                      <S.Datedata>{Datefun(nextdata2)}</S.Datedata>
                    </div>
                  )}
                </td>
                <td>
                  {nextdata1.length === chagenumber ? (
                    <S.Notpage>다음글이 없습니다.</S.Notpage>
                  ) : (
                    <S.Seconddiv onClick={() => moveNoticepo(nextdata3)}>
                      <S.firstdiv>
                        <div>다음글</div>
                        <AiOutlineRight size={15} />
                      </S.firstdiv>
                      <S.Nexttitle>{nextdata3.title}</S.Nexttitle>
                      <S.Datedata>{Datefun(nextdata3)}</S.Datedata>
                    </S.Seconddiv>
                  )}
                </td>
              </tr>
            </S.Table>
          </S.Nextpage>

          {/* <S.Table>
            <tr>
              <div>{data.title}</div>
              <div>{Datefun(data)}</div>
            </tr>
            <tr>{data.contents}</tr>
            <tr>
              <td>
                {chagenumber - 1 === 0 ? (
                  <S.Notpage2>이전글이 없습니다.</S.Notpage2>
                ) : (
                  <div onClick={() => moveNoticepo(nextdata2)}>
                    <S.firstdiv>
                      <AiOutlineLeft size={15} />
                      <div>이전글</div>
                    </S.firstdiv>
                    <S.Nexttitle>{nextdata2.title}</S.Nexttitle>
                    <S.Datedata>{Datefun(nextdata2)}</S.Datedata>
                  </div>
                )}
              </td>
              <td>
                {nextdata1.length === chagenumber + 1 ? (
                  <S.Notpage>다음글이 없습니다.</S.Notpage>
                ) : (
                  <S.Seconddiv onClick={() => moveNoticepo(nextdata3)}>
                    <S.firstdiv>
                      <div>다음글</div>
                      <AiOutlineRight size={15} />
                    </S.firstdiv>
                    <S.Nexttitle>{nextdata3.title}</S.Nexttitle>
                    <S.Datedata>{Datefun(nextdata3)}</S.Datedata>
                  </S.Seconddiv>
                )}
              </td>
            </tr>
          </S.Table> */}
        </S.Pobox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
