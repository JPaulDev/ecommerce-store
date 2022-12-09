import NavItem from './NavItem';
import * as Styled from './styles';

const navItems = [
  {
    heading: 'Home',
    href: '/',
  },
  {
    id: 'components-dropdown',
    heading: 'Components',
    hasDropdown: true,
  },
  {
    id: 'accessories-dropdown',
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
