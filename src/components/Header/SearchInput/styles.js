import styled from 'styled-components';

export const Form = styled.form`
  justify-self: center;
  position: relative;
  width: 100%;

  &::after {
    border-radius: 9px;
    box-shadow: 0 0 0 3px var(--color-orange-1);
    content: '';
    height: 100%;
    left: 0;
    opacity: ${({ isFocused }) => (isFocused ? '1' : '0')};
    pointer-events: none;
    position: absolute;
    transition: opacity 150ms ease-in-out;
    width: 100%;
  }

  @media screen and (min-width: 545px) {
    max-width: 420px;
  }

  @media screen and (max-width: 929px) {
    grid-column: 1/3;
    grid-row: 2/3;
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  color: var(--color-grey-2);
  font-size: 0.94rem;
  font-weight: 500;
  min-height: 44px;
  outline: none;
  padding-left: 10px;
  padding-right: 65px;
  width: 100%;

  &::placeholder {
    font-size: 0.94rem;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: var(--color-orange-1);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-left: 3px;
  position: absolute;
  right: 0;
  top: 0;
  width: 55px;
`;
