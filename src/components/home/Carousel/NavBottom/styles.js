import styled from 'styled-components';

export const List = styled.ul`
  align-items: center;
  bottom: 15px;
  display: flex;
  left: 50%;
  list-style: none;
  position: absolute;
  transform: translateX(-50%);
  user-select: none;
  z-index: 10;

  li {
    display: flex;
  }

  @media screen and (min-width: 715px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: ${({ isActive }) =>
    isActive ? 'var(--color-orange-1)' : 'white'};
  border-radius: 2px;
  cursor: pointer;
  height: ${({ isActive }) => (isActive ? '7px' : '5px')};
  margin: 0 5px;
  transition: all 100ms ease-in-out;
  width: 33px;
`;
