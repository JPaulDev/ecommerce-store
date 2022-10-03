import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 8px;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    row-gap: 8px;
    padding: 0 20px;
  }

  @media screen and (max-width: 1310px) {
    padding: 0 10px;
  }
`;
