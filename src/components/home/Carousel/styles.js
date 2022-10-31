import styled, { css } from 'styled-components';

const navigationMixin = css`
  display: flex;
  list-style: none;
  position: absolute;
  z-index: 10;
`;

const buttonMixin = css`
  cursor: pointer;
  user-select: none;
`;

export const Section = styled.section`
  box-shadow: var(--box-shadow-lg);
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const NavigationTop = styled.ul`
  background-color: rgb(83 83 83 / 80%);
  border-bottom: 1px solid var(--color-grey-7);
  justify-content: space-around;
  top: 0;
  width: 100%;
  ${navigationMixin}

  @media screen and (max-width: 714px) {
    display: none;
  }
`;

export const ButtonTop = styled.button`
  border-bottom: ${({ isActive }) =>
    isActive && '3px solid var(--color-orange-1)'};
  color: var(--color-grey-8);
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-semibold);
  padding: 16px 20px 12px;
  transform: ${({ isActive }) => isActive && 'scale(1.06)'};
  ${buttonMixin}

  &:hover {
    color: var(--color-grey-12);
  }

  && {
    color: ${({ isActive }) => isActive && 'white'};
  }
`;

export const NavigationBottom = styled.ul`
  align-items: center;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  ${navigationMixin}

  li {
    display: flex;
  }

  @media screen and (min-width: 715px) {
    display: none;
  }
`;

export const ButtonBottom = styled.button`
  background: ${({ isActive }) =>
    isActive ? 'var(--color-orange-1)' : 'white'};
  border-radius: 2px;
  height: ${({ isActive }) => (isActive ? '7px' : '5px')};
  margin: 0 5px;
  transition: all 100ms ease-in-out;
  width: 33px;
  ${buttonMixin}
`;

export const Navigation = styled.ul`
  justify-content: space-between;
  padding: 0 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  ${navigationMixin}
`;

export const NavigationArrow = styled.button`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: var(--box-shadow-xl);
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
  ${buttonMixin}
`;
