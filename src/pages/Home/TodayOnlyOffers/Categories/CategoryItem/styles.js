import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-width: 85px;

  @media screen and (min-width: 640px) {
    min-width: 95px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--color-orange-1);
  display: flex;
  height: 65px;
  justify-content: center;
  margin-bottom: 5px;
  position: relative;
  width: 65px;

  &::after {
    border-radius: inherit;
    box-shadow: 0 0 0 2px var(--color-orange-1);
    content: '';
    height: 100%;
    opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
    position: absolute;
    transition: opacity 200ms ease-in-out;
    width: 100%;
  }

  @media screen and (min-width: 550px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 640px) {
    width: 80px;
    height: 80px;
  }

  svg {
    height: auto;
    width: 60%;
  }
`;

export const Heading = styled.h3`
  color: ${({ isHovered }) =>
    isHovered ? 'var(--color-grey-2)' : 'var(--color-grey-5)'};
  font-size: 0.75rem;
  font-weight: 600;
  transition: color 200ms ease-in-out;

  @media screen and (min-width: 640px) {
    font-size: 0.84rem;
  }
`;
