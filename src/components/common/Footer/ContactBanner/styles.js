import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-blue-3);
  display: flex;
  justify-content: center;
  padding: 15px 0;

  & :last-child {
    border: 0;
  }
`;

export const Link = styled.a`
  align-items: center;
  border-right: 2px solid white;
  color: white;
  column-gap: 10px;
  display: flex;
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-semibold);
  padding: 0 25px;
  text-decoration: none;

  &:hover {
    color: var(--color-grey-11);
  }
`;
