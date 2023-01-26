import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Footer } from '../../../components/common/Footer';
import { TfiLock } from 'react-icons/tfi';
import { AiOutlineDownload } from 'react-icons/ai';

// import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useDateFormat } from '../../../components/common/hooks/useDateFormat';
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
  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  const moveNoticepo = (item: any) => {
    navigate('/qna-mo', {
      state: {
        itemId: itemId,
      },
    });
  };

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/itemQna/${itemId}`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setData(res.data);
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
    };
    getData();
  }, [itemId, jwt]);

  const downloadFile = async (el: any) => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}${el.filePath}${el.fileName}`,
      responseType: 'blob',
      headers: {
        Authorization: jwt,
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].orgFileName === el.orgFileName) {
          const url = window.URL.createObjectURL(new Blob([res.data[i]]));
          // const newBlob = new Blob([new Uint8Array(img.data.data.data)]);
          // const newFile = new File([newBlob], qnaFile.orgFileName, { type: qnaFile.filePath });

          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', res.data[i].fileName);
          document.body.appendChild(link);
          link.click();
        }
      }
    });
  };

  //댓글부분
  // const comment = data.answer?.map((el: any) => {
  //   return el;
  // });

  // const {registDate} =useDateFormat();

  // const answer2 = (al: any) => {
  //   return (
  //     <ul>
  //       {al.map((al: any, index: any) => {
  //         return (
  //           <div key={index}>
  //             <S.TitleDiv2>
  //               <div>
  //                 <div>{al.adminId}</div>
  //                 <HiOutlineChatBubbleOvalLeftEllipsis />
  //               </div>
  //               {/* <div>{registDate(al.createDate)}</div> */}
  //             </S.TitleDiv2>
  //             <S.Content2>{al.contents}</S.Content2>
  //           </div>
  //         );
  //       })}
  //     </ul>
  //   );
  // };

  //삭제 알람
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
        }
      });
  };

  //삭제 api
  const deleteApi = async (id: number) => {
    await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/user/itemQna/${id}`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      navigate('/qna');
    });
  };

  return (
    <div>
      <Header />
      <div>
        <S.Banner>QnApo</S.Banner>
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
                    <button onClick={() => downloadFile(el)}>
                      <AiOutlineDownload size='30' />
                    </button>
                  </div>
                </S.FileDown>
              );
            })}
          </S.Content>
          <S.TitleDiv3>댓글</S.TitleDiv3>
          {/* {answer2(comment)} */}
          {/* <div>{data.answer !== undefined ? answer2(comment) : ''}</div> */}
          <S.Comment>
            <div>댓글쓰기</div>
            <S.ComemntInput placeholder='댓글을 입력해주세요.' />
            <S.QnAButton2>등록</S.QnAButton2>
          </S.Comment>
        </S.PoBox>
        <S.QnAButton onClick={() => navigate('/qna')}>목록</S.QnAButton>
      </S.Wrapper>
      <Footer />
    </div>
  );
};
