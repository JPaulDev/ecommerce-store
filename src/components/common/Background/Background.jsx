import Image from 'next/future/image';
import * as Styled from './styles';

export default function Background({ background }) {
  return (
    <Styled.Wrapper>
      <Styled.Background>
        {background && <Image src={background} alt="" priority="true" />}
      </Styled.Background>
    </Styled.Wrapper>
  );
}
