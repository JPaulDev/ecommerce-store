import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #eaeaea;
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
  }
`;

export const Heading = styled.h3`
  color: var(--color-grey-8);
  font-size: 0.95rem;
  text-transform: uppercase;
`;

export const DropdownButton = styled.button`
  align-items: center;
  background: none;
  border-bottom: 1px solid var(--color-grey-10);
  color: var(--color-grey-8);
  cursor: pointer;
  display: flex;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 13px 20px;
  position: relative;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: var(--color-grey-11);
  }

  i {
    position: absolute;
    right: 15px;
    transform: ${({ isOpen }) => isOpen && 'rotate(90deg)'};
    transition: transform 200ms ease-in-out;
  }

  @media screen and (min-width: 650px) {
    padding: 13px 10px;

    i {
      right: 5px;
    }
  }
`;
