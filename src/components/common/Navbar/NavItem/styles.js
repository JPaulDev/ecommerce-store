import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ isOpen }) => (isOpen ? 'var(--color-grey-2)' : 'white')};
  cursor: pointer;
  display: block;
  font-size: var(--font-size-14);
  padding: 15px 20px;
  position: relative;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  user-select: none;
  z-index: 10;

  &:hover {
    background-color: var(--color-grey-3);
  }

  && {
    background-color: ${({ isOpen }) => isOpen && 'white'};
  }
`;
