import { Routes, Route } from 'react-router-dom';
import { Estimate } from '../components/shopping/Estimate';
import {
  MyPage,
  Carts,
  AdminItem,
  AdminItemPo,
  AdminItemWr,
  AdminMember,
  AdminOrder,
  AdminOrderDe,
  AdminCategory,
  ItemDetail,
  ItemList1,
  ItemList2,
  ItemList3,
  ItemList4,
  ItemList5,
  ItemList6,
  ItemList7,
  MainPage,
  MyPagePw,
  MyPageWd,
  MyPageOd,
  MyPageOdDetail,
  MyPageRf,
  MyPageRfDetail,
  MyPageAp1,
  MyPageAp2,
  MyPageAp3,
  OrderOk,
  Orders,
  Notice,
  NoticeWr,
  NoticePo,
  NoticeMo,
  QnA,
  QnAPw,
  QnAPo,
  QnAWr,
  QnAMo,
  SignIn,
  SignUp1,
  SignUp2,
  SignUp3,
  SignUp4,
  NotFound,
} from '../pages';
// 페이지내 메뉴가 있을 경우 케밥케이스사용(mypage-edit)
const Router = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/carts' element={<Carts />} />
        <Route path='/admin-member' element={<AdminMember />} />
        <Route path='/admin-item' element={<AdminItem />} />
        <Route path='/admin-item-po' element={<AdminItemPo />} />
        <Route path='/admin-item-wr' element={<AdminItemWr />} />
        <Route path='/admin-order' element={<AdminOrder />} />
        <Route path='/admin-order-de' element={<AdminOrderDe />} />
        <Route path='/admin-category' element={<AdminCategory />} />
        <Route path='/itemdetail' element={<ItemDetail />} />
        <Route path='/itemlist-1' element={<ItemList1 />} />
        <Route path='/itemlist-2' element={<ItemList2 />} />
        <Route path='/itemlist-3' element={<ItemList3 />} />
        <Route path='/itemlist-4' element={<ItemList4 />} />
        <Route path='/itemlist-5' element={<ItemList5 />} />
        <Route path='/itemlist-6' element={<ItemList6 />} />
        <Route path='/itemlist-7' element={<ItemList7 />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage-pw' element={<MyPagePw />} />
        <Route path='/mypage-wd' element={<MyPageWd />} />
        <Route path='/mypage-od' element={<MyPageOd />} />
        <Route path='/mypage-ap1' element={<MyPageAp1 />} />
        <Route path='/mypage-ap2' element={<MyPageAp2 />} />
        <Route path='/mypage-ap3' element={<MyPageAp3 />} />

        <Route path='/mypage-od-detail' element={<MyPageOdDetail />} />
        <Route path='/mypage-rf' element={<MyPageRf />} />
        <Route path='/mypage-rf-detail' element={<MyPageRfDetail />} />
        <Route path='/orderok' element={<OrderOk />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/notice-wr' element={<NoticeWr />} />
        <Route path='/notice-po' element={<NoticePo />} />
        <Route path='/notice-mo' element={<NoticeMo />} />
        <Route path='/qna' element={<QnA />} />
        <Route path='/qna-pw' element={<QnAPw />} />
        <Route path='/qna-po' element={<QnAPo />} />
        <Route path='/qna-wr' element={<QnAWr />} />
        <Route path='/qna-mo' element={<QnAMo />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up1' element={<SignUp1 />} />
        <Route path='/sign-up2' element={<SignUp2 />} />
        <Route path='/sign-up3' element={<SignUp3 />} />
        <Route path='/sign-up4' element={<SignUp4 />} />
        <Route path='/estimate' element={<Estimate />} />
      </Routes>
    </div>
  );
};

export default Router;
