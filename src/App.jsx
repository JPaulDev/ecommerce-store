import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
