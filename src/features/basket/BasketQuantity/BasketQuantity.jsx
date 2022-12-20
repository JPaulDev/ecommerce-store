import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectBasketQuantity } from '../basketSlice';

const Quantity = styled.span`
  --size: 25px;

  height: var(--size);
  width: var(--size);
  align-items: center;
  background-color: ${({ theme }) => theme.colors.sky[700]};
  border: 1px solid white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  color: white;
  display: flex;
  font-weight: 600;
  justify-content: center;
  left: -10px;
  position: absolute;
  top: -5px;

  @media screen and (min-width: 640px) {
    top: 5px;
  }
`;

export default function BasketQuantity() {
  const quantity = useSelector(selectBasketQuantity);

  return quantity ? <Quantity>{quantity}</Quantity> : null;
}
