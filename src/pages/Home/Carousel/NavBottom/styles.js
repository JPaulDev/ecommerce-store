import styled from 'styled-components';

export const Container = styled.div`
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  user-select: none;
  z-index: 10;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    align-items: center;
    display: flex;
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
