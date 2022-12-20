import Link from 'next/link';
import styled, { css } from 'styled-components';

export default function LinkButton({
  children,
  href,
  color = 'black',
  ...rest
}) {
  return (
    <Link href={href} passHref>
      <StyledLink $color={color} {...rest}>
        {children}
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  display: inline-block;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: 700;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;

  ${({ theme, $color }) => {
    const [color, shade] = $color.split('-');

    if (color && shade) {
      return css`
        border: 2px solid ${theme.colors[color][shade]};
        color: ${theme.colors[color][shade]};
      `;
    }

    return css`
      border: 2px solid ${$color};
      color: ${$color};
    `;
  }}

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 5%);
  }
`;
