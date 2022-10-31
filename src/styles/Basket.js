import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-12);
  padding: 25px 15px;

  @media screen and (min-width: 600px) {
    padding: 25px 40px;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    column-gap: 35px;
    grid-template-columns: 1fr 360px;
  }
`;

export const Heading = styled.h2`
  background-color: var(--color-grey-15);
  border-bottom: 1px solid var(--color-grey-12);
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-22);
  font-weight: var(--font-weight-semibold);
  padding: 10px 30px;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 25px;
`;

export const RightContainer = styled.div`
  align-self: start;
  position: sticky;
  top: 10px;

  @media screen and (max-width: 899px) {
    margin-top: 25px;
  }
`;
