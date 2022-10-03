import NavItem from './NavItem';
import * as Styled from './styles';

const navItems = [
  {
    heading: 'Home',
    href: '/',
  },
  {
    heading: 'Components',
    hasDropdown: true,
  },
  {
    heading: 'Accessories',
    hasDropdown: true,
  },
  {
    heading: 'About',
    href: '/about',
  },
  {
    heading: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  return (
    <Styled.Nav>
      <Styled.NavList>
        {navItems.map((item) => (
          <NavItem key={item.heading} item={item} />
        ))}
      </Styled.NavList>
    </Styled.Nav>
  );
}
