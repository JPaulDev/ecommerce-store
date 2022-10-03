import { forwardRef } from 'react';
import Image from 'next/future/image';
import * as Styled from './styles';

function Slide({ slideIndex, slide = {} }, ref) {
  return (
    <Styled.Container ref={ref} data-testid={`slide-${slideIndex + 1}`}>
      <Styled.Background>
        <Image src={slide.background} alt="" priority="true" quality={90} />
      </Styled.Background>
      <Styled.LeftContainer>
        <Styled.LeftLogoWrapper>
          <Image src={slide.leftLogo} alt={slide.leftLogoAlt} />
        </Styled.LeftLogoWrapper>
        <Styled.LeftHeading>{slide.leftHeading}</Styled.LeftHeading>
        <Styled.Text>{slide.leftText}</Styled.Text>
      </Styled.LeftContainer>
      <Styled.CenterImageWrapper>
        <Image
          src={slide.centerImage}
          alt={slide.centerImageAlt}
          quality={90}
        />
      </Styled.CenterImageWrapper>
      <Styled.RightContainer textColor={slide.textColor}>
        <Styled.RightHeading>
          {slide.rightHeading}
          <Image src={slide.rightLogo} alt={slide.rightLogoAlt} />
        </Styled.RightHeading>
        <Styled.List>
          {slide.rightText?.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </Styled.List>
      </Styled.RightContainer>
    </Styled.Container>
  );
}

export default forwardRef(Slide);
