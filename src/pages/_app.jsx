import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../app/store';
import { Layout } from '../components/common';
import { UIProvider } from '../contexts/UIContext';
import { GlobalStyles, theme } from '../styles';

export default function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <UIProvider>
          <Layout pageProps={props.pageProps}>
            <Component {...props.pageProps} />
          </Layout>
        </UIProvider>
      </Provider>
    </ThemeProvider>
  );
}
