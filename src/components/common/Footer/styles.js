import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: var(--color-grey-13);
  margin: 15px auto 0;
  max-width: 1280px;
`;

export const Container = styled.div`
  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 350px;
    column-gap: 30px;
    padding-top: 30px;
  }

  @media screen and (min-width: 860px) {
    grid-template-columns: auto 1fr;
    column-gap: 40px;
  }

  @media screen and (min-width: 1050px) {
    grid-template-columns: auto 1fr auto;
  }
`;

export const LinksContainer = styled.div`
  @media screen and (min-width: 650px) {
    margin-left: 30px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 860px) {
    display: flex;
    margin-left: 50px;
    column-gap: 40px;
    min-height: 200px;
  }
`;

export const Heading = styled.h3`
  color: var(--color-grey-4);
  font-size: var(--font-size-14);
  text-transform: uppercase;
`;

export const DropdownButton = styled(Heading)`
  align-items: center;
  border-bottom: 1px solid var(--color-grey-9);
  cursor: pointer;
  display: flex;
  font-weight: var(--font-weight-bold);
  justify-content: space-between;
  padding: 13px 20px;
  position: relative;
  width: 100%;

  svg {
    transform: ${({ isOpen }) => isOpen && 'rotate(90deg)'};
    transition: transform 200ms ease-in-out;
  }

  &:hover {
    background-color: var(--color-grey-11);
  }

  @media screen and (min-width: 650px) {
    padding: 13px 10px;
  }
`;
