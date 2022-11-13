import styled from 'styled-components';

export const Text = styled.div`
  color: var(--color-sky-blue-2);
  font-size: var(--font-size-11);
  margin-top: 5px;

  strong {
    text-transform: uppercase;
  }

  @media screen and (min-width: 800px) {
    margin-top: 0;
  }
`;
