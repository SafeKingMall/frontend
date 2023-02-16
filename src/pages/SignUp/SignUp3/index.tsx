import React, { useState, useRef } from 'react';
import { Header } from '../../../components/common/Header';
import * as S from './style';
import DaumPostcode from 'react-daum-postcode';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const SignUp3 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const swal = withReactContent(Swal);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [company, SetCompany] = useState<string>('');
  const [saupja, setSaupja] = useState<string>('');
  const saupjaRef = useRef<any>();
  const [beobin, setBeobin] = useState<string>('');
  const beobinRef = useRef<any>();
  const [ceo, setCeo] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  //유효성 검사
  const [isCompany, setIsCompany] = useState<boolean>(false);
  const [isSaupja, setIsSaupja] = useState<boolean>(false);
  const [isBeobin, setIsBeobin] = useState<boolean>(false);
  const [isZip, setIsZip] = useState<boolean>(false);
  const [isBasic, setIsBasic] = useState<boolean>(false);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  //에러메세지
  const [companyMsg, SetCompanyMsg] = useState<string>('');
  const [saupjaMsg, setSaupjaMsg] = useState<string>('');
  const [beobinMsg, setBeobinMsg] = useState<string>('');
  const [detailMsg, setDetailMsg] = useState<string>('');

  //회사명 한글영어숫자만 특문:한영숫으로만
  const onCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const companyCurrent = e.target.value;
    SetCompany(companyCurrent);
    const companyRegex = /[^a-zA-Z0-9ㄱ-ㅎ가-힣 ]/g;

    if (companyCurrent === '') {
      SetCompanyMsg('회사명을 입력해주세요.');
      setIsCompany(false);
    } else if (companyRegex.test(companyCurrent)) {
      SetCompanyMsg('한글/영어/숫자/공백으로만 입력해주세요.');
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
    const saupjaRegex = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
    if (result === '') {
      setSaupjaMsg('사업자 등록번호 10자리를 입력해주세요');
      setIsSaupja(false);
    } else if (result.length < 12) {
      setSaupjaMsg('사업자 등록번호 10자리를 입력해주세요');
      setIsSaupja(false);
    } else if (saupjaRegex.test(result)) {
      setSaupjaMsg('');
      setIsSaupja(true);
    }
  };

  //법인 (000000-0000000) 정규식처리, 13자리
  const onBeobin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //법인 인풋 내 하이픈 자동 생성
    const autoBeobin = beobinRef.current.value.replace(/\D+/g, '');
    const beobinLength = 13;
    let result;
    result = '';
    for (let i = 0; i < autoBeobin.length && i < beobinLength; i++) {
      switch (i) {
        case 6:
          result += '-';
          break;

        default:
          break;
      }
      result += autoBeobin[i];
    }
    beobinRef.current.value = result;
    setBeobin(e.target.value);
    const beobinRegex = /^([0-9]{6})-([0-9]{7})$/;
    if (result === '') {
      setBeobinMsg('법인등록번호 13자리를 입력해주세요');
      setIsBeobin(false);
    } else if (result.length < 14) {
      setBeobinMsg('법인등록번호 13자리를 입력해주세요');
      setIsBeobin(false);
    } else if (beobinRegex.test(result)) {
      setBeobinMsg('');
      setIsBeobin(true);
    }
  };
  //대표명
  const onCeo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const ceoCurrent = e.target.value;
    setCeo(ceoCurrent);
  };
  //다음주소
  const [zipText, setZipText] = useState<string>('');
  const [basicText, setBasicText] = useState<string>('');

  //주소모달 열기
  const openModal = () => {
    setIsOpenPost(true);
    document.body.style.cssText = 'overflow-y: hidden; width: 100%; padding-right: 15px;'; // 모달띄웠을떄 스크롤 막기
  };
  //주소모달 닫기
  const closeModal = () => {
    setIsOpenPost(false);
    document.body.style.cssText = ''; //스크롤 막은 것을 해제
  };

  const postCodeStyle = {
    width: '500px',
    height: '460px',
    padding: '7px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
  };

  //주소선택 성공
  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    setZipText(data.zonecode);
    setIsZip(true);
    setBasicText(fullAddr);
    setIsBasic(true);
    closeModal();
  };
  //상세주소
  const onDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const detailCurrent = e.target.value;
    setDetail(detailCurrent);

    if (detailCurrent === '') {
      setDetailMsg('상세주소를 입력해주세요');
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
  };
  //다음 버튼 disable = 회사명, 사업자, 법인, 우편벙호, 기본주소, 상세주소
  const disabled = !(isCompany && isSaupja && isBeobin && isZip && isBasic && isDetail);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (state) {
        await axios
          .post(`${process.env.REACT_APP_API_URL}/signup/memberInfo/${state.memberId}`, {
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
            if (res.status === 200) {
              navigate('/sign-up4', {
                state: {
                  memberId: res.data,
                },
              });
            }
          });
      } else {
        swal.fire({
          icon: 'warning',
          title: '올바르지 않은 방식입니다.',
          text: '회원가입을 다시 진행해주세요.',
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      }
    } catch (err: any) {
      swal.fire({
        icon: 'warning',
        text: err.response.data.message,
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }
  };
  return (
    <>
      <Header />
      <S.Container>
        <S.Wrapper>
          <S.ProcessBar></S.ProcessBar>
          <S.Mid>회원정보 입력</S.Mid>
          <S.InputContainer>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 회사명
              </label>
              <input
                placeholder='* 표시는 필수 입력 정보입니다'
                onChange={onCompany}
                maxLength={50}
              />
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
                max='13'
              />
              <S.ErrMsg>{beobinMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>&ensp; &nbsp; 대표명</label>
              <input onChange={onCeo} maxLength={50} />
            </S.InputWrapper>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 우편번호
              </label>
              <input value={zipText} placeholder='주소찾기를 눌러주세요.' readOnly />
              <button onClick={() => openModal()}>주소찾기</button>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 기본주소
              </label>
              <input placeholder='주소찾기를 눌러주세요.' value={basicText} readOnly />
            </S.InputWrapper>
            <S.InputWrapper>
              <label>
                <span>*</span> &nbsp; 상세주소
              </label>
              <input
                placeholder='* 표시는 필수 입력 정보입니다'
                onChange={onDetail}
                maxLength={50}
              />
              <S.ErrMsg>{detailMsg}</S.ErrMsg>
            </S.InputWrapper>
            <S.InputWrapper>
              <label>&ensp; &nbsp; 연락처</label>
              <input onChange={onNumber} maxLength={50} />
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
      {isOpenPost && (
        <S.DaumPostBackground onClick={() => closeModal()}>
          <S.DaumPostDiv>
            <DaumPostcode style={postCodeStyle} autoClose={false} onComplete={onCompletePost} />
          </S.DaumPostDiv>
        </S.DaumPostBackground>
      )}
    </>
  );
};
