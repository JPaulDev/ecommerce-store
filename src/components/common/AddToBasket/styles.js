import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(to top, #3b7739, #55a952);
  border-radius: 6px;
  box-shadow: var(--shadow-button);
  color: white;
  cursor: pointer;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  margin-top: 8px;
  padding: 12px 0;
  text-transform: uppercase;
  width: ${({ $width }) => $width};

  &:disabled {
    background: var(--color-grey-12);
    color: rgb(255 255 255 / 90%);
    cursor: initial;
    box-shadow: none;
    pointer-events: none;
  }

  &:not(:disabled):hover {
    background: linear-gradient(to top, #326830, #4a9b47);
    box-shadow: var(--shadow-button-hover);
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;
