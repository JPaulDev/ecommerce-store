import Image from 'next/future/image';
import basket from '../../../../public/images/page-backgrounds/basket.webp';
import home from '../../../../public/images/page-backgrounds/home.webp';
import * as Styled from './styles';

const backgrounds = { home, basket };

export default function Background({ backgroundImage }) {
  return (
    <Styled.Wrapper>
      <Styled.Background>
        {backgroundImage && (
          <Image
            src={backgrounds[backgroundImage]}
            alt=""
            quality={85}
            priority="true"
          />
        )}
      </Styled.Background>
    </Styled.Wrapper>
  );
}
