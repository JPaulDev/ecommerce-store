import styled, { css } from 'styled-components';

const flexMixin = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const overflowEllipsisMixin = css`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-align: center;
`;

const imageMixin = css`
  height: auto;
  max-width: 100%;
`;

const containerMixin = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ListItem = styled.li`
  ${({ variant }) => {
    if (variant === 'horizontal') {
      return css`
        border: 1px solid var(--color-grey-9);
        display: grid;
        grid-template-columns: auto 1fr;
        margin-bottom: 15px;
        padding: 20px 25px;

        @media screen and (min-width: 800px) {
          grid-template-columns: auto 1fr 280px;
        }
      `;
    }

    return css`
      background-color: white;
      border: 1px solid var(--color-grey-12);
      border-radius: 10px;
      flex-direction: column;
      height: 100%;
      padding: 20px;
      ${flexMixin}

      img {
        height: auto;
        width: 150px;
      }

      :nth-child(4n) {
        display: none;

        @media screen and (min-width: 1110px) {
          display: flex;
        }
      }

      @media screen and (min-width: 570px) {
        min-height: 510px;
      }
    `;
  }}
`;

export const ProductName = styled.p`
  -webkit-line-clamp: 2;
  margin: 5px 0 10px;
  ${overflowEllipsisMixin}

  @media screen and (min-width: 570px) {
    margin: 5px 0 auto;
  }
`;

export const ProductDescription = styled.p`
  color: var(--color-grey-4);
  font-size: var(--font-size-14);

  ${({ variant }) => {
    if (variant === 'horizontal') {
      return css`
        margin: 5px 0;
      `;
    }

    return css`
      -webkit-line-clamp: 3;
      line-height: 1.5;
      margin-top: 10px;
      ${overflowEllipsisMixin}
    `;
  }}
`;

export const PartNumberWrapper = styled.div`
  border-bottom: 2px solid var(--color-grey-11);
  margin: 5px 0;
  padding-bottom: 10px;
  width: 100%;
  ${flexMixin}
`;

export const ImageWrapper = styled.div`
  height: auto;
  width: 120px;

  img {
    ${imageMixin}
  }

  @media screen and (min-width: 530px) {
    width: 150px;
    height: auto;
  }

  @media screen and (min-width: 930px) {
    width: 180px;
    height: auto;
  }
`;

export const LeftContainer = styled.div`
  padding: 10px 0 10px 25px;

  @media screen and (min-width: 800px) {
    padding: 10px 25px;
  }
`;

export const LogoWrapper = styled.div`
  height: auto;
  width: 75px;

  img {
    ${imageMixin}
  }

  @media screen and (min-width: 930px) {
    width: 90px;
    height: auto;
  }
`;

export const RightContainer = styled.div`
  border-top: 2px solid var(--color-grey-9);
  grid-column: 1/3;
  padding-top: 10px;
  ${containerMixin}

  @media screen and (min-width: 650px) {
    margin-left: 25px;
    grid-column: 2/3;
  }

  @media screen and (min-width: 800px) {
    padding-left: 25px;
    padding-top: 0;
    margin: 0;
    border-left: 1px solid var(--color-grey-9);
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: initial;
    border-top: none;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const QuantityWrapper = styled.div`
  @media screen and (min-width: 800px) {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const ButtonContainer = styled.div`
  width: 160px;

  @media screen and (min-width: 650px) {
    width: 200px;
  }

  @media screen and (min-width: 800px) {
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
  align-items: flex-end;
  flex-direction: column;
  ${containerMixin}

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SaleTag = styled.div`
  background-color: var(--color-red-3);
  border-radius: 5px;
  color: white;
  display: inline-block;
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-semibold);
  margin-top: 5px;
  padding: 2px 10px;
  text-transform: uppercase;
`;
