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
    --font-size-32: 3.2rem;
    --font-size-34: 3.4rem;
    --font-size-38: 3.8rem;
    --color-orange-1: #ff9110;
    --color-yellow-1: #facc15;
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
    --color-indigo-1: #6366f1;
    --color-blue-1: #3b82f6;
    --color-sky-blue-1: #075985;
    --color-sky-blue-2: #0369a1;
    --color-sky-blue-3: #0284c7;
    --color-sky-blue-4: #0ea5e9;
    --color-green-1: #15803d;
    --color-green-2: #16a34a;
    --color-green-3: #22c55e;
    --color-green-4: #bbf7d0;
    --color-green-5: #dcfce7;
    --color-red-1: #b91c1c;
    --color-red-2: #dc2626;
    --color-red-3: #ef4444;
    --border-radius-sm: 0.2rem;
    --border-radius-md: 0.4rem;
    --border-radius-lg: 0.6rem;
    --border-radius-xl: 0.8rem;
    --border-radius-2xl: 1.2rem;
    --border-radius-3xl: 1.6rem;
    --border-radius-full: 9999px;
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
