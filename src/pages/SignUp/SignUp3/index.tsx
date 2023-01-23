/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Footer } from '../../../components/common/Footer';
import { Header } from '../../../components/common/Header';
import * as S from './style';
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface SignUpForm3 {
  company: string;
  saupja: string;
  beobin: string;
  ceo: string;
  number: string;
  autoClose: boolean;
}

export const SignUp3 = () => {
  const navigate = useNavigate();
  const [company, SetCompany] = useState<string>('');
  const [saupja, setSaupja] = useState<string>('');
  const saupjaRef = useRef<any>();
  const [beobin, setBeobin] = useState<string>('');
  const beobinRef = useRef<any>();
  const [ceo, setCeo] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [basic, setBasic] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  //유효성 검사
  const [isCompany, setIsCompany] = useState<boolean>(false);
  const [isSaupja, setIsSaupja] = useState<boolean>(false);
  const [isBeobin, setIsBeobin] = useState<boolean>(false);
  const [isZip, setIsZip] = useState<boolean>(false);
  const [isBasic, setIsBasic] = useState<boolean>(false);
  const [isDetail, setIsDetail] = useState<boolean>(false);

  const [isCeo, setIsCeo] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  //에러메세지
  const [companyMsg, SetCompanyMsg] = useState<string>('');
  const [saupjaMsg, setSaupjaMsg] = useState<string>('');
  const [beobinMsg, setBeobinMsg] = useState<string>('');
  const [ceoMsg, setCeoMsg] = useState<string>('');
  const [detailMsg, setDetailMsg] = useState<string>('');
  const [numberMsg, setNumberMsg] = useState<string>('');

  //회사명 한글영어숫자만 특문:한영숫으로만
  const onCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const companyCurrent = e.target.value;
    SetCompany(companyCurrent);
    const companyRegex = /[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g;

    if (companyCurrent === '') {
      SetCompanyMsg('회사명을 입력해주세요.');
      setIsCompany(false);
    } else if (companyRegex.test(companyCurrent)) {
      SetCompanyMsg('한글/영어/숫자로만 입력해주세요.');
      setIsCompany(false);
    } else {
      SetCompanyMsg('');
      setIsCompany(true);
    }
  };
  //사업자 (000-00-00000) 정규식처리, 10자리 초과/미만
  const onSaupja = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //사업자 인풋 내 하이픈 자동 생성
    const autoSaupja = saupjaRef.current.value.replace(/\D+/g, '');
    const saupjaLength = 10;
    let result;
    result = '';
    for (let i = 0; i < autoSaupja.length && i < saupjaLength; i++) {
      switch (i) {
        case 3:
          result += '-';
          break;
        case 5:
          result += '-';
          break;

        default:
          break;
      }
      result += autoSaupja[i];
    }
    saupjaRef.current.value = result;
    setSaupja(e.target.value);
    // console.log('dfs', saupja);
    const saupjaRegex = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
    if (result === '') {
      setSaupjaMsg('사업자 등록번호를 입력해주세요');
      setIsSaupja(false);
    } else if (saupjaRegex.test(result)) {
      // console.log('유효성 통과');
      setSaupjaMsg('');
      setIsSaupja(true);
    }
  };

  //법인 (00000-0000000) 정규식처리, 10자리 초과/미만
  const onBeobin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //법인 인풋 내 하이픈 자동 생성
    const autoBeobin = beobinRef.current.value.replace(/\D+/g, '');
    const beobinLength = 12;
    let result;
    result = '';
    for (let i = 0; i < autoBeobin.length && i < beobinLength; i++) {
      switch (i) {
        case 5:
          result += '-';
          break;

        default:
          break;
      }
      result += autoBeobin[i];
    }
    beobinRef.current.value = result;
    setBeobin(e.target.value);
    // console.log('dfs', beobin);
    const beobinRegex = /^([0-9]{5})-([0-9]{7})$/;
    if (result === '') {
      setBeobinMsg('법인등록번호를 입력해주세요');
      setIsBeobin(false);
    } else if (beobinRegex.test(result)) {
      // console.log('법인 유효성 통과');
      setBeobinMsg('');
      setIsBeobin(true);
    }
  };
  //대표명
  const onCeo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const ceoCurrent = e.target.value;
    setCeo(ceoCurrent);

    if (ceoCurrent === '') {
      setCeoMsg('대표명을 입력해주세요');
      setIsCeo(false);
    } else {
      setCeoMsg('');
      setIsCeo(true);
    }
  };
  //다음주소
  const [openPost, setOpenPost] = useState<boolean>(false);
  const closeRef = useRef<any>(null);
  const [zipText, setZipText] = useState<string>('');
  const [basicText, setBasicText] = useState<string>('');

  const handleClickOutside = (e: React.MouseEvent) => {
    setOpenPost(false);
  };

  const postCodeStyle = {
    // width: '700px',
    // height: '700px',
    // padding: '7px',
    // backgroundColor: '#ffffff',
    // borderRadius: '15px',
  };
  const onOpenPost = () => {
    setOpenPost(true);
  };
  const onClosePost = (e: any) => {
    setOpenPost(false);
  };
  const onCompletePost = (data: any) => {
    console.log(data);
    let fullAddr = data.address;
    let extraAddr = '';
    let zipValue = '';
    let basicValue = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
      console.log(fullAddr);
      zipValue = data.zonecode;
      console.log(zipValue, 'sdfasdfsdf');
      //우편번호
      setZipText(zipValue);
      setIsZip(true);
      //기본주소
      basicValue = fullAddr;
      setBasicText(basicValue);
      setIsBasic(true);
    }
  };
  //상세주소
  const onDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const detailCurrent = e.target.value;
    setDetail(detailCurrent);
    const detailRegex = /[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g;

    if (detailCurrent === '') {
      setDetailMsg('상세주소를 입력해주세요');
      setIsDetail(false);
    } else if (detailRegex.test(detailCurrent)) {
      setDetailMsg('한글/영어/숫자로만 입력해주세요');
      setIsDetail(false);
    } else {
      setDetailMsg('');
      setIsDetail(true);
    }
  };
  //연락처
  const onNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const numberCurrent = e.target.value;
    setNumber(String(numberCurrent));

    if (numberCurrent === '') {
      setNumberMsg('연락처를 입력해주세요');
      setIsNumber(false);
    } else if (numberCurrent.length > 11) {
      setNumberMsg('최대 11자리까지 입력가능합니다');
      setIsNumber(false);
    } else {
      setNumberMsg('');
      setIsNumber(true);
    }
  };
  //다음 버튼 disable = 회사명, 사업자, 법인, 우편벙호, 기본주소, 상세주소
  const disabled = !(isCompany && isSaupja && isBeobin && isZip && isBasic && isDetail);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log('com:', company, 'saup:', saupja, 'beob:', beobin, zipText, basicText, detail);

    try {
      await axios
        .post('http://safekingmall.com/api/v1/signup/memberInfo/1', {
          companyName: company,
          companyRegistrationNumber: saupja,
          corporateRegistrationNumber: beobin,
          representativeName: ceo,
          zipcode: zipText,
          basicAddress: basicText,
          detailedAddress: detail,
          contact: number,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate('/sign-up4');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const test = (e: any) => {
    e.preventDefault();
    console.log(isCompany, isSaupja, isBeobin, isZip, isBasic, isDetail);
  };
  return (
    <>
      <Header />
      <button onClick={test}>test</button>
      <S.Container>
        <S.Wrapper>
          <S.ProcessBar></S.ProcessBar>
          <S.Mid>회원정보 입력</S.Mid>
          <S.InputContainer>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 회사명
              </label>
              <input placeholder='* 표시는 필수 입력 정보입니다' onChange={onCompany} />
              <S.ErrMsg>{companyMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 사업자등록번호
              </label>
              <input
                placeholder='* 표시는 필수 입력 정보입니다'
                onChange={onSaupja}
                value={saupja}
                ref={saupjaRef}
                max='10'
              />
              <S.ErrMsg>{saupjaMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 법인등록번호
              </label>
              <input
                placeholder='* 표시는 필수 입력 정보입니다'
                onChange={onBeobin}
                value={beobin}
                ref={beobinRef}
                max='12'
              />
              <S.ErrMsg>{beobinMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>&ensp; &nbsp; 대표명</label>
              <input onChange={onCeo} />
              <S.ErrMsg>{ceoMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 우편번호
              </label>
              <input
                value={zipText}
                placeholder='주소찾기를 눌러주세요.'
                onChange={(e) => setZip(e.target.value)}
              />
              <button onClick={onOpenPost}>주소찾기</button>
            </S.InputWrapper>
            {openPost && (
              <S.PostModal onClick={onClosePost}>
                <DaumPostcode onComplete={onCompletePost} autoClose={true}></DaumPostcode>
              </S.PostModal>
            )}
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 기본주소
              </label>
              <input
                placeholder='* 표시는 필수 입력 정보입니다'
                value={basicText}
                onChange={(e) => setBasic(e.target.value)}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 상세주소
              </label>
              <input placeholder='* 표시는 필수 입력 정보입니다' onChange={onDetail} />
              <S.ErrMsg>{detailMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>&ensp; &nbsp; 연락처</label>
              <input onChange={onNumber} max='11' />
              <S.ErrMsg>{numberMsg}</S.ErrMsg>
            </S.InputWrapper>
          </S.InputContainer>
          <S.BtnWrapper>
            <button onClick={() => navigate(-1)}>이전</button>
            <button disabled={disabled} onClick={onSubmit}>
              다음
            </button>
          </S.BtnWrapper>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
