import styled from 'styled-components';

export const Text = styled.span`
  color: var(--color-blue-1);
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontSize }) => $fontSize};
`;

export const SmallText = styled.span`
  font-size: 0.7em;
`;
