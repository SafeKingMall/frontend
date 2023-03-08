import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import DaumPostcode from 'react-daum-postcode';

const KREN = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z ]/;
const KRVAL = /[ㄱ-ㅎㅏ-ㅣ]/;
const NUM = /[^0-9]/;
const EMAIL = /^[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[a-zA-Z]+){1,2}$/;

export const AddressInfo = (props: any) => {
  const userData = props.userData;
  const [addRadio, setAddRadio] = useState('basicAdd');
  //text배열 index [0=receiver, 1=email, 2=phoneNumber, 3=zipcode, 4=basicAddress, 5=detailedAddress, 6=delivery_memo, 7=memo]
  const text = props.text;
  const setText = props.setText;
  const receiverVal = props.receiverVal;
  const setReceiverVal = props.setReceiverVal;
  const emailVal = props.emailVal;
  const setEmailVal = props.setEmailVal;
  const phoneVal = props.phoneVal;
  const setPhoneVal = props.setPhoneVal;
  const [selectValue, setSelectValue] = useState('');
  const [directToggle, setDirectToggle] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);

  //주소모달 열기
  const openModal = () => {
    setIsOpenPost(true);
    document.body.style.cssText = 'overflow-y: hidden; width: 100%;'; // 모달띄웠을떄 스크롤 막기
  };

  //주소모달 닫기
  const closeModal = () => {
    setIsOpenPost(false);
    document.body.style.cssText = ''; //스크롤 막은 것을 해제
  };

  //주소선택 성공
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

  //배송지정보 input 입력시 이벤트
  const textChange = (value: string, idx: number) => {
    let copy = [...text];
    copy[idx] = value;
    setText(copy);
    validationText(copy);
  };

  //유효성검사
  const validationText = (text: string[]) => {
    if (KREN.test(text[0])) {
      setReceiverVal('* 한글/영어/공백으로만 입력해주세요.');
    } else {
      setReceiverVal('');
    }
    if (EMAIL.test(text[1])) {
      setEmailVal('');
    }
    if (NUM.test(text[2])) {
      setPhoneVal('* 숫자만 입력해주세요. [예: 01012345678]');
    } else {
      setPhoneVal('');
    }
  };

  //포커스아웃시 유효성검사
  const receiverBlur = () => {
    if (KREN.test(text[0])) {
      setReceiverVal('* 한글/영어/공백으로만 입력해주세요.');
    } else if (KRVAL.test(text[0])) {
      setReceiverVal('* 한글입력을 확인해주세요.');
    }
  };
  const emailBlur = () => {
    if (!EMAIL.test(text[1])) {
      setEmailVal('* 올바른 이메일 형식이 아닙니다. [예: Safeking@naver.com]');
    }
  };
  const phoneBlur = () => {
    if (NUM.test(text[2])) {
      setPhoneVal('* 숫자만 입력해주세요. [예: 01012345678]');
    } else if (text[2].length > 11 || text[2].length < 10) {
      setPhoneVal('* 10~11자리의 숫자로 입력해주세요. [예: 01012345678]');
    }
  };

  //배송시요청사항 변경이벤트
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

  //유효성검사 리셋
  const resetValidation = useCallback(() => {
    setReceiverVal('');
    setEmailVal('');
    setPhoneVal('');
  }, [setReceiverVal, setEmailVal, setPhoneVal]);

  //기본배송지, 새로운배송지 선택시 변경 이벤트
  const radioChange = (value: any) => {
    setAddRadio(value);
  };

  //기본배송지, 새로운배송지 초기값
  useEffect(() => {
    if (addRadio === 'basicAdd') {
      let arr = [];
      arr[0] = userData.receiver;
      arr[1] = userData.email;
      arr[2] = userData.phone_number;
      arr[3] = userData.zipcode;
      arr[4] = userData.address;
      arr[5] = userData.detail_address;
      arr[6] = '';
      arr[7] = '';
      setText(arr);
      setSelectValue('');
      resetValidation();
    } else if (addRadio === 'newAdd') {
      setText(['', '', '', '', '', '', '', '']);
      setSelectValue('');
      resetValidation();
    }
  }, [addRadio, userData, setText, resetValidation]);

  //주소모달 스타일
  // const postCodeStyle = {
  //   width: '500px',
  //   height: '460px',
  //   padding: '7px',
  //   backgroundColor: '#ffffff',
  //   borderRadius: '15px',
  //   fontSize: '16px',
  // };
  const postCodeStyle = {
    width: '100%',
    height: '100%',
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
            <S.RadioLabel htmlFor='basicAdd' style={{ marginRight: '0.16rem' }}>
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
              maxLength={50}
              value={text[0] || ''}
              onChange={(e) => textChange(e.target.value, 0)}
              onBlur={() => receiverBlur()}
            />
          </S.InputArea>
          <S.ValidationArea>
            <S.Validation>{receiverVal}</S.Validation>
          </S.ValidationArea>
          <S.InputArea>
            <S.InputTitleArea>
              <S.InputTitle>이메일</S.InputTitle>
            </S.InputTitleArea>
            <S.InputBasic
              type='text'
              placeholder='이메일을 입력해주세요.'
              maxLength={80}
              value={text[1] || ''}
              onChange={(e) => textChange(e.target.value, 1)}
              onBlur={() => emailBlur()}
            />
          </S.InputArea>
          <S.ValidationArea>
            <S.Validation>{emailVal}</S.Validation>
          </S.ValidationArea>
          <S.InputArea>
            <S.InputTitleArea>
              <S.InputTitle>휴대전화</S.InputTitle>
            </S.InputTitleArea>
            <S.InputBasic
              type='text'
              placeholder='전화번호를 입력해주세요. (숫자만 입력)'
              value={text[2] || ''}
              onChange={(e) => textChange(e.target.value, 2)}
              onBlur={() => phoneBlur()}
            />
          </S.InputArea>
          <S.ValidationArea>
            <S.Validation>{phoneVal}</S.Validation>
          </S.ValidationArea>
          <S.InputAddArea>
            <S.InputTitleArea>
              <S.InputTitle>주소</S.InputTitle>
            </S.InputTitleArea>
            <S.ZipCodeWrap>
              <S.InputZipcode
                type='text'
                placeholder='주소찾기를 클릭하세요.'
                value={text[3] || ''}
                onChange={(e) => textChange(e.target.value, 3)}
                readOnly
              />
              <S.AddSearchBtn onClick={() => openModal()}>주소찾기</S.AddSearchBtn>
            </S.ZipCodeWrap>
          </S.InputAddArea>
          <S.InputArea style={{ marginBottom: '0.32rem' }}>
            <S.InputAdd
              type='text'
              placeholder='주소를 입력해주세요.'
              value={text[4] || ''}
              onChange={(e) => textChange(e.target.value, 4)}
              readOnly
            />
            <S.InputDetailAdd
              type='text'
              placeholder='상세주소를 입력해주세요.'
              maxLength={50}
              value={text[5] || ''}
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
              maxLength={50}
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
        <S.DaumPostBackground onClick={() => closeModal()}>
          <S.DaumPostDiv>
            <DaumPostcode
              className='daumPost'
              style={postCodeStyle}
              autoClose={false}
              onComplete={onCompletePost}
            />
          </S.DaumPostDiv>
        </S.DaumPostBackground>
      )}
    </S.Container>
  );
};
