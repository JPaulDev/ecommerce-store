import NavItem from './NavItem';
import * as Styled from './styles';

const navItems = [
  {
    title: 'Home',
    url: '',
  },
  {
    title: 'Components',
    hasDropdown: true,
  },
  {
    title: 'Accessories',
    hasDropdown: true,
  },
  {
    title: 'About',
    url: '',
  },
  {
    title: 'Contact',
    url: '',
  },
];

export default function Navbar() {
  return (
    <Styled.Nav>
      <Styled.NavList>
        {navItems.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </Styled.NavList>
    </Styled.Nav>
  );
}
