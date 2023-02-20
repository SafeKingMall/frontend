import React, { useEffect, useState } from 'react';
import * as S from './style';
import { TfiLock } from 'react-icons/tfi';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDateFormat } from '../../../components/common/hooks/useDateFormat';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Header } from '../../../components/common/Header';
import { Cookies } from 'react-cookie';

const swal = withReactContent(Swal);

export const QnAPo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const itemId = state.data;
  const [data, setData] = useState([] as any);
  const [qnaFile, setQnaFile] = useState([] as any);
  const [memberId, setMemberId] = useState('');
  const [answerContents, setAnswerContents] = useState('');
  const [answer, setAnswer] = useState<any[]>([]);
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  const moveNoticepo = (item: any) => {
    if (cookies.get('refreshToken')) {
      navigate('/qna-mo', {
        state: {
          itemId: itemId,
        },
      });
    } else {
      navigate('/sign-in');
      cookies.remove('accessToken');
      cookies.remove('refreshToken');
      cookies.remove('loginUser');
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '로그인이 만료되었습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/itemQna/${itemId}`,
          headers: {
            Authorization: jwt,
          },
        }).then((res) => {
          setData(res.data);
          setMemberId(res.data.memberId);
          setAnswer(res.data.answer);
        });

        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/file/list/itemQna/${itemId}`,
          headers: {
            Authorization: jwt,
            'Content-Type': 'multipart/form-data',
          },
        }).then((res) => {
          setQnaFile(res.data);
        });
      } catch (err: any) {
        // if (err.response.status === 403) {
        navigate('/sign-in');
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        cookies.remove('loginUser');
        swal.fire({
          heightAuto: false,
          icon: 'warning',
          text: '로그인이 만료되었습니다.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          cancelButtonText: '취소',
          width: 400,
        });
        // }
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, jwt, navigate]);

  // 댓글 등록 알람
  const answerAlert = () => {
    if (answerContents === '') {
      swal.fire({
        heightAuto: false,
        icon: 'warning',
        text: '내용을 입력해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    } else {
      swal
        .fire({
          heightAuto: false,
          icon: 'question',
          text: '댓글을 등록하시겠습니까?',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          showCancelButton: true,
          cancelButtonText: '취소',
          width: 400,
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (cookies.get('refreshToken')) {
              registAnswer();
              swal
                .fire({
                  heightAuto: false,
                  icon: 'success',
                  text: '댓글이 등록되었습니다.',
                  confirmButtonText: '확인',
                  confirmButtonColor: '#289951',
                  width: 400,
                })
                .then((res) => {
                  setAnswerContents('');
                });
            } else {
              navigate('/sign-in');
              cookies.remove('accessToken');
              cookies.remove('refreshToken');
              cookies.remove('loginUser');
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

  //댓글 등록
  const registAnswer = async () => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/user/itemAnswer`,
      headers: {
        Authorization: jwt,
      },
      data: {
        contents: answerContents,
        memberId,
        itemQnaId: itemId,
      },
    }).then((res) => {
      setAnswerContents('');
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/itemQna/${itemId}`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setData(res.data);
      setMemberId(res.data.memberId);
      setAnswer(res.data.answer);
    });
  };

  const { registDate } = useDateFormat();

  const answer2 = (al: any) => {
    return (
      <ul>
        {al.map((al: any, index: any) => {
          return (
            <div key={index}>
              <S.TitleDiv2>
                <div>
                  <div>{al.memberId}</div>
                  <IoChatbubbleEllipsesOutline />
                </div>
                <div>{registDate(al.createDate)}</div>
              </S.TitleDiv2>
              <S.Content2>{al.contents}</S.Content2>
            </div>
          );
        })}
      </ul>
    );
  };

  //삭제 알람
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
            swal.fire({
              heightAuto: false,
              icon: 'success',
              text: '게시판이 삭제되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else {
            navigate('/sign-in');
            cookies.remove('accessToken');
            cookies.remove('refreshToken');
            cookies.remove('loginUser');
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
  };

  //삭제 api
  const deleteApi = async (id: number) => {
    if (qnaFile.length !== 0) {
      await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/user/itemQna/${id}`,
        headers: {
          Authorization: jwt,
        },
      })
        .then((res) => {
          deleteFile();
        })
        .then((res) => {
          navigate('/qna');
        });
    } else {
      await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/user/itemQna/${id}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        navigate('/qna');
      });
    }
  };

  //첨부파일 삭제 api
  const deleteFile = async () => {
    await qnaFile.map((el: any) => {
      return axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/file/${el.id}`,
        headers: {
          Authorization: jwt,
        },
      });
    });
    // await navigate('/qna');
  };

  return (
    <div>
      <Header />
      <div>
        <S.Banner>문의하기</S.Banner>
      </div>
      <S.Wrapper>
        <S.ButtonBox>
          <S.NoticeButton1 onClick={() => deleteItemAlert(itemId)}>삭제</S.NoticeButton1>
          <S.NoticeButton2 onClick={() => moveNoticepo(itemId)}>수정</S.NoticeButton2>
        </S.ButtonBox>
        <S.PoBox>
          <S.TitleDiv>
            <div>
              <div>{data.title}</div>
              <TfiLock color='#D9D9D9' />
            </div>
            <div>작성자 : {data.memberId}</div>
          </S.TitleDiv>
          <S.Content>
            <S.DivContent>{data.contents}</S.DivContent>
            {qnaFile.map((el: any) => {
              return (
                <S.FileDown key={el.id}>
                  <div>첨부파일</div>
                  <div>{el.orgFileName}</div>
                  <div>
                    <a
                      href={process.env.REACT_APP_BASE_URL + el.filePath + el.fileName}
                      download
                      target='_blank'
                      rel='noreferrer'
                    >
                      <AiOutlineDownload size='30' />
                    </a>
                  </div>
                </S.FileDown>
              );
            })}
          </S.Content>
          <S.TitleDiv3>댓글</S.TitleDiv3>
          <div>{data.answer !== undefined ? answer2(answer) : ''}</div>
          <S.Comment>
            <div>댓글쓰기</div>
            <S.TextDiv>
              <textarea
                placeholder='댓글을 입력해주세요.'
                value={answerContents}
                onChange={(e: any) => setAnswerContents(e.target.value)}
              />
            </S.TextDiv>
            <S.QnAButton2 onClick={() => answerAlert()}>등록</S.QnAButton2>
          </S.Comment>
        </S.PoBox>
        <S.QnAButton onClick={() => navigate('/qna')}>목록</S.QnAButton>
      </S.Wrapper>
    </div>
  );
};
