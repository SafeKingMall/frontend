import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';
import { useDateFormat } from '../../../components/common/hooks/useDateFormat';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Header } from '../../../components/common/Header';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const NoticePo = () => {
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');
  const loginUser = cookies.get('loginUser');
  const location = useLocation();
  const itemId = location.state.itemId;
  const itemList = location.state.data;
  const reqData = location.state.reqData;
  const navigate = useNavigate();
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        itemId: item,
        data: itemList,
        reqData: reqData,
      },
    });
  };
  const moveNoticeMo = (item: any) => {
    if (cookies.get('refreshToken')) {
      navigate('/notice-Mo', {
        state: {
          itemId: item,
          data: itemList,
          reqData: reqData,
        },
      });
    } else {
      navigate('/sign-in');
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
    }
  };

  const [data, setDate] = useState('' as any);
  const [preData, setPreData] = useState('' as any);
  const [nextData, setNextData] = useState('' as any);

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/notice/${itemId}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setDate(res.data);
      });

      //이전글

      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/notice/prev/${itemId}?${reqData}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setPreData(res.data);
      });

      // 다음글

      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/notice/next/${itemId}?${reqData}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setNextData(res.data);
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, jwt, reqData]);

  //아이템 삭제 알림
  const deleteItemAlert = (id: number) => {
    swal
      .fire({
        heightAuto: false,
        icon: 'question',
        text: '게시판을 삭제하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (cookies.get('refreshToken')) {
            deleteApi(id);
          } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');
          }
        }
      });
  };

  //삭제 api
  const deleteApi = async (id: number) => {
    await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/admin/notice/${id}`,
      headers: {
        Authorization: jwt,
      },
    })
      .then((res) => {
        swal.fire({
          heightAuto: false,
          icon: 'success',
          text: '게시판이 삭제되었습니다.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
        navigate('/notice');
      })
      .catch((err) => {
        swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: '관리자만 삭제가능합니다.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      });
  };

  const { registDate2 } = useDateFormat();

  return (
    <div>
      <Header />
      <div>
        <S.Banner>공지사항</S.Banner>
      </div>
      <S.Wrapper>
        {loginUser === 'admin' ? (
          <S.ButtonBox>
            <S.NoticeButton1 onClick={() => deleteItemAlert(itemId)}>삭제</S.NoticeButton1>
            <S.NoticeButton2 onClick={() => moveNoticeMo(itemId)}>수정</S.NoticeButton2>
          </S.ButtonBox>
        ) : (
          ''
        )}

        <S.PoBox>
          <S.TitleDiv>
            <div>{data.title}</div>
            <div>{registDate2(data.lastModifiedDate)}</div>
          </S.TitleDiv>
          <S.Content>
            <S.Description id='description' dangerouslySetInnerHTML={{ __html: data.contents }} />
            {/* <div>{data.contents}</div> */}
          </S.Content>
          <S.NextPage>
            <S.Table>
              <tbody>
                <tr>
                  <td>
                    {preData === '' ? (
                      <S.NotPage2>이전글이 없습니다.</S.NotPage2>
                    ) : (
                      <div onClick={() => moveNoticepo(preData.id)}>
                        <S.FirstDiv>
                          <AiOutlineLeft size={15} />
                          <div>이전글</div>
                        </S.FirstDiv>
                        <S.NextTitle>{preData.title}</S.NextTitle>
                        <S.DateData>{registDate2(preData.lastModifiedDate)}</S.DateData>
                      </div>
                    )}
                  </td>
                  <td>
                    {nextData === '' ? (
                      <S.NotPage>다음글이 없습니다.</S.NotPage>
                    ) : (
                      <S.SecondDiv onClick={() => moveNoticepo(nextData.id)}>
                        <S.FirstDiv>
                          <div>다음글</div>
                          <AiOutlineRight size={15} />
                        </S.FirstDiv>
                        <S.NextTitle>{nextData.title}</S.NextTitle>
                        <S.DateData>{registDate2(nextData.lastModifiedDate)}</S.DateData>
                      </S.SecondDiv>
                    )}
                  </td>
                </tr>
              </tbody>
            </S.Table>
          </S.NextPage>
        </S.PoBox>
        <S.NoticeButton onClick={() => navigate('/notice')}>목록</S.NoticeButton>
      </S.Wrapper>
    </div>
  );
};
