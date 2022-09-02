import { forwardRef } from 'react';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import * as Styled from './styles';

const Slide = forwardRef(({ slideIndex, slide }, ref) => {
  const isMatch = useMediaQuery('(min-width: 1000px)');

  return (
    <Styled.Container
      ref={ref}
      background={slide.background}
      data-testid={`slide-${slideIndex + 1}`}
    >
      <Styled.LeftContainer>
        <Styled.LeftLogo src={slide.leftLogo} alt={slide.leftLogoAlt} />
        <Styled.LeftHeading>{slide.leftHeading}</Styled.LeftHeading>
        <Styled.Text>{slide.leftText}</Styled.Text>
      </Styled.LeftContainer>
      <Styled.CenterImage src={slide.centerImage} alt={slide.centerImageAlt} />
      {isMatch && (
        <Styled.RightContainer textColor={slide.textColor}>
          <Styled.RightHeading>
            {slide.rightHeading}
            <Styled.RightLogo src={slide.rightLogo} alt={slide.rightLogoAlt} />
          </Styled.RightHeading>
          <Styled.List>
            {slide.rightText.map((text) => (
              <Styled.ListItem key={text}>{text}</Styled.ListItem>
            ))}
          </Styled.List>
        </Styled.RightContainer>
      )}
    </Styled.Container>
  );
});

export default Slide;
