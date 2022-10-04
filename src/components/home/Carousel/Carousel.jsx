import { motion, AnimatePresence } from 'framer-motion';
import slides from './carousel-slides';
import useCarousel from './useCarousel';
import NavTop from './NavTop';
import NavBottom from './NavBottom';
import NavArrows from './NavArrows';
import Slide from './Slide';
import * as Styled from './styles';

const MotionSlide = motion(Slide);

// Direction 1 moves slides in from the right, -1 moves slides in from the left
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
  }),
};

export default function Carousel() {
  const [slideIndex, direction, handleChangeSlide] = useCarousel({
    length: slides.length,
    interval: 9000,
    transitionTime: 1000,
  });

  return (
    <Styled.Section>
      <NavTop
        slides={slides}
        slideIndex={slideIndex}
        onChangeSlide={handleChangeSlide}
      />
      <NavBottom
        length={slides.length}
        slideIndex={slideIndex}
        onChangeSlide={handleChangeSlide}
      />
      <NavArrows onChangeSlide={handleChangeSlide} />
      <AnimatePresence initial={false} custom={direction}>
        <MotionSlide
          key={slideIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ ease: 'easeInOut', duration: 1 }}
          slideIndex={slideIndex}
          slide={slides[slideIndex]}
        />
      </AnimatePresence>
    </Styled.Section>
  );
}
