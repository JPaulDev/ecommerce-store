import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--color-grey-3);
  box-shadow: var(--box-shadow-lg);
  position: relative;
  width: 100%;
  z-index: 100;
`;

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 1280px;
  padding: 20px 15px;

  @media screen and (min-width: 590px) {
    grid-template-columns: 1fr minmax(max-content, 1fr);
    width: 97%;
  }

  @media screen and (min-width: 935px) {
    grid-template-columns: 1fr minmax(270px, 1fr) minmax(max-content, 1fr);
  }
`;

export const Wrapper = styled.div`
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  @media screen and (max-width: 649px) {
    width: 155px;
  }
`;

export const LinksContainer = styled.div`
  column-gap: 20px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 935px) {
    margin-left: 40px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 40px;
  }
`;

export const Link = styled.a`
  align-items: center;
  color: var(--color-grey-8);
  column-gap: 10px;
  display: flex;
  font-size: var(--font-size-14);
  position: relative;
  text-decoration: none;
  transition: color 200ms ease-in-out;

  &:hover {
    color: white;
  }
`;

export const TextContainer = styled.div`
  @media screen and (max-width: 589px) {
    display: none;
  }
`;

export const TopText = styled.div`
  color: white;
  font-size: var(--font-size-16);
  line-height: 1;
  margin-bottom: 5px;
`;
