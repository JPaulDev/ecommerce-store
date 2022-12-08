import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  position: relative;
  width: 55px;
`;

export const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const Select = styled.select`
  appearance: none;
  background-color: var(--color-grey-14);
  border: 1px solid var(--color-grey-10);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 2px 3px rgb(17 17 17 / 10%);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  padding: 6px 25px 6px 10px;
  width: 100%;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:not(:disabled):hover {
    background-color: var(--color-grey-12);
  }
`;

export const Arrows = styled.span`
  --arrow-color: ${({ isDisabled }) =>
    isDisabled ? 'var(--color-grey-10)' : 'var(--color-grey-4)'};
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
    top: 9px;
  }

  &::after {
    border-top: var(--arrow-size) solid var(--arrow-color);
    bottom: 9px;
  }
`;
