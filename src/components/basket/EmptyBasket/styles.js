import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;
  background-color: white;
  border: 1px solid var(--color-grey-12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  padding: 30px;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-32);
  font-weight: var(--font-weight-semibold);
  margin: 10px 0;
`;
