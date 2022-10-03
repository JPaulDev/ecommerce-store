import styled from 'styled-components';

export const List = styled.ul`
  background-color: rgb(83 83 83 / 80%);
  border-bottom: 1px solid var(--color-grey-7);
  display: flex;
  justify-content: space-around;
  list-style: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 714px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: none;
  border-bottom: ${({ isActive }) =>
    isActive && '3px solid var(--color-orange-1)'};
  color: #b9b9b9;
  cursor: pointer;
  font-family: 'Uni Sans', sans-serif;
  font-size: 0.83rem;
  font-weight: 600;
  padding: 16px 20px 12px;
  transform: ${({ isActive }) => isActive && 'scale(1.06)'};

  &:hover {
    color: #e5e7eb;
  }

  && {
    color: ${({ isActive }) => isActive && 'white'};
  }
`;
