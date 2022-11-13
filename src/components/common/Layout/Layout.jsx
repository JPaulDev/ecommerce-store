import dynamic from 'next/dynamic';
import { Header, Navbar, Background, TopBannerSmall, Footer } from '../index';
import * as Styled from './styles';

const Modal = dynamic(() => import('../../auth/Modal'), {
  ssr: false,
});

export default function Layout({ children, pageProps }) {
  return (
    <>
      <Modal />
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
