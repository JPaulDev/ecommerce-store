import { Provider } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
import { wrapper } from '../app/store';
import Layout from '../components/common/Layout/Layout';

export default function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Layout pageProps={props.pageProps}>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
