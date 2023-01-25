import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
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
  const location = useLocation();
  const navigate = useNavigate();
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        itemId: item,
        data: itemList,
      },
    });
  };
  const moveNoticeMo = (item: any) => {
    navigate('/notice-Mo', {
      state: {
        itemId: item,
        data: itemList,
      },
    });
  };
  const itemId = location.state.itemId;
  const itemList = location.state.data;
  // const page = location.state.page;
  // const [size] = useState(7);

  const index = itemList.findIndex((elm: any) => elm.id === itemId);

  let preItemId: any;
  let nextItemId: any;
  if (index !== 0) {
    preItemId = itemList[index - 1].id;
  }
  if (index !== 6) {
    nextItemId = itemList[index + 1].id;
  }

  //index===0이라면 사용할 데이터
  // const [firstData, setFirstData] = useState([]);
  // const preItemId2 = firstData[firstData.length - 1];
  //index가 마지막 배열이면 사용할 데이터
  // const [lastData, setLastData] = useState([]);
  // const nextItemId2 = lastData[0];

  const [data, setDate] = useState('' as any);
  const [nextData2, setNextData2] = useState('' as any);
  const [nextData3, setNextData3] = useState('' as any);
  // const [error, setError] = useState('' as any);
  // const [error2, setError2] = useState('' as any);

  useEffect(() => {
    // let data1;
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/notice/${itemId}`,
        headers: {
          // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
          Authorization: jwt,
        },
      }).then((res) => {
        setDate(res.data);
      });

      // await axios({
      //   method: 'get',
      //   url: `${process.env.REACT_APP_API_URL}/admin/notice/list?size=${size}&page=${page - 1}`,
      //   headers: {
      //     // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
      //     Authorization: jwt,
      //   },
      // })
      //   .then((res) => {
      //     setFirstData(res.data);
      //   })
      //   .catch(err);

      // await axios ({
      //   method:'get',
      //   url:`${process.env.REACT_APP_API_URL}/admin/notice/list?size=${size}&page=${page+1}`,
      //   headers: {
      //     // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
      //     Authorization: jwt,
      //   },
      // }).then((res) => {
      //   setLastData(res.data)
      // }).catch((err)=> )

      if (index !== 6) {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/admin/notice/${nextItemId}`,
          headers: {
            // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
            Authorization: jwt,
          },
        })
          .then((res) => {
            setNextData3(res.data);
          })
          .catch((err) => {
            // setError2(err.response.status);
          });
      }

      // await axios({
      //   method: 'get',
      //   url: `${process.env.REACT_APP_API_URL}/admin/notice/${nextItemId2}`,
      //   headers: {
      //     // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
      //     Authorization: jwt,
      //   },
      // })
      //   .then((res) => {
      //     setNextData3(res.data);
      //   })
      //   .catch((err) => {
      //     setError2(err.response.status);
      //   });

      if (index !== 0) {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/admin/notice/${preItemId}`,
          headers: {
            // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
            Authorization: jwt,
          },
        })
          .then((res) => {
            setNextData2(res.data);
          })
          .catch((err) => {
            // setError(err.response.status);
          });
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, jwt]); // eslint-disable-next-line

  //아이템 삭제 알림
  const deleteItemAlert = (id: number) => {
    swal
      .fire({
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
          deleteApi(id);
          swal.fire({
            icon: 'success',
            text: '게시판이 삭제되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
          navigate('/notice');
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
    });
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/notice/list?sort=sort,asc`,
      headers: {
        // 나중에 여기다가 쿠키 값 불러와서 적어야 한다.
        Authorization: jwt,
      },
    }).then((res) => {
      setDate(res.data.content);
    });
  };

  const { registDate2 } = useDateFormat();

  return (
    <div>
      <Header />
      <div>
        <S.Banner>Noticepo</S.Banner>
      </div>
      <S.Wrapper>
        {/* 쿠키에 관리자토큰이 아니라면 이거 안보여야 함 */}
        <S.ButtonBox>
          <S.NoticeButton1 onClick={() => deleteItemAlert(itemId)}>삭제</S.NoticeButton1>
          <S.NoticeButton2 onClick={() => moveNoticeMo(itemId)}>수정</S.NoticeButton2>
        </S.ButtonBox>
        <S.PoBox>
          <S.TitleDiv>
            <div>{data.title}</div>
            <div>{registDate2(data.lastModifiedDate)}</div>
          </S.TitleDiv>
          <S.Content>
            <div>{data.contents}</div>
          </S.Content>
          <S.NextPage>
            <S.Table>
              <tbody>
                <tr>
                  <td>
                    {index === 0 ? (
                      <S.NotPage2>이전글이 없습니다.</S.NotPage2>
                    ) : (
                      <div onClick={() => moveNoticepo(nextData2.id)}>
                        <S.FirstDiv>
                          <AiOutlineLeft size={15} />
                          <div>이전글</div>
                        </S.FirstDiv>
                        <S.NextTitle>{nextData2.title}</S.NextTitle>
                        <S.DateData>{registDate2(nextData2.lastModifiedDate)}</S.DateData>
                      </div>
                    )}
                  </td>
                  <td>
                    {index === 6 ? (
                      <S.NotPage>다음글이 없습니다.</S.NotPage>
                    ) : (
                      <S.SecondDiv onClick={() => moveNoticepo(nextData3.id)}>
                        <S.FirstDiv>
                          <div>다음글</div>
                          <AiOutlineRight size={15} />
                        </S.FirstDiv>
                        <S.NextTitle>{nextData3.title}</S.NextTitle>
                        <S.DateData>{registDate2(nextData3.lastModifiedDate)}</S.DateData>
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
      <Footer />
    </div>
  );
};
