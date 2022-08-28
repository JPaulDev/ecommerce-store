import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%);
  display: flex;
  left: 50%;
  max-width: 1100px;
  position: absolute;
  transform: translateX(-50%);
  width: 96%;
`;

export const ColumnContainer = styled.div`
  flex: 1;
  padding: 30px;
`;

export const Heading = styled.h4`
  border-bottom: 1px solid var(--color-orange-1);
  color: var(--color-orange-1);
  font-size: 1.03rem;
  margin-bottom: 10px;
  padding-bottom: 7px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding-bottom: 7px;
`;

export const Link = styled.a`
  color: var(--color-grey-2);
  text-decoration: none;

  &:hover {
    color: var(--color-grey-5);
    text-decoration: underline;
  }
`;
