import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Header } from '../../../components/common/Header';
import { Cookies } from 'react-cookie';
import { useLocation } from 'react-router';
import { EditorWr } from '../../../components/Edit/AdminItemList/Editor';
import { useEffect } from 'react';

const swal = withReactContent(Swal);

export const NoticeWr = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reqData = location.state.reqData;
  const size = location.state.size;
  const [noticeContent] = useState('noticeContent');
  const [sendId, setSendId] = useState(0 as any);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
      // try {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/notice/list?size=${size}&page=0&${reqData}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setSendId(res.data.content[0].id);
      });
      // } catch (err: any) {
      //   // if (err.response.status === 403) {
      //   navigate('/sign-in');
      //   swal.fire({
      //     icon: 'warning',
      //     text: '로그인이 만료되었습니다.',
      //     confirmButtonText: '확인',
      //     confirmButtonColor: '#289951',
      //     cancelButtonText: '취소',
      //     width: 400,
      //   });
      //   // }
      // }
    };
    getData();
  }, [jwt, reqData, size, navigate]);

  //등록 알림창
  const registerAlert = (reqData: any) => {
    if (title === '' || content === '') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '내용을 기입해주세요',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: '게시판을 등록하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (cookies.get('refreshToken')) {
              registerApi(reqData);
              swal.fire({
                heightAuto: false,
                icon: 'success',
                text: '게시판이 등록되었습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
            } else {
              navigate('/sign-in');
              swal.fire({
                heightAuto: false,
                icon: 'warning',
                text: '로그인이 만료되었습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
            }
          }
        });
    }
  };

  const registerApi = async (reqData: any) => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/admin/notice`,
      headers: {
        Authorization: jwt,
      },
      data: {
        title: title,
        contents: content,
      },
    }).then((res) => {
      navigate('/notice-po', {
        state: {
          itemId: res.data,
          reqData: reqData,
        },
      });
    });
  };

  // 내용 기입 후 취소 버튼을 눌렀을때
  const cancelBtn = () => {
    if (title !== '' || content !== '') {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: `작성된 내용이 있습니다. 내용은 저장되지 않습니다. 취소하시겠습니까?`,
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate('/notice');
          }
        });
    } else {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: `공지사항 등록을 취소하시겠습니까?`,
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate('/notice');
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <S.Banner>공지사항</S.Banner>
      </div>
      <S.Wrapper>
        <S.Table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <S.TableInput
                  placeholder='제목을 입력해주세요.'
                  onChange={(e: any) => {
                    setTitle(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <EditorWr
                  targetId={sendId}
                  type={noticeContent}
                  descriptEdit={content}
                  setDescriptEdit={setContent}
                />
              </td>
            </tr>
          </tbody>
        </S.Table>
        <S.NoticeBox>
          <S.NoticeButton onClick={() => cancelBtn()}>취소</S.NoticeButton>
          <S.NoticeButton2 onClick={() => registerAlert(reqData)}>등록</S.NoticeButton2>
        </S.NoticeBox>
      </S.Wrapper>
    </div>
  );
};
