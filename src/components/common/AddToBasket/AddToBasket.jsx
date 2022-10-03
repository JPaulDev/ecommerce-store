import * as Styled from './styles';

export default function AddToBasket({
  isDisabled,
  onAddProduct,
  width,
  fontSize,
}) {
  return (
    <Styled.Button
      type="button"
      disabled={isDisabled}
      $width={width}
      $fontSize={fontSize}
      onClick={onAddProduct}
    >
      Add To Basket
    </Styled.Button>
  );
}
