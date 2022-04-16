import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
