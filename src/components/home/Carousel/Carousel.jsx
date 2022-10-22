import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from '../../icons';
import slides from './carousel-slides';
import useCarousel from './useCarousel';
import Slide from './Slide';
import * as Styled from './styles';

// Direction 1 moves slides in from the right, -1 moves slides in from the left

const MotionSlide = motion(Slide);
const motionProps = {
  variants: {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
    }),
  },
  transition: {
    ease: 'easeInOut',
    duration: 1,
  },
};

export default function Carousel() {
  const [slideIndex, direction, handleChangeSlide] = useCarousel({
    length: slides.length,
    interval: 9000,
    transitionTime: 1000,
  });

  return (
    <Styled.Section>
      <Styled.NavigationTop>
        {slides.map((slide, index) => (
          <li key={slide.topNavText}>
            <Styled.ButtonTop
              type="button"
              isActive={index === slideIndex}
              onClick={() => handleChangeSlide('JUMP', index)}
            >
              {slide.topNavText}
            </Styled.ButtonTop>
          </li>
        ))}
      </Styled.NavigationTop>
      <Styled.Navigation>
        <li>
          <Styled.NavigationArrow
            type="button"
            title="Previous"
            aria-label="Previous Slide"
            onClick={() => handleChangeSlide('PREV')}
          >
            <ChevronLeft width={14} height={19} />
          </Styled.NavigationArrow>
        </li>
        <li>
          <Styled.NavigationArrow
            type="button"
            title="Next"
            aria-label="Next Slide"
            onClick={() => handleChangeSlide('NEXT')}
          >
            <ChevronRight width={14} height={19} />
          </Styled.NavigationArrow>
        </li>
      </Styled.Navigation>
      <AnimatePresence initial={false} custom={direction}>
        <MotionSlide
          key={slideIndex}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          slideIndex={slideIndex}
          slide={slides[slideIndex]}
          {...motionProps}
        />
      </AnimatePresence>
      <Styled.NavigationBottom>
        {Array.from({ length: slides.length }).map((_, index) => (
          <li key={index}>
            <Styled.ButtonBottom
              type="button"
              isActive={index === slideIndex}
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              onClick={() => handleChangeSlide('JUMP', index)}
            />
          </li>
        ))}
      </Styled.NavigationBottom>
    </Styled.Section>
  );
}
