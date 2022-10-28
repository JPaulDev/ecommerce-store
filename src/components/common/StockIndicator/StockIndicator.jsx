import { Clipboard } from '../../icons';
import * as Styled from './styles';

export default function StockIndicator({ stockStatus, marginTop }) {
  let text = 'In Stock';
  let title = 'Item is in stock';
  let color = 'var(--color-green-5)';

  if (stockStatus === 1) {
    text = 'Low Stock';
    title = 'Item is nearly sold out';
    color = 'var(--color-orange-1)';
  } else if (stockStatus === 0) {
    text = 'Out of Stock';
    title = 'Item is out of stock';
    color = 'var(--color-red-6)';
  }

  return (
    <Styled.StockIndicator $color={color} title={title} marginTop={marginTop}>
      <Clipboard width={18} height={18} fill="var(--color-grey-4)" />
      {text}
    </Styled.StockIndicator>
  );
}
