import React from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
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

const swal = withReactContent(Swal);

export const NoticeMo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemList = location.state.data;
  const moveNoticepo = (item: any) => {
    navigate('/notice-po', {
      state: {
        itemId: item,
        data: itemList,
      },
    });
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const itemId = location.state.itemId;

  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
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
    };
    getData();
  }, [itemId, jwt]);

  //수정알람
  const putItemAlert = () => {
    swal
      .fire({
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
          registerApi();
          swal.fire({
            icon: 'success',
            text: '게시판이 수정되었습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#289951',
            width: 400,
          });
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
        },
      });
    });
  };
  return (
    <div>
      <Header />
      <div>
        <S.Banner>NoticeMo</S.Banner>
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
                <S.TableTextarea
                  value={content}
                  placeholder='내용을 입력해주세요.'
                  onChange={(e: any) => {
                    setContent(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </S.Table>
        <S.NoticeBox>
          <S.NoticeButton onClick={() => moveNoticepo(itemId)}>취소</S.NoticeButton>
          <S.NoticeButton2 onClick={() => putItemAlert()}>등록</S.NoticeButton2>
        </S.NoticeBox>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
