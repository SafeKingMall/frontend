import React, { useEffect, useState } from 'react';
import * as S from './style';
import DaumPostcode from 'react-daum-postcode';
import { CSSObject } from 'styled-components';

export const AddressInfo = (props: any) => {
  const userData = props.userData;
  const [addRadio, setAddRadio] = useState('basicAdd');
  // 0=name, 1=email, 2=phoneNumber, 3=zipcode, 4=basicAddress, 5=detailedAddress, 6=delivery_memo, 7=memo
  const [text, setText] = useState(['', '', '', '', '', '', '', '']);
  const [selectValue, setSelectValue] = useState('');
  const [directToggle, setDirectToggle] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const openModal = () => {
    setIsOpenPost(true);
    document.body.style.cssText = 'overflow-y: hidden; width: 100%; padding-right: 15px;'; // 모달띄웠을떄 스크롤 막기
  };

  const closeModal = () => {
    setIsOpenPost(false);
    document.body.style.cssText = ''; //스크롤 막은 것을 해제
  };

  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = '';
    let copyText = [...text];
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    copyText[3] = data.zonecode;
    copyText[4] = fullAddr;
    copyText[5] = '';
    setText(copyText);
    closeModal();
  };

  const radioChange = (value: any) => {
    setAddRadio(value);
  };

  const textChange = (value: string, idx: number) => {
    let copy = [...text];
    copy[idx] = value;
    setText(copy);
  };

  const deliveryReqChange = (value: string) => {
    let copy = [...text];
    if (value === '직접 입력') {
      copy[6] = '';
      setDirectToggle(true);
    } else {
      copy[6] = value;
      setDirectToggle(false);
    }
    setText(copy);
    setSelectValue(value);
  };

  useEffect(() => {
    if (addRadio === 'basicAdd') {
      let arr = [];
      arr[0] = userData.name;
      arr[1] = userData.email;
      arr[2] = userData.phoneNumber;
      arr[3] = userData.zipcode;
      arr[4] = userData.basicAddress;
      arr[5] = userData.detailedAddress;
      arr[6] = '';
      arr[7] = '';
      setText(arr);
      setSelectValue('');
    } else if (addRadio === 'newAdd') {
      setText(['', '', '', '', '', '', '', '']);
      setSelectValue('');
    }
  }, [addRadio, userData]);

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);
  });

  const resizeEvent = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  console.log(windowWidth);
  console.log(windowHeight);

  const postCodeStyle: CSSObject = {
    width: '500px',
    height: '460px',
    padding: '7px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
  };

  return (
    <S.Container>
      <S.AddContainer>
        <S.AddTitleContainer>
          <S.AddTitleText>배송지 정보</S.AddTitleText>
          <S.AddSelectArea>
            <S.AddSelcetRadio
              name='addSelect'
              id='basicAdd'
              value='basicAdd'
              defaultChecked
              onChange={(e) => radioChange(e.target.value)}
            ></S.AddSelcetRadio>
            <S.RadioLabel htmlFor='basicAdd' style={{ marginRight: '1.6rem' }}>
              기본 배송지
            </S.RadioLabel>
            <S.AddSelcetRadio
              name='addSelect'
              id='newAdd'
              value='newAdd'
              onChange={(e) => radioChange(e.target.value)}
            ></S.AddSelcetRadio>
            <S.RadioLabel htmlFor='newAdd'>새로운 배송지</S.RadioLabel>
          </S.AddSelectArea>
        </S.AddTitleContainer>
        <S.AddInputContainer>
          <S.InputArea>
            <S.InputTitleArea>
              <S.InputTitle>받는 분</S.InputTitle>
            </S.InputTitleArea>
            <S.InputBasic
              type='text'
              placeholder='이름을 입력해주세요.'
              value={text[0]}
              onChange={(e) => textChange(e.target.value, 0)}
            />
          </S.InputArea>
          <S.InputArea>
            <S.InputTitleArea>
              <S.InputTitle>이메일</S.InputTitle>
            </S.InputTitleArea>
            <S.InputBasic
              type='text'
              placeholder='이메일을 입력해주세요.'
              value={text[1]}
              onChange={(e) => textChange(e.target.value, 1)}
            />
          </S.InputArea>
          <S.InputArea>
            <S.InputTitleArea>
              <S.InputTitle>휴대전화</S.InputTitle>
            </S.InputTitleArea>
            <S.InputPhone
              type='number'
              placeholder='전화번호를 입력해주세요.'
              value={text[2]}
              onChange={(e) => textChange(e.target.value, 2)}
              onWheel={(e) => (e.target as HTMLElement).blur()}
            />
          </S.InputArea>
          <S.InputArea>
            <S.InputTitleArea>
              <S.InputTitle>주소</S.InputTitle>
            </S.InputTitleArea>
            <S.InputZipcode
              type='text'
              placeholder='주소찾기를 클릭하세요.'
              value={text[3]}
              onChange={(e) => textChange(e.target.value, 3)}
              readOnly
            />
            <S.AddSearchBtn onClick={() => openModal()}>주소찾기</S.AddSearchBtn>
          </S.InputArea>
          <S.InputArea style={{ marginBottom: '3.5rem' }}>
            <S.InputBasic
              type='text'
              placeholder='주소를 입력해주세요.'
              value={text[4]}
              onChange={(e) => textChange(e.target.value, 4)}
              readOnly
              style={{ marginLeft: '20.1rem' }}
            />
            <S.InputDetailAdd
              type='text'
              placeholder='상세주소를 입력해주세요.'
              value={text[5]}
              onChange={(e) => textChange(e.target.value, 5)}
            />
          </S.InputArea>
          <S.InputArea>
            <S.InputTitleArea>
              <S.InputTitle>배송시 요청사항</S.InputTitle>
            </S.InputTitleArea>
            <S.ShippingSelect
              value={selectValue}
              onChange={(e) => deliveryReqChange(e.target.value)}
              style={{ color: selectValue === '' ? 'gray' : '' }}
            >
              <option value='' disabled hidden>
                선택해주세요
              </option>
              <option value='빠른 배송 부탁드립니다.'>빠른 배송 부탁드립니다.</option>
              <option value='배송 전, 연락주세요.'>배송 전, 연락주세요.</option>
              <option value='부재 시, 휴대폰으로 연락주세요.'>
                부재 시, 휴대폰으로 연락주세요.
              </option>
              <option value='부재 시, 경비실에 맡겨주세요.'>부재 시, 경비실에 맡겨주세요.</option>
              <option value='부재 시, 문 앞에 놔주세요.'>부재 시, 문 앞에 놔주세요.</option>
              <option value='직접 입력'>직접 입력</option>
            </S.ShippingSelect>
            <S.InputDetailAdd
              type='text'
              placeholder='배송시 요청사항을 입력해주세요.'
              value={text[6]}
              onChange={(e) => textChange(e.target.value, 6)}
              style={{ display: directToggle ? '' : 'none' }}
            />
          </S.InputArea>
          <S.ShippingDesArea>
            <S.ShippingDes>- 배송기간은 근무일 기준으로 1-3일 정도 소요됩니다.</S.ShippingDes>
            <S.ShippingDes>
              - 산간지역 및 배송이 어려운 지역은 타지역 대비 2-3일 정도 더 소요됩니다.
            </S.ShippingDes>
          </S.ShippingDesArea>
          <S.OrderReqArea>
            <S.OrderReqTitleArea>
              <S.InputTitle>주문 요청사항</S.InputTitle>
              <S.InputTitle style={{ color: '#888888' }}>(선택사항)</S.InputTitle>
            </S.OrderReqTitleArea>
            <S.OrderReqInput
              placeholder='주문 요청사항을 입력해주세요.'
              value={text[7]}
              onChange={(e) => textChange(e.target.value, 7)}
            />
          </S.OrderReqArea>
        </S.AddInputContainer>
      </S.AddContainer>
      {isOpenPost && (
        <S.DaumPostBackground
          onClick={() => closeModal()}
          // style={{ width: windowWidth, height: windowHeight }}
        >
          <S.DaumPostDiv>
            {/* <S.DaumPostTopArea></S.DaumPostTopArea> */}
            <DaumPostcode style={postCodeStyle} autoClose={false} onComplete={onCompletePost} />
          </S.DaumPostDiv>
        </S.DaumPostBackground>
      )}
    </S.Container>
  );
};
