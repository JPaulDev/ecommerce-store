import Image from 'next/future/image';
import image from '../../public/images/404/404-error.webp';
import * as Styled from '../styles/404';

export default function NotFound() {
  return (
    <Styled.Container>
      <Image src={image} alt="" quality={85} priority="true" />
      <h1>Not Found</h1>
      <p>
        The requested page doesn&lsquo;t exist or you don&lsquo;t have access to
        it.
      </p>
    </Styled.Container>
  );
}
