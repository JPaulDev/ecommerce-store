import { useSelector } from 'react-redux';
import { selectBasketSubtotal } from './basketSlice';
import usePrice from '../../hooks/usePrice';

export default function BasketLinkSubtotal() {
  const subtotal = useSelector(selectBasketSubtotal);
  const { price } = usePrice({ price: subtotal });

  return <span>Subtotal {price}</span>;
}
