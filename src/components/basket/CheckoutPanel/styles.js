import styled, { css } from 'styled-components';

const borderMixin = css`
  border-left: 1px solid var(--color-grey-12);
  border-right: 1px solid var(--color-grey-12);
`;

const flexMixin = css`
  align-items: center;
  display: flex;
`;

const linkMixin = css`
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;
`;

export const TopContainer = styled.div`
  background-color: var(--color-green-5);
  border-top: 1px solid var(--color-grey-12);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 30px;
  ${borderMixin}
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
  padding: 20px 0 10px;
`;

export const CheckoutLink = styled.a`
  background-image: linear-gradient(
    to bottom,
    var(--color-green-3),
    var(--color-green-1)
  );
  border-radius: 6px;
  box-shadow: var(--box-shadow-md);
  color: white;
  column-gap: 10px;
  font-size: var(--font-size-14);
  justify-content: center;
  margin: 0 auto 20px;
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
  background-color: var(--color-green-5);
  border-bottom: 1px solid var(--color-grey-12);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid var(--color-grey-9);
  flex-direction: column;
  padding: 20px 30px 30px;
  ${borderMixin}
  ${flexMixin}

  img {
    margin-top: 5px;
  }
`;

export const PaypalLink = styled.a`
  background-color: var(--color-yellow-1);
  border-radius: 100px;
  display: flex;
  margin: 5px 0;
  padding: 10px 25px;

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 5%);
  }
`;
