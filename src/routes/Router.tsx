import { Routes, Route } from 'react-router-dom';
import {
  MyPage,
  Carts,
  AdminItem,
  AdminMember,
  AdminOrder,
  AdminSignIn,
  AdminSignUp,
  ItemDetail,
  ItemListSerious,
  ItemListFire,
  ItemListLeck,
  ItemListMarine,
  ItemListSafety,
  MainPage,
  MyPagePw,
  MyPageWd,
  MyPageOd,
  OrderOk,
  Orders,
  Notice,
  QnA,
  SignIn,
  SignUp1,
  SignUp2,
  SignUp3,
  SignUp4,
} from '../pages';
// 페이지내 메뉴가 있을 경우 케밥케이스사용(mypage-edit)
const Router = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/carts' element={<Carts />} />
        <Route path='/admin-member' element={<AdminMember />} />
        <Route path='/admin-item' element={<AdminItem />} />
        <Route path='/admin-order' element={<AdminOrder />} />
        <Route path='/adminsign-in' element={<AdminSignIn />} />
        <Route path='/adminsign-up' element={<AdminSignUp />} />
        <Route path='/itemdetail' element={<ItemDetail />} />
        <Route path='/itemlist-serious' element={<ItemListSerious />} />
        <Route path='/itemlist-fire' element={<ItemListFire />} />
        <Route path='/itemlist-leck' element={<ItemListLeck />} />
        <Route path='/itemlist-marine' element={<ItemListMarine />} />
        <Route path='/itemlist-safety' element={<ItemListSafety />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage-pw' element={<MyPagePw />} />
        <Route path='/mypage-wd' element={<MyPageWd />} />
        <Route path='/mypage-od' element={<MyPageOd />} />
        <Route path='/orderok' element={<OrderOk />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/qna' element={<QnA />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up1' element={<SignUp1 />} />
        <Route path='/sign-up2' element={<SignUp2 />} />
        <Route path='/sign-up3' element={<SignUp3 />} />
        <Route path='/sign-up4' element={<SignUp4 />} />
      </Routes>
    </div>
  );
};

export default Router;
