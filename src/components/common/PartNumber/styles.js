import styled from 'styled-components';

export const PartNumber = styled.span`
  color: var(--color-blue-1);
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  text-transform: uppercase;
`;
