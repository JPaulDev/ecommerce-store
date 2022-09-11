import styled from 'styled-components';

export const Link = styled.a`
  align-items: center;
  color: var(--color-grey-8);
  display: flex;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  i {
    background-color: var(--color-grey-8);
    border-radius: 50%;
    margin-left: 10px;
  }
`;
