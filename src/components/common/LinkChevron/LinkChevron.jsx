import Link from 'next/link';
import CircleChevronRight from '../../icons/CircleChevronRight';
import * as Styled from './styles';

export default function LinkChevron({ href, linkText, fontSize, iconSize }) {
  return (
    <Link href={href} passHref>
      <Styled.Link $fontSize={fontSize}>
        {linkText}
        <CircleChevronRight width={iconSize} height={iconSize} />
      </Styled.Link>
    </Link>
  );
}
