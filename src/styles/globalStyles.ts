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
  font-size: 625%;
  -webkit-text-size-adjust: none;
}
body {
  height: 100%;
  -webkit-text-size-adjust : none;
  position: relative;
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
    font-size: 575%;
  }
}
@media (max-width: 1440px) {
  html {
    font-size: 525%;
  }
}
@media (max-width: 1320px) {
  html {
    font-size: 475%;
  }
}
@media (max-width: 1200px) {
  html {
    font-size: 425%;
  }
}
@media (max-width: 1080px) {
  html {
    font-size: 375%;
  }
}
@media (max-width: 960px) {
  html {
    font-size: 325%;
  }
}
@media (max-width: 840px) {
  html {
    font-size: 275%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 275%;
  }
}
@media (max-width: 600px) {
  html {
    font-size: 225%;
  }
}
@media (max-width: 480px) {
  html {
    font-size: 175%;
  }
}
@media (max-width: 360px) {
  html {
    font-size: 125%;
  }
}
@media (max-width: 240px) {
  html {
    font-size: 75%;
  }
}
@media (max-width: 120px) {
  html {
    font-size: 25%;
    min-width: 120px;
  }
}
`;
