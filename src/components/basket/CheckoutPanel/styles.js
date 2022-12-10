import styled, { css } from 'styled-components';

const flexMixin = css`
  align-items: center;
  display: flex;
`;

const linkMixin = css`
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;
`;

export const Container = styled.div`
  background-color: var(--color-grey-15);
  border: 1px solid var(--color-grey-12);
  border-radius: var(--border-radius-2xl);
  padding: 20px 30px 30px;
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

export const TextContainer = styled.div`
  column-gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 0;
  ${flexMixin}

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
  padding: 25px 0;
`;

export const CheckoutLink = styled.a`
  background-image: linear-gradient(
    to bottom,
    var(--color-green-3),
    var(--color-green-1)
  );
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-md);
  color: white;
  column-gap: 10px;
  font-size: var(--font-size-14);
  justify-content: center;
  margin: 0 auto 20px;
  max-width: 450px;
  padding: 15px;
  ${flexMixin}
  ${linkMixin}

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%), var(--box-shadow-hover);
  }
`;

export const LoginLink = styled.a`
  color: var(--color-sky-blue-2);
  display: block;
  font-size: var(--font-size-11);
  text-align: center;
  ${linkMixin}

  &:hover {
    text-decoration: underline;
  }
`;

export const BottomContainer = styled.div`
  border-top: 1px solid var(--color-grey-9);
  flex-direction: column;
  padding-top: 25px;
  row-gap: 10px;
  ${flexMixin}
`;

export const PaypalLink = styled.a`
  background-color: var(--color-yellow-1);
  border-radius: var(--border-radius-full);
  display: flex;
  padding: 10px 25px;

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 5%);
  }
`;
