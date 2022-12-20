import styled, { css } from 'styled-components';

const titleMixin = css`
  color: ${({ theme }) => theme.colors.stone[600]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  text-transform: uppercase;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  margin: 15px auto 0;
  max-width: 1280px;
`;

export const Title = styled.strong`
  ${titleMixin}
`;

export const DropdownButton = styled.button`
  ${titleMixin}
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone[400]};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  padding: 15px 20px;
  width: 100%;

  > svg {
    transform: ${({ isOpen }) => isOpen && 'rotate(90deg)'};
    transition: transform 200ms ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[300]};
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    padding: 15px 10px;
  }
`;

export const Container = styled.div`
  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 30px;
    padding-top: 30px;

    .site-links {
      margin-left: 30px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    grid-template-columns: auto 1fr;
    column-gap: 40px;

    .site-links {
      display: flex;
      margin-left: 40px;
      column-gap: 40px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    grid-template-columns: auto 1fr auto;
    padding-bottom: 30px;
  }
`;

export const PaymentsContainer = styled.div`
  grid-column: 1 / 3;
  text-align: center;

  ul {
    background-color: ${({ theme }) => theme.colors.neutral[400]};
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  li {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    height: 37px;
    width: 60px;
    display: flex;
    justify-content: center;
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    grid-column: auto;
    margin-right: 40px;

    ul {
      max-width: 130px;
      background-color: transparent;
      padding: 15px 0 0;
    }

    li {
      background-color: ${({ theme }) => theme.colors.neutral[300]};
    }
  }
`;

export const ContactBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.sky[700]};
  display: flex;
  justify-content: center;
  padding: 20px 0;

  > a {
    align-items: center;
    color: white;
    column-gap: 10px;
    display: flex;
    letter-spacing: 1px;
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[20]};
    font-weight: 600;
    padding: 0 25px;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.neutral[300]};
    }
  }

  > a + a {
    border-left: 2px solid white;
  }
`;

export const InfoBanner = styled.div`
  background-color: white;
  flex-direction: column;
  padding: 20px 15px;
  gap: 15px;
  align-items: center;
  display: flex;

  > p {
    flex: 1;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes[13]};
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    flex-direction: row;

    > img {
      margin-left: 15px;
    }

    > p {
      text-align: left;
      max-width: 350px;
      margin-right: auto;
    }
  }
`;

export const InnerContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  display: flex;

  > :first-child {
    border: none;
  }
`;

export const InfoBannerLinks = styled.div`
  --column-gap: 10px;

  column-gap: var(--column-gap);
  border-left: 1px solid ${({ theme }) => theme.colors.stone[400]};
  font-family: 'Uni Sans', sans-serif;
  letter-spacing: 0.5px;
  font-size: ${({ theme }) => theme.fontSizes[18]};
  font-weight: 600;
  padding: 0 15px;
  align-items: center;
  display: flex;

  > a {
    column-gap: var(--column-gap);
    color: black;
    text-decoration: none;
    align-items: center;
    display: flex;

    &:hover {
      color: ${({ theme }) => theme.colors.sky[700]};
    }
  }
`;
