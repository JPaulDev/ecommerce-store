import styled from 'styled-components';

export const Link = styled.a`
  background: none;
  color: ${({ isOpen }) => (isOpen ? 'var(--color-grey-2)' : 'white')};
  cursor: pointer;
  display: block;
  font-size: 0.85rem;
  padding: 15px 20px;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  user-select: none;

  &:hover {
    background-color: var(--color-grey-1);
  }

  && {
    background-color: ${({ isOpen }) => isOpen && 'white'};
  }
`;
