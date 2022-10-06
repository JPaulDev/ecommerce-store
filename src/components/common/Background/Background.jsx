import Image from 'next/future/image';
import basket from '../../../../public/images/page-backgrounds/basket.webp';
import home from '../../../../public/images/page-backgrounds/home.webp';
import * as Styled from './styles';

const backgrounds = { home, basket };

export default function Background({ page }) {
  return (
    <Styled.Wrapper>
      <Styled.Background>
        {page && (
          <Image src={backgrounds[page]} alt="" priority="true" quality={85} />
        )}
      </Styled.Background>
    </Styled.Wrapper>
  );
}
