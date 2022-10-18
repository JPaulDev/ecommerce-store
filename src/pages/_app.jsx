import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { wrapper } from '../app/store';
import Layout from '../components/common/Layout/Layout';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-orange-1: #ff9110;
    --color-grey-1: #434343;
    --color-grey-2: #333;
    --color-grey-3: #b3b3b3;
    --color-grey-4: #2f2f2f;
    --color-grey-5: #7e7e7e;
    --color-grey-6: #f7f7f7;
    --color-grey-7: #9e9e9e;
    --color-grey-8: #5b5b5b;
    --color-grey-9: #e2e2e2;
    --color-grey-10: #bcbec0;
    --color-grey-11: #cfcfcf;
    --color-grey-12: #c7c7c7;
    --color-blue-1: #3d70b7;
    --color-blue-2: #1766a6;
    --shadow-button: rgb(0 0 0 / 20%) 0 3px 1px -2px,
      rgb(0 0 0 / 14%) 0 2px 2px 0, rgb(0 0 0 / 12%) 0 1px 5px 0;
    --shadow-button-hover: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
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

  #__next {
    position: relative;
    min-height: 100vh;
    overflow: clip;
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
    src: url('/fonts/uni-sans-bold.woff2') format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
`;

export default function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout pageProps={props.pageProps}>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
