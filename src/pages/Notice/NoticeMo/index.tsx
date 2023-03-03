import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Header } from '../../../components/common/Header';
import { Cookies } from 'react-cookie';
import { EditorWr } from '../../../components/Edit/AdminItemList/Editor';

const swal = withReactContent(Swal);

export const NoticeMo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemList = location.state.data;
  const reqData = location.state.reqData;
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        itemId: item,
        data: itemList,
        reqData: reqData,
      },
    });
  };
  const [noticeContent] = useState('noticeContent');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const itemId = location.state.itemId;

  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
      try {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/admin/notice/${itemId}`,
          headers: {
            Authorization: jwt,
          },
        }).then((res) => {
          setTitle(res.data.title);
          setContent(res.data.contents);
        });
      } catch (err: any) {
        navigate('/sign-in');
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        cookies.remove('loginUser');
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, jwt, navigate]);

  //수정알람
  const putItemAlert = () => {
    swal
      .fire({
        heightAuto: false,
        icon: 'question',
        text: '게시판을 수정하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (cookies.get('refreshToken')) {
            registerApi();
            swal.fire({
              heightAuto: false,
              icon: 'success',
              text: '게시판이 수정되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');
          }
        }
      });
  };

  const registerApi = async () => {
    await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}/admin/notice/${itemId} `,
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
          itemId: itemId,
          data: itemList,
          reqData: reqData,
        },
      });
    });
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
                  value={title}
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
                  targetId={itemId}
                  type={noticeContent}
                  descriptEdit={content}
                  setDescriptEdit={setContent}
                />
              </td>
            </tr>
          </tbody>
        </S.Table>
        <S.NoticeBox>
          <S.NoticeButton onClick={() => moveNoticepo(itemId)}>취소</S.NoticeButton>
          <S.NoticeButton2 onClick={() => putItemAlert()}>수정</S.NoticeButton2>
        </S.NoticeBox>
      </S.Wrapper>
    </div>
  );
};
