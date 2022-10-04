import Link from 'next/link';
import { MobilePhone, Headset } from '../../../icons';
import * as Styled from './styles';

export default function ContactBanner() {
  return (
    <Styled.Container>
      <Link href="/contact" passHref>
        <Styled.Link>
          <MobilePhone width={20} height={27} />
          01782-444455
        </Styled.Link>
      </Link>
      <Link href="/contact" passHref>
        <Styled.Link>
          <Headset width={25} height={25} />
          Live Chat
        </Styled.Link>
      </Link>
    </Styled.Container>
  );
}
