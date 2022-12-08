import * as Styled from './styles';

export default function AddToBasket({
  isDisabled = false,
  onAddProduct,
  width,
  fontSize = 16,
}) {
  return (
    <Styled.Button
      type="button"
      disabled={isDisabled}
      $width={width}
      $fontSize={
        typeof fontSize === 'number' ? `var(--font-size-${fontSize})` : fontSize
      }
      onClick={onAddProduct}
    >
      Add To Basket
    </Styled.Button>
  );
}
