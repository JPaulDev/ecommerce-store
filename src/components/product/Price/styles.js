import styled from 'styled-components';

export const Text = styled.span`
  color: var(--color-blue-4);
  font-size: ${({ $fontSize }) => `var(--font-size-${$fontSize})`};
  font-weight: ${({ $fontWeight }) => `var(--font-weight-${$fontWeight})`};

  span {
    font-size: 0.7em;
  }
`;
