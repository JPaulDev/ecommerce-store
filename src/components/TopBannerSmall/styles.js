import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: var(--color-grey-6);
  display: flex;
  justify-content: space-around;
  min-height: 55px;
  position: relative;
`;

export const InnerContainer = styled.div`
  align-items: center;
  background-color: var(--color-grey-6);
  column-gap: 15px;
  display: flex;
  justify-content: center;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  z-index: ${({ isActive }) => (isActive ? '10' : '0')};

  @media screen and (max-width: 999px) {
    min-width: 285px;
    transition: opacity 1s ease-in-out;
    position: absolute;
  }

  @media screen and (min-width: 1000px) {
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: auto;
  width: ${({ displayWidth }) => displayWidth};
`;

export const Text = styled.span`
  color: var(--color-grey-2);
  font-size: 0.7rem;
`;

export const BoldText = styled.strong`
  display: block;
  font-size: 0.87rem;
`;
