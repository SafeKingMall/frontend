import React from 'react';
// import { useNavigate } from 'react-router-dom';
import * as S from './style';
import db from '../../../db.json';
import ReactDragList from 'react-drag-list';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export const AdimCgList = () => {
  const categorycontent = db.categorycontent;

  const [
    ,
    // dataSource
    setDataSource,
  ] = useState(categorycontent);

  const handleUpdate = (evt: any, updated: any) => {
    // console.log(evt); // tslint:disable-line
    // console.log(updated); // tslint:disable-line
    setDataSource([...updated]);
  };

  //   console.log(dataSource);

  const [selected, setSelected] = useState([] as any);
  const [popupTogle, setPopupTogle] = useState(false);
  // 모달찰열렸을때 스코롤 안되게 하는것
  // const [styling, setStyling] = useState(null as any);

  const modalHandler = (record: any) => {
    setSelected([record]);
    setPopupTogle(!popupTogle);
    // if (styling === null) {
    //   setStyling({
    //     position: 'fixed',
    //   });
    // } else {
    //   setStyling(null);
    // }
  };

  const [popupTogle1, setPopupTogle1] = useState(false);

  const modalHandler1 = () => {
    setPopupTogle1(!popupTogle1);
  };

  const dragList = (record: any, index: any) => (
    <S.DragList key={index}>
      <div>{record.id}</div>
      <div>{record.name}</div>
      <div>
        <AiOutlineMenu />
      </div>
      <S.AdminCgBtn onClick={() => modalHandler(record)}>변경</S.AdminCgBtn>
      <S.AdminCgBtn2>삭제</S.AdminCgBtn2>
    </S.DragList>
  );

  return (
    <S.Wrapper>
      <div>
        <S.BigTitle>카테고리 관리</S.BigTitle>
      </div>

      <S.AdminCgtitle>
        <div>NO</div>
        <div>카테코리명</div>
        <div>카테코리 순서변경</div>
      </S.AdminCgtitle>
      <ReactDragList
        dataSource={categorycontent}
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
              <h2>카테코리수정</h2>
              {selected.map((al: any) => {
                return (
                  <div key={al.id}>
                    <S.ModalInput2 placeholder={al.name} />
                  </div>
                );
              })}
            </div>
            <S.PopUpHeader>
              <S.AdminCgBtn4 onClick={modalHandler}>취소하기</S.AdminCgBtn4>
              <S.AdminCgBtn5>수정하기</S.AdminCgBtn5>
            </S.PopUpHeader>
          </S.PopUpBody>
        </S.PopUpContainer>
      )}
      <S.CgBtnBox>
        <S.AdminCgBtn3>순서변경</S.AdminCgBtn3>
        <S.AdminCgBtn onClick={modalHandler1}>등록</S.AdminCgBtn>
      </S.CgBtnBox>
      {popupTogle1 && (
        <S.PopUpContainer onClick={modalHandler1}>
          <S.PopUpBody onClick={(e: any) => e.stopPropagation()}>
            <div>
              <h2>카테고리 등록</h2>
              <S.ModalInput placeholder='카테고리명을 입력해주세요.' />
            </div>
            <S.PopUpHeader>
              <S.AdminCgBtn4 onClick={modalHandler1}>취소하기</S.AdminCgBtn4>
              <S.AdminCgBtn5>등록하기</S.AdminCgBtn5>
            </S.PopUpHeader>
          </S.PopUpBody>
        </S.PopUpContainer>
      )}
    </S.Wrapper>
  );
};
