import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-orange-1: #ff9110;
    --color-grey-1: #434343;
    --color-grey-2: #333;
  }

  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-size: 16px;
  }

  #root {
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
