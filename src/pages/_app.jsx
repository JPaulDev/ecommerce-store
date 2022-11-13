import { Provider } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
import { wrapper } from '../app/store';
import { UIProvider } from '../contexts/UIContext';
import { Layout } from '../components/common';

export default function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <UIProvider>
          <Layout pageProps={props.pageProps}>
            <Component {...props.pageProps} />
          </Layout>
        </UIProvider>
      </Provider>
    </>
  );
}
