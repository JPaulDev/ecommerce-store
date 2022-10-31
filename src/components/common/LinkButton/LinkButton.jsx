import Link from 'next/link';
import * as Styled from './styles';

export default function LinkButton({ children, href, padding }) {
  return (
    <Link href={href} passHref>
      <Styled.Link padding={padding}>{children}</Styled.Link>
    </Link>
  );
}
