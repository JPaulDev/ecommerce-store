import Image from 'next/future/image';
import { useState, useEffect } from 'react';
import trophy from '../../../../public/images/top-banner-small/trophy-logo.webp';
import trustpilot from '../../../../public/images/top-banner-small/trustpilot-logo.webp';
import paypal from '../../../../public/images/top-banner-small/paypal-logo.webp';
import useMediaQuery from '../../../lib/hooks/useMediaQuery';
import * as Styled from './styles';

const slides = [
  {
    image: trophy,
    boldText: 'Award winning',
    text: 'Systems and customer services',
  },
  {
    image: trustpilot,
    boldText: '4.8 stars on Trustpilot',
    text: 'From over 30,000 customer reviews',
  },
  {
    image: paypal,
    boldText: '0% interest up to 4 months',
    text: 'Minimum spend applies from £99',
  },
];

export default function TopBannerSmall() {
  const [slideIndex, setSlideIndex] = useState(1);
  const isMatch = useMediaQuery('(max-width: 999px)');

  useEffect(() => {
    let timeout;
    const nextSlide = (slideIndex + 1) % slides.length;

    if (isMatch) {
      timeout = setTimeout(() => {
        setSlideIndex(nextSlide);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isMatch, slideIndex]);

  return (
    <Styled.Container>
      {slides.map((item, index) => (
        <Styled.InnerContainer
          key={item.text}
          isActive={index === slideIndex}
          data-testid={index}
        >
          <Image src={item.image} alt="" quality={100} />
          <Styled.Text>
            <strong>{item.boldText}</strong>
            {item.text}
          </Styled.Text>
        </Styled.InnerContainer>
      ))}
    </Styled.Container>
  );
}
