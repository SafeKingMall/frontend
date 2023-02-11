import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Pretendard Variable' !important;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* 스크롤바 숨기기 */
  /* -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  } */
}
html {
  height: 100%;
  font-size: 62.5%;
}
body {
  height: 100%;
}
#root {
  height: 100%;
}
.App {
  min-height: calc(100% - 20rem)
}
button {
  border: none;
  background: none;
  cursor: pointer;
}
a {
  text-decoration: none;
}
/* a:hover,  */
a:focus{
  color: #000;
}
a:link, a:active, a:visited{
  color: #000; 
  text-decoration: none; 
  border: 0px;
}
ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
}
input {
  border: none;
  :focus {outline: none}
}
@media (max-width: 1560px) {
  html {
    font-size: 57.5%;
  }
}
@media (max-width: 1440px) {
  html {
    font-size: 52.5%;
  }
}
@media (max-width: 1320px) {
  html {
    font-size: 47.5%;
  }
}
@media (max-width: 1200px) {
  html {
    font-size: 42.5%;
  }
}
@media (max-width: 1080px) {
  html {
    font-size: 37.5%;
  }
}
@media (max-width: 960px) {
  html {
    font-size: 32.5%;
  }
}
@media (max-width: 840px) {
  html {
    font-size: 27.5%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 27.5%;
  }
}
@media (max-width: 600px) {
  html {
    font-size: 22.5%;
  }
}
@media (max-width: 480px) {
  html {
    font-size: 17.5%;
  }
}
@media (max-width: 360px) {
  html {
    font-size: 12.5%;
  }
}
@media (max-width: 240px) {
  html {
    font-size: 7.5%;
  }
}
@media (max-width: 120px) {
  html {
    font-size: 2.5%;
    min-width: 120px;
  }
}
`;
