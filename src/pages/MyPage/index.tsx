/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { MyPageMenu } from '../../components/user/MyPageMenu';
import { Header } from '../../components/common/Header';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import DaumPostcode from 'react-daum-postcode';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const KREN = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z ]/;
const KRVAL = /[ㄱ-ㅎㅏ-ㅣ]/;

export const MyPage = () => {
  const swal = withReactContent(Swal);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>({});
  const cookies = new Cookies();
  // const jwt = cookies.get('accessToken');

  const [isOpenPost, setIsOpenPost] = useState(false);
  const [disable, setDisable] = useState(true);

  const [name, setName] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [nameCheck, setNameCheck] = useState(true);

  const [id, setId] = useState('');

  const [birth, setBirth] = useState('');

  const [ceo, setCeo] = useState('');

  const [phone, setPhone] = useState('');

  const [saupja, setSaupja] = useState('');
  const [saupjaVal, setSaupjaVal] = useState('');
  const [saupjaCheck, setSaupjaCheck] = useState(true);

  const [beobin, setBeobin] = useState('');
  const [beobinVal, setBeobinVal] = useState('');
  const [beobinCheck, setBeobinCheck] = useState(true);

  const [zip, setZip] = useState('');
  const [basic, setBasic] = useState('');

  const [detail, setDetail] = useState('');
  const [detailVal, setDetailVal] = useState('');
  const [detailCheck, setDetailCheck] = useState(true);

  const onChangeName = (e: string) => {
    setName(e);
    validationName(e);
  };
  const onChangeCeo = (e: string) => {
    setCeo(e);
  };
  const onChangeSaupja = (e: string) => {
    setSaupja(e);
    validationSaupja(e);
  };
  const onChangeBeobin = (e: string) => {
    setBeobin(e);
    validationBeobin(e);
  };
  const onChangeDetail = (e: string) => {
    setDetail(e);
    validationDetail(e);
  };

  //이름 유효성검사
  const validationName = (text: string) => {
    if (KREN.test(text)) {
      setNameVal('* 한글/영어/공백으로만 입력해주세요.');
      setNameCheck(false);
    } else {
      setNameVal('');
      setNameCheck(true);
    }
  };
  //이름 포커스아웃 유효성검사
  const blurName = (text: string) => {
    if (KREN.test(text)) {
      setNameVal('* 한글/영어/공백으로만 입력해주세요.');
      setNameCheck(false);
    } else if (KRVAL.test(text)) {
      setNameVal('* 한글입력을 확인해주세요.');
      setNameCheck(false);
    }
  };

  const validationSaupja = (text: string) => {
    const autoSaupja = text.replace(/\D+/g, '');
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
    setSaupja(result);
    const saupjaRegex = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
    if (result === '') {
      setSaupjaVal('* 사업자 등록번호 10자리를 입력해주세요');
      setSaupjaCheck(false);
    } else if (result.length < 12) {
      setSaupjaVal('* 사업자 등록번호 10자리를 입력해주세요');
      setSaupjaCheck(false);
    } else if (saupjaRegex.test(result)) {
      setSaupjaVal('');
      setSaupjaCheck(true);
    }
  };

  const validationBeobin = (text: string) => {
    const autoBeobin = text.replace(/\D+/g, '');
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
    setBeobin(result);
    const beobinRegex = /^([0-9]{6})-([0-9]{7})$/;
    if (result === '') {
      setBeobinVal('* 법인등록번호 13자리를 입력해주세요');
      setBeobinCheck(false);
    } else if (result.length < 14) {
      setBeobinVal('* 법인등록번호 13자리를 입력해주세요');
      setBeobinCheck(false);
    } else if (beobinRegex.test(result)) {
      setBeobinVal('');
      setBeobinCheck(true);
    }
  };
  const validationDetail = (text: string) => {
    if (text.length < 1) {
      setDetailVal('* 상세주소를 입력해주세요.');
      setDetailCheck(false);
    } else {
      setDetailVal('');
      setDetailCheck(true);
    }
  };
  const getUser = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/user/details`, {
          headers: {
            Authorization: cookies.get('accessToken'),
          },
        })
        .then((res) => {
          setUserData(res.data);
          setName(res.data.name);
          setId(res.data.username);
          setBirth(res.data.birth);
          setCeo(res.data.representativeName);
          setPhone(res.data.phoneNumber);
          setSaupja(res.data.companyRegistrationNumber);
          setBeobin(res.data.corporateRegistrationNumber);
          setZip(res.data.zipcode);
          setBasic(res.data.basicAddress);
          setDetail(res.data.detailedAddress);
        });
    } catch (err: any) {
      if (err.response.status === 403) {
        navigate('/sign-in');
      } else {
        swal.fire({
          icon: 'warning',
          text: err.response.data.message,
          confirmButtonText: '확인',
          confirmButtonColor: '#289951',
          width: 400,
        });
      }
    }
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

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
    setZip(data.zonecode);
    setBasic(fullAddr);
    setDetail('');
    setDetailVal('* 상세주소를 입력해주세요.');
    setDetailCheck(false);
    closeModal();
  };
  const postCodeStyle = {
    width: '500px',
    height: '460px',
    padding: '7px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
  };

  // useEffect(() => {
  //   if (nameCheck && saupjaCheck && beobinCheck && detailCheck) {
  //     setDisable(false);
  //   } else {
  //     setDisable(true);
  //   }
  // }, [nameCheck, saupjaCheck, beobinCheck, detailCheck]);

  useEffect(() => {
    if (userData) {
      if (
        userData.name !== name ||
        userData.representativeName !== ceo ||
        userData.companyRegistrationNumber !== saupja ||
        userData.corporateRegistrationNumber !== beobin ||
        userData.zipcode !== zip ||
        userData.basicAddress !== basic ||
        userData.detailedAddress !== detail
      ) {
        if (nameCheck && saupjaCheck && beobinCheck && detailCheck) {
          setDisable(false);
        } else {
          setDisable(true);
        }
      } else {
        setDisable(true);
      }
    }
  }, [
    userData,
    basic,
    beobin,
    beobinCheck,
    ceo,
    detail,
    detailCheck,
    name,
    nameCheck,
    saupja,
    saupjaCheck,
    zip,
  ]);

  const changeUserData = async () => {
    swal
      .fire({
        icon: 'question',
        text: '회원정보를 수정하시겠습니까?',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        showCancelButton: true,
        cancelButtonText: '취소',
        width: 400,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios({
              method: 'PUT',
              url: `${process.env.REACT_APP_API_URL}/user/update`,
              headers: {
                Authorization: cookies.get('accessToken'),
              },
              data: {
                name: name,
                birth: birth,
                representativeName: ceo,
                phoneNumber: phone,
                companyRegistrationNumber: saupja,
                corporateRegistrationNumber: beobin,
                zipcode: zip,
                basicAddress: basic,
                detailedAddress: detail,
              },
            }).then((res) => {
              if (res.status === 200) {
                swal.fire({
                  icon: 'success',
                  text: '수정되었습니다.',
                  confirmButtonText: '확인',
                  confirmButtonColor: '#289951',
                  width: 400,
                });
                getUser();
              }
            });
          } catch (err: any) {
            swal.fire({
              icon: 'warning',
              text: err.response.data.message,
              confirmButtonText: '확인',
              confirmButtonColor: '#289951',
              width: 400,
            });
          }
        }
      });
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
            <S.InputWrap>
              <label>이름</label>
              <input
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
                onBlur={(e) => blurName(e.target.value)}
              />
              <S.ErrMsg>{nameVal}</S.ErrMsg>
            </S.InputWrap>
            <S.InputWrap>
              <label>아이디</label>
              <input value={id} readOnly />
            </S.InputWrap>
            <S.InputWrap>
              <label>생년월일</label>
              <input value={birth} readOnly />
            </S.InputWrap>
          </S.BasicWrap>
          <S.BasicWrap>
            <S.Mid>회원정보</S.Mid>
            <S.InputWrap>
              <label>대표자명</label>
              <input value={ceo} onChange={(e) => onChangeCeo(e.target.value)} />
            </S.InputWrap>
            <S.InputWrap>
              <label>연락처</label>
              <input value={phone} readOnly />
            </S.InputWrap>
            <S.InputWrap>
              <label>사업자등록번호</label>
              <input value={saupja} onChange={(e) => onChangeSaupja(e.target.value)} />
              <S.ErrMsg>{saupjaVal}</S.ErrMsg>
            </S.InputWrap>
            <S.InputWrap>
              <label>법인등록번호</label>
              <input value={beobin} onChange={(e) => onChangeBeobin(e.target.value)} />
              <S.ErrMsg>{beobinVal}</S.ErrMsg>
            </S.InputWrap>
            <S.InputWrap>
              <label>우편번호</label>
              <input value={zip} readOnly />
              <button onClick={() => openModal()}>주소찾기</button>
            </S.InputWrap>
            <S.InputWrap>
              <label>기본주소</label>
              <input value={basic} readOnly />
            </S.InputWrap>

            <S.InputWrap>
              <label>상세주소</label>
              <input value={detail} onChange={(e) => onChangeDetail(e.target.value)} />
              <S.ErrMsg>{detailVal}</S.ErrMsg>
            </S.InputWrap>
          </S.BasicWrap>
          <S.BtnWrap>
            <button onClick={() => getUser()}>취소</button>
            <button disabled={disable} onClick={() => changeUserData()}>
              수정하기
            </button>
          </S.BtnWrap>
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
