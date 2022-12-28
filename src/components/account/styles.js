import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 10px;

  > label {
    font-size: ${({ theme }) => theme.fontSizes[15]};
    font-weight: 500;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    gap: 15px 25px;
    grid-template-columns: 110px 1fr;

    > label {
      text-align: right;
    }

    > p {
      grid-column: 2 / 3;
    }
  }
`;

export const inputStyles = css`
  border: 1px solid
    ${({ theme, isInvalid }) =>
      isInvalid ? theme.colors.red[600] : theme.colors.stone[400]};
  outline: none;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes[15]};

  &:focus {
    --main-color: ${({ theme }) => theme.colors.blue[500]};

    border: 1px solid var(--main-color);
    box-shadow: 0 0 0 1px var(--main-color);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  margin-top: 10px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0;
    grid-column: 2 / 3;
  }
`;
