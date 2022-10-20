import styled from 'styled-components';

export const Link = styled.a`
  background: linear-gradient(to top, #858484, #a0a0a0);
  border-radius: 6px;
  box-shadow: var(--shadow-button);
  color: white;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  padding: ${({ padding }) => padding};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(to top, #858484, #737373);
    box-shadow: var(--shadow-button-hover);
  }
`;
