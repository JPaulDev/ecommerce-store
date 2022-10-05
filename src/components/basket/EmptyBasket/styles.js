import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid var(--color-grey-9);
  display: flex;
  flex-direction: column;
  padding: 150px 20px;

  a {
    box-shadow: 0 3px 3px 0 rgb(217 217 217 / 70%);
    margin-top: 20px;
  }
`;

export const Heading = styled.h2`
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 11px 30px;
`;
