import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-12);
  padding: 15px;

  @media screen and (min-width: 600px) {
    padding: 15px 25px;
  }
`;

export const Section = styled.section`
  margin-top: 20px;
`;
