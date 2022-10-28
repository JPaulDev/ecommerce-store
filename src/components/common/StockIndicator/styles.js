import styled from 'styled-components';

export const StockIndicator = styled.div`
  align-items: center;
  color: ${({ $color }) => $color};
  column-gap: 5px;
  display: flex;
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-bold);
  margin-top: ${({ marginTop }) => marginTop};
  text-transform: uppercase;
`;
