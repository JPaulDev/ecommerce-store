import styled from 'styled-components';
import NavItem from './NavItem';

const NAV_ITEMS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    id: 'components-dropdown',
    title: 'Components',
  },
  {
    id: 'accessories-dropdown',
    title: 'Accessories',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  return (
    <Nav>
      <ul>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.zinc[800]};
  box-shadow: ${({ theme }) => theme.boxShadows.xl};
  z-index: 90;
  position: relative;

  > ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
`;
