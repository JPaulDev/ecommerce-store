import { createGlobalStyle } from 'styled-components';
import openSansRegular from '../assets/fonts/OpenSans-Regular.woff';
import openSansMedium from '../assets/fonts/OpenSans-Medium.ttf';
import openSansSemiBold from '../assets/fonts/OpenSans-SemiBold.woff';
import openSansBold from '../assets/fonts/OpenSans-Bold.woff';
import uniSansBook from '../assets/fonts/UniSans-Book.woff2';
import uniSansRegular from '../assets/fonts/UniSans-Regular.woff2';
import uniSansSemiBold from '../assets/fonts/UniSans-SemiBold.woff2';
import uniSansBold from '../assets/fonts/UniSans-Bold.woff';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-orange-1: #ff9110;
    --color-grey-1: #434343;
    --color-grey-2: #333;
    --color-grey-3: #b3b3b3;
    --color-grey-4: #2f2f2f;
    --color-grey-5: #7e7e7e;
    --color-grey-6: #f6f6f6;
    --color-grey-7: #9e9e9e;
    --color-grey-8: #5b5b5b;
    --color-grey-9: #e1e1e1;
    --color-grey-10: #bcbec0;
    --color-grey-11: #cfcfcf;
    --color-grey-12: #c7c7c7;
    --color-blue-1: #3d70b7;
    --color-blue-2: #1766a6;
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
    overflow: clip;
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

  @font-face {
    font-family: 'Uni Sans Book';
    src: url(${uniSansBook}) format('woff2');
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url(${uniSansRegular}) format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url(${uniSansSemiBold}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url(${uniSansBold}) format('woff');
    font-weight: 700;
  }
`;

export default GlobalStyle;
