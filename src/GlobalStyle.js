import { createGlobalStyle } from 'styled-components';
import openSansRegular from './assets/fonts/OpenSans-Regular.woff';
import openSansMedium from './assets/fonts/OpenSans-Medium.ttf';
import openSansSemiBold from './assets/fonts/OpenSans-SemiBold.woff';
import openSansBold from './assets/fonts/OpenSans-Bold.woff';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-orange-1: #ff9110;
    --color-grey-1: #434343;
    --color-grey-2: #333;
    --color-grey-3: #b3b3b3;
    --color-grey-4: #2f2f2f;
    --color-grey-5: #7e7e7e;
  }

  * {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
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

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansRegular}) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansMedium}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansSemiBold}) format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansBold}) format('woff');
    font-weight: 700;
  }
`;

export default GlobalStyle;
