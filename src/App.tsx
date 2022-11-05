import React from 'react';
import './reset.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  MyPage,
  Carts,
  Edit,
  AdminSignIn,
  AdminSignUp,
  ItemDetail,
  ItemList,
  MainPage,
  OrderOk,
  Orders,
  QnA,
  SignIn,
  SignUp,
  MyPageAc,
  MyPagePw,
  MyPageWd,
} from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/carts' element={<Carts />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/adminsign-in' element={<AdminSignIn />} />
        <Route path='/adminsign-up' element={<AdminSignUp />} />
        <Route path='/itemdetail' element={<ItemDetail />} />
        <Route path='/itemlist' element={<ItemList />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage-ac' element={<MyPageAc />} />
        <Route path='/mypage-pw' element={<MyPagePw />} />
        <Route path='/mypage-wd' element={<MyPageWd />} />
        <Route path='/orderok' element={<OrderOk />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/qna' element={<QnA />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  );
}
// 페이지내 메뉴가 있을 경우 케밥케이스사용(mypage-edit)
export default App;
