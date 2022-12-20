import Image from 'next/future/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import paypal from '../../../../public/images/top-banner-small/paypal-logo.webp';
import trophy from '../../../../public/images/top-banner-small/trophy-logo.webp';
import trustpilot from '../../../../public/images/top-banner-small/trustpilot-logo.webp';
import { useMediaQuery } from '../../../hooks';

const SLIDES = [
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
  const isMatch = useMediaQuery('(min-width: 1000px)');

  useEffect(() => {
    let timeout;
    const nextSlide = (slideIndex + 1) % SLIDES.length;

    if (!isMatch) {
      timeout = setTimeout(() => {
        setSlideIndex(nextSlide);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isMatch, slideIndex]);

  return (
    <Container>
      {SLIDES.map((item, index) => (
        <InnerContainer
          key={item.text}
          isActive={index === slideIndex}
          aria-hidden={isMatch && index !== slideIndex}
          data-testid={index}
        >
          <Image src={item.image} alt="" quality={100} />
          <Text>
            <strong>{item.boldText}</strong>
            {item.text}
          </Text>
        </InnerContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  display: flex;
  justify-content: space-around;
  min-height: 60px;
  position: relative;
`;

const InnerContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  column-gap: 15px;
  display: flex;
  justify-content: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  z-index: ${({ isActive }) => (isActive ? 10 : 0)};
  min-width: 300px;
  transition: opacity 1s ease-in-out ${({ isActive }) => isActive && '1s'};
  position: absolute;

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    opacity: 1;
    position: static;
    min-width: 0;
    transition: none;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.stone[600]};
  font-size: ${({ theme }) => theme.fontSizes[12]};

  strong {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
`;
