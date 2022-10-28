import styled, { css } from 'styled-components';

const borderStyles = css`
  border-left: 1px solid var(--color-grey-12);
  border-right: 1px solid var(--color-grey-12);
`;

const flexStyles = css`
  align-items: center;
  display: flex;
`;

const linkStyles = css`
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;
`;

export const TopContainer = styled.div`
  background-color: var(--color-green-7);
  border-top: 1px solid var(--color-grey-12);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 30px;
  ${borderStyles}
`;

export const Heading = styled.h2`
  border-bottom: 1px solid var(--color-grey-9);
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-22);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 15px;
  padding: 10px 0;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  column-gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 0;
  ${flexStyles}

  strong {
    font-size: var(--font-size-20);
    margin-right: 5px;
  }
`;

export const Text = styled.span`
  font-size: var(--font-size-14);
`;

export const InnerContainer = styled.div`
  border-top: 1px solid var(--color-grey-9);
  margin-top: 15px;
  padding: 20px 0 10px;
`;

export const CheckoutLink = styled.a`
  background-image: linear-gradient(
    to top,
    var(--color-green-2),
    var(--color-green-5)
  );
  border-radius: 6px;
  box-shadow: var(--box-shadow-md);
  color: white;
  column-gap: 10px;
  font-size: var(--font-size-14);
  justify-content: center;
  margin: 0 auto 20px;
  padding: 15px;
  ${flexStyles}
  ${linkStyles}

  &:hover {
    background-image: linear-gradient(
      to top,
      var(--color-green-1),
      var(--color-green-4)
    );
    box-shadow: var(--box-shadow-hover);
  }
`;

export const LoginLink = styled.a`
  color: var(--color-blue-4);
  display: block;
  font-size: var(--font-size-11);
  text-align: center;
  ${linkStyles}

  &:hover {
    text-decoration: underline;
  }
`;

export const BottomContainer = styled.div`
  background-color: var(--color-green-6);
  border-bottom: 1px solid var(--color-grey-12);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: column;
  padding: 20px 30px 30px;
  ${borderStyles}
  ${flexStyles}

  img {
    margin-top: 5px;
  }
`;

export const PaypalLink = styled.a`
  background-color: var(--color-orange-2);
  border-radius: 100px;
  display: flex;
  margin: 5px 0;
  padding: 10px 25px;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgb(0 0 0 / 5%);
  }
`;
