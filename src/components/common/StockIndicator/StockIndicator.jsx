import { Clipboard } from '../../icons';
import * as Styled from './styles';

export default function StockIndicator({ stockStatus, marginTop }) {
  let text = 'In Stock';
  let title = 'Item is in stock';
  let color = '#3ba936';

  if (stockStatus === 1) {
    text = 'Low Stock';
    title = 'Item is nearly sold out';
    color = '#fb923c';
  } else if (stockStatus === 0) {
    text = 'Out of Stock';
    title = 'Item is out of stock';
    color = '#ef4444';
  }

  return (
    <Styled.StockIndicator $color={color} title={title} marginTop={marginTop}>
      <Clipboard width={18} height={18} fill="var(--color-grey-8)" />
      {text}
    </Styled.StockIndicator>
  );
}
