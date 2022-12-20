import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  box-shadow: ${({ theme }) => theme.boxShadows.lg};
  position: relative;
  z-index: 100;
`;

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  row-gap: 20px;
  max-width: 1280px;
  padding: 20px 10px;

  > img {
    height: auto;
    width: 150px;
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    grid-template-columns: 1fr minmax(270px, 1fr) 1fr;
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    > img {
      width: auto;
    }
  }
`;

export const Form = styled.form`
  --color-main: ${({ theme }) => theme.colors.orange[500]};
  --border-radius: ${({ theme }) => theme.borderRadius.xl};

  justify-self: center;
  position: relative;
  width: 100%;
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  &::after {
    border-radius: var(--border-radius);
    box-shadow: 0 0 0 3px var(--color-main);
    content: '';
    height: 100%;
    left: 0;
    opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
    pointer-events: none;
    position: absolute;
    transition: opacity 200ms ease-in-out;
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    max-width: 450px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    grid-column: auto;
    grid-row: auto;
  }
`;

export const inputStyles = css`
  border-radius: var(--border-radius);
  font-size: ${({ theme }) => theme.fontSizes[15]};
  font-weight: 500;
  outline: none;
  padding: 12px 65px 12px 12px;
  width: 100%;

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export const SearchButton = styled.button`
  background-color: var(--color-main);
  border-radius: var(--border-radius);
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-left: 3px;
  position: absolute;
  right: 0;
  top: 0;
  width: 55px;

  &:hover {
    box-shadow: inset 0 0 0 999px rgb(0 0 0 / 6%);
  }
`;

export const LinksContainer = styled.div`
  column-gap: 20px;
  display: flex;
  justify-content: flex-end;

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    margin-left: 35px;
  }
`;

export const Link = styled.a`
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  display: flex;
  text-align: left;
  text-decoration: none;
  position: relative;

  > svg {
    fill: ${({ theme }) => theme.colors.orange[500]};
  }
`;

export const TextContainer = styled.span`
  display: none;
  row-gap: 3px;

  .title {
    color: white;
    font-size: ${({ theme }) => theme.fontSizes[18]};
  }

  .text {
    max-width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.neutral[300]};
    font-size: ${({ theme }) => theme.fontSizes[15]};
    transition: color 200ms ease-in-out;

    ${Link}:hover & {
      color: white;
    }
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    display: flex;
    flex-direction: column;
  }
`;
