import logo from '../../assets/images/header/header-logo.webp';
import SearchInput from './SearchInput';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.HeaderLogo src={logo} alt="PC-Connect.co.uk" />
        <SearchInput />
      </Styled.Container>
    </Styled.Header>
  );
}
