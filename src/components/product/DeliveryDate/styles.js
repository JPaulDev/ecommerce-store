import styled from 'styled-components';

export const Text = styled.div`
  color: var(--color-blue-4);
  font-size: var(--font-size-11);
  margin-top: 5px;

  strong {
    text-transform: uppercase;
  }

  @media screen and (min-width: 800px) {
    margin-top: 0;
  }
`;
