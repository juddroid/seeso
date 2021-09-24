import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body {
    overflow-y: scroll;
    background: #222;
    transition: all ease-in-out 0.4s;
  }
  
  a {
  text-decoration: none;
  
  }
`;

export default GlobalStyles;
