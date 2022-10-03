import { useSelector } from 'react-redux';
import { selectBasketSubtotal } from '../basketSlice';
import usePrice from '../../../hooks/usePrice';

export default function BasketSubtotal() {
  const subtotal = useSelector(selectBasketSubtotal);
  const { price } = usePrice({ price: subtotal });

  return <div>Subtotal {price}</div>;
}
