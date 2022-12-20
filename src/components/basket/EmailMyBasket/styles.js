import styled, { css } from 'styled-components';
import { containerMixin } from '../styles';

export const Container = styled.div`
  --input-border-radius: ${({ theme }) => theme.borderRadius.lg};

  ${containerMixin}
  font-size: ${({ theme }) => theme.fontSizes[12]};
  margin-top: 25px;

  button {
    border-bottom-right-radius: var(--input-border-radius);
    border-top-right-radius: var(--input-border-radius);
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.sky[600]},
      ${({ theme }) => theme.colors.sky[700]}
    );
    box-shadow: ${({ theme }) => theme.boxShadows.md};
    color: white;
    cursor: pointer;
    font-weight: 700;
    padding: 11px 15px;
    text-transform: uppercase;
    width: 30%;

    &:hover {
      box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%),
        ${({ theme }) => theme.boxShadows.hover};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.sky[700]};
    font-weight: 700;
    margin-left: 5px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const inputStyles = css`
  border-bottom-left-radius: var(--input-border-radius);
  border-top-left-radius: var(--input-border-radius);
  border: 1px solid ${({ theme }) => theme.colors.stone[400]};
  padding: 10px;
  outline: none;
  width: 70%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.stone[700]};
  }
`;

export const CheckboxContainer = styled.div`
  align-items: center;
  display: flex;
  column-gap: 15px;
  font-size: ${({ theme }) => theme.fontSizes[13]};
  margin: 20px 0 15px;

  > input {
    --size: 20px;

    width: var(--size);
    height: var(--size);
    flex-shrink: 0;
  }
`;
