import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid var(--color-grey-12);
  display: flex;
  flex-direction: column;
  padding: 150px 20px;

  a {
    margin-top: 20px;
  }
`;

export const Heading = styled.h2`
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-22);
  font-weight: var(--font-weight-semibold);
  padding: 10px 30px;
`;
