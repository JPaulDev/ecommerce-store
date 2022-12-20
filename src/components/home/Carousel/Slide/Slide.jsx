import Image from 'next/future/image';
import { forwardRef } from 'react';
import * as Styled from './styles';

function Slide({ slideIndex, slide }, ref) {
  return (
    <Styled.Container ref={ref} data-testid={`slide-${slideIndex + 1}`}>
      <Styled.Background>
        <Image src={slide.background} alt="" priority="true" quality={90} />
      </Styled.Background>

      <Styled.LeftContainer>
        <Image src={slide.leftLogo} alt={slide.leftLogoAlt} />
        <h2>{slide.leftHeading}</h2>
        <p>{slide.leftText}</p>
      </Styled.LeftContainer>

      <Image
        className="center-image"
        src={slide.centerImage}
        alt={slide.centerImageAlt}
        quality={90}
      />

      <Styled.RightContainer textColor={slide.textColor}>
        <h2>
          {slide.rightHeading}
          <Image src={slide.rightLogo} alt={slide.rightLogoAlt} />
        </h2>
        <ul>
          {slide.rightText.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </Styled.RightContainer>
    </Styled.Container>
  );
}

export default forwardRef(Slide);
