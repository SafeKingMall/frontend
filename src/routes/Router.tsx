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
  OrderOk,
  Orders,
  Notice,
  Noticewr,
  Noticepo,
  QnA,
  QnApw,
  QnApo,
  QnAwr,
  SignIn,
  SignUp1,
  SignUp2,
  SignUp3,
  SignUp4,
  MyPageOd,
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
        <Route path='/notice-wr' element={<Noticewr />} />
        <Route path='/notice-po' element={<Noticepo />} />
        <Route path='/qna' element={<QnA />} />
        <Route path='/qna-pw' element={<QnApw />} />
        <Route path='/qna-po' element={<QnApo />} />
        <Route path='/qna-wr' element={<QnAwr />} />
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
