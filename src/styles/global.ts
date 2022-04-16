import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import color from '../constants/color';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    background-color: ${color.background};
  }
`;

export default GlobalStyle;
