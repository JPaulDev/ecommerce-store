import styled from 'styled-components';

export const Section = styled.section`
  box-shadow: 0 3px 5px rgb(0 0 0 / 40%);
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const NavigationTop = styled.ul`
  background-color: rgb(83 83 83 / 80%);
  border-bottom: 1px solid var(--color-grey-7);
  display: flex;
  justify-content: space-around;
  list-style: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 714px) {
    display: none;
  }
`;

export const ButtonTop = styled.button`
  background: none;
  border-bottom: ${({ isActive }) =>
    isActive && '3px solid var(--color-orange-1)'};
  color: #b9b9b9;
  cursor: pointer;
  font-family: 'Uni Sans', sans-serif;
  font-size: 0.83rem;
  font-weight: 600;
  padding: 16px 20px 12px;
  transform: ${({ isActive }) => isActive && 'scale(1.06)'};

  &:hover {
    color: #e5e7eb;
  }

  && {
    color: ${({ isActive }) => isActive && 'white'};
  }
`;

export const NavigationBottom = styled.ul`
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

export const ButtonBottom = styled.button`
  background: ${({ isActive }) =>
    isActive ? 'var(--color-orange-1)' : 'white'};
  border-radius: 2px;
  cursor: pointer;
  height: ${({ isActive }) => (isActive ? '7px' : '5px')};
  margin: 0 5px;
  transition: all 100ms ease-in-out;
  width: 33px;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 10;
`;

export const NavigationArrow = styled.button`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 1px 4px 4px rgb(0 0 0 / 50%);
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  user-select: none;
  width: 32px;
`;
