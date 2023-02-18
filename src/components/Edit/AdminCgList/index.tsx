import React from 'react';
import * as S from './style';
import ReactDragList from 'react-drag-list';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../../../css/alert.css';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const swal = withReactContent(Swal);

export const AdimCgList = () => {
  const [itemList, setItemList] = useState<any[]>([]);

  //등록api
  const [registerCate, setRegisterCate] = useState('' as any);
  const [sortCate, setSortCate] = useState(0);

  //수정api
  const [putCateName, setPutCateName] = useState('');

  const [selected, setSelected] = useState<any[]>([]);
  //리스트 모달창
  const [popupTogle, setPopupTogle] = useState(false);
  // 모달찰열렸을때 스코롤 안되게 하는것
  // const [styling, setStyling] = useState(null as any);

  //등록 모달창
  const [popupTogle1, setPopupTogle1] = useState(false);

  const navigate = useNavigate();

  const cookies = new Cookies();
  const jwt = cookies.get('accessToken');

  useEffect(() => {
    const getData = async () => {
      try {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/admin/category/list?sort=sort,asc`,
          headers: {
            Authorization: jwt,
          },
        }).then((res) => {
          setItemList(res.data.content);
          setSortCate(res.data.content.length);
        });
      } catch (err: any) {
        // if (err.response.status === 403) {
        navigate('/sign-in');
        swal.fire({
          icon: 'warning',
          text: '로그인이 만료되었습니다.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          cancelButtonText: '취소',
          width: 400,
        });
      }
    };
    getData();
  }, [jwt, navigate]);

  //등록알람

  const registerItemAlert = () => {
    if (itemList.length < 7) {
      swal
        .fire({
          icon: 'question',
          text: '카테고리명를 등록하시겠습니까?',
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
                icon: 'success',
                text: '카테고리가 등록됐습니다..',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
            } else {
              navigate('/sign-in');
              swal.fire({
                icon: 'warning',
                text: '로그인이 만료되었습니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#289951',
                width: 400,
              });
            }
          }
        });
    } else {
      swal.fire({
        icon: 'warning',
        text: '카테고리 갯수가 초과하였습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  // 등록 api
  const registerApi = async () => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/admin/category`,
      headers: {
        Authorization: jwt,
      },
      data: {
        name: registerCate,
        sort: sortCate + 1,
      },
    }).then((res) => {
      setPopupTogle1(!popupTogle1);
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/category/list?sort=sort,asc`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setItemList(res.data.content);
      setSortCate(res.data.content.length);
    });
  };

  //아이템 삭제 알림
  const deleteItemAlert = (id: number, name: string, idx: number) => {
    swal
      .fire({
        icon: 'question',
        text: `${name} 카테고리를 삭제하겠습니까? 삭제하면 복구가 불가능합니다.`,
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (cookies.get('refreshToken')) {
            deleteApi(id, idx);
            swal.fire({
              icon: 'success',
              text: `${name} 카테고리가 삭제됐습니다.`,
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else {
            navigate('/sign-in');
            swal.fire({
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
  const deleteApi = async (id: number, idx: number) => {
    if (cookies.get('refreshToken')) {
      await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}/admin/category/${id}`,
        headers: {
          Authorization: jwt,
        },
      });
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/category/list?sort=sort,asc`,
        headers: {
          Authorization: jwt,
        },
      }).then((res) => {
        setItemList(res.data.content);
        setSortCate(res.data.content.length);
      });
    } else {
      navigate('/sign-in');
      swal.fire({
        icon: 'warning',
        text: '로그인이 만료되었습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };

  //수정알람
  const putItemAlert = (id: number, sort: number, idx: number) => {
    swal
      .fire({
        icon: 'question',
        text: '카테고리명을 변경하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (cookies.get('refreshToken')) {
            putApi(id, sort);
            swal.fire({
              icon: 'success',
              text: '카테고리명이 변경되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else {
            navigate('/sign-in');
            swal.fire({
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

  //수정 api
  const putApi = async (id: number, sort: number) => {
    await axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}/admin/category/${id}`,
      headers: {
        Authorization: jwt,
      },
      data: {
        name: putCateName,
        sort: sort,
      },
    }).then((res) => {
      setPopupTogle(!popupTogle);
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/category/list?sort=sort,asc`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setItemList(res.data.content);
      setSortCate(res.data.content.length);
    });
  };

  //순서변경 알림창
  const cateItemAlert = () => {
    swal
      .fire({
        icon: 'question',
        text: '카테고리 순서를 변경하시겠습니까? ',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (cookies.get('refreshToken')) {
            changeCateApi();
            swal.fire({
              icon: 'success',
              text: '카테고리 순서가 변경되었습니다.',
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          } else {
            navigate('/sign-in');
            swal.fire({
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

  //순서변경 api
  const changeCateApi = async () => {
    await itemList.map((el: any, index: number) => {
      return axios({
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}/admin/category/${el.id}`,
        headers: {
          Authorization: jwt,
        },
        data: {
          name: el.name,
          sort: index + 1,
        },
      });
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/category/list?sort=sort,asc`,
      headers: {
        Authorization: jwt,
      },
    });

    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/admin/category/list?sort=sort,asc`,
      headers: {
        Authorization: jwt,
      },
    }).then((res) => {
      setItemList(res.data.content);
      setSortCate(res.data.content.length);
    });
  };

  const handleUpdate = (evt: any, updated: any) => {
    // console.log(evt); // tslint:disable-line
    // console.log(updated); // tslint:disable-line
    setItemList([...updated]);
  };

  const modalHandler = (record: any) => {
    setSelected([record]);
    setPopupTogle(!popupTogle);
    setPutCateName('');
    // if (styling === null) {
    //   setStyling({
    //     position: 'fixed',
    //   });
    // } else {
    //   setStyling(null);
    // }
  };

  const modalHandler1 = () => {
    setPopupTogle1(!popupTogle1);
    setRegisterCate('');
  };

  const dragList = (record: any, index: any) => (
    <S.DragList key={index}>
      <div>{record.sort}</div>
      <div>{record.name}</div>
      <div>
        <AiOutlineMenu />
      </div>
      <S.AdminCgBtn onClick={() => modalHandler(record)}>변경</S.AdminCgBtn>
      <S.AdminCgBtn2 onClick={() => deleteItemAlert(record.id, record.name, index)}>
        삭제
      </S.AdminCgBtn2>
    </S.DragList>
  );

  return (
    <S.Wrapper>
      <div>
        <S.BigTitle>카테고리 관리</S.BigTitle>
      </div>

      <S.AdminCgtitle>
        <div>NO</div>
        <div>카테고리명</div>
        <div>카테고리 순서변경</div>
      </S.AdminCgtitle>
      <ReactDragList
        dataSource={itemList}
        rowKey='name'
        row={dragList}
        handles={false}
        className='simple-drag'
        rowClassName='simple-drag-row'
        onUpdate={handleUpdate}
      />

      {popupTogle && (
        <S.PopUpContainer onClick={modalHandler}>
          <S.PopUpBody onClick={(e: any) => e.stopPropagation()}>
            <div>
              <h2>카테고리수정</h2>
              {selected.map((al: any, index: number) => {
                return (
                  <div key={al.id}>
                    <S.ModalInput2
                      key={al.id}
                      value={putCateName || al.name}
                      onChange={(e: any) => {
                        setPutCateName(e.target.value);
                      }}
                    />
                    <S.PopUpHeader>
                      <S.AdminCgBtn4 onClick={modalHandler}>취소하기</S.AdminCgBtn4>
                      <S.AdminCgBtn5 onClick={() => putItemAlert(al.id, al.sort, index)}>
                        수정하기
                      </S.AdminCgBtn5>
                    </S.PopUpHeader>
                  </div>
                );
              })}
            </div>
          </S.PopUpBody>
        </S.PopUpContainer>
      )}
      <S.CgBtnBox>
        <S.AdminCgBtn3 onClick={() => cateItemAlert()}>순서변경</S.AdminCgBtn3>
        <S.AdminCgBtn onClick={modalHandler1}>등록</S.AdminCgBtn>
      </S.CgBtnBox>
      {popupTogle1 && (
        <S.PopUpContainer onClick={modalHandler1}>
          <S.PopUpBody onClick={(e: any) => e.stopPropagation()}>
            <div>
              <h2>카테고리 등록</h2>
              <S.ModalInput
                placeholder='카테고리명을 입력해주세요.'
                value={registerCate || ''}
                onChange={(e: any) => {
                  setRegisterCate(e.target.value);
                }}
              />
            </div>
            <S.PopUpHeader>
              <S.AdminCgBtn4 onClick={modalHandler1}>취소하기</S.AdminCgBtn4>
              <S.AdminCgBtn5 onClick={() => registerItemAlert()}>등록하기</S.AdminCgBtn5>
            </S.PopUpHeader>
          </S.PopUpBody>
        </S.PopUpContainer>
      )}
    </S.Wrapper>
  );
};
