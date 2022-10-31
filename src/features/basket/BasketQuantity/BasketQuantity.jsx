import { useSelector } from 'react-redux';
import { selectBasketQuantity } from '../basketSlice';
import * as Styled from './styles';

export default function BasketQuantity() {
  const quantity = useSelector(selectBasketQuantity);

  if (quantity) {
    return <Styled.Quantity>{quantity}</Styled.Quantity>;
  }

  return null;
}
