import styled from 'styled-components';

export const Button = styled.button`
  background-image: linear-gradient(
    to top,
    var(--color-green-2),
    var(--color-green-5)
  );
  border-radius: 6px;
  box-shadow: var(--box-shadow-md);
  color: white;
  cursor: pointer;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: var(--font-weight-bold);
  margin-top: 8px;
  padding: 12px 0;
  text-transform: uppercase;
  width: ${({ $width }) => $width};

  &:disabled {
    background: var(--color-grey-10);
    cursor: initial;
    box-shadow: none;
    pointer-events: none;
  }

  &:not(:disabled):hover {
    background-image: linear-gradient(
      to top,
      var(--color-green-1),
      var(--color-green-4)
    );
    box-shadow: var(--box-shadow-hover);
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;
