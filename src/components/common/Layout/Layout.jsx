import Header from '../Header';
import Navbar from '../Navbar';
import Background from '../Background';
import TopBannerSmall from '../TopBannerSmall';
import Footer from '../Footer';
import * as Styled from './styles';

export default function Layout({ children, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <Background background={pageProps.background} />
      <Styled.Main>
        <TopBannerSmall />
        {children}
      </Styled.Main>
      <Footer />
    </>
  );
}
