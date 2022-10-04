import { useSelector } from 'react-redux';
import usePrice from '../../../hooks/usePrice';
import { selectBasketSubtotal } from '../basketSlice';

export default function BasketSubtotal() {
  const subtotal = useSelector(selectBasketSubtotal);
  const { price } = usePrice({ price: subtotal });

  return <div>Subtotal {price}</div>;
}
