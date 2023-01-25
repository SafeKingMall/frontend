import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Pretendard Variable' !important;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* 스크롤바 숨기기 */
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
}
html {
  font-size: 62.5%;
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

`;
