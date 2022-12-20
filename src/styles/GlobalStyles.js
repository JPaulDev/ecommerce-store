import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-base: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-base);
  }

  #__next {
    position: relative;
    min-height: 100vh;
    overflow: clip;
  }

  button {
    background: none;
  }

  input,
  textarea,
  button,
  select {
    font-family: inherit;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-medium.woff2') format('woff2');
    font-style: normal;
    font-weight: 500;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-semibold.woff2') format('woff2');
    font-style: normal;
    font-weight: 600;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans-bold.woff2') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans Book';
    src: url('/fonts/uni-sans-book.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url('/fonts/uni-sans-regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url('/fonts/uni-sans-semibold.woff2') format('woff2');
    font-style: normal;
    font-weight: 600;
    font-stretch: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Uni Sans';
    src: url('/fonts/uni-sans-bold.woff2') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
    font-display: swap;
  }
`;

export default GlobalStyles;
