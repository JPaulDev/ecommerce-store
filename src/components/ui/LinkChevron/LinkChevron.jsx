import Link from 'next/link';
import styled from 'styled-components';
import { CircleChevronRight } from '../../icons';

export default function LinkChevron({
  children,
  href,
  fontSize = 16,
  iconSize = 20,
  ...rest
}) {
  return (
    <Link href={href} passHref>
      <StyledLink $fontSize={fontSize} {...rest}>
        {children}
        <CircleChevronRight width={iconSize} height={iconSize} />
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.stone[600]};
  display: flex;
  font-size: ${({ theme, $fontSize }) => theme.fontSizes[$fontSize]};
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  column-gap: 10px;
`;
