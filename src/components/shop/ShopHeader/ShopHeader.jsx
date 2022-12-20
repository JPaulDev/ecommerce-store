import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { ChevronRight } from '../../icons';
import { ResponsiveBox } from '../../ui';
import * as Styled from './styles';

const motionProps = {
  style: {
    overflow: 'hidden',
  },
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  variants: {
    open: {
      height: 'auto',
    },
    closed: {
      height: 0,
    },
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.6,
  },
};

export default function ShopHeader({
  heading,
  description,
  latestArrivals,
  latestArrivalsDescription,
}) {
  const [isDescriptionOpen, toggleDescriptionOpen] = useCycle(false, true);
  const [isArrivalsOpen, toggleArrivalsOpen] = useCycle(false, true);

  return (
    <>
      <Styled.TopContainer>
        <h1>{heading}</h1>
        <Styled.TopButton
          type="button"
          isOpen={isDescriptionOpen}
          aria-controls="top-text"
          aria-expanded={isDescriptionOpen}
          onClick={toggleDescriptionOpen}
          title="Read More"
          data-testid="description-button"
        >
          Read More
          <ChevronRight width={20} height={27} />
        </Styled.TopButton>
      </Styled.TopContainer>

      <ResponsiveBox sx={{ display: { mobileXs: 'none', tabletSm: 'block' } }}>
        <Styled.Text>{description}</Styled.Text>
      </ResponsiveBox>

      <ResponsiveBox sx={{ display: { mobileXs: 'block', tabletSm: 'none' } }}>
        <AnimatePresence initial={false}>
          {isDescriptionOpen && (
            <motion.div id="top-text" {...motionProps}>
              <Styled.Text>{description}</Styled.Text>
            </motion.div>
          )}
        </AnimatePresence>
      </ResponsiveBox>

      <Styled.BottomContainer>
        <h2>Latest Arrivals - {latestArrivals}</h2>
        <Styled.BottomButton
          type="button"
          isOpen={isArrivalsOpen}
          aria-controls="bottom-text"
          aria-expanded={isArrivalsOpen}
          onClick={toggleArrivalsOpen}
          title="Read More"
          data-testid="latest-arrivals-button"
        >
          Read More
          <ChevronRight />
        </Styled.BottomButton>
      </Styled.BottomContainer>

      <AnimatePresence initial={false}>
        {isArrivalsOpen && (
          <motion.div id="bottom-text" {...motionProps}>
            <Styled.Text>{latestArrivalsDescription}</Styled.Text>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
