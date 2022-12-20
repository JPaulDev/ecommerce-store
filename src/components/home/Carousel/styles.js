import styled, { css } from 'styled-components';

export const navigationMixin = css`
  list-style: none;
  position: absolute;
  z-index: 10;
`;

export const Section = styled.section`
  display: flex;
  overflow: hidden;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadows.lg};
`;

export const NavigationTop = styled.ul`
  ${navigationMixin}
  background-color: rgb(60 60 60 / 80%);
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone[300]};
  justify-content: space-around;
  width: 100%;
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
  }
`;

export const ButtonTop = styled.button`
  border-top: 3px solid transparent;
  border-bottom: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.orange[500] : 'transparent'};
  font-family: 'Uni Sans', sans-serif;
  color: ${({ theme }) => theme.colors.stone[400]};
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: 600;
  padding: 15px 20px;
  transform: ${({ isActive }) => isActive && 'scale(1.06)'};
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    color: ${({ theme }) => theme.colors.stone[200]};
  }

  && {
    color: ${({ isActive }) => isActive && 'white'};
  }
`;

export const Navigation = styled.ul`
  ${navigationMixin}
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

export const NavigationArrow = styled.button`
  --size: 35px;

  width: var(--size);
  height: var(--size);
  align-items: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.boxShadows.xl};
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.stone[200]};
  }
`;

export const NavigationBottom = styled.ul`
  ${navigationMixin}
  align-items: center;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  column-gap: 10px;
  display: flex;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

export const ButtonBottom = styled.button`
  display: block;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.orange[500] : 'white'};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  height: ${({ isActive }) => (isActive ? '9px' : '5px')};
  transition: all 100ms ease-in-out;
  width: 40px;
  cursor: pointer;
`;
