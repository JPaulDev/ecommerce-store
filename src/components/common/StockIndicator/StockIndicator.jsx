import { Clipboard } from '../../icons';
import * as Styled from './styles';

export default function StockIndicator({ stock = 0, marginTop }) {
  let text = 'Out of Stock';
  let title = 'Item is out of stock';
  let color = '#ef4444';

  if (stock <= 30 && stock > 0) {
    text = 'Low Stock';
    title = 'Item is nearly sold out';
    color = '#fb923c';
  } else if (stock > 30) {
    text = 'In Stock';
    title = 'Item is in stock';
    color = '#3ba936';
  }

  return (
    <Styled.StockIndicator $color={color} title={title} marginTop={marginTop}>
      <Clipboard width={18} height={18} fill="var(--color-grey-8)" />
      {text}
    </Styled.StockIndicator>
  );
}
