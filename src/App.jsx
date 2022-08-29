import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Home />
    </>
  );
}
