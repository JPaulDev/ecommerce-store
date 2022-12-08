import styled from 'styled-components';

export const Button = styled.button`
  background-image: linear-gradient(
    to bottom,
    var(--color-green-3),
    var(--color-green-1)
  );
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-md);
  color: white;
  cursor: pointer;
  font-size: ${({ $fontSize }) => `var(--font-size-${$fontSize})`};
  font-weight: var(--font-weight-bold);
  margin-top: 8px;
  padding: 13px;
  text-transform: uppercase;
  width: ${({ $width }) => $width};

  &:disabled {
    background: var(--color-grey-10);
    cursor: initial;
    box-shadow: none;
    pointer-events: none;
  }

  &:not(:disabled):hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%), var(--box-shadow-hover);
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;
