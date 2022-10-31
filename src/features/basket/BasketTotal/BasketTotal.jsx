import { useSelector } from 'react-redux';
import usePrice from '../../../lib/hooks/usePrice';
import { selectBasketSubtotal } from '../basketSlice';
import { Price } from '../../../components/product';

export default function BasketTotal() {
  const subtotal = useSelector(selectBasketSubtotal);
  const delivery = 4.99;

  const { price } = usePrice({
    price: subtotal + delivery,
    currencyCode: 'GBP',
  });

  return (
    <>
      <span>
        <strong>Total</strong>
        (including VAT)
      </span>
      <Price fontSize={26} fontWeight="medium">
        {price}
      </Price>
    </>
  );
}
