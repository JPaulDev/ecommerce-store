import styled from 'styled-components';

export const Select = styled.select`
  background-color: #f2f2f2;
  border: 1px solid #d2d6d6;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgb(17 17 17 / 10%);
  font-size: 0.88rem;
  font-weight: 500;
  margin-top: 8px;
  padding: 3px;
  width: 55px;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:not(:disabled):hover {
    background-color: #e3e6e6;
  }
`;
