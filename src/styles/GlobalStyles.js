import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-base: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-size-10: 1rem;
    --font-size-11: 1.1rem;
    --font-size-12: 1.2rem;
    --font-size-13: 1.3rem;
    --font-size-14: 1.4rem;
    --font-size-16: 1.6rem;
    --font-size-18: 1.8rem;
    --font-size-20: 2rem;
    --font-size-22: 2.2rem;
    --font-size-24: 2.4rem;
    --font-size-26: 2.6rem;
    --font-size-28: 2.8rem;
    --font-size-30: 3rem;
    --font-size-34: 3.4rem;
    --font-size-38: 3.8rem;
    --color-orange-1: #ff9110;
    --color-orange-2: #ffc439;
    --color-grey-1: #2f2f2f;
    --color-grey-2: #333;
    --color-grey-3: #434343;
    --color-grey-4: #5b5b5b;
    --color-grey-5: #7e7e7e;
    --color-grey-6: #858484;
    --color-grey-7: #9e9e9e;
    --color-grey-8: #b3b3b3;
    --color-grey-9: #bcbec0;
    --color-grey-10: #c7c7c7;
    --color-grey-11: #cfcfcf;
    --color-grey-12: #e2e2e2;
    --color-grey-13: #eaeaea;
    --color-grey-14: #f1f1f1;
    --color-grey-15: #f7f7f7;
    --color-blue-1: #105891;
    --color-blue-2: #1463a2;
    --color-blue-3: #1766a6;
    --color-blue-4: #3d70b7;
    --color-green-1: #008631;
    --color-green-2: #009245;
    --color-green-3: #0c9444;
    --color-green-4: #00a13f;
    --color-green-5: #02ab52;
    --color-green-6: #c7efce;
    --color-green-7: #d7f6db;
    --color-red-1: #901c30;
    --color-red-2: #993b39;
    --color-red-3: #d72140;
    --color-red-4: #cf3747;
    --color-red-5: #cc5552;
    --color-red-6: #ef4444;
    --box-shadow-sm: 0 2px 1px -1px rgba(0 0 0 / 20%),
      0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    --box-shadow-md: 0 3px 1px -2px rgb(0 0 0 / 20%),
      0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    --box-shadow-lg: 0 3px 3px -2px rgba(0 0 0 / 20%),
      0 3px 4px 0 rgb(0 0 0 / 14%),0 1px 8px 0 rgb(0 0 0 / 12%);
    --box-shadow-xl: 0 4px 5px -2px rgba(0 0 0 / 20%),
      0 4px 5px 0 rgb(0 0 0 / 14%),0 1px 10px 0 rgb(0 0 0 / 12%);
    --box-shadow-hover: 0 2px 4px -1px rgb(0 0 0 / 20%),
      0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-family: var(--font-base);
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  #__next {
    position: relative;
    min-height: 100vh;
    overflow: clip;
  }

  button {
    font-family: inherit;
    background: none;
  }

  input,
  select {
    font-family: inherit;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-medium.woff2') format('woff2');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-semibold.woff2') format('woff2');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-bold.woff2') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans Book';
    src: url('/fonts/uni-sans-book.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url('/fonts/uni-sans-regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url('/fonts/uni-sans-semibold.woff2') format('woff2');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url('/fonts/uni-sans-bold.woff2') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
`;

export default GlobalStyles;
