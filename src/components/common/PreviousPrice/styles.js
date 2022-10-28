import styled from 'styled-components';

export const Text = styled.span`
  color: var(--color-grey-7);
  font-size: ${({ $fontSize }) => $fontSize};
  text-decoration: line-through;
`;

export const SmallText = styled.span`
  font-size: 0.9em;
  font-weight: var(--font-weight-semibold);
`;
