import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1 / 3;

  @media screen and (min-width: 1050px) {
    grid-column: initial;
    margin-right: 50px;
  }
`;

export const List = styled.ul`
  background-color: var(--color-grey-11);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  list-style: none;
  padding: 10px;

  @media screen and (min-width: 1050px) {
    max-width: 135px;
    background: none;
    margin: 0 auto 20px;
    padding: 12px 0;
  }
`;

export const ListItem = styled.li`
  background-color: var(--color-grey-6);
  border-radius: 6px;
  display: grid;
  height: 37px;
  place-items: center;
  width: 60px;

  @media screen and (min-width: 1050px) {
    background-color: var(--color-grey-11);
  }
`;
