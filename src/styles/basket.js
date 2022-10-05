import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-9);
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
  background-color: var(--color-grey-6);
  border-bottom: 1px solid var(--color-grey-9);
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 11px 30px;

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
