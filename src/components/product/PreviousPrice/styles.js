import styled from 'styled-components';

export const Text = styled.span`
  color: var(--color-grey-7);
  font-size: ${({ $fontSize }) => `var(--font-size-${$fontSize})`};
  text-decoration: line-through;

  span {
    font-size: 0.9em;
    font-weight: var(--font-weight-semibold);
  }
`;
