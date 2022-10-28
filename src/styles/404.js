import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-12);
  padding: 50px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-family: 'Uni Sans Book', sans-serif;
    font-size: var(--font-size-34);
    margin: 10px 0;
  }

  p {
    font-size: var(--font-size-20);
  }

  @media screen and (min-width: 600px) {
    padding: 100px;
  }
`;
