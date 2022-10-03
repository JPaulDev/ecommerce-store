import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 10;
`;

export const Button = styled.button`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 1px 4px 4px rgb(0 0 0 / 50%);
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  user-select: none;
  width: 32px;
`;
