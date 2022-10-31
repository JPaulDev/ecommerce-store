import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid var(--color-grey-12);
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-18);
  justify-content: center;
  min-height: 600px;
  padding: 30px;
  text-align: center;

  img {
    height: auto;
    max-width: 100%;
  }

  h1 {
    font-family: 'Uni Sans Book', sans-serif;
    font-size: var(--font-size-32);
    margin: 10px 0;
  }
`;
