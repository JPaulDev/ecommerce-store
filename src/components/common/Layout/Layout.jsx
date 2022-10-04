import { Header, Navbar, Background, TopBannerSmall, Footer } from '../index';
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
