import MaterialSymbol from '../MaterialSymbol';
import * as Styled from './styles';

export default function StockIndicator({ stock, marginTop }) {
  let text = 'In Stock';
  let title = 'Item is in stock';
  let color = '#3ba936';

  if (stock <= 30 && stock > 0) {
    text = 'Low Stock';
    title = 'Item is nearly sold out';
    color = '#fb923c';
  } else if (stock === 0) {
    text = 'Out of Stock';
    title = 'Item is out of stock';
    color = '#ef4444';
  }

  return (
    <Styled.StockIndicator $color={color} title={title} marginTop={marginTop}>
      <MaterialSymbol iconColor="var(--color-grey-8)" iconSize="18px">
        inventory
      </MaterialSymbol>
      {text}
    </Styled.StockIndicator>
  );
}
