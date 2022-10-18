import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 10px;

  @media screen and (min-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 840px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1110px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1310px) {
    padding: 0 10px;
  }
`;
