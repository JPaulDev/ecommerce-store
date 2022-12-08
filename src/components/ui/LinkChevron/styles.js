import styled from 'styled-components';

export const Link = styled.a`
  align-items: center;
  color: var(--color-grey-4);
  display: flex;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;

  svg {
    margin-left: 10px;
  }
`;
