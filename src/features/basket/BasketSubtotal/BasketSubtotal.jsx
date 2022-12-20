import { useSelector } from 'react-redux';
import { usePrice } from '../../../hooks';
import { selectBasketSubtotal } from '../basketSlice';

export default function BasketSubtotal() {
  const subtotal = useSelector(selectBasketSubtotal);
  const { price } = usePrice({ price: subtotal, currencyCode: 'GBP' });

  return <span className="text">Subtotal {price}</span>;
}
