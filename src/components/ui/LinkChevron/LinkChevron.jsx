import Link from 'next/link';
import { CircleChevronRight } from '../../icons';
import * as Styled from './styles';

export default function LinkChevron({
  children,
  href,
  fontSize = 16,
  iconSize = 20,
}) {
  return (
    <Link href={href} passHref>
      <Styled.Link
        $fontSize={
          typeof fontSize === 'number'
            ? `var(--font-size-${fontSize})`
            : fontSize
        }
      >
        {children}
        <CircleChevronRight width={iconSize} height={iconSize} />
      </Styled.Link>
    </Link>
  );
}
