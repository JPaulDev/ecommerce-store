import styled, { css } from 'styled-components';

const overflowEllipsisMixin = css`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
`;

export const buttonMixin = css`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.green[500]},
    ${({ theme }) => theme.colors.green[700]}
  );
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  color: white;
  cursor: pointer;
  font-weight: 700;
  margin-top: 10px;
  padding: 13px;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  text-transform: uppercase;

  &:disabled {
    background: ${({ theme }) => theme.colors.neutral[300]};
    cursor: not-allowed;
    box-shadow: none;
  }

  &:not(:disabled):hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%),
      ${({ theme }) => theme.boxShadows.hover};
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;

export const HorizontalCard = styled.li`
  --border-color: ${({ theme }) => theme.colors.stone[400]};

  border: 1px solid var(--border-color);
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 25px;

  > img {
    height: auto;
    width: 120px;
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    > img {
      width: 150px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: auto 1fr 280px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    > img {
      width: 180px;
    }
  }
`;

export const LeftContainer = styled.div`
  padding: 10px 0 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;

  > img {
    height: auto;
    width: 70px;
  }

  .sale-tag {
    background-color: ${({ theme }) => theme.colors.red[500]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    color: white;
    font-size: ${({ theme }) => theme.fontSizes[14]};
    font-weight: 600;
    padding: 3px 10px;
  }

  > p {
    color: ${({ theme }) => theme.colors.stone[600]};
    font-size: ${({ theme }) => theme.fontSizes[15]};
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 10px 25px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    > img {
      width: 90px;
    }
  }
`;

export const RightContainer = styled.div`
  border-top: 2px solid var(--border-color);
  grid-column: 1 / 3;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .price-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  button {
    ${buttonMixin}
    min-width: 160px;
  }

  .container {
    align-items: flex-end;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    row-gap: 5px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    margin-left: 25px;
    grid-column: 2 / 3;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding-left: 25px;
    padding-top: 0;
    margin: 0;
    border-left: 1px solid var(--border-color);
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: auto;
    border-top: none;

    .quantity-wrapper {
      position: absolute;
      right: 0;
      top: 0;
    }

    button {
      width: 100%;
    }

    .container {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const VerticalCard = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  flex-direction: column;
  padding: 20px;
  text-align: center;

  > img {
    height: auto;
    width: 150px;
  }

  .product-name {
    ${overflowEllipsisMixin}
    -webkit-line-clamp: 2;
  }

  .product-description {
    ${overflowEllipsisMixin}
    color: ${({ theme }) => theme.colors.stone[600]};
    font-size: ${({ theme }) => theme.fontSizes[14]};
    -webkit-line-clamp: 3;
    line-height: 1.5;
    margin: 10px 0;
  }

  .divider {
    height: 2px;
    background-color: ${({ theme }) => theme.colors.stone[300]};
    margin: 10px 0;
    width: 100%;
  }

  > button {
    ${buttonMixin}
    min-width: 180px;
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    min-height: 520px;
  }
`;
