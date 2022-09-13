import { useId } from 'react';
import * as Styled from './styles';

export default function QuantityDropdown({
  quantity,
  isDisabled,
  onChangeQuantity,
}) {
  const id = useId();

  return (
    <Styled.Container>
      <label htmlFor={id} hidden>
        Quantity
      </label>
      <Styled.Select
        id={id}
        name="quantity"
        value={quantity}
        disabled={isDisabled}
        onChange={onChangeQuantity}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </Styled.Select>
      <Styled.Arrows isDisabled={isDisabled} />
    </Styled.Container>
  );
}
