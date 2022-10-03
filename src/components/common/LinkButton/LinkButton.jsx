import Link from 'next/link';
import * as Styled from './styles';

export default function LinkButton({ href, linkText, padding }) {
  return (
    <Link href={href} passHref>
      <Styled.Link padding={padding}>{linkText}</Styled.Link>
    </Link>
  );
}
