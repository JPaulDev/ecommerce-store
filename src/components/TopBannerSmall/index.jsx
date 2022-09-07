import { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import trophy from '../../assets/images/top-banner-small/trophy-logo.webp';
import trustpilot from '../../assets/images/top-banner-small/trustpilot-logo.webp';
import paypal from '../../assets/images/top-banner-small/paypal-logo.webp';
import * as Styled from './styles';

const content = [
  {
    image: trophy,
    width: 119,
    height: 55,
    displayWidth: '60px',
    boldText: 'Award winning',
    text: 'Systems and customer services',
  },
  {
    image: trustpilot,
    width: 121,
    height: 56,
    displayWidth: '73px',
    boldText: '4.8 stars on Trustpilot',
    text: 'From over 30,000 customer reviews',
  },
  {
    image: paypal,
    width: 167,
    height: 56,
    displayWidth: '80px',
    boldText: '0% interest up to 4 months',
    text: 'Minimum spend applies from £99',
  },
];

export default function TopBannerSmall() {
  const [slideIndex, setSlideIndex] = useState(1);
  const isMatch = useMediaQuery('(min-width: 1000px)');

  useEffect(() => {
    let timeout;
    const nextSlide = (slideIndex + 1) % content.length;

    if (!isMatch) {
      timeout = setTimeout(() => {
        setSlideIndex(nextSlide);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [isMatch, slideIndex]);

  return (
    <Styled.Container>
      {content.map((item, index) => (
        <Styled.InnerContainer
          key={item.text}
          isActive={index === slideIndex}
          data-testid={index}
        >
          <Styled.Image
            src={item.image}
            width={item.width}
            height={item.height}
            displayWidth={item.displayWidth}
            alt=""
          />
          <Styled.Text>
            <Styled.BoldText>{item.boldText}</Styled.BoldText>
            {item.text}
          </Styled.Text>
        </Styled.InnerContainer>
      ))}
    </Styled.Container>
  );
}
