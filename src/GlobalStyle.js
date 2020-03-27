import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
      font: 300 14px "Open Sans", Helvetica, sans-serif, arial;
      padding: 5px 20px 0 20px;
      text-shadow: 1px 1px 0px #fff;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
