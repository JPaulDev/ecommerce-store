import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-9);
  padding: 50px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-family: 'Uni Sans Book', sans-serif;
    font-size: 2rem;
    margin: 10px 0;
  }

  p {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 600px) {
    padding: 100px;
  }
`;
