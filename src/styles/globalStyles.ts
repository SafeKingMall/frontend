import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Pretendard Variable' !important;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
}
input {
  border: none;
}

`;
