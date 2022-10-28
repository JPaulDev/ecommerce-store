import styled from 'styled-components';

export const Link = styled.a`
  background: linear-gradient(to top, var(--color-grey-5), var(--color-grey-8));
  border-radius: 6px;
  box-shadow: var(--box-shadow-md);
  color: white;
  display: inline-block;
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-bold);
  padding: ${({ padding }) => padding};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(
      to top,
      var(--color-grey-6),
      var(--color-grey-5)
    );
    box-shadow: var(--box-shadow-hover);
  }
`;
