import styled from 'styled-components';

export const Form = styled.form`
  justify-self: center;
  position: relative;
  width: 100%;
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
