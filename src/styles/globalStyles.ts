import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Pretendard Variable' !important;
}
html {
  font-size: 62.5%;
}
body {
  margin: 0;
}
button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
a {
  text-decoration: none;
}


`;
