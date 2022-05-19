import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: calc(0.35vw + 8.74px);
    * {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    }
  }
  span {
    font-family: 'BMHannaAir', 'TossFaceFont', sans-serif;
  }
`;

export default GlobalStyle;
