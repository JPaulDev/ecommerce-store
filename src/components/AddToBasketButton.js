import styled from 'styled-components';

const AddToBasketButton = styled.button`
  background: linear-gradient(to top, #3b7739, #55a952);
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgb(213 217 217 / 70%);
  color: white;
  cursor: pointer;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  margin-top: 8px;
  min-height: 40px;
  text-transform: uppercase;
  width: ${({ $width }) => $width};

  &:disabled {
    background: var(--color-grey-12);
    color: rgb(255 255 255 / 90%);
    cursor: initial;
  }

  &:not(:disabled):hover {
    background: linear-gradient(to top, #326830, #4a9b47);
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;

export default AddToBasketButton;
