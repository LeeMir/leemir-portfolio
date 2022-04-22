import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: calc(0.35vw + 8.74px);
  }
  span {
    font-family: 'BMHannaAir', sans-serif;
  }
`;

export default GlobalStyle;
