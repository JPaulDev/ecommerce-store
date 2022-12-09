import Link from 'next/link';
import * as Styled from './styles';

export default function LinkButton({ children, href }) {
  return (
    <Link href={href} passHref>
      <Styled.Link>{children}</Styled.Link>
    </Link>
  );
}
