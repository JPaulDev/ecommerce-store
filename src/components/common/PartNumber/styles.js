import styled from 'styled-components';

export const PartNumber = styled.span`
  color: var(--color-blue-4);
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`;
