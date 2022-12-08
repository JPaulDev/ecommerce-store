import styled from 'styled-components';

export const Text = styled.span`
  color: var(--color-sky-blue-2);
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`;
