import { useId } from 'react';
import * as Styled from './styles';

export default function Quantity({
  isDisabled = false,
  quantity,
  onChangeQuantity,
}) {
  const id = useId();

  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>Quantity:</Styled.Label>
      <Styled.Select
        id={id}
        name="quantity"
        disabled={isDisabled}
        value={quantity}
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
