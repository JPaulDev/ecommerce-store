import styled from 'styled-components';

export const StockIndicator = styled.div`
  align-items: center;
  color: ${({ $color }) => $color};
  column-gap: 5px;
  display: flex;
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: ${({ marginTop }) => marginTop};
  text-transform: uppercase;
`;
