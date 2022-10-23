import styled, { css } from 'styled-components';

const flexStyles = css`
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-9);
  margin-bottom: 15px;
  padding: 15px 5px;
`;

export const List = styled.ul`
  justify-content: space-around;
  list-style: none;
  margin: 0 auto;
  max-width: 1100px;
  ${flexStyles}
`;

export const Button = styled.button`
  background: none;
  cursor: pointer;
  flex-direction: column;
  min-width: 85px;
  ${flexStyles}

  @media screen and (min-width: 640px) {
    min-width: 95px;
  }
`;

export const Wrapper = styled.div`
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--color-orange-1);
  height: 65px;
  justify-content: center;
  margin-bottom: 5px;
  position: relative;
  width: 65px;
  ${flexStyles}

  &::after {
    border-radius: inherit;
    box-shadow: 0 0 0 2px var(--color-orange-1);
    content: '';
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 200ms ease-in-out;
    width: 100%;

    ${Button}:hover & {
      opacity: 1;
    }
  }

  @media screen and (min-width: 550px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 640px) {
    width: 80px;
    height: 80px;
  }
`;

export const Heading = styled.h3`
  color: var(--color-grey-5);
  font-size: 0.75rem;
  font-weight: 600;
  transition: color 200ms ease-in-out;

  ${Button}:hover & {
    color: var(--color-grey-2);
  }

  @media screen and (min-width: 640px) {
    font-size: 0.84rem;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  gap: 10px;

  @media screen and (min-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 840px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1110px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1310px) {
    padding: 0 10px;
  }
`;
