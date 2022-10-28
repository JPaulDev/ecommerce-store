import styled, { css } from 'styled-components';

const transition = css`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};
  transition-delay: 500ms;
  transition-property: transform;
`;

const containerStyles = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const buttonStyles = css`
  cursor: pointer;
  font-size: 0;
`;

export const TopContainer = styled.div`
  border-bottom: 3px solid var(--color-grey-12);
  padding-bottom: 20px;
  ${containerStyles}
`;

export const Heading = styled.h1`
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-30);
  margin-right: 35px;
`;

export const TopButton = styled.button`
  display: flex;
  ${transition}
  ${buttonStyles}

  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export const BottomContainer = styled.div`
  margin-top: 15px;

  @media screen and (max-width: 649px) {
    ${containerStyles}
  }
`;

export const Subheading = styled(Heading)`
  display: inline-block;
  font-size: var(--font-size-22);
  font-weight: var(--font-weight-semibold);

  @media screen and (min-width: 700px) {
    margin-right: 20px;
  }
`;

export const BottomButton = styled.button`
  align-items: center;
  display: inline-flex;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  ${buttonStyles}

  svg {
    height: auto;
    width: 15px;
    ${transition}
  }

  @media screen and (min-width: 650px) {
    column-gap: 7px;
    color: var(--color-blue-4);
    font-size: var(--font-size-13);

    svg {
      height: auto;
      width: 10px;
    }
  }
`;

export const Text = styled.p`
  color: var(--color-grey-4);
  font-size: var(--font-size-14);
  line-height: 1.7;
  padding-top: 15px;
`;
