## Frontend Application
안전관리 솔루션을 제공하는 플랫폼 Frontend github 입니다.

Backend github가 궁금하신 분은 [👉 여기](https://github.com/SafeKingMall/backend?tab=readme-ov-file#readme)를 클릭해주세요.

## 소개
다양한 중대 산업재해 예방을 위한 "안전왕" 솔루션 제품을 개발 및 공급하는 회사인 '안전왕' 쇼핑몰 B2B 서비스입니다.


## 시연영상

💡 누르면 유튜브로 연결됩니다!

[![시연 영상 바로가기](https://github.com/gyduddl/gyduddl/assets/104330521/405ea1c1-14f6-46cb-a85c-ba5767bd6aa3)](https://www.youtube.com/watch?v=L09BpP86_To)

## Figma 링크
[Figma 링크](https://www.figma.com/file/8MS0L7LgL1YpOKR5mWGsMc/safeking-shoppingmall?type=design&node-id=95-2&mode=design&t=XngybZm6sq23effI-0)

## 사용 스택
### Front-end
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1710007087256?alt=media&token=e9760a7b-c856-413d-b33d-b59a5d18582c)](https://github.com/msdio/stackticon)
### team communication
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1695882346285?alt=media&token=15e8e304-87a2-44b3-bfe5-38983a7c6abf)](https://github.com/msdio/stackticon)

## 각 페이지 구현 방법 

**react-router-sitemap 라이브러리를 사용하여 SEO 개선**
- CSR인 React는 SEO에 취약한 점이 많기에 google 검색 결과 인지도를 모니터링하고 관리하는 Google search console를 활용하기 위해 리액트 웹사이트 사이트맵 만들어야 했었고 그 과정에서 react-router-sitemap 라이브러리를 이용

**결제 및 환불**
- 포트원(결제 API, 구 아임포트) 결제 연동 및 환불 페이지 구현
 🪪 [결제시연영상](https://www.youtube.com/watch?v=X25CrNLl5fg)

**메인페이지**
- 카테고리별로 상품을 볼 수 있도록 탭 형식 구현
- 최근 본 상품을 로컬스토리지에 저장하여 '내가 본 상품' 구현
- notice 공지글 실시간으로 볼 수 있도록 배너 형태로 구현

**상품 상세 페이지**
- 장바구니 및 구매 버튼으로 페이지 이동 및 장바구니 상품 등록 구현
- 무한 스크롤을 활용한 상품 설명글 구현

**장바구니 페이지**
- 장바구니 CRUD 구현

**Qna/Notice페이지**
- Qna 페이지 : 작성한 유저만 접근 가능하도록 인가처리
- Notice 페이지 : 관리자만 접근 가능하도록 인가 처리

**관리자 페이지**
+ 회원관리 페이지 : pagination 구현으로 서버에 url parameter 값으로 size와 paze 값을 전달하여 전체 데이터 중 특정 데이터만 조회
+ 상품관리 페이지 : 상품 등록을 위한 editor 구현 및 사진 첨부 구현
+ 주문관리 페이지 : 여러개 선택한 조건값을 useState에 담아 url parameter값으로 서버에 전달하여 조건 검색창 구현
+ 카테고리관리 페이지 : react-drag-list 라이브러리를 활용하여 순서 변경 리스트를 구현  

**로그인/회원가입**
- jwt 토큰을 쿠키를 활용하여 구현
- axios interceptors을 활용하여 refresh 로그인 연장 구현
