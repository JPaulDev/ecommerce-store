import styled from 'styled-components';

export const Link = styled.a`
  background-image: linear-gradient(
    to bottom,
    var(--color-grey-7),
    var(--color-grey-4)
  );
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-md);
  color: white;
  display: inline-block;
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-bold);
  padding: ${({ padding }) => padding};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%), var(--box-shadow-hover);
  }
`;
