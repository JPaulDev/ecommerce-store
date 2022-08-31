import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useCarousel from './useCarousel';
import slides from './carousel-slides';
import NavTop from './NavTop';
import NavBottom from './NavBottom';
import NavArrows from './NavArrows';
import Slide from './Slide';
import * as Styled from './styles';

const MotionSlide = motion(Slide);

// Direction 1 moves slides to left, -1 moves slides to the right
const variants = {
  enter: (direction) => ({
    translateX: direction > 0 ? '100%' : '-100%',
  }),
  center: {
    translateX: 0,
  },
  exit: (direction) => ({
    translateX: direction < 0 ? '100%' : '-100%',
  }),
};

export default function Carousel() {
  const isMatch = useMediaQuery('(min-width: 700px)');
  const [slideIndex, direction, handleChangeSlide] = useCarousel({
    length: slides.length,
    interval: 8000,
    transitionTime: 1000,
  });

  return (
    <Styled.Section>
      {isMatch ? (
        <NavTop
          slides={slides}
          slideIndex={slideIndex}
          onChangeSlide={handleChangeSlide}
        />
      ) : (
        <NavBottom
          length={slides.length}
          slideIndex={slideIndex}
          onChangeSlide={handleChangeSlide}
        />
      )}
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
          slide={slides[slideIndex]}
        />
      </AnimatePresence>
    </Styled.Section>
  );
}
