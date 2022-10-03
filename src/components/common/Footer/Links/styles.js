import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0 20px;

  li {
    padding: 7px 0;
  }

  @media screen and (min-width: 650px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 860px) {
    padding: 0;
  }
`;

export const Link = styled.a`
  color: var(--color-grey-8);
  font-size: 0.84rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
