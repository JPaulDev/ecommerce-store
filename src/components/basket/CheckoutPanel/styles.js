import styled, { css } from 'styled-components';
import { containerMixin } from '../styles';

const linkMixin = css`
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Container = styled.div`
  ${containerMixin}
`;

export const TextContainer = styled.div`
  column-gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  display: flex;

  strong {
    font-size: ${({ theme }) => theme.fontSizes[20]};
    margin-right: 5px;
  }
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[14]};
`;

export const InnerContainer = styled.div`
  --border-color: ${({ theme }) => theme.colors.stone[300]};

  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  margin: 15px 0;
  padding: 30px 0;
`;

export const CheckoutLink = styled.a`
  ${linkMixin}
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.green[500]},
    ${({ theme }) => theme.colors.green[700]}
  );
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  color: white;
  column-gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  justify-content: center;
  margin: 0 auto 20px;
  max-width: 450px;
  padding: 15px;
  align-items: center;
  display: flex;

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%),
      ${({ theme }) => theme.boxShadows.hover};
  }
`;

export const LoginLink = styled.a`
  ${linkMixin}
  color: ${({ theme }) => theme.colors.sky[700]};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[11]};
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const BottomContainer = styled.div`
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  display: flex;
`;

export const PaypalLink = styled.a`
  background-color: ${({ theme }) => theme.colors.yellow[400]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 10px 25px;

  > svg {
    display: block;
  }

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 5%);
  }
`;
