import { useId } from 'react';
import styled from 'styled-components';

export default function Quantity({
  isDisabled = false,
  quantity,
  onChangeQuantity,
}) {
  const id = useId();

  return (
    <Container>
      <Label htmlFor={id}>Quantity:</Label>
      <Select
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
      </Select>
      <Arrows isDisabled={isDisabled} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;
  position: relative;
  width: 55px;
`;

const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const Select = styled.select`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border: 1px solid ${({ theme }) => theme.colors.stone[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 2px 3px rgb(17 17 17 / 10%);
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 500;
  padding: 7px 25px 7px 13px;
  width: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Arrows = styled.span`
  --arrow-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.stone[300] : theme.colors.stone[500]};
  --arrow-size: 5px;

  height: 100%;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 25px;

  &::before,
  &::after {
    border-left: var(--arrow-size) solid transparent;
    border-right: var(--arrow-size) solid transparent;
    content: '';
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  &::before {
    border-bottom: var(--arrow-size) solid var(--arrow-color);
    top: 10px;
  }

  &::after {
    border-top: var(--arrow-size) solid var(--arrow-color);
    bottom: 10px;
  }
`;
