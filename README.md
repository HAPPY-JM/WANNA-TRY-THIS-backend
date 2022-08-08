<h1> ❔질문에 대한 응답을 바탕으로 식사 메뉴를 추천해주는 웹 서비스❕</h1> <br>
<center> <img src="/uploads/d113c7159a15addfc38cb843802d8ed3/image.png" width="50%" height="50%"> </center>
<br>
<br>

## 서비스 링크: [이거머글랭?](http://kdt-sw2-busan-team05.elicecoding.com/)

## 1. 기획 의도 & 목적

> ### 🤔"오늘은 뭐 먹지?" <br>
>
> 매일 하게 되는 메뉴 고민! <br>
> 식사 시간마다 무엇을 먹을지 고민스러운 분들에게 조금이나마 선택지를 좁혀드리고자 만든 웹서비스입니다.

<br>

## 2. 웹 서비스의 주제 및, 최종적인 메인 기능과 서브 기능 설명

### ✨ 주제:

- **메인 기능**
  1.  질문을 통한 메뉴추천
  2.  로그인 하고 추천 받은 음식을 저장하면 마이페이지에서 그동안 추천받은 음식의 통계 확인
  3.  소셜 로그인
  ***
- **서브 기능**
  1.  추천받은 음식 공유
  2.  마이페이지
  3.  무한 스크롤 (...개발 중...)

<br>

## 3. 프로젝트만의 차별점, 기대 효과

- 질문을 통해 메뉴를 추천받는 서비스는 기존에 존재하지 않는 서비스입니다.
- 저희는 그날의 기분, 선호하는 식재료, 나이 그리고 예산에 맞춰 메뉴를 추천해 드립니다.
- 우리의 뇌는 사소한 의사결정을 할 때에도 에너지를 마구마구 쓴다고 합니다.
- 오늘도 뭐 먹을지 고민만 하다가 식사 시간이 다 지나간 여러분에게 소중한 시간과 에너지를 선물해 드리겠습니다.

<br>

## 4. 프로젝트 구성

### 🔧 사용 스택

- **프론트엔드** <br>
  <img src="/uploads/44ddf2162c59b627e8d4423396d98652/image.png" width="100" height="100">

  ***

- **백엔드** <br>
  <img src="/uploads/a2279597680a8ab9c2a9538e5f6525ec/image.png" width="100" height="100"> <img src="/uploads/01d9ed0b244cfb770bf3ca4c0c761567/image.png" width="100" height="100"> <img src="/uploads/11537ce93f8f457fd25e1e3b18049141/image.png" width="100" height="100">
  <br>
  <br>

### 🎨 기획

- **와이어프레임** <br>
  <a href="https://www.figma.com/file/eaxRhh4SX5FSUEId05z0fz/5%ED%8C%80_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=50%3A1962"><img src="/uploads/8c3efbd4120c4a453bebf0818a8f9431/image.png" width="100" height="100"></a> <br>

   <br>

- **스토리보드 및 유저 시나리오**
  - 사용자는 홈 화면에서 골라볼래? 버튼을 클릭하면 모든 음식 데이터를 확인할 수 있다.
  - 사용자는 홈 화면에서 골라줄게! 버튼을 클릭하면 질문 페이지로 이동한다
  - 사용자는 질문들에 대한 답을 고르면 결과 화면에서 그에 맞춰 음식을 추천받을 수 있다
  - 사용자는 추천받은 음식을 SNS에 공유하기 버튼을 클릭하여 링크를 공유할 수 있다.
  - 사용자는 홈 화면에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 홈 화면에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 질문 페이지에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 질문 페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 결과 페이지에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 결과 페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 마이페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 마이페이지에서 닉네임을 변경할 수 있다.
  - 사용자는 마이페이지에서 지금까지 추천받은 음식에 대한 통계 데이터를 확인할 수 있다.

<br>

### 📑 DevOps

- **애자일 개발 프로세스** <br>

 <br>

## 5. Architecture

### Client

```
src
 ┣ components
 ┃ ┣ Footer.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ Infinite.jsx
 ┃ ┣ LoginComponent.jsx
 ┃ ┣ Logo.jsx
 ┃ ┣ Modal.jsx
 ┃ ┣ ProgressBar.jsx
 ┃ ┣ Question.jsx
 ┃ ┗ SNS.jsx
 ┣ fonts
 ┃ ┣ NEXONLv1GothicBold.ttf
 ┃ ┣ NEXONLv1GothicRegular.ttf
 ┃ ┗ TmoneyRoundWindRegular.ttf
 ┣ page
 ┃ ┣ EmptyPage.jsx
 ┃ ┣ Loading.jsx
 ┃ ┣ Main.jsx
 ┃ ┣ MyPage.jsx
 ┃ ┣ NotFound.jsx
 ┃ ┣ Result.jsx
 ┃ ┗ Survey.jsx
 ┣ styles
 ┃ ┗ login.scss
 ┣ App.jsx
 ┣ App.test.js
 ┣ GlobalStyle.jsx
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

### Back

```
src
 ┣ db
 ┃ ┣ models
 ┃ ┃ ┣ food-model.js
 ┃ ┃ ┗ user-model.js
 ┃ ┣ schemas
 ┃ ┃ ┣ food-schema.js
 ┃ ┃ ┗ user-schema.js
 ┃ ┗ index.js
 ┣ middlewares
 ┃ ┣ error-handler.js
 ┃ ┣ index.js
 ┃ ┣ login-required.js
 ┃ ┗ user-validator.js
 ┣ passport
 ┃ ┣ googleStrategy.js
 ┃ ┣ index.js
 ┃ ┣ kakaoStrategy.js
 ┃ ┗ naverStrategy.js
 ┣ routers
 ┃ ┣ auth-router.js
 ┃ ┣ food-router.js
 ┃ ┣ index.js
 ┃ ┗ user-router.js
 ┣ services
 ┃ ┣ food-service.js
 ┃ ┣ index.js
 ┃ ┗ user-service.js
 ┣ test
 ┃ ┣ auth.spec.js
 ┃ ┣ food.spec.js
 ┃ ┗ user.spec.js
 ┣ utils
 ┃ ┣ index.js
 ┃ ┗ setUserToken.js
 ┗ app.js
```

## 6. 구성원 역할

|  이름  | 역할             |
| :----: | ---------------- |
| 서정민 | 프론트엔드, 팀장 |
| 장기성 | 프론트엔드       |
| 김동화 | 백엔드           |
| 이채연 | 백엔드           |
