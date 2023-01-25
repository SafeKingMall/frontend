/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { MyPageMenu } from '../../components/user/MyPageMenu';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import DaumPostcode from 'react-daum-postcode';

export const MyPage = () => {
  const test = (e: any) => {
    e.preventDefault();
  };
  //정보 받아오기
  const [userInfo, setUserInfo] = useState<any>({});
  const cookies = new Cookies();
  const token = cookies.get('accessToken');

  const getUser = async () => {
    try {
      await axios
        .get('http://safekingmall.com/api/v1/user/details', {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res);
          setUserInfo(res.data);
          console.log('dfsadf', res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  //이름, 아이디, 생년월일  대표자명, 연락처, 사업자, 법인, 우편, 기본, 상세
  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [ceo, setCeo] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [saupja, setSaupja] = useState<string>('');
  const saupjaRef = useRef<any>();
  const [beobin, setBeobin] = useState<string>('');
  const beobinRef = useRef<any>();
  const [zip, setZip] = useState<string>('');
  const [basic, setBasic] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  //유효성검사
  const [isName, setIsName] = useState<boolean>(false);
  const [isBirth, setIsBirth] = useState<boolean>(false);
  const [isCeo, setIsCeo] = useState<boolean>(false);
  const [isNumber, setIsNumber] = useState<boolean>(false);
  const [isSaupja, setIsSaupja] = useState<boolean>(false);
  const [isBeobin, setIsBeobin] = useState<boolean>(false);
  const [isZip, setIsZip] = useState<boolean>(false);
  const [isBasic, setIsBasic] = useState<boolean>(false);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  //에러 메세지
  const [nameMsg, setNameMsg] = useState<string>('');
  const [birthMsg, setBirthMsg] = useState<string>('');
  const [ceoMsg, setCeoMsg] = useState<string>('');
  const [numberMsg, setNumberMsg] = useState<string>('');
  const [saupjaMsg, setSaupjaMsg] = useState<string>('');
  const [beobinMsg, setBeobinMsg] = useState<string>('');
  const [detailMsg, setDetailMsg] = useState<string>('');

  //이름
  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;

    if (nameCurrent === '') {
      setNameMsg('이름을 입력해주세요');
      setIsName(false);
    } else if (!nameRegex.test(nameCurrent)) {
      setNameMsg('한글/영어로만 입력해주세요');
      setIsName(false);
    } else if (nameCurrent.length > 50) {
      setNameMsg('50자 이내로 입력해주세요');
      setIsName(false);
    } else {
      setNameMsg('');
      setIsName(true);
    }
  };
  //생년월일
  const onBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const birthCurrent = e.target.value;
    setBirth(String(birthCurrent));
    const birthRegex = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

    if (birthCurrent === '') {
      setBirthMsg('생년월일을 입력해주세요');
      setIsBirth(false);
    } else if (!birthRegex.test(birthCurrent)) {
      setBirthMsg('생년월일은 8자리로 입력해주세요');
      setIsBirth(false);
    } else {
      setBirthMsg('');
      setIsBirth(true);
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
  //다음주소
  const [openPost, setOpenPost] = useState<boolean>(false);
  const closeRef = useRef<any>(null);
  const [zipText, setZipText] = useState<string>('');
  const [basicText, setBasicText] = useState<string>('');

  const handleClickOutside = (e: React.MouseEvent) => {
    setOpenPost(false);
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
  //disabled btn
  const disabled = !(isName && isBirth && isSaupja && isBeobin && isZip && isBasic && isDetail);
  //변경하기
  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(name, birth, saupja, beobin, zipText, basicText, detail);
  };
  return (
    <>
      <Header />
      <S.Container>
        <div style={{ marginTop: 190 }}>
          <MyPageMenu />
        </div>
        <S.Wrapper>
          <S.Top>내 정보</S.Top>
          <S.BasicWrap>
            <S.Mid>기본정보</S.Mid>
            <div>
              <label>이름</label>
              <input defaultValue={userInfo.name} onChange={onName} />
            </div>
            <div>
              <label>아이디</label>
              <input defaultValue={userInfo.username} />
            </div>
            <div>
              <label>생년월일</label>
              <input defaultValue={userInfo.birth || ''} />
            </div>
          </S.BasicWrap>
          <S.BasicWrap>
            <S.Mid>회원정보</S.Mid>
            <div>
              <label>대표자명</label>
              <input defaultValue={userInfo.representativeName || ''} />
            </div>
            <div>
              <label>연락처</label>
              <input defaultValue={userInfo.phoneNumber || ''} />
            </div>
            <div>
              <label>사업자등록번호</label>
              <input defaultValue={userInfo.companyRegistrationNumber || ''} />
            </div>
            <div>
              <label>법인등록번호</label>
              <input defaultValue={userInfo.corporateRegistrationNumber || ''} />
            </div>
            <div>
              <label>우편번호</label>
              <input
                value={zipText}
                defaultValue={userInfo.zipcode || ''}
                onChange={(e) => setZip(e.target.value)}
              />
              <button onClick={onOpenPost}>주소찾기</button>
            </div>
            {openPost && (
              <S.PostModal onClick={onClosePost}>
                <DaumPostcode onComplete={onCompletePost} autoClose={true}></DaumPostcode>
              </S.PostModal>
            )}
            <div>
              <label>기본주소</label>
              <input
                value={basicText}
                defaultValue={userInfo.basicAddress || ''}
                onChange={(e) => setBasic(e.target.value)}
              />
            </div>

            <div>
              <label>상세주소</label>
              <input defaultValue={userInfo.detailedAddress || ''} onChange={onDetail} />
            </div>
          </S.BasicWrap>
          <S.BtnWrap>
            <button>취소</button>
            <button disabled={disabled}>수정하기</button>
          </S.BtnWrap>
        </S.Wrapper>
      </S.Container>
      <Footer />
    </>
  );
};
