import { Header, Navbar, Background, TopBannerSmall, Footer } from '../index';
import * as Styled from './styles';

export default function Layout({ children, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <Background backgroundImage={pageProps.backgroundImage} />
      <Styled.Main>
        <TopBannerSmall />
        {children}
      </Styled.Main>
      <Footer />
    </>
  );
}
