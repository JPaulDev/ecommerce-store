import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Background, Footer, Header, Navbar, TopBannerSmall } from '../index';

const Modal = dynamic(() => import('../../../features/auth/Modal'), {
  ssr: false,
});

export default function Layout({ children, pageProps }) {
  return (
    <>
      <Modal />
      <Header />
      <Navbar />
      <Background backgroundImage={pageProps.backgroundImage} />
      <Main>
        <TopBannerSmall />
        {children}
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 1280px;
`;
