import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  box-shadow: var(--box-shadow-xl);
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
  margin-bottom: 10px;
  padding-bottom: 7px;
`;

export const List = styled.ul`
  list-style: none;

  li {
    padding-bottom: 7px;
  }
`;

export const Link = styled.a`
  color: var(--color-grey-2);
  text-decoration: none;

  &:hover {
    color: var(--color-grey-5);
    text-decoration: underline;
  }
`;

export const AdvertsContainer = styled.div`
  background-color: var(--color-grey-15);
  display: flex;
  flex-direction: column;
  padding: 25px;
  row-gap: 15px;

  img {
    border-radius: var(--border-radius-xl);
    box-shadow: var(--box-shadow-lg);
  }

  @media screen and (max-width: 924px) {
    display: none;
  }
`;
