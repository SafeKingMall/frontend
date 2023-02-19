/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Header } from '../../common/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Cookies } from 'react-cookie';

export const Estimate = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  const cookies = new Cookies();
  const rtoken = cookies.get('refreshToken');
  const [disable, setDisable] = useState(true);
  const [categoryList, setCategoryList] = useState([]);

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [count, setCount] = useState('');
  const [request, setRequest] = useState('');

  // const [companyVal, setCompanyVal] = useState('');
  // const [nameVal, setNameVal] = useState('');
  // const [emailVal, setEmailVal] = useState('');
  // const [phoneVal, setPhoneVal] = useState('');
  // const [categoryVal, setcategoryVal] = useState('');
  // const [itemNameVal, setItemNameVal] = useState('');
  // const [countVal, setCountVal] = useState('');

  const [companyCheck, setCompanyCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [categoryCheck, setCategoryCheck] = useState(false);
  const [itemNameCheck, setItemNameCheck] = useState(false);
  const [countCheck, setCountCheck] = useState(false);

  const onChangeCompany = (e: string) => {
    setCompany(e);
    validationCompany(e);
  };
  const onChangeName = (e: string) => {
    setName(e);
    validationName(e);
  };
  const onChangeEmail = (e: string) => {
    setEmail(e);
    validationEmail(e);
  };
  const onChangePhone = (e: string) => {
    setPhone(e);
    validationPhone(e);
  };
  const onChangeRank = (e: string) => {
    setRank(e);
  };
  const onChangeCategory = (e: string) => {
    setCategory(e);
    validationCategory(e);
  };
  const onChangeItemName = (e: string) => {
    setItemName(e);
    validationItemName(e);
  };
  const onChangeCount = (e: string) => {
    setCount(e);
    validationCount(e);
  };
  const onChangeRequest = (e: string) => {
    setRequest(e);
  };

  const validationCompany = (text: string) => {
    if (text.length < 1) {
      setCompanyCheck(false);
    } else {
      setCompanyCheck(true);
    }
  };
  const validationName = (text: string) => {
    if (text.length < 1) {
      setNameCheck(false);
    } else {
      setNameCheck(true);
    }
  };
  const validationEmail = (text: string) => {
    if (text.length < 1) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  };
  const validationPhone = (text: string) => {
    if (text.length < 1) {
      setPhoneCheck(false);
    } else {
      setPhoneCheck(true);
    }
  };
  const validationCategory = (text: string) => {
    if (text.length < 1) {
      setCategoryCheck(false);
    } else {
      setCategoryCheck(true);
    }
  };
  const validationItemName = (text: string) => {
    if (text.length < 1) {
      setItemNameCheck(false);
    } else {
      setItemNameCheck(true);
    }
  };
  const validationCount = (text: string) => {
    if (text.length < 1) {
      setCountCheck(false);
    } else {
      setCountCheck(true);
    }
  };

  useEffect(() => {
    if (
      companyCheck &&
      nameCheck &&
      emailCheck &&
      phoneCheck &&
      categoryCheck &&
      itemNameCheck &&
      countCheck
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [companyCheck, nameCheck, emailCheck, phoneCheck, categoryCheck, itemNameCheck, countCheck]);

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/category/list?sort=sort,asc`,
      }).then((res) => {
        setCategoryList(res.data.content);
        if (state) {
          setCategory(state.categoryName);
          setCategoryCheck(true);
          setItemName(state.itemName);
          setItemNameCheck(true);
        }
      });
    };
    if (!rtoken) {
      navigate('/sign-in');
    } else {
      getData();
    }
  }, [state, rtoken, navigate]);
  const sendMail = () => {
    setTimeout(() => {
      navigate(-1);
      swal.fire({
        heightAuto: false,
        icon: 'success',
        text: '견적서요청이 완료되었습니다.',
        confirmButtonText: '확인',
        confirmButtonColor: '#289951',
        width: 400,
      });
    }, 1000);
  };
  return (
    <S.Container>
      <iframe name='frAttachFiles' title='iframe' style={{ display: 'none' }}></iframe>
      <Header />
      <S.BannerWrap>
        <S.Banner />
        <S.BannerText>견적서 요청</S.BannerText>
      </S.BannerWrap>
      <S.Wrap>
        <S.ContentWrap>
          <S.GuideArea>
            <S.Guidetext>
              안녕하세요. 안전왕쇼핑몰입니다. 항상 최고가 되기 위해 노력합니다.
            </S.Guidetext>
            <S.Guidetext>
              견적서 요청서를 작성해주시면 빠르고 신속하게 확인 후 연락드리겠습니다.
            </S.Guidetext>
          </S.GuideArea>
          <S.Form
            method='POST'
            target='frAttachFiles'
            name='sendMail'
            action='https://script.google.com/macros/s/AKfycby5d7O0uHm96ibalCt8OBPF6172CDfo9wSU7OQsE9OBVnOR5rp47155VPZrzF84HtFZ/exec'
            autoComplete='off'
          >
            <S.InputDiv>
              <S.TitleArea>
                <S.Title>
                  회사명<S.Essential>*</S.Essential>
                </S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.BasicInput
                  name='회사명'
                  placeholder='회사명을 입력해주세요.'
                  value={company}
                  onChange={(e) => onChangeCompany(e.target.value)}
                  maxLength={50}
                />
              </S.InputArea>
            </S.InputDiv>
            <S.InputDiv>
              <S.TitleArea>
                <S.Title>
                  이름<S.Essential>*</S.Essential>
                </S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.BasicInput
                  name='이름'
                  placeholder='이름을 입력해주세요.'
                  value={name}
                  onChange={(e) => onChangeName(e.target.value)}
                  maxLength={50}
                />
              </S.InputArea>
            </S.InputDiv>
            <S.InputDiv>
              <S.TitleArea>
                <S.Title>
                  이메일<S.Essential>*</S.Essential>
                </S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.BasicInput
                  name='이메일'
                  placeholder='이메일을 입력해주세요.'
                  value={email}
                  onChange={(e) => onChangeEmail(e.target.value)}
                  maxLength={80}
                />
              </S.InputArea>
            </S.InputDiv>
            <S.InputDiv>
              <S.TitleArea>
                <S.Title>
                  연락처<S.Essential>*</S.Essential>
                </S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.BasicInput
                  name='연락처'
                  placeholder='전화번호를 입력해주세요.'
                  value={phone}
                  onChange={(e) => onChangePhone(e.target.value)}
                  maxLength={11}
                />
              </S.InputArea>
            </S.InputDiv>
            <S.InputDiv>
              <S.TitleArea>
                <S.Title>직급</S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.BasicInput
                  name='직급'
                  placeholder='직급을 입력해주세요.'
                  value={rank}
                  onChange={(e) => onChangeRank(e.target.value)}
                  maxLength={10}
                />
              </S.InputArea>
            </S.InputDiv>
            <S.InputDiv>
              <S.TitleArea>
                <S.Title>
                  상품<S.Essential>*</S.Essential>
                </S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.CategoryArea>
                  <S.Arrow>▼</S.Arrow>
                  <S.Category
                    name='카테고리'
                    value={category}
                    onChange={(e) => onChangeCategory(e.target.value)}
                    style={{ color: category ? '' : '#777777' }}
                  >
                    <option value=''>카테고리선택</option>
                    {categoryList.map((category: any) => {
                      return (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      );
                    })}
                  </S.Category>
                </S.CategoryArea>
                <S.ItemInput
                  name='상품'
                  placeholder='상품명을 입력해주세요.'
                  value={itemName}
                  onChange={(e) => onChangeItemName(e.target.value)}
                  maxLength={80}
                />
              </S.InputArea>
            </S.InputDiv>
            <S.InputDiv>
              <S.TitleArea>
                <S.Title>
                  수량<S.Essential>*</S.Essential>
                </S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.CountInput
                  name='수량'
                  placeholder='수량을 입력해주세요.'
                  value={count}
                  onChange={(e) => onChangeCount(e.target.value)}
                  maxLength={10}
                />
              </S.InputArea>
            </S.InputDiv>
            <S.RequestInputDiv>
              <S.TitleArea>
                <S.Title>요청사항</S.Title>
              </S.TitleArea>
              <S.InputArea>
                <S.RequestInput
                  name='요청사항'
                  placeholder='요청사항을 입력해주세요.'
                  value={request}
                  onChange={(e) => onChangeRequest(e.target.value)}
                  maxLength={1000}
                />
              </S.InputArea>
            </S.RequestInputDiv>
            <S.SubmitBtn
              type='submit'
              disabled={disable}
              onClick={() => sendMail()}
              style={{ backgroundColor: disable ? '#999999' : '' }}
            >
              견적서 보내기
            </S.SubmitBtn>
          </S.Form>
        </S.ContentWrap>
      </S.Wrap>
    </S.Container>
  );
};
