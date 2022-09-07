import logo from '../../assets/images/header/header-logo.webp';
import SearchInput from './SearchInput';
import Links from './Links';
import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.HeaderLogo
          src={logo}
          alt="PC-Connect.co.uk"
          width={153}
          height={32}
        />
        <SearchInput />
        <Links />
      </Styled.Container>
    </Styled.Header>
  );
}
